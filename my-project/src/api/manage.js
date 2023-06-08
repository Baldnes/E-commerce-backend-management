import service from '../utils/http'
export function manage() {
    return service({
        url:"/manage"
    })
}