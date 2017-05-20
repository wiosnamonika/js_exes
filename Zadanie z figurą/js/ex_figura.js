var Rectangle = function (height, width) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
}
Rectangle.prototype.getPermiter = function () {
    return (2 * this.width) + (2 * this.height);
}


var rectangle = new Rectangle(6, 10);
//do tego momentu dodaliśmy metody getArea, getPerimiter.
//Teraz musimy  stworzyc 3 instancje

var Rect1 = Object.create(rectangle);
var Rect2 = Object.create(rectangle);
var Rect3 = Object.create(rectangle);
// Rect1.getType();

Rect1.hasOwnProperty("getArea");
Rect1.hasOwnProperty("getPermiter");
Rect2.hasOwnProperty("getArea");
Rect2.hasOwnProperty("getPermiter");
Rect3.hasOwnProperty("getArea");
Rect3.hasOwnProperty("getPermiter");

//false dla wszystkich stworzonych obiektow

console.log(Rect1.getArea());
console.log(Rect1.getPermiter());
console.log(Rect2.getArea());
console.log(Rect2.getPermiter());
console.log(Rect3.getArea());
console.log(Rect3.getPermiter());

