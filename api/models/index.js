const User = require("./Users")
const Favourites = require("./Favourites")

User.hasMany(Favourites , {as : "Fav"})
Favourites.belongsTo(User)



module.exports = {User, Favourites}