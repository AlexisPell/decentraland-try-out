export const CreateRoom2 = () => {
	// Create door
	const door = new Entity();
	engine.addEntity(door);
	// Register door
	door.addComponent(new GLTFShape('models/room2/Puzzle02_Door.glb'));

	// Set initial placement for door
	door.addComponent(
		new Transform({
			position: new Vector3(24.1, 5.51634, 24.9),
		})
	);

	// hang on animation class on door
	door.addComponent(new Animator());

	// set default animations
	door.getComponent(Animator).addClip(new AnimationState('Door_Open', { looping: false }));
	door.getComponent(Animator).addClip(new AnimationState('Door_Close', { looping: false }));
	door.addComponent(new AudioSource(new AudioClip('sounds/door_squeak.mp3')));

	// Create button
	const button = new Entity();
	engine.addEntity(button);
	button.addComponent(new GLTFShape('models/room2/Square_Button.glb'));
	button.addComponent(
		new Transform({
			position: new Vector3(26.3714, 6.89, 26.8936),
		})
	);
	// default animations/ sounds
	button.addComponent(new Animator());
	button.getComponent(Animator).addClip(new AnimationState('Button_Action', { looping: false }));
	button.addComponent(new AudioSource(new AudioClip('sounds/button.mps')));

	button.addComponent(
		new OnClick(() => {
			button.getComponent(Animator).getClip('Button_Action').play();
			button.getComponent(AudioSource).playOnce();

			door.getComponent(Animator).getClip('Door_Open').play();
			door.getComponent(AudioSource).playOnce();
		})
	);
};
