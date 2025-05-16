const slider = document.querySelector(".circular-slider");
const images = document.querySelectorAll(".slider img");
const imageContainer = document.querySelector(".images");
const indicator = document.querySelector(".indicator");
const menuItems = document.querySelectorAll(".menu span");
const descriptions = document.querySelectorAll(".text");

const rotationValues = [-58, -32, 0, 32, 58];
const colors = ["radial-gradient(#a74255, #440412)", "radial-gradient(#ff4b5f, #a40b16)", "radial-gradient(#fdb76d, #f08a00)", "radial-gradient(#849ade, #42395f)", "radial-gradient(#e7ad59, #883e2a)"];

let itemIndex = 2;

const rotate = (rotationValue) => {
    imageContainer.style.transform = `rotate(${rotationValue}deg)`;
    indicator.style.transform = `translate(-50%,-50%) rotate(${rotationValue}deg)`;
};

menuItems.forEach((menuItem, idx) => {
    menuItem.addEventListener("click", () => {
        images.forEach((img) => (img.style.opacity = "0"));
        images[idx].style.opacity = "1";
        slider.style.background = colors[idx];
        descriptions.forEach((description) => (description.style.display = "none"));
        descriptions[idx].style.display = "block";

        idx > itemIndex ? rotate(rotationValues[itemIndex] - 10) : idx < itemIndex ? rotate(rotationValues[itemIndex] + 10) : null;

        setTimeout(() => {
            rotate(rotationValues[idx]);
        }, 300)

        itemIndex = idx;
    });
});