import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    student_id: {
        type: Number,
        required: true,
        unique: true
    },
    roles: [
        {
            roleName: {type: String, required: true},
            permission: {type: [String], default: []},
        }
    ],
    password: {
        type: String,
        required: false
    },

}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

export default User;