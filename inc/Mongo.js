const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGODB_URI;
const client = new MongoClient(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
var db;
module.exports = {
getConnection:async function()
{
    if(db==null)
    {
       console.log("No connection, getting it..");
        db= await connect();
    }
    return(db);
},
disconnect: function ()
{
    client.close();
    db=null;
    console.log("disconnected.");
}
}
async function connect() {
    var con=await client.connect();
    db=con.db("monitor");
    return(db);
}