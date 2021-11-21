export function CreateRoom1() {
	// Create door
	const door = new Entity();

	engine.addEntity(door);

	// Register door
	door.addComponent(new GLTFShape('models/room1/Puzzle01_Door.glb'));

	// Set initial placement for door
	door.addComponent(
		new Transform({
			position: new Vector3(21.18, 10.8, 24.5),
		})
	);

	// hang on animation class on door
	door.addComponent(new Animator());
	// set default animations
	door.getComponent(Animator).addClip(new AnimationState('Door_Open', { looping: false }));

	// hang on music on door
	door.addComponent(new AudioSource(new AudioClip('sounds/door_squeak.mp3')));

	// OnClick on door
	let isDoorOpen = false;
	door.addComponent(
		new OnClick(() => {
			if (!isDoorOpen) {
				isDoorOpen = true;
				door.getComponent(Animator).getClip('Door_Open').play();
				door.getComponent(AudioSource).playOnce();
			}
		})
	);
}
