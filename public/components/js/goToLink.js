

function goTo(url) {
    window.open(url)
}


document.querySelector("#Avata2").addEventListener("click", (e) => {
   goTo("https://www.dji.com/br/avata-2")
    e.preventDefault()
})

document.querySelector("#Mini3").addEventListener("click", (e) => {
    goTo("https://www.dji.com/br/mini-3")
    e.preventDefault()
})


document.querySelector(".more").addEventListener("click", (e) => {
    goTo("https://www.instagram.com/jmjunior.ofc/")
    e.preventDefault()
})

document.querySelector("#meetZap").addEventListener("click", (e) => {
    goTo("https://wa.me/+559291349863")
    e.preventDefault()
})

document.querySelector("#meetInsta").addEventListener("click", (e) => {
    goTo("https://www.instagram.com/jmjunior.ofc/")
    e.preventDefault()
})

document.querySelector("#creator").addEventListener("click", (e) => {
    goTo("https://dotxavierket.vercel.app")
    e.preventDefault()
})