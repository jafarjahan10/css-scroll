const section = document.querySelector("#scroll_section");
const inner = section.querySelector(".scroll-inner");
const heading = section.querySelector(".heading");
const subheading = section.querySelector(".subheading");
const image = section.querySelector(".image");
const sibling = section.nextElementSibling;

const animationThreshold = {
    heading: 0.05,
    subheading: 0.50,
    image: 0.70
};

let isScrollComplete = false;

// This is a comment

function handleScroll() {
    if (isScrollComplete) return;

    const rect = section.getBoundingClientRect();
    const siblingRect = sibling.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollDistance = section.offsetHeight - windowHeight;

    const progress = Math.min(Math.max((0 - rect.top) / scrollDistance, 0), 1);

    if (progress > animationThreshold.heading) {
        heading.classList.add("active");
    }
    if (progress > animationThreshold.subheading) {
        subheading.classList.add("active");
    }
    if (progress > animationThreshold.image) {
        image.classList.add("active");
    }

    if (progress >= 1 && siblingRect.top <= 0) {
        isScrollComplete = true;
        section.classList.add("done");
        window.removeEventListener("scroll", handleScroll);
    }
}

window.addEventListener("scroll", handleScroll);
