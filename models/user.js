module.exports = (sequelize, type) => {
    const user = sequelize.define('user', {
        user_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role_id: {
            type: type.INTEGER,
            primaryKey: true,
            references: {
                model: 'role',
                key: 'role_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        user_name: {
            type: type.STRING,
            unique: true
        },
        email: {
            type: type.STRING,
            unique: true
        },
        password: {
            type: type.STRING
        },
        status: {
            type: type.INTEGER,
        }
    });
    user.associate = models => {
        user.hasMany(models.order);
        user.hasMany(models.cart);
        user.belongsToMany(models.book, {through: models.comment});
        user.belongsToMany(models.book, {through: models.love});
    };
    return user;
}