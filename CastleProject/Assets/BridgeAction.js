/**var Close : GameObject;

function Update() {
if(Input.GetKeyDown("o")) {
Debug.Log("Pressed o");
Close.animation.Play("bridge close");
}
}*/
var AngleX: float = 0.0;
var AngleY: float = 0.0;
var AngleZ:float = 90.0;

private var targetVal: float = 0.0;
private var curVal:float = 0.0;
private var speed: float = 0.01;
private var isOpen = false;
var Target: Transform;

function Update () {
	curVal = curVal + (targetVal - curVal) * speed;
	Target.transform.rotation = Quaternion.identity;
	Target.transform.Rotate(curVal, 0, 0);

/* Need to see if can get trigger working rather than keyboard
   input to open drawbridge */
if(Input.GetKeyDown("e") && !isOpen){
	Debug.Log("Opening");
	targetVal = AngleZ;
	curVal = 0;
	isOpen = true;
} else if(Input.GetKeyDown("e") && isOpen) {
	Debug.Log("Closing");
	curVal = AngleZ;
	targetVal = 0.0;
	isOpen = false;
}

}

function OnTriggerEnter(other: Collider){
	Debug.Log("Entered Trigger");
	if(!isOpen) {
		targetVal = AngleZ;
		curVal = 0;
		isOpen = true;
	}
}

function OnTriggerExit(other: Collider) {
	Debug.Log("Exited Trigger");
	/**if(isOpen) {
		curVal = AngleZ;
		targetVal = 0.0;
		isOpen = false;
	}*/
	
}