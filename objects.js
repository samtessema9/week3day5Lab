                                    // OBJECTS

// A

let user = {
    name: 'Sam',
    email: 'sam@example.com',
    age: 25,
    purchased: []
};

// B

let userUpdated = {
    ...user
};

userUpdated.email = 'sam@newemail.com';

userUpdated.age++;

console.log(userUpdated)

// C

userUpdated.location = 'Seattle';

// D - The problem wasn't clear on which object needed to be updated so I updated the userUpdated object from here on out.

userUpdated.purchased.push('carbohydrates');

userUpdated.purchased.push('peace of mind');

userUpdated.purchased.push('Merino jodhpurs');

console.log(userUpdated.purchased[2]);

// E

userUpdated.friend = {
    name: 'bob',
    age: 23,
    location: 'Portland',
    purchased: []
};

console.log(userUpdated.friend.name);

console.log(userUpdated.friend.location);

userUpdated.friend.age = 55;

userUpdated.friend.purchased.push('The One Ring');

userUpdated.friend.purchased.push('A Latte');

console.log(userUpdated.friend.purchased[1]);


// F

for (let item of userUpdated.purchased) {
    console.log(item);
};


for (let item of userUpdated.friend.purchased) {
    console.log(item);
};


// G

const updateUser = () => {
    userUpdated.age++;
    userUpdated.name = userUpdated.name.toUpperCase();
};


const oldAndLoud = (person) => {
    person.age++;
    person.name = userUpdated.name.toUpperCase();
};

oldAndLoud(userUpdated);
