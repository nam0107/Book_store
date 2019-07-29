module.exports = (sequelize, type) => {
    return sequelize.define('comment', {
        cmt_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: type.STRING,
        },
        status: {
            type: type.INTEGER,
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
        book_id: {
            type: type.INTEGER,
            references: {
                model: 'book',
                key: 'book_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    })
}