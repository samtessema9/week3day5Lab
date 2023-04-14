                                // Arrays and Control flow

// A

// 1. The values inside an array are called Elements.

// 2. Arrays do guarantee the elements you put inside will be in order. (Yes)

// 3. A real-life thing that can be moddeled with an array is the names of all the students in a class.


// B

let quotes = ['Don’t let yesterday take up too much of today.', 
    'Either you run the day or the day runs you.', 
    'People say nothing is impossible, but I do nothing every day.'];

// C
// Given the following array 
const randomThings = [1, 10, "Hello", true];

// 1. How do you access the 1st element in the array?
randomThings[0];

// 2. Change the value of "Hello"to "World"
randomThings[2] = 'World';

// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings[2]);

// D
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1. What would you write to access the 3rd element of the array?
ourClass[2];

// 2. Change the value of "Github" to "Octocat"
ourClass[4] = 'Octocat';

// 3. Add a new element, "Cloud City" to the array
ourClass.push('Cloud City');


// E
// Given the following array: 
const myArray = [5, 10, 500, 20];

// 1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Aegon');
myArray.push('Sam');

// 2. Remove the 5from the beginning of the array.
myArray.shift();

// 3. Add the string "Bob Marley"to the beginning of the array.
myArray.unshift('Bob Marley');

// 4. Remove the string of your choice from the end of the array.
myArray.pop();

// 5. Reverse this array using Array.prototype.reverse(). 
myArray.reverse()

// Did you mutate the array? What does mutate mean? 
    // Yes the reverse function mutated the array which means it changed the array in place. 

// Did the .reverse()method return anything?
    // Yes the reverse method returns a reference to the original array.


// F

let num = 10;

if (num < 100) {
    console.log('Little number');
} else {
    console.log('Big number');
}


// G

if (num < 5) {
    console.log('Little number');
} else if (num > 10) {
    console.log('Bif number');
} else {
    console.log('Monkey');
}


// H

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, 'raybans');

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = 'stained knit hat';

// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
thomsCloset[0][0];

// 5. In the same way, access one item from Thom's pants array.
thomsCloset[1][2];

// 6. Access one item from Thom's accessories array.
thomsCloset[2][0];

// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][3]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}!`);

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = 'Footie Pajamas';

