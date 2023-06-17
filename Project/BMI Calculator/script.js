const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");
  results.style.color = "black";

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Not a valid height:${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Not a valid weight:${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi <= 24.9 && bmi >= 18.6) {
      results.innerHTML = `<p> Your BMI is ${bmi} and You're perfectlly Healthy</p>`;
    } else if (bmi < 18.6) {
      results.innerHTML = `<p>Your Bmi is ${bmi} and you're Underweight</p>`;
    } else {
      results.innerHTML = `<p>Your Bmi is ${bmi} and you're Overweight</p>`;
    }
  }
});
