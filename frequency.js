var fs = require("fs");

var wordFrequency = {};

fs.readFile("test.txt", "utf8", function(error, data) {
	var element;
	var dataArray = data.split(" ");
	for (var i = 0; i < dataArray.length; i++) {
		var keys = Object.keys(wordFrequency);
		//console.log(keys);
		var counter = 0;
		for (var j = 0; j < keys.length; j++) {
			if (keys[j] === dataArray[i]) {
				counter++;
			}
		}
		if (counter !== 0) {
			wordFrequency[dataArray[i]]++; //dot notation did not work (maybe because dataArray[i] is a string)
		} else if (counter === 0) {
			wordFrequency[dataArray[i]] = 1;
			//console.log(wordFrequency);
		};
	}

	//console.log(dataArray);
	console.log(wordFrequency);
		
	
});

//console.log(wordFrequency); //this is asynchronous, will need a callback

//basic frequency - need to add provisions for capitalization and punctuation