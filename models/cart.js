module.exports = (sequelize, type) => {
    const cart = sequelize.define('cart', {
        cart_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: type.INTEGER,
            references: {
                model: 'user',
                key: 'user_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        total_amount: {
            type: type.INTEGER,
        }
    });
    cart.associate = models => {
        cart.belongsToMany(models.book, {through: models.cartdetail});
    };
    return cart;
}