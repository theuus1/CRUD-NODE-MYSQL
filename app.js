const express = require("express");

const User = require('./models/usuario');

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {

    await User.findAll({
        attributes: ['id', 'name', 'email']})
    .then((users) => {
        return res.json({
            erro: false,
            users
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum usuário encontrado!"
        });
    });    
});

app.get("/user/:id", async (req, res) => {
    const { id } = req.params;

    await User.findAll({ where: { id: id } })
    .then((user) => {
        return res.json({
            erro: false,
            user: user
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum usuário encontrado!"
        });
    });
});

app.post("/user", async (req, res) => {
    const { name, email } = req.body;   

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado!"
        });
    });    
});

app.put("/user", async (req, res) => {
    const { id } = req.body;  
    
    await User.update(req.body, {where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário editado com sucesso!"
        });

    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não editado!"
        });
    });
});

app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;    

    await User.destroy({ where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário apagado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não apagado!"
        });
    });
});

app.listen(8081, () => {
    console.log("server started!!");
});