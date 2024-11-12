console.info("Hello from the file");
document.getElementById("myHeading").innerHTML = "Abraham Kidane";
document.querySelector("nav ul li").setAttribute("class", "currentPage");
// document
// .querySelector("nav ul li a")
// .setAttribute("href", "https://www.google.co.uk");



let colorButtons = document.querySelectorAll(".colPicker");
console.dir(colorButtons);

for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", changeColour);
}
function changeColour(ev) {
    console.dir(ev.target.classList[0]);
    let colourClass = ev.target.classList[0] + "Back";
    document.body.setAttribute("class", colourClass);
}

document.getElementById("myTestBtn").addEventListener("click", function () {
    console.info("Hi I was clicked!");
});

// color picker

let redBtn = document.querySelector(".red");
redBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "redBack");
});

let greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "greenBack")
});

let blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "blueBack");
});

let defaultBtn = document.querySelector(".reset");
defaultBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "error");
});



let imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg', 'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];
document.getElementById('myImages').setAttribute('src', imageAr[2]);


let currentIndex = 0;

function chgImage(){
    // Increment the index to get the next image
    currentIndex++;
      // If the index exceeds the array length, reset it to 0
    if(currentIndex >= imageAr.length){
        currentIndex = 0;
    }
    // Change the image source to the next image in the array
    document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);

    setInterval(chgImage, 2000);
}