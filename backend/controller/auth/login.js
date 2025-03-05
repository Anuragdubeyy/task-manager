const mongoose = require("mongoose");
const { Schema } = mongoose;

// Base user schema
const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    access_token: { type: String },
    refresh_token: { type: String },
    registrationToken: { type: String },
    status: {
      type: String,
      enum: ["Active", "Pending", "Expired"],
      required: true,
    },
    role: {
      type: String,
      enum: ["Superadmin", "Admin", "Manager", "Employee"],
      required: true,
    },
    googleId: {
      type: String,
    },
    displayName:{
      type: String,
    },
    google_access_token: { type: String },
    google_refresh_token: { type: String },

    team_id: { type: Schema.Types.ObjectId, ref: "Team" }, // Optional array field for Superadmin
  },
  { timestamps: true, strict: false } // Here is where we add { strict: false }
);

const User = mongoose.model("User", userSchema);

// Discriminators
const Superadmin = User.discriminator(
  "Superadmin",
  new Schema({
    team_id: [{ type: Schema.Types.ObjectId, ref: "Team", default: [] }], // Array for Superadmin
  })
);

const Admin = User.discriminator(
  "Admin",
  new Schema({
    team_id: { type: Schema.Types.ObjectId, ref: "Team" }, // Single reference for Admin
  })
);

const Manager = User.discriminator(
  "Manager",
  new Schema({
    team_id: { type: Schema.Types.ObjectId, ref: "Team" }, // Single reference for Manager
  })
);

const Employee = User.discriminator(
  "Employee",
  new Schema({
    team_id: { type: Schema.Types.ObjectId, ref: "Team" }, // Single reference for Employee
  })
);
module.exports = { User, Superadmin, Admin, Manager, Employee };
