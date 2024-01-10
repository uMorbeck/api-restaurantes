import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
    {
        nome: {
            type: String
        },

        endereço: {
            type: String
        },
        
        horario: {
            type: String
        }
    }
)

export default mongoose.model("Restaurant", restaurantSchema)