// 1
// Define an object called cat1 that contains the following properties: name, breed, age (a number).
const cat1 = {
    name: 'Doug',
    breed: 'Abbysinian',
    age: 9
}

// console.log the cat's age.
console.log(cat1.age);

// console.log the cat's breed.
console.log(cat1.breed);


// 2
// Define an object called cat2that also contains the properties: name , breed, age(number).
const cat2 = {
    name: 'Bob',
    breed: 'British Shorthair',
    age: 10
}


// 3
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
const combineCats = (mama, papa) => {
    console.log(mama);
    console.log(papa);
}

// Pass cat1and cat2 as arguments to the combineCatsfunction. The function should console.log them.
combineCats(cat1, cat2);

// Make it so the combineCats function will return a combination of the two incoming cats The result should be an object wherein the 
// name is a concatenation of the parents' names 
// the age is 1 
// the breed is each of the parents' breeds with a hyphen in between
const combineCats2 = (mama, papa) => {
    let newObj = {
        name: mama.name + papa.name,
        age: 1,
        breed: `${mama.breed}-${papa.breed}`
    };
    return newObj
}

console.log(combineCats2(cat1, cat2));


// 4
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

console.log(combineCats2(combineCats2(combineCats2(cat1, cat2), combineCats2(cat1, cat2)), combineCats2(combineCats2(cat1, cat2), combineCats2(cat1, cat2))));

