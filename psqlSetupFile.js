
const {Pool} = require('pg');
const PG_URI = 'postgres://wfxgrjql:0VteUAcLBK6T1fshNYwPvtLf4_6i7Dj6@kashin.db.elephantsql.com/wfxgrjql';
const pool = new Pool({
  connectionString: PG_URI
});
const db = {
    query: (text, params, callback) => {
        // console.log('executed query', text);
        return pool.query(text, params, callback);
    }
  }

  //Step 1: set up table
  //run a query for each createTable
  //db.query(createUsers)

  //Step 2: fill recipes database
  // //query the api

async function setup() {
  try{
    const res = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=0fc911a9&app_key=2db3f0fd802520d8b7589405b0fd69ab')
    const data = await res.json();
    let i = 0;    
    for(const el of data.hits){
      if(i++ > 20) break;
      const {label, url, image,  calories, cuisineType, ingredientLines} = el.recipe
      const insertRecipe = {
            text: `INSERT INTO recipes (label, instructions, image, calories, cuisine)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;`,
            values: [label, url, image, Math.floor(calories), cuisineType[0]],
      };
      try{
        const data = await db.query(insertRecipe)
        console.log(data.rows[0].id)
        const id = data.rows[0].id
        for(const text of ingredientLines){
          const insertIngredients = {
            text: `INSERT INTO recipe_ingredients (recipe_id, ingredient_text)
              VALUES ($1, $2)
              RETURNING *;`,
            values: [id, text],
          };
          await db.query(insertIngredients)
        }
      } catch(err){
        console.log(err);
      }
    }    
  } catch (err) {
    console.log(err)
  }
  
}
  setup();


  const createUsers = {
    text: `CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            firstName TEXT,
            lastName TEXT,
            email TEXT UNIQUE,
            password TEXT
    );`
  }

  const createRecipes = {
    text: `CREATE TABLE recipes (
            id SERIAL PRIMARY KEY,
            label TEXT UNIQUE,
            instructions TEXT,
            image TEXT,
            calories NUMERIC,
            cuisine TEXT
    );`  
  }

  const createRecipeIngredients = {
    text: `CREATE TABLE recipe_ingredients (
            id SERIAL PRIMARY KEY,
            recipe_id INTEGER REFERENCES recipes(id),
            ingredient_text TEXT
    );`
  }

  const createShoppingList = {
    text: `CREATE TABLE shopping_list (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            ingredient_id INTEGER REFERENCES recipe_ingredients(id)
    );`
  }

  //createUsers, createRecipes, createRecipeIngredients, createShoppingList
  // db.query(createUsers)
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err))

  // db.query(createRecipes)
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err))

  // db.query(createRecipeIngredients)
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err))

  // db.query(createShoppingList)
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err))










  // const insertUser1 = {
  //   text: `INSERT INTO user (firstname, lastname, email, password)
  //   VALUES ($1, $2, $3, $4)
  //   RETURNING *;`,
  //   values: [var1, var2, var3, var4],
  // };

  // const queryUser = {
  //   text: `SELECT * FROM users WHERE email = $1`,
  //   values: [var1],
  // };

  // const deleteUser = {
  //   text: `DELETE FROM users
  //   WHERE email = $1
  //   RETURNING *;`,
  //   values: [var1],
  // };





