'use strict';

/**
 * Mobile.js controller
 *
 * @description: A set of functions called "actions" for managing `Mobile`.
 */

module.exports = {

  /**
   * Retrieve mobile records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.mobile.search(ctx.query);
    } else {
      return strapi.services.mobile.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a mobile record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.mobile.fetch(ctx.params);
  },

  /**
   * Count mobile records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.mobile.count(ctx.query);
  },

  /**
   * Create a/an mobile record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mobile.add(ctx.request.body);
  },

  /**
   * Update a/an mobile record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mobile.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mobile record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mobile.remove(ctx.params);
  }
};
