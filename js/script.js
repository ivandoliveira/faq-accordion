const dt = document.querySelectorAll(".container-dt");
const dd = document.querySelectorAll("dd");
const minusIcon = document.querySelectorAll(".icon-minus");
const plusIcon = document.querySelectorAll(".icon-plus");

window.onload = function () {
  dd[0].classList.add("show");
  minusIcon[0].style.display = "block";
  plusIcon[0].style.display = "none";
};

dt.forEach((element) => {
  element.addEventListener("click", function () {
    element.nextElementSibling.classList.toggle("show");
    const dd = this.nextElementSibling;
    const minusIcon = this.querySelector(".icon-minus");
    const plusIcon = this.querySelector(".icon-plus");

    if (dd.classList == "show") {
      console.log("teste");
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      minusIcon.style.display = "none";
      plusIcon.style.display = "block";
    }
  });
});

dt.forEach((element) => {
  element.addEventListener("keypress", function () {
    const keyName = event.key;
    if (keyName == "Enter") {
      element.nextElementSibling.classList.toggle("show");
      const dd = this.nextElementSibling;
      const minusIcon = this.querySelector(".icon-minus");
      const plusIcon = this.querySelector(".icon-plus");

      if (dd.classList == "show") {
        console.log("teste");
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
      } else {
        minusIcon.style.display = "none";
        plusIcon.style.display = "block";
      }
    }
  });
});
