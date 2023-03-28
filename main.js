//////グローバルパラメータ
const width = 960;
const height = 540;
const canvas = document.querySelector('#myCanvas')

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
});
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

// シーンを作成
const scene = new THREE.Scene();


camera()
box()