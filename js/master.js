// Toggle Spin Class on Icon 

document.querySelector(".toggle-settings .fa-gear").onclick = function() {

    // Toggle Class Fa-spin for rotation on itself 

    this.classList.toggle("fa-spin"); // can't understand this line.

    // Toggle Class Open on Main Settings Box 

    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors [Can't understand it.]

const colorsLi = document.querySelectorAll(".colors-list li");

// Loop on All List Items 

colorsLi.forEach(li => {

    // Click on Every List Items 
    li.addEventListener("click" , (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);

    });

});


// Select Landing Page 

let landingPage = document.querySelector(".landing-page");

// Get Array of Imgs 

let imgsArray = ["01.jpg" , "02.jpg" , "03.jpg" , "04.jpg"]; 

setInterval (() => {

    // Get Random Number

    let randomNumber = Math.floor( Math.random () * imgsArray.length );
    console.log(randomNumber);

    // Change Background Image URL

    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")'; // can't understand the concatenation.


}, 3000);