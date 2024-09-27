const express = require('express')
const AboutUs = require('../models/aboutSchema')
const router = express.Router();


// POST About
router.post("/aboutUs", async (req, res) => {
    const {heading, subHeading, discription} = req.body

    if(!heading || !subHeading || !discription){
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newAboutUs = new AboutUs({
        heading,
        subHeading,
        discription
    }); 

    try{
        const savedAboutUs = await newAboutUs.save()
        res.status(201).json(savedAboutUs)
    } catch (err){
        res.status(500).json({error: "Server error :" + err.message})
    }
    
})

    // GET About
    router.get("/aboutUs", async (req, res) => {
        try {
            const aboutUsData = await AboutUs.find(); 
            res.status(200).json(aboutUsData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Server error: " + err.message });
        }
    });

module.exports = router;
