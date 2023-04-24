const express = require("express");
const connectDB = require("./db/ConnectDB");
const {join} = require("path");
const web = require("./routes/web")
const app = express();
  

const DB_URL = process.env.DB_URL||"mongodb://0.0.0.0:27017/curd";
const port = process.env.port||3000;

// database connection 
connectDB(DB_URL);

app.use(express.urlencoded({extended: false}));
//static files
app.use('/student',express.static(join(process.cwd(), "public")))

app.use('/student/edit',express.static(join(process.cwd(), "public")))



app.set('view engine', 'ejs');
app.use("/student",web);

app.listen(port, () => {
 console.log(`Server listening on port ${port}`);
});