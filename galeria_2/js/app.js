
document.addEventListener('DOMContentLoaded', function () {


//console.log('dziala!');

var allLi = document.querySelectorAll('li');
    console.log(allLi);
var body_tag = document.querySelector('body');
console.log(allLi, body_tag);
var images = document.querySelectorAll('img');
//console.log(images);



for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener('click', function (e) {
        e.preventDefault();
        //var src = this.allLi[i].src;
        console.log(this);
        var new_url = this.querySelector('img[src]').getAttribute('src');
        console.log(new_url);

        var new_div = document.createElement('div');
        var new_img = document.createElement('img');
        var button = document.createElement('button');

        new_img.setAttribute('src', new_url); //ustaw link na to nasze
        //pobrane src
        button.classList.add('close');
        button.innerText = 'close';
        new_div.classList.add('fullScreen');
        new_div.appendChild(button);
        new_div.appendChild(new_img);

        body_tag.appendChild(new_div);

        var closeBtn = document.querySelectorAll('.close');
      closeBtn.forEach((el) => {
        el.addEventListener('click', function(){
          console.log(el.parentNode.parentNode.removeChild(new_div));
        })
      })
      //wchodzi sie wyzej niz jest ten element , nie na poziom element
    })

}


})  //koniec funkcji


