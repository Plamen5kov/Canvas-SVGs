window.onload = function () {
    // Write a script that selects all the div nodes that are directly inside other div elements
    var allDivs = document.getElementsByTagName('div'),
        separator = '----------------------------------';
    console.log('USING LIVE NODELISTS');
    for (var i = 0, len = allDivs.length; i < len; i++) {
        var currentElement = allDivs[i];

        if (currentElement.parentElement.nodeName == 'DIV') {
            console.log(currentElement.outerHTML);
        }
        console.log(separator);
    }

    console.log('USING QUERY SELECTOR');
    var divs = document.querySelectorAll('div > div');

    for (var i = 0, len = divs.length; i < len; i++) {
        console.log(divs[i].outerHTML);
        console.log(separator);
    }
}