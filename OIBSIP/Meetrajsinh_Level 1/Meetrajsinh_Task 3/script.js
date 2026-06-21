function convertTemperature() {

    let temp = document.getElementById("temperature").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result = document.getElementById("result");

    if (temp === "" || isNaN(temp)) {
        result.innerHTML = "Please enter a valid number!";
        result.style.color = "red";
        return;
    }

    temp = parseFloat(temp);
    let converted;

    // Convert input to Celsius first
    let celsius;

    if (from === "celsius") {
        celsius = temp;
    } else if (from === "fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
    } else {
        celsius = temp - 273.15;
    }

    // Convert Celsius to target unit
    if (to === "celsius") {
        converted = celsius;
        unit = "°C";
    } else if (to === "fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
        unit = "°F";
    } else {
        converted = celsius + 273.15;
        unit = "K";
    }

    result.style.color = "green";
    result.innerHTML = `${converted.toFixed(2)} ${unit}`;
}