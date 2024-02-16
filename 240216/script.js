window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const headerContents = document.querySelector(".header_contents span");
  const sectionMovie = document.querySelector("#movie");
  const sectionIntro = document.querySelector("#introduce");
  const sectionTravel = document.querySelector("#travel");
  const headerHeight = header.offsetHeight;

  const introOffset = sectionIntro.offsetTop - headerHeight;
  const travelOffset = sectionTravel.offsetTop - headerHeight;
  const movieOffset = sectionMovie.offsetTop - headerHeight;

  if (scrollY >= movieOffset) {
    header.style.height = "0";
    header.style.overflow = "hidden";
  } else {
    header.style.height = "80px";
    if (scrollY >= travelOffset) {
      headerContents.textContent = "TRAVEL";
    } else if (scrollY >= introOffset) {
      headerContents.textContent = "ABOUT ME";
    } else {
      headerContents.textContent = "HOME";
    }
  }
});
