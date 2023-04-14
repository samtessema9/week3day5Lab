console.log("hello world");

// How do we assign a value to a variable?

// We assign a value to a variable using the let, constant, and var keywords. Then defining a variable name and using the equals operator to assign the value to the variable.

const printGretting = (name) => {
    console.log(`Hi, ${name} welcome to class`);
}
printGretting('Jon');



const calculateCube = (num) => {
    cubeValume = num * num * num;
    console.log(cubeValume);
}
calculateCube(5);



const isVowel = (leter) => {
    leter = leter.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    if(vowels.includes(leter)) {
        console.log(true);
    } else {
        console.log("Not a vowel");
    }
} 
isVowel("A");


const getTwoLegths = (stiring1, stiring2) => {
    results = [];
    let ar1 = stiring1.length;
    let ar2 = stiring2.length;
    return results.concat(ar1, ar2);
}
console.log(getTwoLegths("Han", "Hippopalous"));


const getMultipleLengths = (arryOfStrings) => {
    arryOfStrings.forEach(strin => {
        console.log(strin);
    })
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))