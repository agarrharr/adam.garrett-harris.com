---
title: How to Make a Video From an Image and Audio File From the Command Line
date: 2019-04-17
tags:
- cli
---

I often need to combine an image and an mp3 file together to upload a [podcast](https://www.orbit.fm/bookbytes) episode to [YouTube](https://www.youtube.com/channel/UCgO1vhFNUuYF3qPJLTjG5Ew). I was using Final Cut Pro, and I've also tried iMovie. Both of these were a little too much work and they generated videos with enormous file sizes. I thought "There has to be a better way." And there is. You can use `ffmpeg` to do this in the command line. Using ffmpeg, the file size is only about 120 MB for an hour long video.

Here is the command to make the video:

```
ffmpeg -loop 1 -i bookbytes-video-image.png -i bb-023.mp3 -c:v libx264 -tune stillimage -c:a aac -b:a 192k -pix_fmt yuv420p -shortest bb-023.mp4
```

Or, even better, add this to your `~/.bashrc` file in a function:

```
# $1 input_image
# $2 input_mp3
# $3 output_mp4
imageAndAudioToVideo() {
  ffmpeg -loop 1 -i $1 -i $2 -c:v libx264 -tune stillimage -c:a aac -b:a 192k -pix_fmt yuv420p -shortest $3
}
```

Then you can run it like this:

```
imageAndAudioToVideo bookbytes-video-image.png bb-023.mp3 bb-023.mp4
```

## References

I got the command from [this helpful answer](https://superuser.com/questions/1041816/combine-one-image-one-audio-file-to-make-one-video-using-ffmpeg#answer-1041818) on Superuser.
