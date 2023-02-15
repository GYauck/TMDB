const express = require("express");
const User = require("../models/Users");
const Favourites = require("../models/Favourites")
const router = express.Router();
const {generateToken, validateToken} = require("../config/tokens");
const { validateAuth } = require("../middlewares/auth");

router.post("/register", (req, res) => {
    User.create(req.body)
    .then((user)=> {res.status(201).send(user)})
})

router.post("/login", (req, res) => {
    const {email, password} = req.body

    User.findOne({where:{ email }})
    .then(user => {
        if(!user) return res.sendStatus(401)
        user.validatePassword(password)
        .then(isValid => {
            if(!isValid) return res.sendStatus(401)
            const payload = {
                id: user.id,
                email: user.email,
                name: user.name,
                lastname: user.lastname,
            }
            const token = generateToken(payload)
            res.cookie("token", token)
            res.send(payload)

        })
    });
});


router.get("/me", validateAuth, (req, res) => {
    res.send(req.user);
  });


router.post("/favourites", (req,res) => {
    Favourites.create(req.body)
    .then((favourite)=> res.send(favourite))

})

router.get("/user/:id", (req, res) => {
    const {id} = req.params
    Favourites.findAll({where: {userId: id} })
    .then((favorite)=> res.send(favorite))
})

router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.sendStatus(204);
  });

router.delete("/favourites/:id",(req,res)=> {
    Favourites.destroy({
        where:{
            userId : req.params.id,
            movieId :req.body.movieId
        }
    })
    .then(()=>res.sendStatus(202))
})



module.exports = router;

/* router.post("/favourites", (req,res) => {
    
    const {userId,movieId} = req.body
    console.log(userId,movieId);
    Favourites.findOne({
        where:{ userId,movieId}
    }).then((movieFinded)=> {
        if(movieFinded !== null) {
            Favourites.create(req.body)
            
        }

    }).then((movieFinded)=> res.send(movieFinded))
    

}) */