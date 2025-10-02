const btn_left = document.querySelector("#btn_left");
const btn_right = document.querySelector("#btn_right");
const image = document.querySelector(".myPicture img");
const image_count = document.querySelectorAll(".image_count .count");

const images = [
  "/images/black1.jpg",
  "/images/black2.jpg",
  "/images/black3.jpg",
  "/images/black4.jpg",
  "/images/black5.jpg"
];

let image_span = [...image_count];
let index = 0;

// Function para update both image at indicator
function updateImage() {
  image.src = images[index];
  image_span.forEach((span, idx) => {
    span.style.backgroundColor = idx === index ? "cyan" : "transparent";
  });
}

// Initial load
updateImage();

btn_left.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length; // wrap-around
  updateImage();
});

btn_right.addEventListener("click", () => {
  index = (index + 1) % images.length; // wrap-around
  updateImage();
});


document.querySelector("#btn_readMore").addEventListener("click", function(e) {
  e.preventDefault();
  const text = document.querySelector(".text .paragraph"); 
  if (text.style.display === "none" || !text.style.display) {
    text.style.display = "block";
    this.textContent = "Read Less";
  } else {
    text.style.display = "none";
    this.textContent = "Read More";
  }
});
