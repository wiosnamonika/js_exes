/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {

        var divik = document.querySelector('div');
        var spanGx = document.getElementById('globalX');
        var spanGy = document.getElementById('globalY');
        var spanLx = document.getElementById('localX');
        var spanLy = document.getElementById('localY');

        function click(div) {
            div.addEventListener('mousemove', function (elem) {
                var x = event.clientX;
                var y = event.clientY;
                var globalX = event.pageX;
                var localX = event.offsetY;
                var globalY = event.pageY;
                var localY = event.offsetX;
                var position = ("x pos" + x + " Y pos" + y);
                document.querySelector(':hover');
                console.log(position);


                spanGx.innerText = globalX;
                spanGy.innerText = globalY;
                spanLx.innerText = localX;
                spanLy.innerText = localY;
                


                    //elem.addEventListener('click', position);
                    //this.querySelectorAll('span');
                    // span.addEventListener('click', function (event) {


            });

        }

    click(divik);
});

//event.screenX.screenY
