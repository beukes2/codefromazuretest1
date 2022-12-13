'use strict';

/**
 * broker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::broker.broker');
