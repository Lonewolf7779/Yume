import { app } from './app.js';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`PinPin auth server listening on port ${PORT}`);
});
