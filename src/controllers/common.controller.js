import moment from 'moment';
import CommonService from '../services/common.service';
import { getErrorResult, getSuccessResult } from '../utility/helpers';
import tokenInfo from '../utility/jwt/tokenInfo';

let commonService = null;
class CommonController {
  constructor() {
    commonService = new CommonService();
  }

  async getDashboard(req, res) {
    try {
      const user = tokenInfo(req, res);
      const shopId = user.id;
      const startDate = moment(req.body.fromDate).format('yyyy-MM-DD') || moment().format('yyyy-MM-DD');
      const endDate = moment(req.body.toDate).format('yyyy-MM-DD') || moment().format('yyyy-MM-DD');
      const dashboardData = await commonService.getDashboard(shopId);
      const categroryData = await commonService.getDashboardCategory(shopId, startDate, endDate);
      const response = {
        dashboard: dashboardData[0][0],
        category: categroryData[0]
      };
      return getSuccessResult(res, response, 'Category_GetAllData');
    }
    catch (err) {
      return getErrorResult(res, 500, 'Common_Error', null);
    }
  }

  async getUserInformation(req, res) {
    try {
      const user = tokenInfo(req, res);
      const shopId = user.id;
      const response = await commonService.getUserInformation(shopId);
      if (response) {
        return getSuccessResult(res, response, 'Category_GetAllData');
      }
      return getErrorResult(res, 400, 'Category_Not_Found', null);
    }
    catch (err) {
      return getErrorResult(res, 500, 'Common_Error', null);
    }
  }
}

export default CommonController;
