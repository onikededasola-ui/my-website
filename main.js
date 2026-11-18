const hero = document.querySelector(".hero");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const footer = document.querySelector("footer");

const heroHeading = document.createElement("h1");
heroHeading.textContent = "Welcome to Slayed by Hademide";

const heroParagraph = document.createElement("p");
heroParagraph.textContent = "Luxury beauty, made just for you.";

const heroImage = document.createElement("img");
heroImage.src = "images/hero.jpeg";
heroImage.alt ="luxury bouncy unit";

const heroButton = document.createElement("button");
heroButton.textContent = "Explore our collection";

// Hero Section
hero.append(heroHeading,heroParagraph,heroImage,heroButton);

console.log(hero)
console.log(about)
console.log(contact)
console.log(footer)
// About Section
about.innerHTML = `
 <h2>About Slayed by Hademide</h2>

<p>We are honored to take care of yur crown.
    we offer luxury wigs and beauty services designed to make you feel confident and beutiful.
</p>`;


// Contact Section

contact.innerHTML =`
<h2>Contact Us</h2>
<p>We would love to hear from you.</p>
<p>
Tel:
<a href="tel: +2349130591002">09130591002</a>
</p>

<p>Email:
<a href= "mailto:onikededasola@gmail.com">onikededasola@gmail.com</a>
</p>`;

// Footer
footer.textContent ="&copy; Slayed by Hademide. All rights reserved.";

footer.innerHTML ="&copy; Slayed by Hademide. All rights reserved.";

console.log(hero.textContent);
console.log(about.textContent);
console.log(contact.textContent);
console.log(footer.textContent);