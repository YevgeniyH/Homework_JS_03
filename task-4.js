function countTotalSalary(employees) {
    const values = Object.values(employees);
    let totalSalary = 0;
    for (const value of values) {
        totalSalary += value;
    }
    return totalSalary;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);