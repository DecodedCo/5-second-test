chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    // chrome.tabs.executeScript(tab.id, {
    // 		"file": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.js"
    // 	}, function () { // Execute your code
		chrome.tabs.executeScript(tab.id, {
		        "file": "inject.js"
		    }, function () { // Execute your code
		    		// $("body").prepend("<div class='cover' style='position:fixed; top:0; left:0;top:0;left:0;width:100%;height:100%;z-index:1000;background-image:linear-gradient(black, grey);'></div>");

		        console.log("Script Executed .. "); // Notification on Completion
    	});
	// });
});