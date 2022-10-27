window.onload = function () {
  var ghost = document.querySelector("#ghost");
  var container = document.querySelector(".container");
  var heading = document.querySelector(".heading");
  var ghostbody = document.querySelector("#body");
  var ghosteyeL = document.querySelector("#eyeL");
  var ghosteyeR = document.querySelector("#eyeR");

  var audio = new Audio("Dancing_Skeletons.mp3");
  audio.play();

  ghost.onclick = function () {
    container.classList.toggle("dark");
    ghostbody.classList.toggle("night");
    ghosteyeL.classList.toggle("night");
    ghosteyeR.classList.toggle("night");
    heading.classList.toggle("dark-heading");

    setTimeout(function () {
      container.classList.toggle("dark");
      ghostbody.classList.toggle("night");
      ghosteyeL.classList.toggle("night");
      ghosteyeR.classList.toggle("night");
      heading.classList.toggle("dark-heading");
    }, 2000);
  };

  container.addEventListener("animationend", changePosition, true);

  function changePosition(event) {
    let circle = event.target;

    circle.style.animationName = "none";

    requestAnimationFrame(() => {
      circle.style.animationName = "";
    });

    let circleStyle = getComputedStyle(circle);
    let finalX = circleStyle.getPropertyValue("--xB");
    let finalY = circleStyle.getPropertyValue("--yB");

    circle.style.setProperty("--xA", finalX);
    circle.style.setProperty("--yA", finalY);

    circle.style.setProperty("--xB", getRandomNumber(0, 1000) + "px");
    circle.style.setProperty("--yB", getRandomNumber(100, 600) + "px");

    console.log(circle);
  }

  function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
  }
};
