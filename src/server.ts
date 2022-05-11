import express, { Application,Request,Response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import dotenv from 'dotenv';
dotenv.config();

const app:Application = express();


app.use(express.json());

app.use(categoriesRoutes)




app.post("/courses", (request:Request,response:Response)=>{
    const {name}= request.body;
    return response.json({name})
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});