/**
 * ship Controller
 */

const shipModel = require("./../models/ship_model")

exports.getAll = (req, res) => {
    shipModel.getAll().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.getOne = (req, res) => {
    shipModel.getOne().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.create = (req, res) => {
    shipModel.create().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.update = (req, res) => {
    shipModel.update().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.delete = (req, res) => {
    shipModel.delete().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}
