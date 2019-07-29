const sequelize = require('sequelize');
const multer = require('multer'); // up file

const {
    Book,
    Cart,
    Cartdetail,
    Catalog,
    Comment,
    Love,
    Order,
    Orderdetail,
    Permission,
    Permissiondetail,
    Role,
    User } = require('../../db.js');

// get all book
exports.getAllBook = function (req, res){
    Book.findAll({raw: true}).then(arrBook => {
        res.json(arrBook)
    })
};

// get a book
exports.getBook = function(req, res){
    Book.findOne({
        where: {
            book_id: req.params.book_id
        },
        raw: true
    }).then(book => res.json(book))
};

// create a book
exports.createBook = function(req, res){
    console.log(req.file);
    Book.create({
        book_name: req.body.book_name,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        image: req.file.path,
        quatity: req.body.quatity,
        catalog_id: req.body.catalog_id
    }).then(book => res.json(book))
};

// get all book by catalog_id
exports.getBookByCatalogId = function(req, res){
    Book.findAll({
        where: {
            catalog_id: req.params.catalog_id
        },
        raw: true
    }).then(arrBook => res.json(arrBook))
};

// search book
exports.searchBook = function(req, res){
    Book.findAll({
        include: [Catalog],
        raw: true
    }).then(arrBook => res.json(arrBook))
};