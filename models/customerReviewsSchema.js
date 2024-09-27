const mongoose = require('mongoose')

const customerReviewsSchema = mongoose.Schema({
    reviews:{
        type: String,
        required: true,
        trim: true
    },
    reviewerName:{
        type: String,
        required: true,
        trim: true
    },
    reviewerImage:{
        type: String,
        required: true
    }
},{
    timestamps: true
})
module.exports = mongoose.model("customerReviewsSchema", customerReviewsSchema)