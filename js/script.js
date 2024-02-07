const navigationList = ["Home", "About", "Contact"];
const socialMedias = ["Instagram", "TikTok", "Youtube", "X-Twitter"]
addNavigation(navigationList);
addHamburgerMenuButton();
addSocialMedia(socialMedias);

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', () => {
    const headerNav = document.querySelector("header nav");

    hamburger.classList.toggle("hamburger-active");
    headerNav.classList.toggle("nav-active");
})

// Fungsi untuk menambahkan Navigasi ke halaman web
function addNavigation(navigation) {
    const headerNav = document.querySelector("header nav");
    const ul = document.createElement("ul");

    for (const nav of navigation) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = nav.toUpperCase();

        if (nav === "Home") a.setAttribute("href", "#");
        else a.setAttribute("href", `#${nav.toLowerCase()}`);

        li.appendChild(a);
        ul.appendChild(li);
    }
    headerNav.appendChild(ul);
}

function addHamburgerMenuButton() {
    const header = document.querySelector("header");
    const button = document.createElement("button");
    button.classList.add("hamburger");
    button.setAttribute("type", "button");

    for (let i = 1; i <= 3; i++) {
        const span = document.createElement("span");
        span.classList.add('hamburger-line');
        button.appendChild(span)
    }

    header.appendChild(button);
}

function addSocialMedia(socialMedias) {
    const elSocialMedia = document.querySelector(".social-media");
    const ul = document.createElement("ul");

    for (socialMedia of socialMedias) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", "#");
        const i = document.createElement("i");
        i.setAttribute("class", `fa-brands fa-${socialMedia.toLowerCase()}`);

        a.appendChild(i)
        li.appendChild(a);
        ul.appendChild(li)
    }

    elSocialMedia.appendChild(ul);
}