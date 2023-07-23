import { connect } from "mongoose";
import app from "./app";
import config from "./config/index";

async function main() {
  try {
    await connect(config.database_url as string);

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
