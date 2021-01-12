const Product = require('../models/products.model'),
    mongoose = require('mongoose');

module.exports = {
    index : (req, res) => {
        Product.find()
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    create : (req, res) => {
        Product.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    show : (req, res) => {
        Product.findOne({_id:req.params.id})
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    edit : (req, res) => {
        Product.findOneAndUpdate({_id:req.params.id},req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    destroy : (req, res) => {
        Product.deleteOne({_id:req.params.id})
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    }
}