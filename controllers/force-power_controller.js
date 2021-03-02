/**
 * force-power Controller
 */

const forcePowerModel = require("./../models/force-power_model")

exports.getAll = (req, res) => {
    forcePowerModel.getAll().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.getOne = (req, res) => {
    forcePowerModel.getOne().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.create = (req, res) => {
    forcePowerModel.create().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.update = (req, res) => {
    forcePowerModel.update().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.delete = (req, res) => {
    forcePowerModel.delete().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}
