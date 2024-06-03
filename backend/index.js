import app from "./server";
import mongodb from "mongodb"
// import reviewsDAO from "./dao/reviewsDAO.js"

const mongoClient = mongodb.mongoClient

const port=8000
mongoClient.connect(
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        userNewURLParser:true
    }
)

.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})

.then(async client=>{
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
})