import { createApp } from "./app";
import { pool } from "./database/connection";

const app = createApp(pool);
const port = Number(process.env.SERVER_PORT);

app.listen(port, () => {
  console.log(`API escutando na porta ${port}`);
});
