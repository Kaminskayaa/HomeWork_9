function Laptop(name, model, serialNumber, year, weight, sizeO, sizeP,) {
    this.name = name;
    this.model = model;
    this.serialNumber = serialNumber;
    this.year = year;
    this.weight = weight;
    this.sizeO = sizeO;
    this.sizeP = sizeP;
}

Laptop.prototype.getSize = function () {
    if (this.sizeP === 'unknown') {
        return 'Рамер ОЗУ: ' + this.sizeO;
    } else {
        return 'Рамер ОЗУ: ' + this.sizeO + ', Размер ПЗУ: ' + this.sizeP;
    }
}

Laptop.prototype.getNameModel = function () {
    return 'Название: ' + this.name + ', Модель: ' + this.model;
}

function Ultrabook(name, model, serialNumber, year, weight, sizeO, sizeP) {
    Laptop.call(this, name, model, serialNumber, year, weight, sizeO, sizeP);
}

Ultrabook.prototype = Object.create(Laptop.prototype);

Ultrabook.prototype.getNameWeightYear = function () {
    return 'Название: ' + this.name + ', Вес: ' + this.weight + ', Год изготовления: ' + this.year;
}

let laptop = new Laptop('HP', 'Pavilion 15', '5CD9255RCD', 2020, '2.02кг', '8GB', 'unknown');
let ultrabook = new Ultrabook('Lenovo', 'IdeaPad 5', '9GT5718VKD', 2021, '1.39кг', '8GB', 'unknown');

console.log(laptop.getNameModel());
console.log(laptop.getSize());

console.log(ultrabook.getNameModel());
console.log(ultrabook.getSize());
console.log(ultrabook.getNameWeightYear());