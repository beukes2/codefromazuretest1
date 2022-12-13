'use strict';

/**
 * broker-review service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::broker-review.broker-review');
