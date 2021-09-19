const banner = document.querySelector("#js-banner");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    removeClass();

    if (e.target.classList.contains("js-top-left")) {
      bannerToLeftTop();
    }

    if (e.target.classList.contains("js-top-right")) {
      bannerToRightTop();
    }

    if (e.target.classList.contains("js-center")) {
      bannerToCenter();
    }

    if (e.target.classList.contains("js-bottom-left")) {
      bannerToLeftBottom();
    }

    if (e.target.classList.contains("js-bottom-right")) {
      bannerToRigthBottom();
    }
  })
);

function removeClass() {
  banner.className = "";
}

function bannerToLeftTop() {
  banner.classList.add("text-top-left");
}

function bannerToRightTop() {
  banner.classList.add("text-top-right");
}

function bannerToCenter() {
  banner.classList.add("text-center");
}

function bannerToLeftBottom() {
  banner.classList.add("text-bottom-left");
}

function bannerToRigthBottom() {
  banner.classList.add("text-bottom-right");
}
