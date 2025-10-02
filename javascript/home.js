// header
document.querySelectorAll(".menu_links").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // para hindi mag-refresh
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        }
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu_links");

// Scroll Spy
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActive(entry.target.id);
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

function setActive(id) {
  navLinks.forEach(link => {
    link.classList.remove("active");
    link.parentElement.classList.remove("active");
    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");
      link.parentElement.classList.add("active");
    }
  });
}

// Smooth scroll + setActive on click
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // stop default jump
    const id = this.getAttribute("href").substring(1);
    const target = document.getElementById(id);

    // smooth scroll
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // apply active state immediately
    setActive(id);
  });
});




// hero paragraph
let mobile_menu = document.querySelector('#mobile_menu');
let navbar_menu = document.querySelector('.navbar_menu');

mobile_menu.addEventListener('click', function(){
    mobile_menu.classList.toggle('is-active');
    navbar_menu.classList.toggle('active'); 
});

let jobElement = document.querySelector(".job");
let jobs = ["A Web Developer", "A Fullstack developer"];
let jobIndex = 0;
let charIndex = 0;

function typeJob() {
  if (charIndex < jobs[jobIndex].length) {
    jobElement.textContent += jobs[jobIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeJob, 100);
  } else {
    setTimeout(eraseJob, 2000);
  }
}

function eraseJob() {
  if (charIndex > 0) {
    jobElement.textContent = jobs[jobIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseJob, 50);
  } else {
    jobIndex = (jobIndex + 1) % jobs.length;
    setTimeout(typeJob, 500);
  }
}

typeJob();


//intro photo
const facebook = document.querySelector("#facebook");
const instagram = document.querySelector("#instagram");
const gmail = document.querySelector("#gmail");
const locationIcon = document.querySelector("#location");

facebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/ramonyongs17", "_blank");
});

instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/eranatics/", "_blank");
});

gmail.addEventListener("click", () => {
  window.location.href = "mailto:ramonagbuya20@gmail.com";
});

locationIcon.addEventListener("click", () => {
  window.open("https://www.google.com/maps/dir//Ph3+Pkg+3+Blk+64+Lot+7,+Agbuya+Compound,+Caloocan,+Metro+Manila/@14.7702621,121.0481161,21z/data=!4m18!1m8!3m7!1s0x3397aff3507f3edb:0x24ed03fbad390d2d!2sAgbuya+Compound!8m2!3d14.7703688!4d121.0481187!15sChVwaDMgcGtnMyBibGsgNjQgbG90IDeSAQ9ob3VzaW5nX3NvY2lldHmqAVgQASoZIhVwaDMgcGtnMyBibGsgNjQgbG90IDcoADIeEAEiGqZt0UMuys7T5tZ93v40e2DVi3rMRZL8lmuVMhkQAiIVcGgzIHBrZzMgYmxrIDY0IGxvdCA34AEA!16s%2Fg%2F11l27n0n0m!4m8!1m0!1m5!1m1!1s0x3397aff3507f3edb:0x24ed03fbad390d2d!2m2!1d121.0481162!2d14.7703967!3e9?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D", "_blank");
});