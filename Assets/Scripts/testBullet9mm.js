#pragma strict
//Bullet control and actions

function Start () {
	Destroy(gameObject,10f); //Destroy after 10 seconds if it hits nothing
}

//When bullet hits something
function OnCollisionEnter(collision: Collision){
	//Add damage to the object it hit
	Destroy(gameObject);
}