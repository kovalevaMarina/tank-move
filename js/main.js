var intervals = [];

var moveStep = 5;
var frequency = 10;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var tank = document.querySelector(".tank");
var fire = document.querySelector(".fire");
var bullet = document.querySelector(".bullet");
fire.hidden = true;
bullet.hidden = true;

document.addEventListener("keydown", function (e) {
  var widthTank = tank.getBoundingClientRect().width;
  var heightTank = tank.getBoundingClientRect().height;
  var leftTank = tank.getBoundingClientRect().left;
  var topTank = tank.getBoundingClientRect().top;
  var widthBullet = bullet.getBoundingClientRect().width;

  if (e.code === "KeyD") {
    tank.style.left =
      leftTank > winWidth - widthTank - moveStep
        ? winWidth - widthTank + "px"
        : leftTank + moveStep + "px";
    tank.style.transform = "rotate(180deg)";
  } else if (e.code === "KeyA") {
    tank.style.left = leftTank < 0 ? 0 + "px" : leftTank - moveStep + "px";
    tank.style.transform = "rotate(0deg)";
  } else if (e.code === "KeyW") {
    tank.style.transform = "rotate(90deg)";
    tank.style.top =
      topTank <= 0 ? 105 + "px" : topTank + 105 - moveStep + "px";
  } else if (e.code === "KeyS") {
    tank.style.transform = "rotate(270deg)";
    tank.style.top =
      topTank >= winHeight - widthTank - moveStep - 105
        ? winHeight - widthTank + "px"
        : topTank + 105 + moveStep + "px";
  } else if (e.code === "Space") {
    fire.hidden = false;
    bullet.hidden = false;
    intervals.forEach(clearInterval);
    if (tank.style.transform === "rotate(180deg)") {
      fire.style.transform = "rotate(90deg)";
      fire.style.left = widthTank + leftTank + "px";
      fire.style.top = topTank + 45 + "px";
      bullet.style.transform = "rotate(0deg)";
      bullet.style.left = widthTank + leftTank + "px";
      bullet.style.top = topTank + 62 + "px";
      var id = setInterval(function () {
        bullet.style.left = parseInt(bullet.style.left) + moveStep + "px";
        resetBullet(id);
      }, frequency);
      intervals.push(id);
    } else if (tank.style.transform === "rotate(0deg)") {
      fire.style.transform = "rotate(270deg)";
      fire.style.left = leftTank - 43 + "px";
      fire.style.top = topTank + 43 + "px";
      bullet.style.transform = "rotate(180deg)";
      bullet.style.left = leftTank - widthBullet + "px";
      bullet.style.top = topTank + 60 + "px";
      var id = setInterval(function () {
        bullet.style.left = parseInt(bullet.style.left) - moveStep + "px";
        resetBullet(id);
      }, frequency);
      intervals.push(id);
    } else if (tank.style.transform === "rotate(270deg)") {
      fire.style.transform = "rotate(180deg)";
      fire.style.left = leftTank + 48 + "px";
      fire.style.top = topTank + heightTank + "px";
      bullet.style.transform = "rotate(90deg)";
      bullet.style.left = leftTank + 51 + "px";
      bullet.style.top = topTank + heightTank + "px";
      var id = setInterval(function () {
        bullet.style.top = parseInt(bullet.style.top) + moveStep + "px";
        resetBullet(id);
      }, frequency);
      intervals.push(id);
    } else if (tank.style.transform === "rotate(90deg)") {
      fire.style.transform = "rotate(0deg)";
      fire.style.left = leftTank + 51 + "px";
      fire.style.top = topTank - 50 + "px";
      bullet.style.transform = "rotate(270deg)";
      bullet.style.left = leftTank + 53 + "px";
      bullet.style.top = topTank + "px";
      bullet.style.top = topTank - 50 + "px";
      var id = setInterval(function () {
        bullet.style.top = parseInt(bullet.style.top) - moveStep + "px";
        resetBullet(id);
      }, frequency);
      intervals.push(id);
    }
  }
  setTimeout(hideFire, 100);
});

function hideFire() {
  fire.hidden = true;
}

function resetBullet(id) {
  if (parseInt(bullet.style.left) > 2000 || parseInt(bullet.style.top) > 2000) {
    bullet.hidden = true;
    clearInterval(id);
  }
}
