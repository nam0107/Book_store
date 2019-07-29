const sequelize = require('sequelize');
const bookModel = require(__dirname + "/models/book.js");
const cartModel = require(__dirname + "/models/cart.js");
const cartdetailModel = require(__dirname + "/models/cartdetail.js");
const catalogModel = require(__dirname + "/models/catalog.js");
const commentModel = require(__dirname + "/models/comment.js");
const loveModel = require(__dirname + "/models/love.js");
const orderModel = require(__dirname + "/models/order.js");
const orderdetailModel = require(__dirname + "/models/orderdetail.js");
const permissionModel = require(__dirname + "/models/permission.js");
const permissiondetailModel = require(__dirname + "/models/permissiondetail.js");
const roleModel = require(__dirname + "/models/role.js");
const userModel = require(__dirname + "/models/user.js");

const db = new sequelize({
    database: 'book_store',
    username: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOption: {
        ssl: false
    },
    define: {
        freezeTableName: true
    }
});

const Book = bookModel(db, sequelize);
const Cart = cartModel(db, sequelize);
const Cartdetail = cartdetailModel(db, sequelize);
const Catalog = catalogModel(db, sequelize);
const Comment = commentModel(db, sequelize);
const Love = loveModel(db, sequelize);
const Order = orderModel(db, sequelize);
const Orderdetail = orderdetailModel(db, sequelize);
const Permission = permissionModel(db, sequelize);
const Permissiondetail = permissiondetailModel(db, sequelize);
const Role = roleModel(db, sequelize);
const User = userModel(db, sequelize);

// db.sync();


// module.exports.cart = cart;
// module.exports.cartdetail = cartdetail;
// module.exports.catalog = catalog;
// module.exports.comment = comment;
// module.exports.love = love;
// module.exports.order = order;
// module.exports.orderdetail = orderdetail;
// module.exports.permission = permission;
// module.exports.permissiondetail = permissiondetail;
// module.exports.role = role;
// module.exports.user = user;

module.exports = {
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
    User
}
