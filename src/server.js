const express = require("express");
const seqsearch = require("./routes/app");
const rsearchcar = require("./routes/searchcar");
const session = require("express-session");
const flash = require("connect-flash");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
require("./config/auth")(passport);

const appServer = express();
require("./index");
require("./config/database");

/* Configura a Session */
appServer.use(session({
    secret: "searchcar2020",
    resave: true,
    saveUninitialized: true,
}));
appServer.use(passport.initialize());
appServer.use(passport.session());
appServer.use(flash());

/* Middleware*/
appServer.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
});

appServer.engine("handlebars", handlebars({ defaultLayout: "main" }));
appServer.set("view engine", "handlebars");

appServer.use(bodyParser.urlencoded({ extended: false }));
appServer.use(bodyParser.json());

appServer.use(express.static("views/resources/images"));
appServer.use(express.static("views/resources/css"));

appServer.use(express.json());

appServer.use("/searchcar", rsearchcar);
appServer.use("/app", seqsearch);

appServer.get("/", (req, res) => {
    res.render("pesquisa");
});

appServer.get("/resultadoPesquisa", function(req, res) {
    res.render("resultado");
});
appServer.get("/admin", (req, res) => {
    res.render("admin");
});
appServer.get("/login", (req, res) => {
    res.render("login");
});
appServer.post("/login", (req, res, next) =>{
    console.log("Passou aqui - Post route");
    passport.authenticate("local",
        { 
            successRedirect: "/admin", 
            failureRedirect: "/login", 
            failureFlash: true
        },
    )(req, res, next)
});

appServer.listen(8082);