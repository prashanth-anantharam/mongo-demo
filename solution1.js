//Import mongoose module.
//Make a connection to the database.
//Define the schema for the collection.
//Create an instance of the Schema and get a model to query documents in the collection.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
        .then(() => console.log('Connected to mongodb instance mong-exercises'))
        .catch(error => console.log('Error '+ error));

const CourseSchema = mongoose.Schema({
    tags: [String],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', CourseSchema);

async function GetCourses(){
return await Course.find({isPublished: true, tags: 'backend'})
      .sort({name: 1})
      .select({name: 1, author: 1})
}

async function run(){
    const courses = await GetCourses();
    console.log(courses);
}

run();



