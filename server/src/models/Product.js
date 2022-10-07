module.exports = ( sequelize, DataTypes ) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        picture: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        description: DataTypes.TEXT,
        status: DataTypes.STRING,
    })
    return Product
}