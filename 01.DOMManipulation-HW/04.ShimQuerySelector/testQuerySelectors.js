var allDivs = document.querySelectorAll("div");

for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].style.backgroundColor = 'black';
    allDivs[i].style.color = 'gray';
}

var firstDiv = document.querySelector("#first");
firstDiv.style.color = 'red';