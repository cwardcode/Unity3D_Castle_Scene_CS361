function OnGUI() {
    GUI.Box(new Rect(Screen.width/2 - 100, Screen.height/2 - 70, 100, 70), "CastleLand");

    if (GUI.Button(new Rect(Screen.width/2 - 90, Screen.height/2 - 40, 80, 30), "Start Game!")) {
        Application.LoadLevel("CastleScene");
    }
}