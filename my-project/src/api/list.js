import service from '../utils/http'
export function list() {
    return service({
        url:"/list"
    })
}