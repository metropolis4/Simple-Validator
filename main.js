// Phone Number Validation

var phoneNum = prompt("Please enter your phone number in the following format (xxx-xxx-xxxx)");


if(phoneNum.charAt(3) === "-" && phoneNum.charAt(8) && phoneNum.length === 12) {
	phoneNum = phoneNum.replace(/-/g , "");
	if(isNaN(Number(phoneNum)) === true) {
		alert("Please Enter Numbers Only");
	}
	else {
	alert("Thank you for entering a valid number!");
	}
}
else {
	alert("That is not a valid number!");
}

// Birthdate Validation

var bDay = prompt("Please enter your birthdate in the following format (xx/xx/xxxx)");

if(bDay.charAt(2) && bDay.charAt(5) && bDay.length === 10) {
	bDay = bDay.replace(/[/]/g , "");
	if(isNaN(Number(bDay)) === true) {
		alert("Please Enter Numbers Only");
	}
	else {
	alert("Thank you for using the correct format");
	}
}
else {
	alert("You did not use the correct format");
}

// Postal Code Validation

var zip = prompt("Please Enter your postal code in either of the following formats(xxxxx , xxxxx-xxxx)");

if(zip.length === 5 || (zip.charAt(5) === "-" && zip.length === 10)) {
	zip = zip.replace(/-/g, "");
	if(isNaN(Number(zip)) === true) {
		alert("Please Enter Numbers Only");
	}
	else {
	alert("Thank you for using the correct format");
	}
}
else {
	alert("You did not use the correct format");
}

// State Code Validation

var state = prompt("Please Enter your state abbreviation (XX)");

if(state.length === 2 && state === state.toUpperCase()) {
	if(isNaN(state[0]) === false || isNaN(state[1]) === false) {
		alert("Please enter only letters");
	}
	else {
	alert("Thank you for using the correct format");
	}
}
else {
	alert("You did not use the correct format");
}

// Married Validation
var mar = prompt("Are you married? (Please enter either 'yes' or 'no')");
mar = mar.toLowerCase();

if(mar.substr(0,3) === "yes" || mar.substr(0,2) === "no") {
	alert("Thank you for using the correct format");
}
else {
	alert("You did not use the correct format");
}




