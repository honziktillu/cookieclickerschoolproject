const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerCookieIncreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrice = 50;

cookie.onclick = () => {
  numberOfCookies += cookieIncreaseNumber;
  //counter.innerHTML = "Cookies: " + numberOfCookies;
  counter.innerHTML = `Cookies: ${numberOfCookies}`;
};

clickUpgrade.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odecist cenu nakupu
    //numberOfCookies = numberOfCookies - 50;
    numberOfCookies -= clickUpgradePrice;
    clickUpgradePrice *= 2;
    clickUpgrade.innerHTML = `Buy click upgrade: ${clickUpgradePrice}`;
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
    //zvednout klikani o 1
    cookieIncreaseNumber++;
  }
};

autoclickerUpgrade.onclick = () => {
  if (numberOfCookies >= 100) {
    //odectem cenu
    numberOfCookies -= 100;
    //zobrazime pocet susenek
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
    autoclickerCookieIncreaseNumber++;
    //zastavime bezici interval
    clearInterval(autoclickerInterval);
    //spustime autoclicker - spustime interval
    autoclickerInterval = setInterval(() => {
      numberOfCookies += autoclickerCookieIncreaseNumber;
      counter.innerHTML = `Cookies: ${numberOfCookies}`;
    }, 1000);
  }
};
