export default (sequelize, Sequelize) => {
    const AdminModel = sequelize.define('admin', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        is_active: {
            type: Sequelize.BOOLEAN
        },
        created_date: {
            type: Sequelize.DATE
        },
        updated_date: {
            type: Sequelize.DATE
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'admin'
    });

    return AdminModel;
};
