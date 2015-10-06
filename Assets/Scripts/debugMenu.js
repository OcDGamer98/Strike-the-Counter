#pragma strict

var debugMenu : GameObject;
var debugValue1;
var value1: GameObject;
var waitTime: float;

function Start () {
    debugMenu.SetActive(false);
    value1 = GameObject.Find("debugValue1");
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
    /*if(isEnabled){
    value1.GetComponent.<GUIText>().text = debugValue1;
    }*/
}