const express = require("express");
const path = require("path");
const UsuarioController = require("../controllers/UsuarioController");
const CidadeController = require("../controllers/CidadeController");
const EstadoController = require("../controllers/EstadoController");
const MarcaController = require("../controllers/MarcaController");
const ModeloController = require("../controllers/ModeloController");
const RevendedorController = require("../controllers/RevendedorController");
const VeiculoController = require("../controllers/VeiculoController");
const { listaUsuarios } = require("../controllers/UsuarioController");
const { Console } = require("console");

const routes = express.Router();

require(path.resolve("/home/searchcar/src/config", "database.js"));

routes.get("/usuarios", UsuarioController.listaUsuarios);
routes.post("/usuarios", (req, res) => { 
    var errors = [];
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        errors.push({texto: "Campo Nome tem preenchimento obrigatório"});
    }

    if(!req.body.login || typeof req.body.login == undefined || req.body.login == null) {
        errors.push({texto: "Campo Login tem preenchimento obrigatório"});
    }

    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null) {
        errors.push({texto: "Campo Senha tem preenchimento obrigatório"});
    }

    if(errors.length > 0) {
        res.render("cadUsuario", { erros: erros })
    } else {
        UsuarioController.addUsuario(req, res).then(() => {
            req.flash("success_msg", "Usuário cadastrado com Sucesso");
            res.redirect("/searchcar/usuarios/add");
        }).catch(() => {
            errors.push({ texto: "Erro ao cadastrar usuário" });
            req.flash("error_msg", errors);
        });
    }
});
routes.put("/usuarios", UsuarioController.altUsuario);

routes.get("/cidades", CidadeController.listaCidades);
routes.post("/cidades", (req, res) => {
    
    var errors = [];

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        errors.push({ texto: "Campo Nome tem preenchimento obrigatório"});
    }

    if (!req.body.idEstado || typeof req.body.idEstado == undefined || req.body.idEstado == null) {
        errors.push({ texto: "Campo Estado tem preenchimento obrigatório"});
    }

    if (errors.length > 0) {
        req.flash("error_msg", "Erro ao cadastrar Cidade");
        res.redirect("/searchcar/cidades/add");
    } else {
        CidadeController.addCidade(req, res).then(() => {
            req.flash("success_msg", "Cidade cadastrada com Sucesso");
            res.redirect("/searchcar/cidades/add");
        }).catch(() => {
            errors.push({ texto: "Erro ao cadastrar Cidade" });
            req.flash("error_msg", errors);
        });
    }
});

routes.get("/estados", EstadoController.listaEstados);
routes.post("/estados", (req, res) => {

    var errors = [];

    if (!req.body.uf || typeof req.body.uf == undefined || req.body.uf == null) {
        errors.push({ texto: "Campo UF tem preenchimento obrigatório"});
    }

    if (!req.body.descricao || typeof req.body.descricao == undefined || req.body.descricao == null) {
        errors.push({ texto: "Campo Estado tem preenchimento obrigatório"});
    }

    if (errors.length > 0) {
        req.flash("error_msg", "Erro ao cadastrar Estado");
        res.redirect("/searchcar/estados/add");
    } else {
        EstadoController.addEstado(req, res).then(() => {
            req.flash("success_msg", "Estado cadastrado com Sucesso");
            res.redirect("/searchcar/estados/add");
        }).catch(() => {
            errors.push({ texto: "Erro ao cadastrar Estado" });
            req.flash("error_msg", errors);
        });
    }

});

routes.get("/marcas", MarcaController.listaMarcas);
routes.post("/marcas", (req, res) => { 
    
    var errors = [];

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        errors.push({ texto: "Campo Nome tem preenchimento obrigatório"});
    }

    if (errors.length > 0) {
        req.flash("error_msg", "Erro ao cadastrar Marca");
        res.redirect("/searchcar/marcas/add");
    } else {
        MarcaController.addMarca(req, res).then(() => {
            req.flash("success_msg", "Marca cadastrada com Sucesso");
            res.redirect("/searchcar/marcas/add");
        }).catch(() => {
            errors.push({ texto: "Erro ao cadastrar Marca" });
            req.flash("error_msg", errors);
        });
    }    
});

routes.get("/modelos", ModeloController.listaModelos);
routes.post("/modelos", (req, res) => { 

    var errors = [];

    if (!req.body.idMarca || typeof req.body.idMarca == undefined || req.body.idMarca == null) {
        errors.push({ texto: "Campo Marca tem preenchimento obrigatório"});
    }

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        errors.push({ texto: "Campo Modelo tem preenchimento obrigatório"});
    }

    if (errors.length > 0) {
        req.flash("error_msg", "Erro ao cadastrar Modelo");
        res.redirect("/searchcar/modelos/add");
    } else {
        ModeloController.addModelo(req, res).then(() => {
            req.flash("success_msg", "Modelo cadastrado com Sucesso");
            res.redirect("/searchcar/modelos/add");
        }).catch(() => {
            errors.push({ texto: "Erro ao cadastrar Modelo" });
            req.flash("error_msg", errors);
        });
    }    
});

routes.get("/revendedores", RevendedorController.listaRevendedores);
routes.post("/revendedores",  (req, res) => { 

    var errors = [];

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        errors.push({ texto: "Campo Nome tem preenchimento obrigatório"});
    }

    if (!req.body.telefone || typeof req.body.telefone == undefined || req.body.telefone == null) {
        errors.push({ texto: "Campo Telefone tem preenchimento obrigatório"});
    }

    if (!req.body.endereco || typeof req.body.endereco == undefined || req.body.endereco == null) {
        errors.push({ texto: "Campo Endereço tem preenchimento obrigatório"});
    }

    if (errors.length > 0) {
        req.flash("error_msg", "Erro ao cadastrar Revendedor");
        res.redirect("/searchcar/revendedores/add");
    } else {
        RevendedorController.addRevendedor(req, res).then(() => {
            req.flash("success_msg", "Revendedor cadastrado com Sucesso");
            res.redirect("/searchcar/revendedores/add");
        }).catch(() => {
            errors.push({ texto: "Erro ao cadastrar Revendedor" });
            req.flash("error_msg", errors);
        });
    }    
});

routes.get("/veiculos", VeiculoController.listaVeiculos);
routes.post("/veiculos", VeiculoController.addVeiculo);

module.exports = routes;