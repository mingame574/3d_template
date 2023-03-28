function camera() {
	let rad = -3.14
	let sit = -1.56
	const speed = 100

	let w = false
	let s = false
	let a = false
	let d = false
	let pointerlock = false

	// カメラを作成
	const camera = new THREE.PerspectiveCamera(45, width / height, 1, 100000);
	camera.position.set(0, +1000, +1000);
	let look = new THREE.Vector3(Math.sin(rad), Math.cos(sit), Math.cos(rad))
	camera.lookAt(look.add(camera.position))



	cameraloop();

	// ループイベント
	function cameraloop() {
		//カメラの移動
		let v = new THREE.Vector3(0, 0, 0)
		if (w) v.z++
		if (s) v.z--
		if (a) v.x++
		if (d) v.x--
		v.applyAxisAngle(new THREE.Vector3(0, 1, 0), rad).normalize().multiplyScalar(speed)
		camera.position.add(v)
		//rendering
		renderer.render(scene, camera);
		requestAnimationFrame(cameraloop);
	}

	//ポインタ隠し
	canvas.addEventListener("mousedown", () => {
		canvas.requestPointerLock()
	})

	document.addEventListener('pointerlockchange', (e) => {
		pointerlock = !pointerlock
	});

	//カメラの回転
	canvas.addEventListener("mousemove", (e) => {
		if (!pointerlock) return
		rad -= e.movementX / 300
		sit -= e.movementY / 300
		if (sit < - 1 * Math.PI) sit = -1 * Math.PI
		if (sit > 0) sit = 0
		look = new THREE.Vector3(Math.sin(rad), Math.cos(sit), Math.cos(rad))
		camera.lookAt(look.add(camera.position))
	})



	//wsadフラグ
	window.addEventListener("keydown", (e) => {
		if (e.key == "w") w = true
		if (e.key == "s") s = true
		if (e.key == "a") a = true
		if (e.key == "d") d = true
	})
	window.addEventListener("keyup", (e) => {
		if (e.key == "w") w = false
		if (e.key == "s") s = false
		if (e.key == "a") a = false
		if (e.key == "d") d = false
	})
}