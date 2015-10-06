#pragma strict

var projectile: Rigidbody;
var muzzle: Transform;
var muzzleLight: Light;
var audioFire: AudioClip;
var audioReload: AudioClip;
@HideInInspector
var waitTime : float = 0;

function FixedUpdate() {
	if(Input.GetButtonDown("Fire1")&&waitTime<=0){
		fireBullet();
	}
	if(Input.GetKey(KeyCode.R)){
		reload();
	}
	waitTime-=1;
}

function fireBullet(){
	var audio = GetComponent.<AudioSource>();
	var bullet: Rigidbody;
	bullet = Instantiate(projectile, muzzle.position + Vector3(0,0,2), muzzle.rotation);
	bullet.velocity = Vector3(0,0,12000);
	bullet.AddTorque(Vector3(0,0,10));
	muzzleLight.enabled = true;
	audio.clip = audioFire;
	audio.Play();
	yield WaitForSeconds(0.1);
	muzzleLight.enabled = false;
	waitTime = 12;
}

function reload(){
	var audio = GetComponent.<AudioSource>();
	audio.clip = audioReload;
	audio.Play();
	yield WaitForSeconds(4);
}