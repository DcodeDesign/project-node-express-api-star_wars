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
    forceUserModel.getOne(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.create = (req, res) => {
    forceUserModel.create(req.body).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.update = (req, res) => {
    forceUserModel.update(req.body, req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.delete = (req, res) => {
    forceUserModel.delete(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}
