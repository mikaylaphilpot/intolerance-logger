// allows logger to popup when "Log" is pressed
function showLogger() {
    const mealSelect = document.getElementById("mealSelect");
    const selectedMeal = mealSelect.value;
    let food = prompt("Log Food: ");
    console.log(selectedMeal);
    logFood(food, selectedMeal);
}
// logs given food in designated meal
function logFood(food, selectedMeal) {
    var mealDiv;
    if (selectedMeal == "breakfast-select") {
        mealDiv = document.getElementById("breakfast-meal");
    }
    else if (selectedMeal == "lunch-select") {
        mealDiv = document.getElementById("lunch-meal");
    }
    else {
        mealDiv = document.getElementById("dinner-meal");
    }
    const newFood = document.createElement('p');
    newFood.textContent = food;
    mealDiv.appendChild(newFood);

}