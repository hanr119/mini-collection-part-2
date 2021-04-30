// add background color
document.body.style.backgroundColor = "lightyellow"

// define our variable
let myTitle = document.querySelector(".title");

// make sure code is working; checking to see that variable exists
console.log(myTitle);

// change the style of message
myTitle.style.color = "lavender";
myTitle.style.padding = "50px";
myTitle.style.textAlign = "center";

//add class to message
myTitle.classList.add("big");

// create a button that adds img to page
let newButton = document.querySelector(".new-button");
newButton.style.padding = "30px";
newButton.style.backgroundColor = "skyblue"
newButton.style.width = "200px"
newButton.style.textAlign = "center"
newButton.style.borderRadius = "50px"
newButton.style.margin = "50px"
newButton.addEventListener("click", function(){
    // define new variable and add elements to container
    let storyAuthor = document.createElement("div");
    // add class to new element
    storyAuthor.classList.add("story-author");

    // add text inside new element
    storyAuthor.innerText = "Roald Dahl";

    // adding div to page
    // define location of new element
    document.querySelector(".container").append(storyAuthor);

    // add new image to page
    let newImage = document.createElement("img");

    // add a class to new img element
    newImage.classList.add("new-image");

    // add link to new img
    newImage.src = "./assets/lambtotheslaughter.png"

    // add img to page
    document.querySelector(".container").append(newImage)
})

// create a button that adds img to page
let secondButton = document.querySelector(".second-button");
secondButton.style.padding = "30px";
secondButton.style.backgroundColor = "lightgreen"
secondButton.style.width = "200px"
secondButton.style.textAlign = "center"
secondButton.style.borderRadius = "50px"
secondButton.style.margin = "50px"
secondButton.addEventListener("click", function(){
    // define new variable and add elements to container
    let storyAuthor = document.createElement("div");
    // add class to new element
    storyAuthor.classList.add("story-author");

    // add text inside new element
    storyAuthor.innerText = "Haruki Murakami";

    // adding div to page
    // define location of new element
    document.querySelector(".container-two").append(storyAuthor);
    
    // add new image to page
    let newImage = document.createElement("img");

    // add a class to new img element
    newImage.classList.add("new-image");

    // add link to new img
    newImage.src = "./assets/theelephantvanishes.jpg"

    // add img to page
    document.querySelector(".container-two").append(newImage)
})