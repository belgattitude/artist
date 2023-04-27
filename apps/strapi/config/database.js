const path = require('path');

module.exports = ({ env }) => {
  let dbFile = env('DATABASE_FILENAME');
  if (!dbFile.startsWith('/')) {
    dbFile = path.join(__dirname, '..', dbFile);
  }
  console.log(`Using database ${dbFile}`);
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: dbFile,
        timezone: 'utc',
      },
      useNullAsDefault: true,
    },
  };
};
