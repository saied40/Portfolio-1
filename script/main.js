const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");

function pageTransitions() {
  // Button Click Active Class
  for (let i = 0; i < secBtn.length;i++) {
    secBtn[i].addEventListener("click", function() {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList = currentBtn[0].className.replace("active-btn", "");
      this.classList.add("active-btn");
    })
  };

  // Sections Active
  document.body.addEventListener("click",(e) => {
    let id = e.target.dataset.id;
    if(id) {
      // Remove Selected From Other Buttons
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });

      e.target.classList.add("active");

      // Hide Other Sections
      sections.forEach((sec) => {
        sec.classList.remove("active");
      });

      const ele = document.getElementById(id);
      ele.classList.add("active");
    }
  })

  // Toggle Theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  })
};

pageTransitions();

let ele = document.querySelectorAll(".removeJS");
for (let i = 0; i < ele.length; i++) {
  ele[i].remove();
};