const express = require('express')
const customerReviewsSchema = require('../models/customerReviewsSchema')
const router = express.Router();

router.post("/reviews", async (req, res) => {
    const {reviews, reviewerName, reviewerImage} = req.body

    if(!reviews || !reviewerName || !reviewerImage){
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newReview = new customerReviewsSchema({
        reviews,
        reviewerName,
        reviewerImage
    }); 

    try{
        const savedReviews = await newReview.save()
        res.status(201).json(savedReviews)
    } catch (err){
        res.status(500).json({error: "Server error :" + err.message})
    }
    
}) 

 // GET REVIEWS
 router.get("/reviews", async (req, res) => {
    try {
        const reviewsData = await customerReviewsSchema.find(); 
        res.status(200).json(reviewsData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error: " + err.message });
    }
});


module.exports = router;
