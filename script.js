window.onload = function () {
  var ghost = document.querySelector("#ghost");
  document.querySelector("audio").play();
  var backup1 = document.querySelector("#ghost-backup1");
  var backup2 = document.querySelector("#ghost-backup2");
  var backup3 = document.querySelector("#ghost-backup3");
  var backup4 = document.querySelector("#ghost-backup4");
  var backup5 = document.querySelector("#ghost-backup5");
  var backup6 = document.querySelector("#ghost-backup6");
  var backup7 = document.querySelector("#ghost-backup7");
  var backup8 = document.querySelector("#ghost-backup8");
  var backup9 = document.querySelector("#ghost-backup9");
  var backup10 = document.querySelector("#ghost-backup10");
  var container = document.querySelector(".container");
  var heading = document.querySelector(".heading");
  var ghostbody = document.querySelector("#body");
  var ghosteyeL = document.querySelector("#eyeL");
  var ghosteyeR = document.querySelector("#eyeR");
  var boo = document.querySelector(".boo");

  ghost.onclick = function () {
    container.classList.toggle("dark");
    ghostbody.classList.toggle("night");
    ghosteyeL.classList.toggle("night");
    ghosteyeR.classList.toggle("night");
    heading.classList.toggle("dark-heading");
    boo.classList.toggle("boop");
    backup1.classList.toggle("night");
    backup2.classList.toggle("night");
    backup3.classList.toggle("night");
    backup4.classList.toggle("night");
    backup5.classList.toggle("night");
    backup6.classList.toggle("night");
    backup7.classList.toggle("night");
    backup8.classList.toggle("night");
    backup9.classList.toggle("night");
    backup10.classList.toggle("night");

    setTimeout(function () {
      container.classList.toggle("dark");
      ghostbody.classList.toggle("night");
      ghosteyeL.classList.toggle("night");
      ghosteyeR.classList.toggle("night");
      heading.classList.toggle("dark-heading");
      boo.classList.toggle("boop");
      backup1.classList.toggle("night");
      backup2.classList.toggle("night");
      backup3.classList.toggle("night");
      backup4.classList.toggle("night");
      backup5.classList.toggle("night");
      backup6.classList.toggle("night");
      backup7.classList.toggle("night");
      backup8.classList.toggle("night");
      backup9.classList.toggle("night");
      backup10.classList.toggle("night");
    }, 2000);
  };

  container.addEventListener("animationend", changePosition, true);

  function changePosition(event) {
    let circle = event.target;

    var x = window.matchMedia("(max-width: 480px)");

    circle.style.animationName = "none";

    requestAnimationFrame(() => {
      circle.style.animationName = "";
    });

    let circleStyle = getComputedStyle(circle);
    let finalX = circleStyle.getPropertyValue("--xB");
    let finalY = circleStyle.getPropertyValue("--yB");

    circle.style.setProperty("--xA", finalX);
    circle.style.setProperty("--yA", finalY);
    if (x.matches) {
      circle.style.setProperty("--xB", getRandomNumber(0, 100) + "px");
      circle.style.setProperty("--yB", getRandomNumber(0, 300) + "px");
    } else {
      circle.style.setProperty("--xB", getRandomNumber(100, 1440) + "px");
      circle.style.setProperty("--yB", getRandomNumber(100, 500) + "px");
    }
  }

  function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
  }
};
