const express = require("express");
const path = require("path");
const router = express.Router();
const app = express();

const User = require("../models/Usuario");

require(path.resolve("/home/searchcar/src/config", "database"));

router.get("/usuarios/add", (req, res) => {
    req.flash("success_msg", "Usuário cadastrado com Sucesso");
    res.render("cadUsuario");
});
router.get("/cidades/add", (req, res) => {
    req.flash("success_msg", "Cidade cadastrada com Sucesso");
    res.render("cadCidade");
});
router.get("/estados/add", (req, res) => {
    req.flash("success_msg", "Estado cadastrado com Sucesso");    
    res.render("cadEstado");
});
router.get("/marcas/add", (req, res) => {
    req.flash("success_msg", "Marca cadastrada com Sucesso");    
    res.render("cadMarca");
});
router.get("/modelos/add", (req, res) => {
    req.flash("success_msg", "Modelo cadastrado com Sucesso");        
    res.render("cadModelo");
});
router.get("/revendedores/add", (req, res) => {
    req.flash("success_msg", "Revendedor cadastrado com Sucesso");        
    res.render("cadRevendedor");
});
router.get("/veiculos/add", (req, res) => {
    req.flash("success_msg", "Veículo cadastrado com Sucesso");        
    res.render("cadVeiculo");
});

module.exports = router;