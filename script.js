// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x6242ea })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 0
camera.position.y = -1
camera.position.z = 5
scene.add(camera)

// Canvas
const canvas = document.querySelector('.webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
