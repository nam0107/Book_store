module.exports = (sequelize, type) => {
    const catalog = sequelize.define('catalog', {
        catalog_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        catalog_name: {
            type: type.STRING,
            unique: true
        },
        status: {
            type: type.INTEGER,
        }
    });
    catalog.associate = models => {
        catalog.hasMany(models.book);
    }
    return catalog;
}