// Write a function ucFirst(str) that returns the string str with the 
// uppercased first character, for instance:

ucFirst("john") == "John";

// ####################################################### Attempt at Solution

let upperCaseFirstChar = (str) => {
	
	if (!str) return str;

	return str.charAt(0).toUpperCase() + str.slice(1);
}

alert(upperCaseFirstChar('denis'));

// ######################################################

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// ###################################################### Attempt at Solution

let spamChecker = (str) => {

	let check1 = 'viagra';
	let check2 = 'XXX'
	
	if((str.includes(check1)) || (str.includes(check2))) {
		return true;
	} return false;
}

// ## other solution because this one doesn't address the lowercase

let spamChecker = function(str){
	let lowerStr = str.toLowerCase();

	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// more elegant using the return showcase

// #####################################################

// Create a function truncate(str, maxlength) that checks the length of 
// the str and, if it exceeds maxlength – replaces the end of str with 
// the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"

// ###################################################### Attempt at Solution

let truncator = (str, maxlength) => {
	
	if(str.length > maxlength) {
		newstr = str.slice(0, maxlength - 1) + '...';
		return newstr;
	} return str;
}

truncator('this is a test this is a test this is a test',15);

// ## other solution

// the maximal length must be maxlength, so we need to cut it a little shorter
//, to give space for the ellipsis.

// note that there is actually a single unicode character for an ellipsis.that's not three dots

let truncator = (str, maxlength) {
	return (str.length > maxlength) ? str.slice(0, maxlength -1) + '…' : str;
}

// kinda short and effective

// Extract the money
// importance: 4
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric
// value from such string and return it.

// The example:

alert( extractCurrencyValue('$120') === 120 ); // true

// ####################################################### Attempt at Solution

let extractCurrencyValue = (str) => {
	return parseInt(str.slice(1, str.length))
}

extractCurrencyValue('$559')

// ## another solution

let extractCurrencyValue = (str) => {
	return +str.slice(1);
}

// elegant solution

