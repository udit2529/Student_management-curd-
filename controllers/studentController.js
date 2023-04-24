const studentModel = require('../models/Student');
class studentController {


static createDoc = async (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { name, age, fees } = req.body;

    if (!name || !age || !fees) {
      res.status(400).send("Missing required fields");
      return;
    }

    const doc = new studentModel({
      name,
      age,
      fees,
    });

    const savedDoc = await doc.save();
        res.redirect("/student")
    // res.status(201).send("Document created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
    static getAllDoc = async(req,res ) =>{
        try{
           const result = await studentModel.find()
           //console.log(result)
           res.render("index",{data:result})
        } catch(err){
              console.log(err)
        }
        
    }
    static editDoc = async(req,res) =>{
        //const data = req.params.id ;
         try{
            const result = await studentModel.findById(req.params.id)
            //console.log(data);
            res.render("edit",{data:result});
         }
         catch(err){
            console.log(err)
         }
       
    }
    static updateDocById = async(req,res ) =>{
        try{
        const result = await studentModel.findByIdAndUpdate(req.params.id,req.body);
       console.log(result)
        }
        catch(err){
            console.log(err)
        }
        res.redirect("/student")
    }
    static deleteDocById = async(req,res ) =>{
          try{
            const result = await studentModel.findByIdAndDelete(req.params.id);
            res.redirect("/student")
          }
          catch(err){
            console.log(err)
          }
        
    } 
}

module.exports = studentController 