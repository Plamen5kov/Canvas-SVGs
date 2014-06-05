window.onload = function () {
    // Create a function that gets the value of <input type="text"> ands prints its value to the console

    var color = document.getElementById('colorBox').value;
    document.body.style.backgroundColor = color;
}