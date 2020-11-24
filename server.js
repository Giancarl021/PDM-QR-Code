const buildEnvironment = require('./src/services/environment');
const app = require('./src/app');

buildEnvironment();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));