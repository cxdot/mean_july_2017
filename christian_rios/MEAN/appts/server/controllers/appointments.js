let mongoose = require('mongoose');
let User = mongoose.model("User");
let Appointment = mongoose.model("Appointment");

class AppointmentsController {
    index(req, res) {
        Appointment.find({}).populate('user').exec((err, appointments) => {
            if (err) { return res.json(err); }
            return res.json(appointments);
        });
    }
    create(req, res) {
        Appointment.create(req.body, (err, appointment) => {
            if (err) { return res.json(err); }
            User.findByIdAndUpdate(req.body.user, { $push: { appointments: appointment._id } }, { new: true }, (err, user) => {
                if (err) { return res.json(err); }
                return res.json(appointment);
            });
        });
    }
    delete(req, res) {
        Appointment.findByIdAndRemove(req.params.id)
            .exec((err, appointment) => {
                if (err) { return res.json(err); }
                return res.json(appointment);
            });
    }
}

module.exports = new AppointmentsController();