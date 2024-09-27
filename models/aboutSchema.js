const mongoose = require('mongoose')

const aboutSchema = mongoose.Schema({
    heading:{
        type: String,
        required: true,
        trim: true,
    },
    subHeading: {
        type: String,
        required: true,
        trim: true
    },
    discription:{
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("AboutUs", aboutSchema)