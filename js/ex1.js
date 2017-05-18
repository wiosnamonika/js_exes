document.addEventListener("DOMContentLoaded", function () {
    var boxes = document.querySelectorAll('.box');

    function Color() {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
    }
    boxes.forEach(function (elem) {
        elem.addEventListener('click', Color);


    })


});
