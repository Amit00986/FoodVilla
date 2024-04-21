const ResturantModel = require('../models/index');

const createResturant = async (req, res) => {
    try {
        const data = req.body;
        const createdData = await ResturantModel.create(data);

        return res.status(201).json(createdData)

    } catch (error) {
        throw new Error('ERROR ');
    }
};


const getList = async (req, res) => {
    try {
        const data = await ResturantModel.find();

        // res.status(200).json({
        //     success:true,
        //     resturantList:data
        // })

        return res.status(200).json(data)
    } catch (error) {
        throw new Error('ERROR');
    }
};


module.exports = {
    createResturant,
    getList
}