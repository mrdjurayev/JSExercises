function calculateCelsius() {
    const input = parseFloat(document.getElementById('celsius').value);
    const f = document.getElementById('result-celsius');
    f.textContent = input * 9 / 5 + 32;
}

function calculateFarenheit() {
    const input = parseFloat(document.getElementById('farenheit').value);
    const c = document.getElementById('result-farenheit');
    c.textContent = (input - 32) / 9 * 5;
}

document.getElementById('convert-celsius').addEventListener('click', calculateCelsius);
document.getElementById('convert-farenheit').addEventListener('click', calculateFarenheit);