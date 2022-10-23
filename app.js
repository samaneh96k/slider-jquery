
import data from "./data.js";
const container = $(".slide-container");
const nextBtn = $(".next-btn");
const prevBtn = $(".prev-btn");
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
// if length is 2, add copies of slides
let people = [...data];
if (data.length === 2) {
  people = [...data, ...data];
}
console.log(people);
container.html(
  people
    .map((person, index) => {
      const { img, name, job, text } = person;
      let position = "next";
      if (index === 0) {
        position = "active";
      }
      if (index === people.length - 1) {
        position = "last";
      }
      if (data.length <= 1) {
        position = "active";
      }
      return `<article class="slide ${position}">
  <img src=${img} class="img" alt="${name}"/>
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
   ${text}
  </p>
<div class="quote-icon">
<i class="fas fa-quote-right"></i>
</div>
 </article>`;
    })
    .join("")
);

const startSlider = type => {
  // get all three slides active,last next
  const active = $(".active");
  const last = $(".last");
  let next = active.next();
  console.log(next);
  if (next.length == 0) {
    next = container.children(":first");
    console.log(next);
  }
  active.removeClass("active");
  last.removeClass("last");
  next.removeClass("next");

  if (type === "prev") {
    active.addClass("next");
    last.addClass("active");
    next = last.prev();
    if (!next) {
      next = container.children(":last-child");
    }
    next.removeClass("next");
    next.addClass("last");
    return;
  }
  active.addClass("last");
  last.addClass("next");
  next.addClass("active");
};
nextBtn.click(startSlider);
prevBtn.click(() => startSlider("prev"));
