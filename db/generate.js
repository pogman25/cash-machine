const faker = require('faker');

module.exports = () => {
  return {
    clients: [
      {
        id: 0,
        name: 'Mr. Test Testovich',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/popey/128.jpg',
        card: '1111111111111111',
        amount: 1000.0,
        pin: '0000',
      },
      ...Array.from(Array(7)).map((_, index) => ({
        id: index + 1,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
        card: faker.finance.creditCardNumber().replace(/\D/g, ''),
        amount: faker.finance.amount(),
        pin: `000${faker.random.number(9999)}`.substr(-4),
      })),
    ],
  };
};
