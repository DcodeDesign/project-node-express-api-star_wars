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
    planetModel.getOne().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.create = (req, res) => {
    planetModel.create().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.update = (req, res) => {
    planetModel.update().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.delete = (req, res) => {
    planetModel.delete().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}
