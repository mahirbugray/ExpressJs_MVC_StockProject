const express = require('express');
const router = express.Router();

const productController = require('../controllers/products')

router.get('/',  productController.GetAllProducts);
 

router.get('/add', (req, res, next) => {
    res.render('addProduct', { title: 'New Product'});
  });

router.post('/add', (req, res, next) => {
    // console.log(req.body);
    productController.productList.push({
      Id:5, Name:req.body.Name, Price:req.body.Price, ImageUrl: '/images/' + req.body.ImageUrl
  })
  res.redirect('/products');
});

router.get('/detail/:id', (req, res) => {
    const id = req.params.id
    const product = productController.productList.find(p => p.Id == id)
    res.render('productDetail', {urun:product} );
})

module.exports = router;