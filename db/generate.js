const faker = require('faker');

module.exports = function () {
  return {
    clients: Array.from(Array(7)).map((_, index) => ({
      id: index,
      name: faker.name.findName(),
      avatar: faker.internet.avatar(),
      card: faker.finance.creditCardNumber().replace(/\D/g, ""),
      amount: faker.finance.amount(),
      pin: ('000' + faker.random.number(9999)).substr(-4),
    })),
  };
};
