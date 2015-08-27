#pragma strict
//Bullet control and actions

function Start () {
	var bullet = GetComponent.<Rigidbody>();
	//Spin the bullet counter-clockwise
	bullet.AddTorque(Vector3(0,0,5));
	bullet.AddForce(Vector3(0,0,6000));
	Destroy(gameObject,12f);
}

//When bullet hits something
function OnCollisionEnter(collision: Collision){
	//ADD damage the object it hit
	Destroy(gameObject);
}