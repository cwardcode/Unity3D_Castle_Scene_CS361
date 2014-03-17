var paused = false;
function Update () {
	if(Input.GetKeyDown(KeyCode.LeftShift)) {
		maxForwardSpeed = 15;
	} else if(Input.GetKeyDown(KeyCode.Escape) && !paused){
		Time.timeScale = 0.0;
		paused = true;
	} else if(Input.GetKeyDown(KeyCode.Escape) && paused){
		Time.timeScale = 1.0;
		paused = false;
	} else {
		maxForwardSpeed = 10;
	}
}

function OnGUI() {
	if(paused) {
		GUI.Box(new Rect(Screen.width/2 - 100, Screen.height/2 - 70, 100, 70), "Paused");
	    if (GUI.Button(new Rect(Screen.width/2 - 90, Screen.height/2 - 40, 80, 30), "Help")) {
	        Application.LoadLevel("TitleScreen");
	    }
	    if (GUI.Button(new Rect(Screen.width/2 - 70, Screen.height/2 - 20, 80, 30), "Exit")) {
	        Application.LoadLevel("TitleScreen");
	    }
	}

}
