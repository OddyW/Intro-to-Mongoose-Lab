const mongoose = require('mongoose')
const Recipe = require('./model/Recipe')
const dotenv = require('dotenv').config()

async function connectToDB() { //connection to the database
    try {
        await mongoose.connect(process.env.DATABASE_URI) // <----- PUT YOUR DATABASE CONNECTION STRING HERE
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}


connectToDB() // connect to database




//createRecipe function

async function createRecipe() {
    try {
        const newRecipe = await Recipe.create({
            name: 'Karak Tea',
            instructions: 'Red Tea, Milk',
            prepTime: 10,
            difficulty: 'Easy'
        })
        console.log(newRecipe)

    }
    catch (err) {
        console.log('ERROR: ', err)
    }
}


// createRecipe()


//getAllRecipes function
async function getAllRecipes() {
    try {
        const allRecipes = await Recipe.find()
        console.log(allRecipes)
    }

    catch (err) {
        console.log('ERROR ' + err)
    }
}

// getAllRecipes() 

//getRecipeById function
async function getRecipeById() {
    try {
        const foundRecipe = await Recipe.findById('6adf342e80bb05398afb660f')
        console.log(foundRecipe)
    }
    catch (err) {
        console.log("No recipe with this ID exists. " + err)
    }

}

// getRecipeById()


//UPdate recipe with id Function

async function updateOneRecipeByItsId(){
    try{
        const updatedRecipe = await Recipe.findByIdAndUpdate('6adf33d3d84026dd5f1b380d',{name:'Cheesecake',instructions: 'add cheese on top cake, vuala Cheescake!' , prepTime: 75, difficulty: 'Hard'},{returnDocument: 'after'})
        console.log(updatedRecipe)
    }
    catch(err){
        console.log("ERROR: " + err)
    }
}

// updateOneRecipeByItsId()

//delete Recipe by id

async function deleteOneBookByItsId(){
    const deletedBook = await Book.findByIdAndDelete('6adf0ac666c56bee55bdf5e4')
    console.log('Deleted book is ' +deletedBook)
}


async function deleteOneRecipeByItsId(){
    try{
        const deletedRecipe = await Recipe.findByIdAndDelete('6adf342e80bb05398afb660f')
    }
    catch(err){
        console.log('ERROR: ' + err)
    }
}

// deleteOneRecipeByItsId()