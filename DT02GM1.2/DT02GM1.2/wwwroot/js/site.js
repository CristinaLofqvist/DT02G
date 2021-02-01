// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

test = function () {
    alert("here")
}
/*
function celsiusToF() {
    var celsius = document.getElementById("temperatureCelToFar").value;
    var celciustemp = celcius;
    var celciusToFahr = celciustemp *  9 / 5 + 32 ;
    var print = celciustemp  + '\xB0C är ' + celciusToFahr + ' \xB0F.';
    alert(print);
}



function fahrenToC() {
    var fahrenhit = document.getElementById("temperatureFormFarToCel").value;
    var fahrenheitTemp = fahrenheit;
    var fahrenToCels = (fahrenheitTemp - 32) *  5 / 9;
    var print = fahrenheitTemp + '\xB0F is ' + fahrenToCels + '\xB0C.';
        alert(print)
}
*/

function celsiusToF(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("celc").value * 9 / 5 + 32;
        document.getElementById("fahr").value = Math.round(x);
    } else {
        x = documet.getElementById("fahr").value - 32 * 5 / 9;
        document.getElementById("celc").value = Math.round(x);

    }
}
