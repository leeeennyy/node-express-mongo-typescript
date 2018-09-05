import { Document } from 'mongoose';

export interface Pokemon extends Document {
    nationalDexNumber: number,
    name: string,
    region: string
}