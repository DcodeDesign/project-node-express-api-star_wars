/**
 * being Controller
 */

const beingModel = require("./../models/being_model")

exports.getAll = (req, res) => {
    beingModel.getAll().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.getOne = (req, res) => {
    beingModel.getOne(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.create = (req, res) => {
    beingModel.create(req.body).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.update = (req, res) => {
    beingModel.update(req.body, req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.delete = (req, res) => {
    beingModel.delete(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}
