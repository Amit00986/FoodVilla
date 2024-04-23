const ResturantModel = require('../models/index');
const { createUUID } = require('../../common/UUID/UUIDV4')

const createResturant = async (req, res) => {
    try {
        const Id = createUUID();

        console.log(Id)

        const data = req.body;

        const createdData = await ResturantModel.create({ ...data, Id });

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

        return res.status(200).json(data);

    } catch (error) {
        throw new Error('ERROR');
    }
};


const addFoodItem = async (req, res) => {
    try {
        const Id = req.params.id;
        const addFoodItemData = req.body;

        // Find the restaurant by Id and update the menu by pushing the new food item
        const updatedRestaurant = await ResturantModel.findOneAndUpdate(
            { Id: Id },
            { $push: { menu: addFoodItemData } },
            { new: true }
        );

        return res.status(200).json(updatedRestaurant);
    } catch (error) {
        // Handle error
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getById = async (req, res) => {
    try {
        const Id = req.params.id;
        const data = await ResturantModel.findOne({ Id: Id });
        return res.status(200).json(data);
    } catch (error) {

        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    createResturant,
    getList,
    addFoodItem,
    getById
}