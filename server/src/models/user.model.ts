import { Schema, model, Model, models } from "mongoose";

enum UserRoleEnum {
  USER = "User",
  ADMIN = "Admin",
}

type UserShemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  addres: string;
  role: UserRoleEnum;
  orderedFoods: Schema.Types.ObjectId;
  ttl: Date;
  isVerified: boolean;
};

const UserSchema = new Schema<UserShemaType>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  addres: { type: String, default: "" },
  isVerified: { type: Boolean, default: false },
  orderedFoods: [
    { type: Schema.Types.ObjectId, ref: "FoodOrder", required: true },
  ],
  phoneNumber: { type: String, default: "" },
  role: {
    type: String,
    enum: Object.values(UserRoleEnum),
    default: UserRoleEnum.USER,
  },
  ttl: { type: Date, default: Date.now() + 24 * 60 * 60 * 1000 },
});

export const UserModel: Model<UserShemaType> =
  models["User"] || model("User", UserSchema);
