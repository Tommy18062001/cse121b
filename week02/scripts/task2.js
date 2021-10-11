// 1. Declare and instantiate a variable to hold your name
const myName = "Tommy Sylver";

// 2. Place the value of the name variable into the task2.html 
// file inside of the element with an "id of "name" (hint: document.querySelector())
document.querySelector("#name").textContent = myName;

// 3. Declare and instantiate a variable to hold the current year
const dateObject = new Date();
const currentYear = dateObject.getFullYear();

console.log(currentYear);

// 4. Place the value of the current year variable into the task2.html file inside
// of the element with an id of "year"
document.getElementById("year").innerHTML = currentYear;

// 5. Copy an image of yourself into the images folder
// 6. Declare and instantiate a variable to hold the name and location of your
// picture (hint: images/imagename.png)
// 7. Place the value of the picture variable into the task2.html file in the "src"
// attribute of the img element (hint: document.querySelector().setAttribute())
const ourImg = document.querySelector("img");

ourImg.setAttribute("src", "images/me.jpg");
ourImg.setAttribute("alt", "my picture");


// 1. Declare an array variable to hold your favorite foods ( hint: [] ) and fill it
// with your favorite foods as strings.
let favoriteFoods = ["orange", "apple", "raspberries", "chicken"];

// 2. Use JavaScript to modify the element who's id is "food" found in the
// task2.html file.
document.querySelector("#food").innerHTML = favoriteFoods;

// 3. Declare and instantiate a variable to hold another of your favorite foods.
const myfavorite = "Beans";

// 4. Add the value stored in this variable to the favorite food array.
favoriteFoods.push(myfavorite);

console.log(favoriteFoods);

// 5. Repeat Step 2
document.querySelector("#food").innerHTML = favoriteFoods;

// 6. Remove the first element in the favorite foods array
favoriteFoods.shift();

// 7. Repeat Step 2
document.querySelector("#food").innerHTML = favoriteFoods;

// 8. Remove the last element in the favorite foods array
favoriteFoods.pop();

// 9. Repeat Step 2 
document.querySelector("#food").innerHTML = favoriteFoods;



