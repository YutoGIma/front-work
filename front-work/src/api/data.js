import Api from './index'

class getData {
    getPregectures(){
        return Api().get("api/v1/prefectures")
    }
}

export default new getData()