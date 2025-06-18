import { constansts } from "../../auth/constants"

export const checkToken = () => {

    return window.localStorage.getItem(constansts.AUTH_SESSION_TOKEN) ?? ''

}
