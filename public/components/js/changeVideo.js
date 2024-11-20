var sourceVideo = document.querySelector("#backVideo")
var videoMethod = document.querySelector("#videoMethod")

//vertical boxes
var videoVerticalMethod = document.querySelector(".boxVideo")

var bv1 = document.querySelector("#bv1")
var bv2 = document.querySelector("#bv2")
var bv3 = document.querySelector("#bv3")


// videos normals (Background)
var videosPATH = [
    "./components/videos/video_1.mp4",
    "./components/videos/video_2.mp4",
    "./components/videos/video_3.mp4",
    "./components/videos/video_4.mp4",
    "./components/videos/video_5.mp4",
    "./components/videos/video_6.mp4",
    "./components/videos/video_7.mp4",
    "./components/videos/video_8.mp4",
    "./components/videos/video_9.mp4",
]

// vertical videos
var videosVertical = [
    "./components/videos/videoV_1.mp4",
    "./components/videos/videoV_2.mp4",
    "./components/videos/videoV_3.mp4",
    "./components/videos/videoV_4.mp4",
]

var changeVideoNormal = (min, max) => {
    let indexNumber = Math.floor(Math.random() * (max - min + 1)) - min
    let path = videosPATH[indexNumber]

    sourceVideo.src = path
    videoMethod.load()
}

var changeVerticalVideos = (min, max) => {
    let indexNumber = Math.floor(Math.random() * (max - min + 1)) - min
    let path = videosVertical[indexNumber]

    videosVertical.splice(videosVertical.indexOf(path), 1)
    console.log(videosVertical)
    return path
}

changeVideoNormal(0, videosPATH.length - 1)
bv1.src = changeVerticalVideos(0, videosVertical.length - 1)
bv1.load()
bv2.src = changeVerticalVideos(0, videosVertical.length - 1)
bv2.load()
bv3.src = changeVerticalVideos(0, videosVertical.length - 1)
bv3.load()