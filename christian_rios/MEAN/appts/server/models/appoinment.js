let mongoose = require('mongoose');
let validator = require('node-mongoose-validator');

let AppointmentSchema = new mongoose.Schema({
    complaint: {
        type: String,
        required: [true, 'Complaint cannot be blank.'],
        minlength: [10, 'Complaint cannot be less than 10 characters.'],
    },
    date: {
        type: String,
        required: [true, "Data must be entered."],
    },
    time: {
        type: String,
        required: [true, "Time must be entered."],
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

// AppointmentSchema.path('date').validate(validator.$isAfter({ msg: 'Date must be in the future.' }));


mongoose.model("Appointment", AppointmentSchema);