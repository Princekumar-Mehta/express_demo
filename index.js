import  express  from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8000;
const STATIC_PATH = path.join(__dirname+"/public")
// app.get(route,callback)
app.use(express.static(STATIC_PATH))
// app.get("/",(req,res)=>{
//    // res.writeHead(200,{"Content-Type":"text/html"});
//     // res.write("hello world")
//     // res.end();
//     //or
//     //  res.send("Welcome to home page")   
    
// });

app.get("/about",(req,res)=>{
    res.status(200).send("Welcome to about page")
});
app.get("/contact-us",(req,res)=>{
    res.status(200).send("Welcome to about page")
});
app.get("/users",(req,res)=>{
    res.status(200).send([
        {
            id:1,
            name:"Prince",
        },
        {
            id:2,
            name:"Raj"
        }
    ])
});
app.listen(PORT)