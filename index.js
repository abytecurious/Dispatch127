// TO DO
// Change icon to indicate redirect is active
//

var { ToggleButton } = require("sdk/ui/button/toggle");

var button = ToggleButton({
  id: "dispatch127",
  label: "Dispatch to 127.0.0.1",
  icon: {
    "16": "./pointer-16.png",
    "32": "./pointer-32.png",
    "64": "./pointer-64.png"
  },
  onClick: ActivateDeactive
});

//Test Load
console.error('Loaded Dispatch127');

function ActivateDeactive(state) {
	// delete the window state for the current window
	button.state('window', null);
	
	// set the tab state for the current tab
	let { checked } = button.state('tab');
	
	// Change icon
	if ( checked ) {
		//button.icon["16"] = "./pointer-16.png";
		//button.icon["32"] = "./pointer-32.png";
		//button.icon["64"] = "./pointer-64.png";
		console.error('Checked! Yay!!');
		button.badge = "On";
		button.badgeColor = "#00A40A";
		// Currently activated. De-activate code must go here
	}
	else {
		//button.icon["16"] = "./bell-16.png";
		//button.icon["32"] = "./bell-32.png";
		//button.icon["64"] = "./bell-64.png";
		button.badge = "Off";
		button.badgeColor = "#D9160B";
		console.error('Unchecked! No!!');
		// Currently de-activated. Activate code must go here
	}
	
	this.state('tab', {checked: !checked});
}