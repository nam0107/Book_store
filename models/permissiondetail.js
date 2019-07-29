module.exports = (sequelize, type) => {
    return sequelize.define('permissiondetail', {
        permission_id: {
            type: type.INTEGER,
            primaryKey: true,
            references: {
                model: 'permission',
                key: 'permission_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
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
        }
    })
}