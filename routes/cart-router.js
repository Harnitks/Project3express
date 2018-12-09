const express= require("express");
const Carts = require("../models/cart-model.js");
//const Users = require("../models/user-model.js");
const Products = require("../models/product-model.js");
const router = express.Router();

router.post("/addtocart", (req,res,next)=>{
    console.log("req.params   ::::::",req.body);
    const {key,price}  = req.body;
    console.log("key is :::",key);
    console.log("loggedInUser :::",req.user);
    const user = req.user;
    console.log("here we start............")
    if(user!=undefined){
        Carts.findOne({user:{$eq:user}})
        .then(cartEntry=>{
            console.log("cart found");
            if(cartEntry){
                console.log("cart is",cartEntry);
                cartEntry.products.push(key); 
                cartEntry.cartTotal = cartEntry.cartTotal +price;              
                console.log("cart is",cartEntry);
            }
            Carts.update({user: user}, {
                products: cartEntry.products,
                cartTotal: cartEntry.cartTotal
            }, function(err, affected, resp) {
               console.log(resp);
            })
        })
        .catch(err=>next(err));
        res.send("/showcart");
    }
})

//   router.post("/myproducts",(req,res,next)=>{
//     console.log("inside myproducts", req.body);
            
//       const {loggedInUser} = req.body;
//       if(loggedInUser!=undefined){
//           Carts.findOne({user:{$eq:loggedInUser}})
//           .then(cart=>{
//               var numberOfProducts=cart.products.length;
//             console.log("numberOfProduct is :::",numberOfProducts);
//             //res.locals.numberOfProducts = numberOfProducts;
            
//             res.json({"numbers":numberOfProducts});
//             res.json({"numbers":10});

//         })
//           .catch(err=>next(err));

//           }
      
// })


router.post("/myproducts",(req,res,next)=>{
    //console.log("inside myproducts", req.body);
    Carts.findOne({user:{$eq:req.user._id}})
      .then(cart=>{
        var numberOfProducts=cart.products.length;
        console.log("numberOfProduct is :::",numberOfProducts);
        //res.locals.numberOfProducts = numberOfProducts;
        res.json({"numbers":numberOfProducts});
      })
      .catch(err=>next(err));
})
router.post("/cartitems",(req,res,next)=>{
    if(req.user!=undefined){
        console.log("inside cart items in cart router", req.user);
        Carts.findOne({user:{$eq:req.user._id}})
            .then(cart=>{
                var products = cart.products;
                console.log(products);
                var productsArray = [];
                var productcount = 0;
                products.forEach(product => {
                    productcount++;
                    console.log(productcount);
                    Products.findById(product).then(productDoc=>{
                        console.log("----------------------product ", productcount);
                        //console.log(productDoc);
                        productsArray.push(productDoc);                
                        //console.log("productsJson till now ", productsJson);                    
                    }).catch(err=>next(err));                
                });
                console.log("----------------------------------ENd of for each loop of finding products in cart items----------------");                
                console.log("productsArray    ::::::::",productsArray );
                res.json({"products":productsArray});
        }).catch(err=>next(err));
    }
})
module.exports= router;