// userModel.ts
import { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  role: string;
}

export const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
});

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

// userController.ts
import { Request, Response } from 'express';
import { IUser, User } from '../models/userModel';
import { userService } from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;
    await userService.createUser(user);
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// userService.ts
import { IUser, User } from '../models/userModel';

export const getUsers = async () => {
  return await User.find({});
};

export const createUser = async (user: IUser) => {
  return await User.create(user);
};