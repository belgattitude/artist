'use strict';

/**
 * rehearsal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rehearsal.rehearsal');
