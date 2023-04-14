console.lssog("hello world");

// How do we assign a value to a variable?

// We assign a value to a variable using the let, constant, and var keywords. Then defining a variable name and using the equals operator to assign the value to the variable.

const printGretting = (name) => {
    console.log(`Hi, ${name} welcome to class`);
}
printGretting('Jon');

//print cool
const printCool=(name)=>{
    console.log(name, "is Cool");
}

printCool("Captain Reynolds");

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
    let resultArray = [];
    arryOfStrings.forEach(strin => {
        resultArray.push(strin.length);
    })
    return console.log(resultArray);
}
getMultipleLengths(["hello", "what", "is", "up", "dude"]);



const maxOfthree = (num1, num2, num3) => {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } else if(num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(maxOfthree(6, 9, 1));


const printLongestWord = (wordArray) => {
    console.log(wordArray.sort((a, b) => b.length - a.length)[0]);
}
printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]);