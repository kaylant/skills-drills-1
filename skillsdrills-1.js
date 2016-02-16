// write a function called addOne() that takes a number as input 
// and returns a new number that's one more than the input.

var addOne = function(number) {
	return number + 1
}

var result = addOne(16)
console.log(result)

console.assert(addOne(16) === 17)


// write a function called doubleNum() that takes a number as input 
// and returns the double of the number.

var doubleNum = function(number) {
	return number + number
}

var result = doubleNum(8)
console.log(result)

console.assert(doubleNum(8) === 16)

// write a function called isNegative(). it should take a single, numerical input. 
// it should output true if the number is negative, and false if the number is positive.

var isNegative = function(number) {
	if (number > 0) {
		return true
	}
	return false
}

console.assert(isNegative(-9) === false)
console.assert(isNegative(10) === true)

// modify isNegative() so that it only accepts numerical input. 
// it should return the string, "input must be a number," if bad input has been submitted.

var isNegative = function(input) {
	if (typeof input !== 'number') {
		return "input must be a number"
	}
	if (input > 0) {
		return true
	}
	return false
}

console.assert(isNegative('s') === "input must be a number")
console.assert(isNegative(true) === "input must be a number")
console.assert(isNegative(-9) === false)
console.assert(isNegative(10) === true)
console.assert(isNegative('oreos') === "input must be a number")

// write a function called isEven() that tells whether a number is even or not.

var isEven = function(number) {
	if(number%2 === 0) {
		return true
	}
	return false
}

console.assert(isEven(12) === true)
console.assert(isEven(13) === false)

// write a function called isBig() that tells whether a number is greater than 10,000 or not.

var isBig = function(number) {
	if(number > 10000) {
		return true
	}
	return false
}

console.assert(isBig(12000) === true)
console.assert(isBig(13) === false)

// write a function called addPeriod(). it should take as input a string, 
// and return a copy of that string with a period on the end.

var addPeriod = function(inputString) {
	return inputString + "."
}

console.assert(addPeriod("too cool to do drugs") === "too cool to do drugs.")
console.assert(addPeriod("do drugs") === "do drugs.") 

// write a function called sayItTwice(). it should take as input a string ('bubble') 
// and return that string repeated twice, with a space between ('bubble bubble').

var sayItTwice = function(inputString) {
	return inputString + " " + inputString
}

console.assert(sayItTwice("pizza") === "pizza pizza")

// write a function called firstShallBeLast(). 
// it should add a copy of the first element of a string to the end of the string, then return the result.

var firstShallBeLast = function(inputString) {
	return inputString = inputString + inputString[0]
}

console.assert(firstShallBeLast("sea") === "seas")

// write a function called secondToLast(). 
// it should return the second-to-last element of a string or array. 

var secondToLast = function(input) {
	return input = input[input.length - 2]
}

console.assert(secondToLast([1,2,3,4,5,6]) === 5)
console.assert(secondToLast("1000 piece puzzle") === "l")

// write a function called hasX(). it should take as input a string, 
// and it should return true if the string contains the character 'x', and false if it does not.

var hasX = function(inputString) {
	if (inputString.indexOf('x') > -1) {
	return true
	}
        return false
}

console.assert(hasX("texas") === true)
console.assert(hasX("louisiana") === false)

// write a function called hasEl(). it should take two inputs: a string and a character. 
// it should return true if the string contains the character, and false if it does not. 
// if you get it right, try the function on an array and a potential array element instead. 
// does it still work?

var hasEl = function(string, character) {	
    if (string.indexOf(character) > -1) {
    	return true
    }
    return false
}

console.assert(hasEl("bubble gum", "b") === true)
console.assert(hasEl("bubble gum", "x") === false)
console.assert(hasEl([9, 4, "bubble gum", 8], 9) === true)
console.assert(hasEl([7, "square", 2], 129) === false)

// write a function called incrementEach(). 
// it should take as input an array of numbers and return a new array 
// that contains each number from the input array, increased by one.

var incrementEach = function(arrayOfNums) {
	var newArray = []
	for (var i = 0; i < arrayOfNums.length; i++) {
		newArray.push(arrayOfNums[i] + 1)
	}
	return newArray
}

var incrementEachNum = incrementEach( [ 2, 3, 4 ] )
console.assert(   incrementEachNum[0] === 3  )
console.assert(   incrementEachNum[2] === 5  )

// write a function called doubleAll(). 
// it should take as input an array of numbers and return a new array 
// that contains each number from the input array, doubled. 

var doubleAll = function(arrayOfNums) {
	var newArray = []
	for (var i = 0; i < arrayOfNums.length; i++) {
		newArray.push(arrayOfNums[i] * 2)
	}
	return newArray
}

var doubledArray = doubleAll( [ 2, 4, 6 ] )
console.assert(   doubledArray[0] === 4  )
console.assert(   doubledArray[2] === 12  )

// write a function called getFirstLetterCaps(). 
// it should take as input a string, and it should return a capitalized version 
// of the string's first character.

var getFirstLetterCaps = function(inputString) {
	return inputString[0].toUpperCase() 
}

console.assert(('banana') === 'B')

// write a function called capitalizeWord(). 
// it should take as input a string, and return a copy of that string 
// with the first character capitalized. 

var capitalizeWord = function(inputString) {
    var newCaps = inputString[0].toUpperCase()
	var newString = inputString.substring(1)
    return newCaps + newString 
}

console.assert(capitalizeWord('banana') === 'Banana')

// write a function called capitalizeAllWords(). it should take as input an array of strings, 
// and it should return a new array where all the words have been capitalized. 
// HINT: use your capitalizeWord() function from above. 

var capitalizeAllWords = function(arrayOfStrings) {
	var newArray = []
	for (var i = 0; i < arrayOfStrings.length; i++) {
        var singleObject = arrayOfStrings[i] 
        var newString = singleObject.substring(1)
        newArray.push(singleObject[0].toUpperCase() + newString)
    }
	return newArray
}

var capitalizedArray = capitalizeAllWords(['banana','dog','pizza']);
console.assert(capitalizedArray[0] === "Banana")
console.assert(capitalizedArray[1] === "Dog")
console.assert(capitalizedArray[2] === "Pizza")

// write a function called arrayToString(). 
// it should take as input an array, and it should concatenate 
// all of the array's elements into one big string, and then return that string.

var arrayToString = function(inputArray) {
	var newString = ''
	for (var i = 0; i < inputArray.length; i++) {
    	var newString = newString + inputArray[i]
    }
	return newString
} 

console.assert(arrayToString(['pizza',4,'lunch']) === 'pizza4lunch')

// write a function called shortiesOnly(). 
// taking as input an array of strings, 
// it should return a new array containing only those strings with fewer than four characters.

var shortiesOnly = function(arrayOfStrings) {
	var newArray = []
    for(var i =0; i < arrayOfStrings.length; i++) {
        var smallWord = arrayOfStrings[i]
        if (smallWord.length < 4) {
        newArray.push(smallWord)
        }
    }
    return newArray
}

var shortStrings = shortiesOnly(['pizza','dog','baseball','bat'])
console.assert(shortStrings[0] === 'dog')
console.assert(shortStrings[1] === 'bat')

// ********************
// write a function called reverseIt(). 
// it should take as input a string or array 
// (remember that we can often treat them the same way), 
// and it should return a reversed version of that input. 

// var reverseIt = function(input) {
// 	var newArray = []
//     var newString = ''
//     for(var i = input.length - 1; i >= 0; i--) {
//             if (typeof input === 'string') {
//             var char = input[i]
//             newString = newString + char
//         }
//         if (typeof input === 'object') {
//             var singleItem = input[i]
//             newArray.push(singleItem)
//             }
//         return newArray
// 	}
//     return newString
// }

// console.assert(reverseIt('chocolate chip cookie') === 'eikooc pihc etalocohc')
// var reversedArray = reverseIt([1,2,3,4,5]) // [5,4,3,2,1]
// console.assert(reversedArray[0] === 5)
// ********************


// write a function called getValue(). 
// it should take two inputs: an object and a key. 
// it should return the corresponding value for that key within the object. 
// keep in mind that this should be a one-line function. no more than two.

var tacoObj = {
    tortilla: 2,
    cheese: 'queso'
}

var getValue = function(obj,key) {
	return obj[key]
}

console.assert(getValue(tacoObj,'cheese') === 'queso')

// write a function called getAllValues(). 
// it should take as input an object, and it should return the values of all the keys in the object. 

var tacoObj = {
    tortilla: 2,
    cheese: 'queso'
}

var getAllValues = function(obj) {
 	var allValues = []
	for (var whateverProp in obj) {
        var val = obj[whateverProp]
        allValues.push(val)
    }
    return allValues
}

var result = (getAllValues(tacoObj))
console.assert(result[0] === 2)

// write a function called addProp(). 
// It should take three inputs: an object, a property name, and a value. 
// It should return the original object, plus a new key-value pair corresponding to the input.

var tacoObj = {
    tortilla: 2,
    cheese: 'queso'
}

var addProp = function(obj,key,value) {
    obj[key] = value
    return obj
}

var newObj = addProp(tacoObj,'topping','guacamole')
console.assert(newObj.topping === 'guacamole')

// write a new version of addProp() that only takes two inputs: an object, and a second object 
// containing a single key-value pair. this key-value pair should take the place of the second 
// and third inputs in the above problem. e.g.:

	// var usrObj = {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com'}
	// var newObj = addProp(usrObj,{hometown:'new orleans'})
		// newObj should look like this: 
	// {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com',hometown:'new orleans'}
		// if i run:
	// var newObj = addProp(newObj,{hobby:'bullying'})
		// then newObj should contain even more data:
	// {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com', hometown:'new orleans', hobby:'bullying'}

var tacoObj = {
    tortilla: 2,
    cheese: 'queso'
}

var addProp = function(firstObj,objPair) {
    for(var anyKey in objPair) {
    	firstObj[anyKey] = objPair[anyKey]
    }
    return firstObj
}

var newObj = addProp(tacoObj,{salsa: 'pico'})
console.assert(newObj.salsa === 'pico')

// write a function called getKeys(). 
// it should take as input an object, 
// and it should return the names of all the keys (properties) of the object.

// write a function called addPropAll(). it should take three inputs: an array of objects, a property name, and a value. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input. 

// modify addPropAll() in the same way that you modified addProp above. it should take two inptus, an array of objects and a single object containing a single key-value pair. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input.

// write a function called logValues() that takes two inputs: an array of objects, and a property name. for each object in the array, it should log the value stored under the given property name within that object. 

// write a function called getSpecificValues() that takes two inputs: an array of objects, and a property name. it should return an array containing the value stored under that property name for each object. for example, getSpecificValues(booksArray,'author') should return an array containing the author of every book object in the array. 