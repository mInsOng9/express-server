//server.js 
require('dotenv').config();
const express =require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/health',(req,res)=>{
    res.json({ok:true,env:process.env.NODE_ENV || 'local'});
});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
if(MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI)
        .then(()=>console.log("MongoDB Connected"))
        .catch(err => console.error("MongoDB Connection Error",err));
} else {
    console.warn('MONGODB_URI is missing. Skipping DB connection');
}
