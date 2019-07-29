module.exports = (sequelize, type) => {
    const permission = sequelize.define('permission', {
        permission_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          type_permission: type.STRING
    });
    permission.associate = models => {
        permission.belongsToMany(models.role, {through: models.permissiondetail});
    };
    return permission;
}