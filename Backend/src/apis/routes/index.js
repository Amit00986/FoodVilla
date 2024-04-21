
const express = require('express');

const router = express.Router();

const ResturnatController = require('../controllers/index');

router.post('/create', async (req, res) => {
    try {

        const data = await ResturnatController.createResturant(req, res);

    } catch (error) {
        throw new Error('route')
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await ResturnatController.getList(req, res);
    } catch (error) {
        throw new Error('route')
    }

});

module.exports = router