const recipeController = {};
const db = require('../models/user.js');


//post get delete shopping list
recipeController.postShoppingList = async(req, res, next) => {
  try{
    const {id} = req.params; //localhost:3000/api/12/shoppinglist
    const {ingredient_id} = req.body; 

    // const userId = `SELECT id FROM users WHERE users.id = ${uid};`;
    // const recipeIngredientsId = `SELECT recipe_id FROM recipe_ingredients WHERE recipe_ingredients.id = ${recipe_id};`
    // const ingredient = `SELECT * FROM shopping_list JOIN recipe_ingredients ON shopping_list.recipe_ingredients(id) = recipe_ingredients.id`
    console.log('id in shopping list post', id)
    const newList = {
     text: `INSERT INTO shopping_list (user_id, ingredient_id)
     VALUES ($1, $2)`,
     values: [id, ingredient_id],
    };
    const data = await db.query(newList);

    return next();

    }catch(err){
        res.status(500).json({error: err.message});
    }
}

recipeController.getShoppingCart = async (req, res, next) => {
    try{
        const {id} = req.params;
        console.log(req.params)
        const getList = {
            text: `SELECT b.ingredient_text AS ingredient_text, b.id AS id
            FROM shopping_list a
            INNER JOIN recipe_ingredients b ON a.ingredient_id = b.id
            WHERE user_id = $1;`,
            values: [id]
        }
        const data = await db.query(getList);
        res.locals.list = data.rows;
        next();
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

recipeController.deleteShoppingList = async (req, res, next) => {
 try {
    const {id} = req.params; //localhost:3000/api/12/shoppinglist
    const {ingredient_id} = req.body; 
    const deleteList = {
        text: `DELETE FROM shopping_list 
        WHERE user_id = $1 AND ingredient_id = $2;`,
       
        values: [id, ingredient_id],
       };
       const data = await db.query(deleteList);
       return next();

 } catch(err) {
    res.status(500).json({error: err.message});
 }
}

recipeController.getRecipes = async (req, res, next) => {
    try{
        const recipes = {
            text: `SELECT a.*, array_agg(b.ingredient_text) AS ingredients
                    FROM recipes a
                    LEFT JOIN recipe_ingredients b ON a.id = b.recipe_id
                    GROUP BY a.id`
        } //gets recipes and an array of ingredients
        const data = await db.query(recipes);
        res.locals.recipes = data.rows;
        next();
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports = recipeController;