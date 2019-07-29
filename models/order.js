module.exports = (sequelize, type) => {
    const order = sequelize.define('order', {
        order_id: {
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
        },
        status: {
            type: type.INTEGER,
        }
    });
    order.associate = models => {
        order.belongsToMany(models.book, {through: models.orderdetail});
    };
    return order;
}