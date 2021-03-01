import {
  Http
} from "../utils/http.js"

class Theme {
  static async getHomeLocationA(callback) {
    return await Http.request({
      url: `theme/by/names`,
      data: {
        names: 't-1'
      },


    })
    }
}
export {
  Theme

}