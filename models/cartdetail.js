module.exports = (sequelize, type) => {
    return sequelize.define('cartdetail', {
        cart_id: {
            type: type.INTEGER,
            primaryKey: true,
            references: {
                model: 'cart',
                key: 'cart_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        book_id: {
            type: type.INTEGER,
            primaryKey: true,
            references: {
                model: 'book',
                key: 'book_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        amount: {
            type: type.INTEGER,
        },
        quatity: {
            type: type.INTEGER,
        }
    })
}