import express, {Application, Express, Request, Response, NextFunction} from "express";

const app:Application = express();
const port:Number = 4000;

app.use("/", (req:Request, res:Response, next:NextFunction) => {
    res.status(200).send({message: 'OK'})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})