let car = {
    brand: 'BMW',
    model: 'R6',
    year: 2024
};

function carInfo(carObject) {
    return `The ${carObject.brand} ${carObject.model} was manufactured in ${carObject.year}.`;
}

console.log(carInfo(car));
