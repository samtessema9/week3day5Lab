                                    // OBJECTS

// A
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

let user = {
    name: 'Sam',
    email: 'sam@example.com',
    age: 25,
    purchased: []
};

// B
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.

let userUpdated = {
    ...user
};

userUpdated.email = 'sam@newemail.com';

// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator.

userUpdated.age++;


// C
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

userUpdated.location = 'Seattle';

// D - The problem wasn't clear on which object needed to be updated so I updated the userUpdated object from here on out.

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

userUpdated.purchased.push('carbohydrates');

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

userUpdated.purchased.push('peace of mind');

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray

userUpdated.purchased.push('Merino jodhpurs');

// Console.log just the "Merino jodhpurs" from the purchasedarray.

console.log(userUpdated.purchased[2]);


// E
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

userUpdated.friend = {
    name: 'bob',
    age: 23,
    location: 'Portland',
    purchased: []
};

// Console.log just the friend's name

console.log(userUpdated.friend.name);

// Console.log just the friend's location

console.log(userUpdated.friend.location);

// CHANGE the friend's age to 55

userUpdated.friend.age = 55;

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.

userUpdated.friend.purchased.push('The One Ring');

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.

userUpdated.friend.purchased.push('A Latte');

// Console.log just "A latte" from the friend's purchasedarray.

console.log(userUpdated.friend.purchased[1]);


// F
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

for (let item of userUpdated.purchased) {
    console.log(item);
};

// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let item of userUpdated.friend.purchased) {
    console.log(item);
};


// G
// Write a single function updateUserthat takes no parameters. When the function is run, it should: increment the user's age by 1, make the user's name uppercase.

const updateUser = () => {
    userUpdated.age++;
    userUpdated.name = userUpdated.name.toUpperCase();
};

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

const oldAndLoud = (person) => {
    person.age++;
    person.name = userUpdated.name.toUpperCase();
};

oldAndLoud(userUpdated);
