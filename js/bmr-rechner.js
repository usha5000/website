document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultElement = document.getElementById("result");
    const resultsContainer = document.getElementById("results-container");
    const harrisBenedictResult = document.getElementById("harris-benedict-result");
    const mifflinStJeorResult = document.getElementById("mifflin-st-jeor-result");

    calculateButton.addEventListener("click", function () {
        const gender = document.getElementById("gender").value;
        const age = parseFloat(document.getElementById("age").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);

        let harrisBenedictBMR = 0;
        if (gender === "male") {
            harrisBenedictBMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === "female") {
            harrisBenedictBMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        let mifflinStJeorBMR = 0;
        if (gender === "male") {
            mifflinStJeorBMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else if (gender === "female") {
            mifflinStJeorBMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        harrisBenedictResult.textContent = `Harris-Benedict: ${harrisBenedictBMR.toFixed(2)} Kalorien pro Tag`;
        mifflinStJeorResult.textContent = `Mifflin-St Jeor: ${mifflinStJeorBMR.toFixed(2)} Kalorien pro Tag`;

        resultsContainer.classList.remove("hidden");
    });
});
