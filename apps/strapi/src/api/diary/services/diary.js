'use strict';

/**
 * diary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::diary.diary');
