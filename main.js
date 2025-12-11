/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]');

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener("click", jumpHandler);

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle("jump");
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener("animationend", jumpHandler);

// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...
const scaleLink = document.querySelector('a[href="#frontend"]');

// Stap 2: addEventListener
// scaleLink.addEventListener...
scaleLink.addEventListener("click", scaleHandler);

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...
function scaleHandler() {
  scaleLink.classList.toggle("frontend-scale");
}

// Translate animation on the & link
const andTranslate = document.querySelector('a[href="#and"]');
andTranslate.addEventListener("click", translateHandler);

function translateHandler() {
  andTranslate.classList.toggle("and-transform");
}

andTranslate.addEventListener("animationend", translateHandler);

//Shake animation on the Development link
const shake = document.querySelector('a[href="#development"]');
shake.addEventListener("dblclick", shakeHandler);

function shakeHandler() {
  shake.classList.toggle("shake");
}

shake.addEventListener("animationend", shakeHandler);

//Linear gradient on the Sprint 5 link
const gradient = document.querySelector('a[href="#sprint-5"]');
gradient.addEventListener("focus", gradientHandler);

function gradientHandler() {
  gradient.classList.toggle("gradient");
}

gradient.addEventListener("focusout", gradientHandler);

//textContent op de Fix link
const fix = document.querySelector('a[href="#fix"]');
fix.addEventListener("mouseover", function () {
  fix.textContent = "Gefixt!";
});
fix.addEventListener("mouseout", function () {
  fix.textContent = "Fix";
});

//Rotate on the The link
const rotate = document.querySelector('a[href="#the"]');
rotate.addEventListener("mouseout", function () {
  rotate.classList.toggle("rotate");
});

//Flip the Flow link
const frontFlip = document.querySelector('a[href="#flow"]');
frontFlip.addEventListener("mousedown", frontFlipHandler);

function frontFlipHandler() {
  frontFlip.classList.remove("backflip");
  frontFlip.classList.add("frontflip");
}

const backFlip = document.querySelector('a[href="#flow"]');
backFlip.addEventListener("mouseup", backFlipHandler);

function backFlipHandler() {
  backFlip.classList.remove("frontflip");
  backFlip.classList.add("backflip");
}

//Change color with keyboard on the User link
const user = document.querySelector('a[href="#user"]');
document.addEventListener("keyup", function (event) {
  if (event.key === "r") {
    user.className = "";
    user.classList.add("red");
  } else if (event.key === "o") {
    user.className = "";
    user.classList.add("orange");
  } else if (event.key === "y") {
    user.className = "";
    user.classList.add("yellow");
  } else if (event.key === "g") {
    user.className = "";
    user.classList.add("green");
  } else if (event.key === "b") {
    user.className = "";
    user.classList.add("blue");
  } else if (event.key === "p") {
    user.className = "";
    user.classList.add("purple");
  } else if (event.key === "v") {
    user.className = "";
    user.classList.add("violet");
  }
});

//Scaling with keyboard on the Interface link
const interface = document.querySelector('a[href="#interface"]');
document.addEventListener("keydown", function (event) {
  if (event.key === "x") {
    interface.classList.add("interface-scale");
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "x") {
    interface.classList.remove("interface-scale");
  }
});

//Scaling with keyboard on the Interface link Dylan
// document.addEventListener("keyup", function (event) {
//   if (event.key === "x") {
//     let curScale = getComputedStyle(interface).getPropertyValue("scale");
//     let animationTime = (curScale / 10) * 5;
//     document.documentElement.style.setProperty(
//       "--aniTime",
//       animationTime + "s"
//     );
//     document.documentElement.style.setProperty("--aniScale", curScale);
//     interface.classList.add("interface-down");
//     interface.classList.remove("interface-scale");

//     interface.addEventListener("animationend", () => {
//       interface.classList.remove("interface-down");
//     });
//   }
// });

//Scaling with mouse scroll on the Events link
const events = document.querySelector('a[href="#events"]');

let fontSize = 32;

events.addEventListener("wheel", function (wheelEvent) {
  if (wheelEvent.deltaY < 0) {
    fontSize = fontSize + 1;
  } else {
    fontSize = fontSize - 1;
  }
  events.style.fontSize = fontSize + "px";
});

//Gradient following mouse on the Interaction link
const interaction = document.querySelector('a[href="#interaction"]');

interaction.addEventListener("mousemove", function (event) {
  interaction.classList.add("hover");
  let x = event.offsetX;
  let y = event.offsetY;
  interaction.style.setProperty("--x", x + "px");
  interaction.style.setProperty("--y", y + "px");
});

interaction.addEventListener("mouseout", function () {
  interaction.classList.remove("hover");
});
