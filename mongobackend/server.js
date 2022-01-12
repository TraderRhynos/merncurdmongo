const app = require("./app");
const PORT = 9001;
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://gyanranjan:Gyana@123@digikull.61rvd.mongodb.net/gyanaback?retryWrites=true&w=majority").then(data=>{
    console.log("connected to db ");
    app.listen(PORT,()=>{
        console.log(`server running ${PORT}`);
    })
}).catch(err=>{
    console.log(err);
})
