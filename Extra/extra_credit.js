//Extra Credit- Sataporn Worasilpchai
//Cat Combinator

const cat1 = {
    name: "Jill",
    breed: "Siamese",
    age: 10
}

console.log("Name of mama cat:",cat1.name);
console.log("Breed of mama cat:", cat1.breed);

const cat2 = {
    name: "Jack",
    breed: "Birman",
    age: 9
}

const combineCats = (obj1, obj2) =>{

    console.log([{...obj1},{...obj2}])


    let babyCat = {};
    babyCat.name = obj1.name + obj2.name;
    babyCat.age = 1;
    babyCat.breed = obj1.breed + "-" + obj2.breed;
    return babyCat
}

let newCat = combineCats(cat1, cat2);
console.table(newCat);

console.log(combineCats(newCat, newCat));
let level_2 = combineCats(newCat, newCat)
console.log("Level-3", combineCats(level_2, level_2));










//he












































































