const express=require('express')
const controllers = require('../controllers')
const router=express.Router()

router.get('/', async(req, res, next)=>{
    const data=req.context
    const itemCtr=controllers.item.instance();
    data.coffee=await itemCtr.get({category:'Coffee'});
    data.tea=await itemCtr.get({category:'Tea'});
    data.chocolate=await itemCtr.get({category:'Hot Chocolate'});
    data.pastries=await itemCtr.get({category:'Pastries'});
    data.sandwich=await itemCtr.get({category:'Sandwich'});
    data.smoothies=await itemCtr.get({category:'Smoothies'});
    res.render('home', data)
})

router.get('/blog', (req, res, next)=>{
    const data=req.context
    res.render('blog', data)
})

router.get('/menu', async(req, res, next)=>{
    const data=req.context
    const itemCtr=controllers.item.instance();
    data.coffee=await itemCtr.get({category:'Coffee'});
    data.tea=await itemCtr.get({category:'Tea'});
    data.chocolate=await itemCtr.get({category:'Hot Chocolate'});
    data.pastries=await itemCtr.get({category:'Pastries'});
    data.sandwich=await itemCtr.get({category:'Sandwich'});
    data.smoothies=await itemCtr.get({category:'Smoothies'});
    res.render('menu', data)
})

router.get('/items', async (req, res, next)=>{
    const filters=req.query;
    const itemCtr=controllers.item.instance();
    const items=await itemCtr.get(filters);
    res.json({items});
})

router.post('/order', async (req, res, next)=>{
    const orderData=req.body;
    //res.json(orderData);
    const orderCtr=controllers.order.instance();
    const order=await orderCtr.post(orderData);
    res.json(order);
})


module.exports=router