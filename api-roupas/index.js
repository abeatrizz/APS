const app = require('./src/app');
const port = 3000;

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});