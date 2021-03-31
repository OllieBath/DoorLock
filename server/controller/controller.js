
var myModule = require('../model/model');


var lockDB = myModule.method;


exports.find = (req, res) => {
    lockDB.find()
        .then(entry =>{
            res.send(entry)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"Error occured"})
        })
}
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const entry = new lockDB({
        lock:req.body.lock,
        timestamp:req.body.timestamp
    })

    entry
        .save(entry)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occured"
            });
        });
}