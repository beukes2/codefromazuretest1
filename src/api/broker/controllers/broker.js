'use strict';

/**
 * broker controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::broker.broker');
