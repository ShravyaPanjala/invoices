var AdminController = function () { };
var Clients = require('../Schema/Clients');
var Products = require('../Schema/Products');
var uuid = require('uuid');


AdminController.List_All_Products = function (callback) {
    Products.find().exec(function (err, Result) {
        callback(Result);
    })
}
AdminController.Add_Product = function (values, callback) {
    let Data = {
        ProductID: uuid(),
        Product_Name: values.Product_Name,
        Product_Price: values.Product_Price
    }
    Products(Data).save();
    callback("Product Added Successfully");
}

AdminController.List_All_Clients = function (callback) {
    Clients.find().exec(function (err, Result) {
        callback(Result);
    })
}

AdminController.Add_Clients = function (values, callback) {
    var data = {
        ClientID: uuid(),
        Name: values.Name,
        PhoneNumber: values.PhoneNumber,
        EmailID: values.EmailID,
        GST_Number: values.GST_Number
    }
    Clients(data).save();
    callback('Saved Successfully');
}


module.exports = AdminController;