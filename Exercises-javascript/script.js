// 66. Write a Javascript program to display the city name if the strings begins with "Los" or "New" otherwise return blank

function displayCity(cityName) {
    if(cityName.startsWith('Los') || cityName.startsWith('New')) return cityName;
    return '';
}

console.log(displayCity('New-York'));