module.exports = (sequelize, type) => {
    const book = sequelize.define('book', {
        book_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        book_name: {
            type: type.STRING,
        },
        author: {
            type: type.STRING,
        },
        price: {
            type: type.INTEGER,
        },
        description: {
            type: type.STRING,
        },
        image: {
            type: type.STRING,
        },
        quatity: {
            type: type.INTEGER,
        },
        catalog_id: {
            type: type.INTEGER,
            references: {
                model: 'catalog',
                key: 'catalog_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    });
    
    book.associate = models => {
        book.belongsToMany(models.user, {through: models.comment});
        book.belongsToMany(models.order, {through: models.orderdetail});
        book.belongsToMany(models.cart, {through: models.cartdetail});
        book.belongsToMany(models.user, {through: models.love});
        // book.belongsTo(models.catalog, {foreignKey: 'catalog_id'});
    };
    return book;
}