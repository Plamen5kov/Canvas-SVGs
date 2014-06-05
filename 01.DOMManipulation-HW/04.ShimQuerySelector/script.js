if (!document.querySelector || !document.querySelectorAll) {

    document.querySelectorAll = function (selector) {

        switch (selector.charAt(0)) {
            case '#': return document.getElementById(selector.substr(1));
            case '.': return document.getElementsByClassName(selector.substr(1));
            default: return document.getElementsByTagName(selector);
        }
    }

    document.querySelector = function (selector) {
        return document.getElementById(selector.substr(1));
    }
}