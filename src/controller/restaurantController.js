import Restaurant from '../model/restaurantModel.js';

class RestaurantController {
    async createRestaurant(req, res) {
        try {
            const {nome, endereço, horario} = req.body;

            const newRestaurant = await Restaurant.create({
                nome,
                endereço,
                horario
            });

            res.status(201).json(newRestaurant);
        } catch(err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error"});
        }
    }

    async getList(req, res) {
        try {
            const restaurantList = await Restaurant.find();

            res.status(200).json(restaurantList);
        } catch(err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error"});
        }
    }

    async getRestaurant(req, res) {
        try {
            const {id} = req.params;

            const restaurant = await Restaurant.findById(id);

            if (!restaurant){
                res.status(404).json({error: "Restaurant not found"});
            }

            res.status(200).json(restaurant);
        } catch(err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error"});
        }
    }

    async updateRestaurant(req, res) {
        try {
            const {nome, endereço, horario} = req.body;

            const restaurant = await Restaurant.findOne({nome:{$eq: nome}});
            
            if (!restaurant){
                res.status(404).json({error: "Restaurant not found"});
            }
            
            await restaurant.updateOne({
                nome,
                endereço,
                horario
            });
            
            res.status(200).json(req.body);
        } catch(err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error"});
        }
    }

    async deleteRestaurant(req, res) {
        try {
            const {nome} = req.body;
            
            const restaurant = await Restaurant.findOne({nome:{$eq: nome}});
            
            if (!restaurant){
                res.status(404).json({error: "Restaurant not found"});
            }
            
            await restaurant.deleteOne();
            
            res.status(200).json({message: "Restaurant deleted"});
        } catch(err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error"});
        }
    }
};

export default new RestaurantController();