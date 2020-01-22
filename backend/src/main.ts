import { Client } from "pg";

// DATABASE_URL: postgres://username:pgpassword@db:5432/mydatabase

const user = "root",
  password = "yeet",
  dbName = "mydb";

// dburl = `mongodb://${DBUSER}:${DBPASS}@localhost:4200`,

const queries = {
  dropIf: "DROP TABLE IF EXISTS account"
};
async function main() {
  try {
    const client = new Client({
      connectionString: `postgres://${user}:${password}@localhost:5432/${dbName}`
    });
    await client.connect();
    await client.query(queries.dropIf);
    await client.query(`
    CREATE TABLE account(
       user_id serial PRIMARY KEY,
       username varchar(50) UNIQUE NOT NULL,
       password varchar(50) NOT NULL,
       email varchar(355) UNIQUE NOT NULL,
       phonenumber int
    );`);

    const res = await client.query(`
    INSERT INTO account (username, password, email)
        VALUES ('marc', 'test2', 'envdia@gmail.com');
    `);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

main();
