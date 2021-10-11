/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived


let me = {
    name : "Tommy Sylver",
    photo : "images/me.jpg",
    favoriteFoods: ["beans", "apple", "raspberries", "chicken"],
    hoobies : ["video games", "Basketball", "Piano", "Travel"],
    placesLived: [
        {
            place : "Tamatave, Madagascar",
            length : "10 years",
        },

        {
            place : "Antananarivo, Madagascar",
            length : "1 years",
        }
    ]
}


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = me.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("src", me.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("alt", me.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let food1 = document.createElement("li");
food1.textContent = me.favoriteFoods[0];

let food2 = document.createElement("li");
food2.textContent = me.favoriteFoods[1];

let food3 = document.createElement("li");
food3.textContent = me.favoriteFoods[2];

let food4 = document.createElement("li");
food4.textContent = me.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let foodList = document.getElementById("favorite-foods");
foodList.appendChild(food1);
foodList.appendChild(food2);
foodList.appendChild(food3);
foodList.appendChild(food4);

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobby1 = document.createElement("li");
hobby1.textContent = me.hoobies[0];

let hobby2 = document.createElement("li");
hobby2.textContent = me.hoobies[1];

let hobby3 = document.createElement("li");
hobby3.textContent = me.hoobies[2];

let hobby4 = document.createElement("li");
hobby4.textContent = me.hoobies[3];

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let hobbyList = document.getElementById("hobbies");
hobbyList.appendChild(hobby1);
hobbyList.appendChild(hobby2);
hobbyList.appendChild(hobby3);
hobbyList.appendChild(hobby4);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let place1 = document.createElement("dt");
place1.textContent = me.placesLived[0].place;

let place2 = document.createElement("dt");
place2.textContent = me.placesLived[1].place;

let length1 = document.createElement("dd");
length1.textContent = me.placesLived[0].length;

let length2 = document.createElement("dd");
length2.textContent = me.placesLived[1].length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
let placeLivedList = document.getElementById("places-lived");

placeLivedList.appendChild(place1);
placeLivedList.appendChild(length1);

placeLivedList.appendChild(place2);
placeLivedList.appendChild(length2);
