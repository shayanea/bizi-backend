"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async fetchAll() {
    const result = strapi.query("transactions").model.find({
      date: { $gte: "2020-04-01T00.00.00Z" },
    });
    console.log(result.toObject());
    const fields = result.toObject();
    return fields;
  },
};
