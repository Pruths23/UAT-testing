// authModel.ts
import { Schema, Document, Model } from 'mongoose';

export interface IAuth extends Document {
  userId: string;
  token: string;
  exp