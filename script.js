const adviceID = document.getElementById("advice-id");
const advice = document.getElementById("advice");
const dice = document.getElementById("dice");

console.log("window opened!");

dice.addEventListener("click", () => {
    fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(data => {
        adviceID.textContent = "Advice #" + data.slip.id;
        advice.textContent = `"${data.slip.advice}"`;
    });
})



