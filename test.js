const mongoose = require('mongoose')

const Post = require('./database/models/post')

mongoose.connect('mongodb://localhost/node-js-test-blog', { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

Post.create({

    title: "My first post blog",

    description: "Blog post description",

    content: "Blog content"


},(error,post) => {

    console.log(error,post)
    
})