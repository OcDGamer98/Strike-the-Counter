#pragma strict
//Player movement and control script

private var player: Rigidbody;
private var direction: int;//1 forward 2 backward 3 left 4 right

function Start(){
	player = GetComponent.<Rigidbody>();
}

function FixedUpdate(){
	if(Input.GetKeyDown(KeyCode.W)){
		player.velocity = Vector3(0,0,4);
	}
	if(Input.GetKeyDown(KeyCode.S)){
		player.velocity = Vector3(0,0,-4);
	}
	if(Input.GetKeyDown(KeyCode.A)){
		player.velocity = Vector3(-4,0,0);
	}
	if(Input.GetKeyDown(KeyCode.D)){
		player.velocity = Vector3(4,0,0);
	}
	if(Input.GetKeyDown("space")&&player.velocity.y==0){
		player.velocity = Vector3(0,10,0);
	}
}