import app from './app.js';
import dotenv from 'dotenv';
import { databaseConnect } from './configs/db.config.js';

dotenv.config();

databaseConnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `⚙️   Server Is Booting...\n💻  Server Running On Port : ${process.env.PORT}\n\n➜  Local:  http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(`❌   Server Booting Failed\nMessage:${error.message}`);
  });
