function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result = document.getElementById("result");

    if (fromUnit === toUnit) {
        result.innerHTML = "Please select different units.";
        return;
    }

    var convertedTemp;
    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemp = (inputTemp * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            convertedTemp = parseFloat(inputTemp) + 273.15;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemp = (inputTemp - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            convertedTemp = (parseFloat(inputTemp) - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemp = parseFloat(inputTemp) - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedTemp = (parseFloat(inputTemp) - 273.15) * 9/5 + 32;
        }
    }

    result.innerHTML = inputTemp + " " + fromUnit + " is equal to " + convertedTemp.toFixed(2) + " " + toUnit;
}
