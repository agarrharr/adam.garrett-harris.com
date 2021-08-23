---
title: "Deleting Bookmarks in iOS"
date: 2021-08-23
tags:
- ios
- swiftui
- tutorial
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/7rBmXk6NC0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Last time](/2021-08-21-providing-access-to-directories-in-ios-with-bookmarks/) we made an app that allows the user to select multiple folders and save them using bookmarks. And it displays those bookmarks in a list. But the user can't delete them from the list or tap on them to see the files inside the folder. Today we'll tackle deleting bookmarks from the list.

## Removing from the array

To delete the bookmark, we'll need a new method in our `BookmarkController`. But first, let's add the `onDelete()` modifier to our `ForEach` in the list and call the new method (which we haven't created yet).

```swift
.onDelete(perform: { indexSet in
    bookmarkController.removeBookmark(at: indexSet)
})
```

As you can see in the `onDelete` modifier, the `perform` parameter is a function that receives an argument of type `IndexSet`. An [IndexSet](https://developer.apple.com/documentation/foundation/indexset) is a collection of unique integer values that represent the indexes of elements in another collection. In this case, it's a collection of indexes that represent which bookmarks the user wants to delete. We can shorten our code to this:

```swift
.onDelete(perform: bookmarkController.removeBookmark)
```

We need to make a `removeBookmark` method in the `BookmarkController` that receives an `IndexSet`. It will need to remove those items from the `urls` array and delete the bookmark files so that they aren't loaded up the next time the user opens the app.

```swift
func removeBookmark(at offsets: IndexSet) {
    // Remove bookmarks from urls array
    urls.remove(atOffsets: offsets)
	
    // Delete the bookmark file
}
```

Removing the items from the array is a matter of passing the `offsets` to the `remove` method.

To delete the bookmark file, we have to get the URL of the bookmark file. Remember that a bookmark is binary data and we save each bookmark in a separate plain text file in the app's sandbox directory. The name of each file is a UUID. To get the URL of each file, we need to know the UUID associated with this bookmark. We don't have that because when we load the bookmarks, the only thing we saved was the URL in the `urls` array. So, we need to go back and do some refactoring.

If you run the app at this point, you can swipe to delete bookmarks and they appear to be gone, but they come back when you restart the app.

## Refactor Loading Bookmarks

I'm going to change the `urls` property by making it a tuple of UUIDs and URLs and I'm going to rename it to `bookmarks` since it will now store more than just URLs. To rename it everywhere at once, right-click on the name of the variable, and go to "Refactor", "Rename...". It should now look like this:

```swift
@Published var bookmarks: [(uuid: String, url: URL)] = []
```

I now have 4 issues I need to fix where the types don't match.

In the `init` function, change the fake data to use tuples:

```swift
init(loadFakeData: Bool = false) {
    if loadFakeData {
        bookmarks = [
            ("123", URL(string: "some/path/Notes")!),
            ("124", URL(string: "some/path/Family%20Notes")!),
        ]
    } else {
        loadAllBookmarks()
    }
}
```

When we append to the array, append a tuple instead:

```swift
bookmarks.append((uuid, url))
```

In `loadAllBookmarks`, return a tuple:

```swift
return (file.lastPathComponent, url)
```

Finally, in `ContentView`'s `ForEach` we have to pull out the URL from the tuple and we can use `uuid` as the id instead of `self`.

```swift
ForEach(bookmarkController.bookmarks, id: \.uuid) { _, url in
    Text(url.lastPathComponent)
}
```

Now the refactor is complete and we have an array of tuples with the URL and UUID instead of an array of just URLs.

## Delete the bookmark files

Let's finish our `removeBookmark` method. First, get the array of UUIDS before removing them from the array. Then loop over the UUIDS and delete the bookmark files.

```swift
func removeBookmark(at offsets: IndexSet) {
    let uuids = offsets.map( { bookmarks[$0].uuid } )
    
    // Remove bookmarks from urls array
    bookmarks.remove(atOffsets: offsets)
    
    // Delete the bookmark file
    uuids.forEach({ uuid in
        let url = getAppSandboxDirectory().appendingPathComponent(uuid)
        try? FileManager.default.removeItem(at: url)
    })
}
```

Now when you run the app, you can swipe to delete bookmarks, and they're still gone when you restart the app.

Next time, we'll display the content of the directories when you tap on them.