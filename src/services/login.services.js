import { save } from "../persistance/pesistanceSelector.js"

export async function loginService(email, password) {
    const user = {email, password}
    const obj = {
        user,
        timestamp: Date.now()
    }
    await save(obj)
    return user
}