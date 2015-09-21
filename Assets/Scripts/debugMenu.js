#pragma strict

var debugMenu : GameObject; 

function Start () {
    debugMenu.SetActive(false);
}

function Update () {
var isEnabled = false;
    if(Input.GetKey(KeyCode.LeftControl)&&Input.GetKey(KeyCode.LeftShift)&&Input.GetKey(KeyCode.F1)){
		debugMenu.SetActive(true);
		if(isEnabled == true){
			debugMenu.SetActive(false);
		}
		isEnabled = !isEnabled;
    }
}