const productList = [
    {Id:1, Name:'Lenovo Bilgisayar', Price:'30000', ImageUrl:'/images/lenovoi7.jpg'},
    {Id:2, Name:'Asus Bilgisayar', Price:'35000', ImageUrl:'/images/asus.jpg'},
    {Id:3, Name:'IPhone 15 Telefon', Price:'60000', ImageUrl:'/images/IPhone14.jpg'},
    {Id:4, Name:'Canon Yazıcı', Price:'8000', ImageUrl:'/images/canon.jpg'}
]

exports.GetAllProducts = (req, res) => {
    res.render('products', { title: 'Product List',
     products: productList  });
  };

exports.productList = productList;