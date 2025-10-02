//creating clone of the slides to make infinite effect
let slides = document.querySelector('.icon_slides');
const clone = slides.cloneNode(true);
document.querySelector('.images_container').appendChild(clone);


document.querySelectorAll(".graps_record").forEach(record => {
    record.addEventListener('mouseover', () => {
        record.style.transform = "scale(1.1)";
        record.style.transition = "all 0.3s ease-in-out";
        record.style.backgroundColor = "rgba(0, 0, 0, 0.56)";
    });
    record.addEventListener('mouseout', () => {
        record.style.transform = "scale(1)";
        record.style.transition = "all 0.3s ease-in-out";
        record.style.backgroundColor = "rgba(10, 3, 3, 0.4)";
    });
});

// animate progress bars
document.addEventListener("DOMContentLoaded", () => {
    const progresses = document.querySelectorAll(".progress");
    progresses.forEach(progress => {
        const percentage = progress.getAttribute("data-percentage").trim();
        progress.style.width = percentage;
        progress.style.transition = "width 2s ease-in-out";
    }
    );

    
});
