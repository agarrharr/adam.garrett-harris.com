---
title: "Reading Redux Part 2 - getState"
date: 2018-02-21
tags:
- javascript
- redux
---

[Last time](/reading-redux-part-1-indexjs/), I got Redux cloned to my computer, built it, ran the tests, and read the `index.js` file. Now, I'll read some more code.

At the bottom of [`index.js`](https://github.com/reactjs/redux/blob/0573abc1acfbb75ba8ded4a876b42cb68e2d6719/src/index.js), it exports the top-level api:

```js
export {
  createStore,
  combineReducers,
  bindActionCreators,
  applyMiddleware,
  compose,
  __DO_NOT_USE__ActionTypes
}
```

I have no idea what `__DO_NOT_USE__ActionTypes` is all about. I'll have to check that out later. So, let's go check out [`createStore.js`](https://github.com/reactjs/redux/blob/0573abc1acfbb75ba8ded4a876b42cb68e2d6719/src/createStore.js).

It's only 270 lines of code, but if you delete the comments, it's only 165 lines of code. And right at the beginning, it has a 25 line comment. I think this is great because it explains exactly what `createStore` does. And it's written to the people who use Redux rather than to the people who write Redux. Looking at the `git blame`, I see that these are JSDoc comments [written by Dan Abramov back in July of 2015](https://github.com/reactjs/redux/commit/259c6bfe152f7fa7065b0ac2e038466c100fa18b).

```js
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
 ```

The file exports a function called `createStore` as the default export, and that function returns an object:

```js
return {
  dispatch,
  subscribe,
  getState,
  replaceReducer,
  [$$observable]: observable
}
```

Based on the first comment, I know that this object is a Redux store. The object contains `dispatch`, `subscribe`, `getState`, `replaceReducer`, and something I'm not familiar with. I know that it's using [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names), but I'm not sure what `$$observable` is. Again, I'll save this part for later.

If I look at `createStore`, I can see it takes 3 parameters, `reducer`, `preloadedState`, and `enhancer`.

```js
createStore(reducer)
createStore(reducer, preloadedState)
createStore(reducer, enhancer)
createStore(reducer, preloadedState, enhancer)
```

And based on [the documentation](https://redux.js.org/api-reference/createstore), I know that the second and third parameters are optional. In fact, you can pass in arguments in these combinations.

```js
export default function createStore(reducer, preloadedState, enhancer) {
```

So, the function needs to make sure that the enhancer is a function, and if there are only 2 arguments passed in, it needs to figure out if the second argument is `preloadedState` or `enhancer`. It does that by checking to see if it's a function or not, because `preloadedState` state can be any type, except for a function. It can be a string, a number, or (usually) an object.

And so, here's how it accomplishes that:

```js
if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
  enhancer = preloadedState
  preloadedState = undefined
}

if (typeof enhancer !== 'undefined') {
  if (typeof enhancer !== 'function') {
    throw new Error('Expected the enhancer to be a function.')
  }

  return enhancer(createStore)(reducer, preloadedState)
}

if (typeof reducer !== 'function') {
  throw new Error('Expected the reducer to be a function.')
}
```

I like how it throws errors if the `reducer` or the `enhancer` isn't a function.

It sets up some initial values:

```js
let currentReducer = reducer
let currentState = preloadedState
let currentListeners = []
let nextListeners = currentListeners
let isDispatching = false
```

I'm going to skip a function called `ensureCanMutateNextListeners` and start reading `getState`:

```js
function getState() {
  if (isDispatching) {
    throw new Error(
      'You may not call store.getState() while the reducer is executing. ' +
        'The reducer has already received the state as an argument. ' +
        'Pass it down from the top reducer instead of reading it from the store.'
    )
  }

  return currentState
}
```

It throws an error if it's currently dispatching, otherwise, it returns the currentState. I'm not exactly sure what it means to be currently dispatching, but the error is pretty helpful. As far as I know, I've never run into this error, so probably the best way to understand this is to write some code to produce this error.

Actually, I just searched for the error, and found [an issue (#1568)](https://github.com/reactjs/redux/issues/1568) by Dan Abramov where he said that calling `getState` and `subscribe` should be forbidden from within the reducer. This was fixed in [#1569](https://github.com/reactjs/redux/pull/1569) by [mjw56](https://github.com/mjw56). This makes sense because the reducer needs to be a pure function. Also, the reducer already has access to the state.

Well, that's it for this time. It was fun to see the origin of some really well written error messages!
