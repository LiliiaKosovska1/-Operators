const cars = [];
cars.push('BMW');
cars[cars.length] = 'Audi';
cars.push({
    company: 'VW',
    year: 1920,
});

console.log(cars[2].year);

cars.push('Volvo', 12, 13);

console.log(cars);