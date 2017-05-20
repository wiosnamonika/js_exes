var Car = function (marka, kolor) { //na starcie miala byc wartosc 0,dlatego nie musimy przekazywac numbersOFkilometers do argumentow

    this.brand = marka;
    this.color = kolor;
    this.numberOfKilometers = 0; //mozemy ustawic wartosc na sztywno
    this.printCarinfo = function () { //ta metoda jest wbudowana w tym obiekcie,nalezy ja wpisac przez prototyp, definiujemy metody poza, bo jesli będą wewnatrz to beda kopiowane w każdym obiekcie
        console.log(this.color);
        console.log(this.brand);
        console.log(this.numberOfKilometers);
    } //zamykamy bo robimy nowa funkcje
    this.drive = function (km) {
        this.numberOfKilometers += km; //dopisuje do poprzedniego stanu
        console.log(this.numberOfKilometers);
    }
}

var fiat = new Car("Mercedes", "Czarny"); //odwolujemy sie do zmiennej fiat, bo nie mozemy odwolac sie do kontruktora za pomoca metod)
fiat.printCarinfo();
fiat.drive(500);

fiat.drive(170); //dodatkowe kilometry
console.log(fiat);


//stworzenie metody historia, mamy ją ddac do istniejacego obiektu
Car.prototype.addHistory = function (date) { //przypisujemy do tablicy z historia,nasz konstruktor tego nie ma,mozemy dodac taka tablice dynamicznie
    if (!this.history) {
        this.history = [];
    }
    this.history.push(date);
}
Car.prototype.printHistory = function () {
    if (this.history) {
        this.history.forEach(function (date) { //przechodzimy przez kazdy elementy, pierwsyz to jest  parametr, drugi to index
            console.log(date);

        });
    } else {
        console.log("Brak przegladow");
    }
}


console.log(fiat.przebieg);
fiat.przebieg = ["2017", "2016", "2015", "2014", "2013", "2012"];
