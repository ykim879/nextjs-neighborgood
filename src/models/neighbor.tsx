import { v4 as uuidv4 } from 'uuid';
import mongoose, { Schema } from 'mongoose';

export interface INeighbor {
    id: string;
    name: string;
    img: string;
    headline: string;
    description: string;
    //todo location
    zipcode: number;
  }

const NeighborSchema: Schema = new Schema({
    id: {
      type: String,
      default: uuidv4,
      unique: true,
    },
    name: { type: String, required: true },
    img: { type: String, required: true },
    headline: { type: String, required: true },
    description: { type: String, required: true },
    zipcode: { type: Number, required: true },
  });
  
  // Create and export the Neighbor model
const Neighbor =  mongoose.models.Neighbor || mongoose.model<INeighbor>('Neighbor', NeighborSchema);
export default Neighbor;