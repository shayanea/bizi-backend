"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findBestBuyest(ctx) {
    let entities = await strapi.services.customer.fetchAll();
    console.log(entities);
  },
};
