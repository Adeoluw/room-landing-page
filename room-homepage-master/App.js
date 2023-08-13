const leftArrow = document.getElementById("left-img");
const rightArrow = document.getElementById("right-img");
const textSection = document.getElementsByClassName("text-section")[0]
// const textHead = document.getElementById("text-head")
// const textPara = document.getElementById("text-para")
const imgSection = document.getElementsByClassName("img-section")[0]
const secondTextHead = document.getElementsByClassName("two")[0]
const secondTextPara = document.getElementsByClassName("two")[1]
const thirdTextHead = document.getElementsByClassName("three")[0]
const thirdTextPara = document.getElementsByClassName("three")[1]
const firstTextHead = document.getElementsByClassName("one")[0]
const firstTextPara = document.getElementsByClassName("one")[1]




let images = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];


leftArrow.addEventListener("click", () => {
    if (firstTextHead.style.display === "block" && secondTextHead.style.display === "none" && thirdTextHead.style.display === "none") {
      secondTextHead.style.display = "none";
      secondTextPara.style.display = "none";
      thirdTextHead.style.display = "block";
      thirdTextPara.style.display = "block";
      firstTextHead.style.display = "none";
        firstTextPara.style.display = "none";
        imgSection.style.backgroundImage ="url(./images/desktop-image-hero-3.jpg)";
    } else if (
      firstTextHead.style.display === "none" &&
      secondTextHead.style.display === "none" &&
      thirdTextHead.style.display === "block"
    ) {
      secondTextHead.style.display = "block";
      secondTextPara.style.display = "block";
      thirdTextHead.style.display = "none";
      thirdTextPara.style.display = "none";
      firstTextHead.style.display = "none";
        firstTextPara.style.display = "none";
        imgSection.style.backgroundImage ="url(./images/desktop-image-hero-2.jpg)";

    } else{
      secondTextHead.style.display = "none";
      secondTextPara.style.display = "none";
      thirdTextHead.style.display = "none";
      thirdTextPara.style.display = "none";
      firstTextHead.style.display = "block";
        firstTextPara.style.display = "block";
        imgSection.style.backgroundImage ="url(./images/desktop-image-hero-1.jpg)";
      console.log("bitch");
    }


})

rightArrow.addEventListener("click", () => {
    if (firstTextHead.style.display === "block" && secondTextHead.style.display === "none" && thirdTextHead.style.display === "none") {
      secondTextHead.style.display = "block";
      secondTextPara.style.display = "block";
      thirdTextHead.style.display = "none";
      thirdTextPara.style.display = "none";
      firstTextHead.style.display = "none";
        firstTextPara.style.display = "none";
        imgSection.style.backgroundImage ="url(./images/desktop-image-hero-2.jpg)";

    } else if (
      firstTextHead.style.display === "none" &&
      secondTextHead.style.display === "block" &&
      thirdTextHead.style.display === "none"
    ) {
      secondTextHead.style.display = "none";
      secondTextPara.style.display = "none";
      thirdTextHead.style.display = "block";
      thirdTextPara.style.display = "block";
      firstTextHead.style.display = "none";
        firstTextPara.style.display = "none";
     imgSection.style.backgroundImage = "url(./images/desktop-image-hero-3.jpg)";

    } else{
      secondTextHead.style.display = "none";
      secondTextPara.style.display = "none";
      thirdTextHead.style.display = "none";
      thirdTextPara.style.display = "none";
      firstTextHead.style.display = "block";
      firstTextPara.style.display = "block";
    imgSection.style.backgroundImage ="url(./images/desktop-image-hero-1.jpg)";
    }


})

