let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question cannot be blank.'],
        minlength: [8, 'Question must at least 8 characters.']
    },

    optionone: {
        type: String,
        required: [true, 'Option 1 cannot be blank.'],
        minlength: [3, 'Option 1 must be at least 3 charactors.']
    },
    optiontwo: {
        type: String,
        required: [true, 'Option 2 cannot be blank.'],
        minlength: [3, 'Option 2 must be at least 3 charactors.']
    },
    optionthree: {
        type: String,
        required: [true, 'Option 3 cannot be blank.'],
        minlength: [3, 'Option 3 must be at least 3 charactors.']
    },
    optionfour: {
        type: String,
        required: [true, 'Option 4 cannot be blank.'],
        minlength: [3, 'Option 4 must be at least 3 charactors.']
    },
    optiononevote: {
        type: Number,
        default: 0
    },
    optiontwovote: {
        type: Number,
        default: 0
    },
    optionthreevote: {
        type: Number,
        default: 0
    },
    optionfourvote: {
        type: Number,
        default: 0
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

mongoose.model('Question', QuestionSchema);