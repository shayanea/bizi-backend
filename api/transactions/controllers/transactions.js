"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async mostPayed(ctx) {
    let entities = await strapi.services.transactions.fetchAll();
    console.log(entities);
  },
  async mostRecieved(ctx) {
    let entities = await strapi.services.transactions.fetchAll();
    console.log(entities);
  },
};
