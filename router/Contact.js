const express = require("express");
const ContactUs = require("../models/contactSchema"); 
const router = express.Router();

// Contact Us 
router.post("/contactUs", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newMessage = new ContactUs({
        name,
        email,
        message,
    });

    try {
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (err) {
        res.status(500).json({ error: "Server error: " + err.message });
    }
});

module.exports = router;
