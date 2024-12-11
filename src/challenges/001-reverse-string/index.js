// --- Directions 
// Given a string, return a new string with the reversed
// order of characters

// ---Examples 
// reverse("apple") === "leppa"


// First method - using split and join
/*function reverse(string){
    return string.split("").reverse().join("");

}*/

// Second method - loop for 
function reverse(string){
    let reversedString = "";

    for (char of string){
        reversedString = char + reversedString;
    }

    return reversedString;
}

module.exports = reverse;