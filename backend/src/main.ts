import { Client } from "pg";

// DATABASE_URL: postgres://username:pgpassword@db:5432/mydatabase

const user = "root",
  password = "yeet",
  dbName = "mydb";

// dburl = `mongodb://${DBUSER}:${DBPASS}@localhost:4200`,

async function main() {
  try {
    const client = new Client({
      user: "root",
      password: "yeet",
      database: "mydb",
      connectionString: `postgres://${user}:${password}@localhost:5432/${dbName}`
    });
    await client.connect();
  } catch (err) {
    console.error(err);
  }
}

main();
