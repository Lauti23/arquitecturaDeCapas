import { save } from "../persistance/pesistanceSelector"

export async function login(email, password) {
    const user = {email, password}
    const obj = {
        user,
        timestamp: Date.now()
    }
    await save(obj)
    return user
}