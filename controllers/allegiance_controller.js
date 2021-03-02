/**
 * allegiance Controller
 */

const allegianceModel = require("./../models/allegiance_model")

exports.getAll = (req, res) => {
    allegianceModel.getAll().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.getOne = (req, res) => {
    allegianceModel.getOne(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.create = (req, res) => {
    allegianceModel.create(req.body).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.update = (req, res) => {
    allegianceModel.update(req.body, req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.delete = (req, res) => {
    allegianceModel.delete(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}


