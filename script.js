// =============================
// LENIS SMOOTH SCROLL
// =============================

const lenis = new Lenis({
    duration: 1.4,
    smoothWheel: true
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// =============================
// GSAP
// =============================

gsap.registerPlugin(ScrollTrigger)

// =============================
// LOADER
// =============================

const loaderLetters = document.querySelectorAll(".loader-content span")

gsap.to(loaderLetters, {
    opacity: 1,
    y: 0,
    stagger: 0.08,
    duration: 0.6,
    ease: "power3.out"
})

setTimeout(() => {

    gsap.to("#loader", {
        opacity: 0,
        duration: 1,
        onComplete() {
            document.getElementById("loader").remove()
        }
    })

}, 2200)

// =============================
// CUSTOM CURSOR
// =============================

const cursor = document.querySelector(".cursor")
const dot = document.querySelector(".cursor-dot")

window.addEventListener("mousemove", e => {

    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: .4
    })

    gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: .1
    })

})

// =============================
// MAGNETIC BUTTONS
// =============================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mousemove", e => {

        const rect = btn.getBoundingClientRect()

        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(btn, {
            x: x * 0.2,
            y: y * 0.2,
            duration: .4
        })

    })

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: .5
        })

    })

})

// =============================
// HERO REVEAL
// =============================

gsap.from(".eyebrow", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 2.2
})

gsap.from(".hero h1", {
    y: 120,
    opacity: 0,
    duration: 1.4,
    delay: 2.4
})

gsap.from(".hero h2", {
    y: 120,
    opacity: 0,
    duration: 1.4,
    delay: 2.7
})

gsap.from(".hero p", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 3
})

gsap.from(".hero-buttons", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 3.2
})

// =============================
// SCROLL REVEALS
// =============================

gsap.utils.toArray(".card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"

    })

})

gsap.utils.toArray(".timeline-item").forEach(item => {

    gsap.from(item, {

        scrollTrigger: {
            trigger: item,
            start: "top 90%"
        },

        x: -100,
        opacity: 0,
        duration: 1

    })

})

gsap.utils.toArray(".stat").forEach(stat => {

    gsap.from(stat, {

        scrollTrigger: {
            trigger: stat,
            start: "top 90%"
        },

        scale: .7,
        opacity: 0,
        duration: 1

    })

})

// =============================
// STATEMENT SECTION
// =============================

gsap.from(".statement", {

    scrollTrigger: {
        trigger: ".statement-section",
        start: "top 60%"
    },

    y: 120,
    opacity: 0,
    stagger: .3,
    duration: 1.5

})

// =============================
// PARALLAX EFFECT
// =============================

window.addEventListener("mousemove", e => {

    const x = (e.clientX / window.innerWidth - .5) * 30
    const y = (e.clientY / window.innerHeight - .5) * 30

    gsap.to(".gradient-bg", {
        x,
        y,
        duration: 2
    })

})

// =============================
// THREE.JS HERO OBJECT
// =============================

const canvas = document.getElementById("webgl")

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
})

renderer.setPixelRatio(window.devicePixelRatio)

renderer.setSize(
    window.innerWidth,
    window.innerHeight
)

camera.position.z = 4

// Geometry

const geometry = new THREE.IcosahedronGeometry(
    1.5,
    1
)

const material = new THREE.MeshPhysicalMaterial({

    color: 0xff6b00,
    roughness: 0.15,
    metalness: 1,
    wireframe: true

})

const sphere = new THREE.Mesh(
    geometry,
    material
)

scene.add(sphere)

// Lights

const light1 = new THREE.PointLight(
    0xff6b00,
    10
)

light1.position.set(
    3,
    2,
    3
)

scene.add(light1)

const light2 = new THREE.PointLight(
    0xffffff,
    4
)

light2.position.set(
    -3,
    -2,
    3
)

scene.add(light2)

// Mouse Rotation

let mouseX = 0
let mouseY = 0

window.addEventListener("mousemove", e => {

    mouseX = (
        e.clientX / window.innerWidth
    ) - .5

    mouseY = (
        e.clientY / window.innerHeight
    ) - .5

})

// Animate

function animate() {

    requestAnimationFrame(
        animate
    )

    sphere.rotation.x += 0.003
    sphere.rotation.y += 0.005

    sphere.rotation.x += mouseY * .002
    sphere.rotation.y += mouseX * .002

    renderer.render(
        scene,
        camera
    )

}

animate()

// =============================
// RESIZE
// =============================

window.addEventListener("resize", () => {

    camera.aspect =
        window.innerWidth /
        window.innerHeight

    camera.updateProjectionMatrix()

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    )

})

// =============================
// NAV FADE
// =============================

gsap.from("nav", {

    y: -100,
    opacity: 0,
    delay: 2.8,
    duration: 1.2

})

// =============================
// CONTACT REVEAL
// =============================

gsap.from(".contact h2", {

    scrollTrigger: {
        trigger: ".contact",
        start: "top 70%"
    },

    y: 100,
    opacity: 0,
    duration: 1.4

})

// =============================
// END
// =============================
