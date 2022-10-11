const { Shop } = require('../models')
module.exports = {
    // get all Shop
    async index(req, res) {
        try {
            const shops = await Shop.findAll()
            res.send(shops)
        } catch (err) {
            res.status(500).send({
                error: 'The Shops information was incorrect'
            })
        }
    },
    // create Shop
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const shop = await Shop.create(req.body)
            res.send(shop.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Shop incorrect'
            })
        }
    },
    // edit Shop, suspend, active
    async put(req, res) {
        try {
            await Shop.update(req.body, {
                where: {
                    id: req.params.shopId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Shop incorrect'
            })
        }
    },
    
// delete Shop
async remove(req, res) {
        try {
            const shop = await Shop.findOne({
                where: {
                    id: req.params.shopId
                }
            })
            if (!shop) {
                return res.status(403).send({
                    error: 'The Shop information was incorrect'
                })
            }
            await shop.destroy()
            res.send(shop)
        } catch (err) {
            res.status(500).send({
                error: 'The Shop information was incorrect'
            })
        }
    },
    // get Shop by id
    async show(req, res) {
        try {
            const shop = await Shop.findByPk(req.params.shopId)
            res.send(shop)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The Shop information was incorrect'
            })
        }
    }
}