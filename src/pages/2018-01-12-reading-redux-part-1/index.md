---
title: Reading Redux Part 1 - index.js
path: "/reading-redux-part-1/"
date: 2018-01-12
tags:
- javascript
- redux
---

I got inspired by my friend, [Safia Abdulla](https://twitter.com/captainsafia), who blogs about the source code of Node [over at her blog](https://blog.safia.rocks/). I can see how it's helping her get a much deeper understanding of Node.js, and it's cool to see that the code that runs your code is still just code. I used to think that I couldn't read the source code of languages, libraries, or frameworks. But after talking with open source developers [on my podcast](http://www.weboftomorrowpodcast.com/) like [Kent C. Dodds](http://www.weboftomorrowpodcast.com/44), creator of [glamorous](https://github.com/paypal/glamorous), [downshift](https://github.com/paypal/downshift), and [cross-env](https://github.com/kentcdodds/cross-env), [Kye Hohenberger](http://www.weboftomorrowpodcast.com/40), creator of [emotion](https://github.com/emotion-js/emotion), and [Kyle Mathews](http://www.weboftomorrowpodcast.com/39), the creator of [Gatsby](https://github.com/gatsbyjs/gatsby), I realized that these are just normal people that worked really hard.

Kyle Mathews put it well when he said, "I think most people are capable of doing a lot more than they think they can. It's just letting yourself believe that and then putting in the time to get there."


All that to say, I want to start reading the source code of the libraries and frameworks that I use. And I'm starting with Redux. I think that this will give me a much deeper understand of the library and of JavaScript in general. This should help me to become better at my craft. And it may enable me to start contributing since I'll be more familiar with the code.

## Let's Jump Into It

The first thing to do is pull down the code, because I'm not going to just read the code on the GitHub website. And then I'll see if I can actually run it.

The other thing to do is link to the current version of the code that I'm looking at. I learned a while back that if you just link to [https://github.com/reactjs](https://github.com/reactjs), then in the future, the code will be different, but if you link to [https://github.com/reactjs/redux/tree/3ccc27c738cb8ff36a1aaed2ce58e563ff6b6faf](https://github.com/reactjs/redux/tree/3ccc27c738cb8ff36a1aaed2ce58e563ff6b6faf), it will always link to the code at that time.

The first thing I notice when I pull down the code and open it in my editor is that `SUMMARY.md` is just a symlink to `docs/README.md`. This seems odd to me but it's probably some sort of convention. The repo has a lot of these all-caps markdown files, like `CHANGELOG.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE-logo.md`, `LICENSE.md`, `PATRONS.md`, `README.md`, and `SUMMARY.md`.

Anyway, it's cool that this `SUMMARY.md` file is a symlink to the readme of the `/docs` directory. I was previously unaware of this part of the repo. It's the same thing as the [redux.js.org site](https://redux.js.org/) though, so I'll skip this and get into the code. Oh hey!!! It looks like [the latest commit on the readme file](https://github.com/reactjs/redux/commit/263b051b5452c29498de9d52e01ed5c0e19e7e8d) was by my friend [Jen Luker (knittingcodemonkey)](https://twitter.com/knitcodemonkey). Good work! 👏

## Building

Ok, so I'm going to head over to `CONTRIBUTING.md` to see if I can get it running. And it's super easy. Just `npm install` and `npm run build`. Now I have a `/dist` folder with `redux.js` and `redux.min.js`. I can also run `npm run test:watch` to run the tests and re-run them whenever I make changes to the code.

## The Code

I don't really know where to start, so let's look at [`src/index.js`](https://github.com/reactjs/redux/blob/3ccc27c738cb8ff36a1aaed2ce58e563ff6b6faf/src/index.js).

```js
import createStore from './createStore'
import combineReducers from './combineReducers'
import bindActionCreators from './bindActionCreators'
import applyMiddleware from './applyMiddleware'
import compose from './compose'
import warning from './utils/warning'
import __DO_NOT_USE__ActionTypes from './utils/actionTypes'

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (
  process.env.NODE_ENV !== 'production' &&
  typeof isCrushed.name === 'string' &&
  isCrushed.name !== 'isCrushed'
) {
  warning(
    "You are currently using minified code outside of NODE_ENV === 'production'. " +
      'This means that you are running a slower development build of Redux. ' +
      'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
      'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' +
      'to ensure you have the correct code for your production build.'
  )
}

export {
  createStore,
  combineReducers,
  bindActionCreators,
  applyMiddleware,
  compose,
  __DO_NOT_USE__ActionTypes
}
```

The thing that really stands out here is this warning:

```
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (
  process.env.NODE_ENV !== 'production' &&
  typeof isCrushed.name === 'string' &&
  isCrushed.name !== 'isCrushed'
) {
  warning(
    "You are currently using minified code outside of NODE_ENV === 'production'. " +
      'This means that you are running a slower development build of Redux. ' +
      'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
      'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' +
      'to ensure you have the correct code for your production build.'
  )
}
```

This is creating a "dummy" function called `isCrushed`. The function doesn't do anything. The if statement is checking to see if you're not in production, but you're using the minified version of node. Apparently, the minified version is slower for development. I'm not sure why that is though.

The part of this code that I don't understand is this:

```js
typeof isCrushed.name === 'string' &&
isCrushed.name !== 'isCrushed'
```

I know that functions in JavaScript are actually objects, but I didn't know that they have a name property. But sure enough, [here it is on mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name). It's a part of the es2015 spec. Cool! So, since the minified code would shorten the name of the function, this is a very interesting way of checking to see if you're running minified code.
