import { v4 as uuidv4 } from 'uuid';
import mongoose, { Document, Schema } from 'mongoose';

export interface IGood {
  id: string;
  name: string;
  img?: string;
  description: string;
  cost: string;
  available_count: number | null;
  effective_from?: Date;
  effective_to?: string;
  neighborhoodId: string;
  type: string;
  zipCode?: number;
}

const goodSchema: Schema = new Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  name: { type: String, required: true },
  img: { type: String },
  description: { type: String, required: true },
  cost: { type: String, required: true },
  available_count: { type: Number, default: null },
  effective_from: { type: Date },
  effective_to: { type: String },
  neighborhoodId: { type: String, required: true },
  type: { type: String, required: true },
  zipCode: { type: Number, required: false }
});

const Good = mongoose.models.Good || mongoose.model<IGood>('Good', goodSchema);
export default Good;