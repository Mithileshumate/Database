const express = require("express");
const mongoose = require("mongoose");
const app = require();

const url = "mongodb://127.0.0.1:27017/employee";
const employee = mongoose.model('employees', employeeSchema)

var dbConnect;
mongoose.connect(url, (err, db) => {
    if (err) console.log(err);
    console.log("Connction Established");
});

const employeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    lastCompany: String,
    lastSalary: Number,
    overallExp: Number,
    contactInfo: Number,
    yearGrad: Number,
    gradStream: String
})

module.exports = { employeeSchema };
const insertManyWithMongoose = async () => {
    try {
        const employee1 = new employee({
            "firstName": "John",
            "lastName": "Doe",
            "salary": 25000,
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": 10000,
            "overallExp": 2,
            "contactInfo": 1234567890,
            "yearGrad": 2016,
            "gradStream": "CSE"
        })
        const employee2 = new employee({
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": 30000,
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 1,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee3 = new employee({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 20000,
            "overallExp": 1,
            "contactInfo": 123567890,
            "yearGrad": 2019,
            "gradStream": "ECE"
        })

        const employee4 = new employee({
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": 30000,
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee5 = new employee({
            "firstName": "Jame",
            "lastName": "roh",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 123567890,
            "yearGrad": 2019,
            "gradStream": "EEE"
        })

        const employee6 = new employee({
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": 30000,
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 1,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee7 = new employee({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 20000,
            "overallExp": 1,
            "contactInfo": 123567890,
            "yearGrad": 2019,
            "gradStream": "ECE"
        })

        const employee8 = new employee({
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": 30000,
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee9 = new employee({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 123567890,
            "yearGrad": 2019,
            "gradStream": "EEE"
        })

        const employee10 = new employee({
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": 30000,
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 1,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee11 = new employee({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 20000,
            "overallExp": 1,
            "contactInfo": 123567890,
            "yearGrad": 2019,
            "gradStream": "ECE"
        })

        const employee12 = new employee({
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": 30000,
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee13 = new employee({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 123567890,
            "yearGrad": 2019,
            "gradStream": "EEE"
        })

        const employeeArr = [employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10, employee11, employee12, employee13]

        const result = await employee.insertMany(employeeArr);

        console.log("Succesfully created the multiple record", result);

    } catch (e) {
        console.error("error while inserting multiple record", e)
    }
}

module.exports = { insertManyWithMongoose }

const findAllWithMongoose = async () => {
    try {
        const result = await employeeDetails.find();

        console.log("Succesfully found all", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithSalary = async () => {
    try {
        const result = await employee.find({ "salary": { $gt: 30000 } });

        console.log("Succesfully found with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithExp = async () => {
    try {
        const result = await employee.find({ "overallExp": { $gt: 1 } });

        console.log("Succesfully found with Experience", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithTwoConditions = async () => {
    try {
        const result = await employee.find({ $and: [{ "yearGrad": { $gt: 2015 } }, { "overallExp": { $gt: 1 } }] });

        console.log("Succesfully found with Two Conditions", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

module.exports = { findAllWithMongoose, findWithSalary, findWithExp, findWithTwoConditions };

const updateWithSalary = async () => {
    try {
        const result = await employee.updateMany({ "salary": { $gt: 30000 } }, { $set: { "salary": 28000 } });

        console.log("Succesfully updated with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

module.exports = { updateWithSalary }

const deleteWithLastCompany = async () => {
    try {
        const result = await employee.deleteMany({ "lastCompany": "Y" });

        console.log("Succesfully updated with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

module.exports = { deleteWithLastCompany }

insertManyWithMongoose();

findAllWithMongoose();

findWithSalary();

findWithExp();

findWithTwoConditions();

updateWithSalary();

deleteWithLastCompany();