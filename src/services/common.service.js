import sequelize from '../config/sequelize.config';
import db from '../sequelize';

const Billing = db.billing;
const Admin = db.admin;
const Permission = db.permission;

class CommonService {
    getDashboard(shopId) {
        const query = `SELECT * from get_dashboard(${shopId});`;
        return sequelize.query(query);
    }

    getDashboardCategory(shopId, fromDate, toDate) {
        const query = `SELECT * from get_top_category(${shopId}, '${fromDate}', '${toDate}');`;
        return sequelize.query(query);
    }

    async getUserInformation(shopID) {
        const billing = await Billing.findAll({
            where: { shop_id: shopID }
        });
        const permission = await Permission.findAll({
            where: { shop_id: shopID }
        });
        const user = await Admin.findByPk(shopID, {
            attributes: ['email', 'name', 'phone']
        });
        return {
            billing: billing && billing.length > 0 && billing[0],
            permission,
            user
        };
    }
}

export default CommonService;
