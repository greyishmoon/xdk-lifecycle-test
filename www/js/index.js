var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		//alert("device ready");
        console.log("Device ready - onDeviceReady() called");
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
        console.log("launched_count now: " + launched_count);
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		//alert("pause");
        console.log("Device paused - onPause() called");
		paused_count++;
        console.log("paused_count now: " + paused_count);
		updateDisplay();
    }
	
	function onResume() {
		//alert("resume");
        console.log("Device resumed - onResume() called");
		resumed_count++;
        console.log("resumed_count now: " + resumed_count);
		updateDisplay();
    }
