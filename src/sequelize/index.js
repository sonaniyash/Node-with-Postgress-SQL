import Sequelize from 'sequelize';
import sequelize from '../config/sequelize.config';
import Admin from './models/admin.model';

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = Admin(sequelize, Sequelize);

// Relations between tables
db.admin.hasMany(db.permission, { foreignKey: 'shop_id' });
db.admin.hasOne(db.billing, { foreignKey: 'shop_id' });

export default db;
