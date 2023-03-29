import { loginService } from "../services/login.services.js"

export const login = async(req, res) => {
    res.render("login.handlebars")
}

export const loginPost = async(req, res) => {
    let email = req.body.email
    let password = req.body.password
    let user = {email, password}
    console.log(user)
    if(user) {
        await loginService(user.email, user.password)
        res.redirect("index")
    } else {
        res.send("Faltan campos por completar")
    }
}
