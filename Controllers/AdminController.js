var AdminController = function () { };
var Clients = require('../Schema/Clients');
var uuid = require('uuid');

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