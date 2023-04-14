// Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed


const cat1  = {
    name: "Lionel",
    breed: "Labrador",
    age: 3,
}

// console.log(cat1.age)

// console.log(cat1.name)



// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)


const cat2 = {
    name: "messy",
    breed: "orange",
    age: 5,
}



// Write a function combineCats that has two parameters mama, and papa. 
// The function will take two arguments -- each a cat object.

// Pass cat1and cat2as arguments to the combineCats function. 
// The function should console.log them.


const combineCats = (mama, papa) => {
    // let objs = [{...mama}, {...papa}]
    // console.log(mama, papa);
    // console.log(objs);

    let objects = {
        name: mama.name + "" + papa.name,
        breed: mama.breed + "-" + papa.breed,
        age: 1,
    }
    return objects;
}

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });


