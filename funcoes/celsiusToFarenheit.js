


function celsius_fahrenheit(temperatura_celsius) {
    temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;
    return temperatura_fahrenheit;

}

let temperatura_celsius = 12;
temperatura_fahrenheit = celsius_fahrenheit(temperatura_celsius);

console.log(temperatura_celsius + "°C equivalem a " + temperatura_fahrenheit + "°F");