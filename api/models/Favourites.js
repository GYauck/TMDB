const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/db")


class Favourites extends Model {
  

}

Favourites.init(
    {
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      poster_path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "favourites",
    }
  );


  module.exports = Favourites