import { Pool, type QueryResultRow } from "pg";

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.on("error", (error) => {
  console.error("Erro na conexão com o PostgreSQL:", error);
});

export interface Database {
  query<T extends QueryResultRow>(sql: string, values?: unknown[]): Promise<{ rows: T[] }>;
}
