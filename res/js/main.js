const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;

cookie.onclick = () => {
    numberOfCookies += cookieIncreaseNumber;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
}

clickUpgrade.onclick = () => {
    if (numberOfCookies >= 50) {
        //odecist cenu nakupu
        //numberOfCookies = numberOfCookies - 50;
        numberOfCookies -= 50;
        counter.innerHTML = `Cookies: ${numberOfCookies}`;
        //zvednout klikani o 1
        cookieIncreaseNumber++;
    }
}