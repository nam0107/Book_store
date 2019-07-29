module.exports = (sequelize, type) => {
    const role = sequelize.define('role', {
        role_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: type.STRING
    });
    role.associate = models => {
        role.hasMany(models.user);
        role.belongsToMany(models.permission, {through: models.permissiondetail});
    };
    return role;
}