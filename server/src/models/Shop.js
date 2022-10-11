module.exports = ( sequelize, DataTypes ) => {
    const Shop = sequelize.define('Shop', {
        name: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        location: DataTypes.TEXT,
        
    })
    return Shop
}