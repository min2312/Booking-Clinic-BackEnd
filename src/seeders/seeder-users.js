'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          email: 'admin@gmail.com',
          password: '123456',
          firstName: 'Quang',
          lastName: 'Minh',
          Address: 'Dn',
          Gender: 1,
          typeRole:'ROLE',
          keyRole: 'R1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    },
  };