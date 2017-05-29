
document.addEventListener('DOMContentLoaded', function () {

    //console.log('dziala!');
    var button1 = document.getElementById('nextPicture');
    var button2 = document.getElementById('prevPicture');
    var allLi = document.querySelectorAll('.slider li');
    var numbers = 0;
    //var images = document.querySelectorAll('images');
    //    var arr = [];
    //    Array.from(alliLi).forEach(function, (elems) {
    //        arr.push(elems.dataset);
    //
    //    })
    //    return arr; nową tablice robimy tylko wtedy gdy chcemy wyciagnac jakis element z li, np.src.

    console.log(numbers, allLi, button2, button1);



    var table = allLi[0].classList.add('visible');
    console.log(table);


    button1.addEventListener('click', function (event) {
        event.preventDefault();
        allLi[numbers].classList.remove('visible');

        numbers++
        console.log('zwiększamy '+numbers);
        if (numbers >= allLi.length) {
            numbers=allLi.length-1;
            console.log('Zmniejszamy bo poza '+numbers);
        }

        allLi[numbers].classList.add('visible');

        //        numbers++
        //                console.log(button1 + 'dziala');
        //        console.log(button2 + 'dziala');

    })


    button2.addEventListener('click', function (event) {
        event.preventDefault();
        allLi[numbers].classList.remove('visible');
        numbers--;
        if (numbers < 0) {
            numbers = 0;
        }
        allLi[numbers].classList.add('visible');

    })

}) //koniec funkcji
