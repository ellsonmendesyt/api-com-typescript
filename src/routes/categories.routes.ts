import {Router,Request,Response} from 'express'


const categoriesRoutes= Router();
const categories=[]

categoriesRoutes.post("/categories", (req:Request,res:Response)=>{
     const {name,description}=req.body;

     if(!name || !description) return res.status(401).json({error:"name and description are required"});
        categories.push({name,description});

     return res.status(201).json({message:"category created"});
})








export {categoriesRoutes}


























