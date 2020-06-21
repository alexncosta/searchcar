const localStrategy = require("passport-local").Strategy;
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/Usuario");

module.exports = (passport) => {
    passport.use(new localStrategy({ usernameField: "login", passwordField: "senha"}, (login, senha, done) => {

        Usuario.findOne({where: {login: login}}).then((usuario) => {
          
            if(!usuario) {
                return done(null, false, { message: "Usuário não encontrado"});
            } else {
                bcrypt.compare(senha, usuario.senha, (erro, found) => {
                    if (found) {
                        return done(null, usuario);
                    } else {
                        return done(null, false, { message: "Senha Incorreta"});
                    }
                });
            }
        });
    }));

    passport.serializeUser((usuario, done) => {
        done(null, usuario.id);
    });

    passport.deserializeUser((id, done) => {

        Usuario.findByPk(id, (err, usuario) => {
            done(err, usuario);
        });

    });
}