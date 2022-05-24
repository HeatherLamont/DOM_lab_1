document.addEventListener("DOMContentLoaded", ()=>{

    const redParagraph = document.createElement("p");
    redParagraph.textContent = "Hey I'm Red!"
    redParagraph.id = 'red';

    
    const blueHeader = document.createElement("h3");
    blueHeader.textContent = "I'm a Blue h3!";
    blueHeader.id = "blue"

    const divHeader = document.createElement("h1");
    divHeader.textContent = "I'm in a div"
    const meTooParagraph = document.createElement("p");
    meTooParagraph.textContent = "Me too!"
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("pink-div");
    
    const divContainer = document.querySelector("div");
    divContainer.appendChild(redParagraph);
    divContainer.appendChild(blueHeader);
    divContainer.appendChild(newDiv);
    newDiv.appendChild(divHeader);
    newDiv.appendChild(meTooParagraph);
    
    const favouriteFoods = ["Pizza", "Ice-Cream", "Chips"]
    
    const foodDiv = document.createElement("div");
    foodDiv.classList.add("food-div");

    const body = document.querySelector("body");
    body.appendChild(foodDiv);

    const foodHeader = document.createElement("h2");
    foodHeader.textContent = "My Favourite Foods";
    foodDiv.appendChild(foodHeader);
    const listOfFavouriteFoods = document.createElement("ul");
    const food1 = document.createElement("li");
    const food2 = document.createElement("li");
    const food3 = document.createElement("li");
    food1.textContent = favouriteFoods[0];
    food2.textContent = favouriteFoods[1];
    food3.textContent = favouriteFoods[2];
  

    foodDiv.appendChild(listOfFavouriteFoods);
    listOfFavouriteFoods.appendChild(food1)
    listOfFavouriteFoods.appendChild(food2)
    listOfFavouriteFoods.appendChild(food3)

})
