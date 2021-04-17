'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Testador',
        email: 'test@marvel.com.br',
        password: '$2b$05$3Wey6FQoAdi26Cy9Pr9.zeQVywcPMPypCGlBohb0198cPJRtSIt8i',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
