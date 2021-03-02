/**
 * planet Controller
 */

const planetModel = require("./../models/planet_model")

exports.getAll = (req, res) => {
    planetModel.getAll().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.getOne = (req, res) => {
    planetModel.getOne(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.create = (req, res) => {
    planetModel.create(req.body).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.update = (req, res) => {
    planetModel.update(req.body, req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.delete = (req, res) => {
    planetModel.delete(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}
