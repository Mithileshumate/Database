const mongoClint = require("mongodb").MongoClint

const employeeData = require("./data.json")
const Connection = "mongodb://127.0.0.1:27017"
MongoClint.connect(Connection, async (err, db) => {
    if (err) {
        console.log('error while connecting', err)
        return
    }
    const database = db.db("employee")
    const data = database.collection('employee')
    console.log("connected to mongo database");

    const insert = await database.collection('employee').insertMany(employeeData);
    console.log(insert);

    const finding = await data.find().toArray();
    console.log(finding);

    const salaryFind = await data.find({ salary: { $gt: "30000" } }).toArray();
    console.log(salaryFind);

    const experience = await data.find({ overallExp: { $gt: "2" } }).toArray();
    console.log(experience);

    const graduateExp = await data.find({ yearGrad: { $gt: "2015" }, overallExp: { $gt: '1' } }).toArray();
    console.log(graduateExp);

    const salaryUpdate = await data.updateMany({ salary: { $gt: "70000" } }, { $set: { salary: "65000" } }).toArray();
    console.log(salaryUpdate);

    const deleteCompany = await data.deleteMany({lastCompany:"Y"}).toArray();
    console.log(deleteCompany);

})