const leftArrow = document.getElementById("left-img");
const rightArrow = document.getElementById("right-img");
const textSection = document.getElementsByClassName("text-section")[0];
// const textHead = document.getElementById("text-head")
// const textPara = document.getElementById("text-para")
const imgSection = document.getElementsByClassName("img-section")[0];
const secondTextHead = document.getElementsByClassName("two")[0];
const secondTextPara = document.getElementsByClassName("two")[1];
const thirdTextHead = document.getElementsByClassName("three")[0];
const thirdTextPara = document.getElementsByClassName("three")[1];
const firstTextHead = document.getElementsByClassName("one")[0];
const firstTextPara = document.getElementsByClassName("one")[1];
const firstImage = document.getElementsByClassName("img-one")[0];
const secondImage = document.getElementsByClassName("img-two")[0];
const thirdImage = document.getElementsByClassName("img-three")[0];
const openNav = document.getElementsByClassName("open-nav")[0];
const closeNav = document.getElementsByClassName("close-nav")[0];
const nav = document.querySelector("nav")


leftArrow.addEventListener("click", () => {
  if (
    firstTextHead.style.display === "block" &&
    secondTextHead.style.display === "none" &&
    thirdTextHead.style.display === "none"
  ) {
    secondTextHead.style.display = "none";
    secondTextPara.style.display = "none";
    thirdTextHead.style.display = "block";
    thirdTextPara.style.display = "block";
    firstTextHead.style.display = "none";
    firstTextPara.style.display = "none";
    thirdImage.style.opacity = "1";
    // firstImage.style.opacity = "0";
    secondImage.style.opacity = "0";
      firstImage.style.animationName = "fadeout"
      thirdImage.style.animationName = "fadein";
    //   thirdImage.style.animationDelay = "1s"
    // imgSection.style.backgroundImage ="url(./images/desktop-image-hero-3.jpg)";
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
    secondImage.style.opacity = "1";
    firstImage.style.opacity = "0";
    thirdImage.style.opacity = "0";
    thirdImage.style.animationName = "fadeout";
    secondImage.style.animationName = "fadein";


    // imgSection.style.backgroundImage ="url(./images/desktop-image-hero-2.jpg)";
  } else {
    secondTextHead.style.display = "none";
    secondTextPara.style.display = "none";
    thirdTextHead.style.display = "none";
    thirdTextPara.style.display = "none";
    firstTextHead.style.display = "block";
    firstTextPara.style.display = "block";
    firstImage.style.opacity = "1";
    secondImage.style.opacity = "0";
      thirdImage.style.opacity = "0";
      secondImage.style.animationName = "fadeout";
      firstImage.style.animationName = "fadein";

    // imgSection.style.backgroundImage ="url(./images/desktop-image-hero-1.jpg)";
    console.log("bitch");
  }
});

rightArrow.addEventListener("click", () => {
  if (
    firstTextHead.style.display === "block" &&
    secondTextHead.style.display === "none" &&
    thirdTextHead.style.display === "none"
  ) {
    secondTextHead.style.display = "block";
    secondTextPara.style.display = "block";
    thirdTextHead.style.display = "none";
    thirdTextPara.style.display = "none";
    firstTextHead.style.display = "none";
    firstTextPara.style.display = "none";
    secondImage.style.opacity = "1";
    thirdImage.style.opacity = "0";
      firstImage.style.opacity = "0";
      firstImage.style.animationName = "fadeout"
      secondImage.style.animationName = "fadein"
    // imgSection.style.backgroundImage ="url(./images/desktop-image-hero-2.jpg)";
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
    thirdImage.style.opacity = "1";
    firstImage.style.opacity = "0";
      secondImage.style.opacity = "0";
      secondImage.style.animationName = "fadeout";
      thirdImage.style.animationName = "fadein";


    //  imgSection.style.backgroundImage = "url(./images/desktop-image-hero-3.jpg)";
  } else {
    secondTextHead.style.display = "none";
    secondTextPara.style.display = "none";
    thirdTextHead.style.display = "none";
    thirdTextPara.style.display = "none";
    firstTextHead.style.display = "block";
    firstTextPara.style.display = "block";
    firstImage.style.opacity = "1";
    thirdImage.style.opacity = "0";
      secondImage.style.opacity = "0";
      thirdImage.style.animationName = "fadeout";
      firstImage.style.animationName = "fadein";



    // imgSection.style.backgroundImage ="url(./images/desktop-image-hero-1.jpg)";
  }
});


openNav.addEventListener("click", () => {
    nav.style.opacity = "1"
    nav.style.animationName = "slidedown"
    nav.style.zIndex = "9999"

})

closeNav.addEventListener("click", () => {
    nav.style.opacity = "0"
    nav.style.animationName = "slideout";
    nav.style.zIndex = "-1";


})