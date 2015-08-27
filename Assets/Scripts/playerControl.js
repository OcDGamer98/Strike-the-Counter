#pragma strict
//Player movement and control script

private var player: Rigidbody;
private var isMoving = false;
private var isJumping = false;
private var multiplier = 1f;

function Start(){
	player = GetComponent.<Rigidbody>();
}

function FixedUpdate(){
	var x = player.velocity.x;
	var y = player.velocity.y;
	var z = player.velocity.z;
	var speed : float = multiplier * 4;
	
	//No movement
	if(!isMoving){
		player.velocity = Vector3(0,y,0);
	} else {
	//Sets player speed multiplier (sprinting, crouching, prone, etc.)
	if(Input.GetKey(KeyCode.LeftShift)){multiplier = 2;}
	if(Input.GetKey(KeyCode.F)){multiplier = 0.5;}
	if(Input.GetKey(KeyCode.LeftControl)){multiplier = 0.25;}
	}
	
	//Normal Directions
	if(Input.GetKey(KeyCode.W)){
		player.velocity = Vector3(0,y,speed);
	}
	if(Input.GetKey(KeyCode.S)){
		player.velocity = Vector3(0,y,-speed);
	}
	if(Input.GetKey(KeyCode.A)){
		player.velocity = Vector3(-speed,y,0);
	}
	if(Input.GetKey(KeyCode.D)){
		player.velocity = Vector3(speed,y,0);
	}
	//Jump
	if(Input.GetKey(KeyCode.Space)){
		player.velocity = Vector3(x,5,y);
	}
	
	//Diagonals
	if(Input.GetKey(KeyCode.W)&&Input.GetKey(KeyCode.D)){
		player.velocity = Vector3(speed,y,speed);
	}
	if(Input.GetKey(KeyCode.W)&&Input.GetKey(KeyCode.A)){
		player.velocity = Vector3(-speed,y,speed);
	}
	if(Input.GetKey(KeyCode.S)&&Input.GetKey(KeyCode.D)){
		player.velocity = Vector3(speed,y,-speed);
	}
	if(Input.GetKey(KeyCode.S)&&Input.GetKey(KeyCode.A)){
		player.velocity = Vector3(-speed,y,-speed);
	}
}

function OnCollisionEnter(collision: Collision){
	isJumping = false;
}

function OnCollisionExit(collision: Collision){
	isJumping = true;
}