const { join } = require('path');

module.exports = ({ env }) => ({
  upload: {
    config: {
      sizeLimit: 500 * 1024 * 1024, // 512mb in bytes
      /*
      // https://docs.strapi.io/developer-docs/latest/plugins/upload.html#configuration
      breakpoints: {
        // As we rely on transformation from external services (ie vercel/image)
        // no need to create multiple sizes that will have to be backup'd.
        // Warning when changing this, older images won't have thumbnails.
        // xlarge: 1920,
        // large: 1000,
        // medium: 750,
        // small: 500,
        xsmall: 64,
      },*/
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      generateArtifacts: true,
      artifacts: {
        schema: join(__dirname, '..', 'public/generated/schema.graphql'),
        // typegen: join(__dirname, '..', 'types.d.ts'),
      },
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
