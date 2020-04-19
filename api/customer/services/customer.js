"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    // Select field to populate.
    // const populate = Customer.associations
    //   .filter((ast) => ast.autoPopulate !== false)
    //   .map((ast) => ast.alias)
    //   .join(" ");
    // return Customer.find()
    //   .where(filters.where)
    //   .sort(filters.sort)
    //   .skip(filters.start)
    //   .limit(filters.limit)
    //   .populate(populate);
  },
};
