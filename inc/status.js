const mongo = require("./Mongo.js");
module.exports = {
  setStatus: async function (req) {
    const db = await mongo.getConnection();
    const { service, success } = req.query;
    await db.collection("status").findOneAndUpdate(
      {
        service: service,
      },
      {
        $set: {
          lastChecked: new Date(),
          success: success == "true" ? true : false,
        },
      },
      {
        upsert: true,
        returnOriginal: false,
      }
    );
  },
};
