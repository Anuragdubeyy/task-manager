const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
    companyName:{ type: String, required: true, unique: true  },
    admin: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);

module.exports = { Team };

//    team_id: { type: String, required: true },