// TEXT SWIPING ON SCROLL

// Window Size resize
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
})

// Target in dom
const titleTop = document.querySelectorAll('.left')
const titleBottom = document.querySelectorAll('.right')

// Loop function
const loop = () => {
    // Left to right target action
    window.requestAnimationFrame(loop)
    titleTop.forEach(element => {
        const ratioPosY = element.getBoundingClientRect().y / windowHeight
        const translateX = -ratioPosY * 10 // Coef d'intensité
        element.style.transform = `translateX(${translateX}%)`
    })

    // Right to left target action
    titleBottom.forEach(element => {
        const ratioPosY = element.getBoundingClientRect().y / windowHeight
        const translateX = ratioPosY * 10 // Coef d'intensité
        element.style.transform = `translateX(${translateX}%)`
    })
}
loop()
