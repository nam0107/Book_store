module.exports = (sequelize, type) => {
    return sequelize.define('love', {
        user_id: {
            type: type.INTEGER,
            primaryKey: true,
            references: {
                model: 'user',
                key: 'user_id'
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
        }
    })
}