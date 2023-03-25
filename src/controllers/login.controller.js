export const login = async(req, res) => {
    res.render("login.handlebars")
}

export const loginPost = async(req, res) => {
    let email = req.body.email
    let password = req.body.password
    let user = {email, password}
    console.log(user)
    if(user) {
        await login(user.email, user.password)
        res.send(user)
    } else {
        res.send("Faltan campos por completar")
    }
}