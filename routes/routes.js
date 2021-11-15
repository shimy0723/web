const express =require('express');
const router = express.Router();

// Home
router.get('/',(req,res) => {
    res.render('index');
})

// Product
router.get('/product',(req,res) => {
    res.render('product');
})

// Mixology
router.get('/mixology',(req,res) => {
    res.render('mixology');
})

// Crafting
router.get('/crafting',(req,res) => {
    res.render('crafting');
})

// Sense
router.get('/sense',(req,res) => {
    res.render('sense');
})

// Contact
router.get('/contact',(req,res) => {
    res.render('contact');
})

// 404-Page
router.use((req,res,next) => {
    res.status(404).render('404');
})

router.get("/api", (req,res) => {

    /*
        API key here - hidden from people
        node-fetch the unsplash api....
        return the json data
    */

})

module.exports = router;