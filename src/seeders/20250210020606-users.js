'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        username: "andika",
        name: "Andika Sulistyawan",
        password: '$2a$12$f3kFhjqFa50H2Z.NCmqi3e7oUlEhukp8R675LOo4pdAHMhzNNnQyC',
        email: "andika@gmail.com",
        phone: "081234567890",
      },
      {
        username: "anggraena",
        name: "Anggraena Wijaya",
        password: '$2a$12$S8mHnAYIfx7FT50tBCs0guekXIu2pqmSD4JdJTQ84A9mXgSoUx./K',
        email: "anggraena@gmail.com",
        phone: "089876543210",
      },
      {
        username: "zenith",
        name: "Zenith",
        password: '$2a$12$URlCXXJr2DyJCUN.MSQJ1.XVAWGfeIieg6Y6.Fo6uRFm5c2kIjSuC',
        email: "zenith@gmail.com",
        phone: null,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
