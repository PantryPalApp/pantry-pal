import { Pool } from require('pg');
import dotenv from 'dotenv';

dotenv.config();
const PG_URI = 'postgres://wfxgrjql:0VteUAcLBK6T1fshNYwPvtLf4_6i7Dj6@kashin.db.elephantsql.com/wfxgrjql';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
  }
  }