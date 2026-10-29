const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4 : uuidv4} = require('uuid');
const methodOverride = require("method-override");

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

let posts =  [
    {
        id : uuidv4(),
        username : "Shyam Kumar Chauraiya" ,
        content : "I am a MERN Stack Developer and pursuing my BE-CSE at sona college of technology."
    },
    {
        id : uuidv4(),
        username : "Gaurishankar Sah" ,
        content : "I am an AI/ML Engineer and pursuing my ADS at sona college of technology."
    },
    {
        id : uuidv4(),
        username : "Sudarshan Sah Teli" ,
        content : "Hard work is important to achieve success."
    },
    {
        id : uuidv4(),
        username : "Sandip Sah" ,
        content : "I am a MERN Stack Developer and i love coding and problem solving."
    },
    {
        id : uuidv4(),
        username : "Snaju Kumari" ,
        content : "I am a Art and Science student and i am intrested in finance department."
    }
] ;

app.get("/posts" , (req , res) =>{
    res.render("home.ejs" , { posts });
});

app.get("/posts/new" , (req , res) =>{
    res.render("newPost.ejs");
});

app.post("/posts" , (req , res) =>{
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id" , (req , res) =>{
    let {id} = req.params;
    let post = posts.find( (p) => id===p.id); 
    if (!post){
        return res.render("error.ejs");
    }
    res.render("single.ejs" , {post});
});

app.get("/posts/:id/edit" , (req, res) =>{
    let {id} = req.params;
    let post = posts.find( (p) => id===p.id);
    res.render("update.ejs" , {post});
});

app.patch("/posts/:id" , (req, res) =>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find( (p) => id===p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id" , (req, res) =>{
    let {id} = req.params;
    posts = posts.filter( (p) => id !== p.id);
    res.redirect("/posts");
});