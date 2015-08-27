#pragma strict

var projectile: Rigidbody;
var projectileFifty: Rigidbody;
var muzzle: Transform;

function Update () {
	if(Input.GetButtonDown("Fire1")){
		fireBullet();
	}
	if(Input.GetButtonDown("Fire2")){
		fireFiftyBullet();
	}
}

function fireBullet(){
	var bullet: Rigidbody;
	var audio = GetComponent.<AudioSource>();
	bullet = Instantiate(projectile, muzzle.position, muzzle.rotation);
	bullet.AddTorque(Vector3(0,0,10));
	bullet.AddForce(Vector3(0,0,12000));
	audio.Play();
}

function fireFiftyBullet(){
	var bulletFifty: Rigidbody;
	var audio = GetComponent.<AudioSource>();
	bulletFifty = Instantiate(projectileFifty, muzzle.position, muzzle.rotation);
	audio.Play();
}