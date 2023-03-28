function box() {

	const geometry = new THREE.BoxGeometry(400, 400, 400);
	const material = new THREE.MeshNormalMaterial();
	const boxes = [...Array(100).keys()].map(makeboxes)
	boxes.map((box) => { scene.add(box) })
	// scene.add(box);
	boxloop()
	function boxloop() {
		boxes.map((box) => { box.rotation.x += 0.01 })
		boxes.map((box) => { box.rotation.y += 0.01 })
		requestAnimationFrame(boxloop);
	}

	function makeboxes(i) {
		const box = new THREE.Mesh(geometry, material);
		box.position.x = Math.round(i / 10) * 1500
		box.position.z = i % 10 * 1500
		return box
	}
}