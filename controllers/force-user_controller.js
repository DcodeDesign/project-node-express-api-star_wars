/**
 * force-user Controller
 */

const forceUserModel = require("./../models/force-user_model")

exports.getAll = (req, res) => {
    forceUserModel.getAll().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.getOne = (req, res) => {
    forceUserModel.getOne().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.create = (req, res) => {
    forceUserModel.create().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.update = (req, res) => {
    forceUserModel.update().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.delete = (req, res) => {
    forceUserModel.delete().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}
