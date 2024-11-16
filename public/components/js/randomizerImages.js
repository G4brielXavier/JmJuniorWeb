var imageSource = [
    './components/img/image_1.jpg',
    './components/img/image_3.jpg',
    './components/img/image_4.jpg',
    './components/img/image_5.jpg',
    './components/img/image_8.jpg',
    './components/img/image_9.jpg',
    './components/img/image_10.jpg',
    './components/img/image_11.jpg',
]

var im1 = document.querySelector("#img1")
var im2 = document.querySelector("#img2")
var im3 = document.querySelector("#img3")
var im4 = document.querySelector("#img4")

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) - min
}

var getImages = () => {
    let src1 = imageSource[getRandom(0, imageSource.length - 1)]
    imageSource.splice(imageSource.indexOf(src1), 1)

    let src2 = imageSource[getRandom(0, imageSource.length - 1)]
    imageSource.splice(imageSource.indexOf(src2), 1)

    let src3 = imageSource[getRandom(0, imageSource.length - 1)]
    imageSource.splice(imageSource.indexOf(src3), 1)

    let src4 = imageSource[getRandom(0, imageSource.length - 1)]
    imageSource.splice(imageSource.indexOf(src4), 1)


    im1.src = src1
    im2.src = src2
    im3.src = src3
    im4.src = src4
}

getImages()
