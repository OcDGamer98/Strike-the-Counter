#pragma strict

private var isFullscreen = false;

function Update () {
	var wait;
	if(Input.GetKeyDown(KeyCode.F11)&&!isFullscreen){
	//Sets resoultion to 1920 x 1080 at 60 Hz, fullscreen or takes it off
		Screen.SetResolution(1920, 1080, true);
		wait = true;
	}
	if(Input.GetKeyDown(KeyCode.F11)&&isFullscreen){
		Screen.SetResolution(1024, 768, false);
		wait = true;
	}
	wait = false;
}