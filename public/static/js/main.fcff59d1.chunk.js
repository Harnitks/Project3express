(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(61)},32:function(e,t,a){},36:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=a(65),i=(a(32),a(34),a(25)),s=a(2),u=a(3),m=a(5),d=a(4),p=a(6),h=a(66),g=a(62),E=(a(36),a(14)),f=a(7),b=a.n(f),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={fullName:"",email:"",originalpassword:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(E.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),b.a.post("/api/signup",this.state,{withCredentials:!0}).then(function(e){console.log("Sign Up Page",e.data);var a=e.data.userDoc;t.props.onUserChange(a)}).catch(function(e){console.log("SIGNUP PAGE ERROR",e),alert("Sorry! Something went wrong")})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement("section",{className:"SignUp Page"},r.a.createElement("h2",null,"You are signed up!"),r.a.createElement("p",null,"Welcome ,",this.props.currentUser.fullName,"! Your user ID is",r.a.createElement("b",null,this.props.currentUser._id))):r.a.createElement("section",{className:"inner-container"},r.a.createElement("div",{className:"header"},"Sign Up"),r.a.createElement("div",{className:"box"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:""},"Full Name:",r.a.createElement("input",{value:this.state.fullName,onChange:function(t){return e.genericSync(t)},type:"text",name:"fullName",placeholder:"Laura",className:"login-input"}))),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:""},"Email:",r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"example@example.com",className:"login-input"}))),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:""},"Password:",r.a.createElement("input",{value:this.state.password,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"*****",className:"login-input"}))),r.a.createElement("button",{className:"login-btn"},"Sign Up"))))}}]),t}(n.Component),y=a(64),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={email:"",originalPassword:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(E.a)({},a,n))}},{key:"handleSumbit",value:function(e){var t=this;e.preventDefault(),b.a.post("/api/login",this.state,{withCredentials:!0}).then(function(e){console.log("LOGIN PAGE",e.data);var a=e.data.userDoc;t.props.onUserChange(a)}).catch(function(e){console.log("LOGIN PAGE ERROR",e),alert("Sorry! Something went wrong!")})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(y.a,{to:"/"}):r.a.createElement("section",{className:"inner-container"},r.a.createElement("div",{className:"header"},"Login"),r.a.createElement("div",{className:"box"},r.a.createElement("form",{onSubmit:function(t){return e.handleSumbit(t)}},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:""},"Email:",r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"example@example.com",className:"login-input"}))),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:""},"Password:",r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"****",className:"login-input"}))),r.a.createElement("button",{className:"login-btn"},"LOG IN"))))}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.label;return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:t,onChange:function(){return e.props.syncSelectCheckBox(t)}}),r.a.createElement("span",{className:"checkMark"},t)))}}]),t}(n.Component),O=["XS","S","M","L","XL"],j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).createCheckbox=function(e){return r.a.createElement(C,{classes:"filters-size",label:e,key:e,syncSelectCheckBox:a.props.syncSelectCheckBox})},a.createCheckBoxes=function(){return O.map(a.createCheckbox)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"filters"},r.a.createElement("h4",{className:"title"},"Sizes:"),this.createCheckBoxes())}}]),t}(n.Component),k=a(60);function N(e){return"/product-details/".concat(e._id)}var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"sortByPriceAsc",value:function(){console.log("My list before getting sorted",this.props.filteredProducts);var e=this.props.filteredProducts;e.sort(function(e,t){return e.price<t.price?1:e.price>t.price?-1:0}),this.props.syncFilteredArray(e)}},{key:"sortByPriceDsc",value:function(){var e=this.props.filteredProducts;e.sort(function(e,t){return e.price>t.price?1:e.price<t.price?-1:0}),this.props.syncFilteredArray(e)}},{key:"render",value:function(){var e=this,t=this.props.filteredProducts;return console.log(this.props.shouldLogin),this.props.shouldLogin?r.a.createElement(y.a,{to:"/login-page"}):r.a.createElement("section",null,r.a.createElement("h1",null,"Choose your product"),r.a.createElement(j,{syncSelectCheckBox:this.props.syncSelectCheckBox}),r.a.createElement("button",{onClick:function(t){return e.sortByPriceDsc(t)}},"lowest To highest price"),r.a.createElement("button",{onClick:function(t){return e.sortByPriceAsc(t)}},"highest To lowest price"),r.a.createElement("ul",null,t.map(function(t){return r.a.createElement("li",{key:t._id},r.a.createElement(k.a,{to:N(t)},r.a.createElement("img",{src:t.image,alt:t.name})),r.a.createElement("p",null," ",t.price," Euro"),r.a.createElement("p",null,t.name),r.a.createElement("p",null,t.brand),r.a.createElement("button",{onClick:function(a){return e.props.addToCart(t._id,t.name,t.image,t.price,a)}},"Add to cart"))})))}}]),t}(n.Component),P=a(63),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={loggedInUser:a.props.currentUser},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.currentUser);var t=this.state.loggedInUser;return console.log("-----",t),r.a.createElement("section",{className:"NavBar"},r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(P.a,{to:"/home",className:"navbar-item"},r.a.createElement("img",{src:"https://tbncdn.freelogodesign.org/f92673bd-6759-4602-b2d2-4ac6e6914bfb.png?1544276767910",alt:""})),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"})),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(P.a,{className:"navbar-item",exact:!0,to:"/home"},"Home"),r.a.createElement(P.a,{to:"/product-list-man",className:"navbar-item"},"Man"),r.a.createElement(P.a,{to:"/product-list-women",className:"navbar-item"},"Women"),r.a.createElement(P.a,{className:"navbar-item",to:"/seller-form"},"Add Products"),this.props.currentUser&&r.a.createElement(P.a,{className:"navbar-item",to:"/see-products"},"See Products"),r.a.createElement(P.a,{className:"navbar-item",to:"/adminlistpage"},"Companies"),r.a.createElement(P.a,{className:"navbar-item",to:"/adminrefusedpage"},"Refused Application"),r.a.createElement(P.a,{className:"navbar-item",to:"/adminacceptpage"},"Accepted"),r.a.createElement(P.a,{className:"navbar-item",to:"/adminsettings"},"Settings"),")")),this.props.currentUser?r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement(P.a,{to:"/showcart"},"Mycart -",this.props.cartProductNumbers),r.a.createElement("b",null,this.props.currentUser.fullName),r.a.createElement("button",{onClick:function(){return e.props.logoutClick()},className:"button is-light"},"LOG OUT")))):r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement(P.a,{className:"button is-primary",to:"/signup-page"},"Sign Up"),r.a.createElement(P.a,{className:"button is-light",to:"/login-page"},"Log In"))))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){console.log(this.state);var e=this.props,t=e.searchFunction,a=e.value;return r.a.createElement("form",null,r.a.createElement("label",null,"Search Item :",r.a.createElement("input",{type:"text",name:"search",placeholder:"Search your item",onChange:function(e){return t(e)},value:a})))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"HomePage"},r.a.createElement(A,{searchFunction:function(t){return e.props.handleSearch(t)},value:this.props.searchString}),this.props.searchString?r.a.createElement(w,{filteredProducts:this.props.filteredProducts,syncFilteredArray:this.props.syncFilteredArray,syncSelectCheckBox:this.props.syncSelectCheckBox,addToCart:this.props.addToCart,shouldLogin:this.props.shouldLogin}):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(k.a,{to:"/product-list-man"},r.a.createElement("img",{src:"https://i.pinimg.com/originals/27/6f/88/276f88aef0ad1b5514509f7bfdcebd44.jpg",alt:"man"}))),r.a.createElement("div",null,r.a.createElement(k.a,{to:"/product-list-women"},r.a.createElement("img",{src:"http://assets.myntassets.com/assets/images/1996368/2017/7/28/11501225258060-Rain--Rainbow-Women-Dresses-9391501225257859-1.jpg",alt:"women"})))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;console.log("inside mount"),b.a.get(""+"/api/products/".concat(t.productId),{withCredentials:!0}).then(function(t){console.log("Product Details",t.data),e.setState(t.data)}).catch(function(e){console.log("Phone Details",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this,t=this.state,a=t._id,n=t.image,c=t.name,l=t.brand,o=t.price,i=t.size,s=t.description;return this.props.shouldLogin?r.a.createElement(y.a,{to:"/login-page"}):r.a.createElement("section",{className:"ProductDetails"},r.a.createElement("h3",null,"Product Details"),r.a.createElement("img",{src:n,alt:c}),r.a.createElement("h3",null,c),r.a.createElement("p",null,"by",r.a.createElement("i",null,l)),r.a.createElement("b",null,"\u20ac",o),r.a.createElement("h4",null,i),r.a.createElement("button",{onClick:function(t){return e.props.addToCart(a,c,n,o,t)}},"Add to cart"),r.a.createElement("p",null,s),r.a.createElement("h2",null,"people may also like"))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={sku:"",category:"",subcategory:"",name:"",brand:"",image:"",description:"",price:"",size:"",isSubmitSuccessful:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),b.a.post("/api/seller-form",this.state,{withCredentials:!0}).then(function(e){console.log("Seller Form Page",e.data);e.data.userDoc;t.setState({isSubmitSuccessful:!0})}).catch(function(e){console.log("SELLER FORM ERROR",e),alert("Sorry! Something went wrong")}),this.setState({sku:"",category:"",subcategory:"",name:"",brand:"",image:"",description:"",price:"",size:""})}},{key:"changeValue",value:function(e){console.log(e.target.value),this.setState({selectValue:e.target.value})}},{key:"uploadImage",value:function(e){var t=this,a=e.target.files;console.log("File SELECTED",a[0]);var n=new FormData;n.append("fileSubmission",a[0]),b.a.post("/api/upload-file",n,{withCredentials:!0}).then(function(e){console.log("Upload Image",e.data),t.setState({image:e.data.fileUrl})}).catch(function(e){console.log("UPLOAD IMAGE ERROR",e),alert("Sorry! SOMETHING WENT WRONG")})}},{key:"render",value:function(){var e=this;return this.state.isSubmitSuccessful?r.a.createElement(y.a,{to:"/see-products"}):(console.log(this.state),r.a.createElement("section",null,r.a.createElement("h1",null,"Submit your brand"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:""},"SKU:",r.a.createElement("input",{value:this.state.sku,onChange:function(t){return e.setState({sku:t.target.value})},type:"number",name:"sku",placeholder:"12345"})),r.a.createElement("label",{htmlFor:""},"Category:",r.a.createElement("input",{value:this.state.category,onChange:function(t){return e.setState({category:t.target.value})},type:"text",name:"category",placeholder:"women or man"})),r.a.createElement("label",{htmlFor:""},"SubCategory:",r.a.createElement("input",{value:this.state.subcategory,onChange:function(t){return e.setState({subcategory:t.target.value})},type:"text",name:"subcategory",placeholder:"shirt or dresses"})),r.a.createElement("label",{htmlFor:""},"Brand:",r.a.createElement("input",{value:this.state.brand,onChange:function(t){return e.setState({brand:t.target.value})},type:"text",name:"brand",placeholder:"Lacoste"})),r.a.createElement("label",{htmlFor:""},"Name:",r.a.createElement("input",{value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},type:"text",name:"name",placeholder:"Lacoste - Shoes"})),r.a.createElement("label",{htmlFor:""},"Price:",r.a.createElement("input",{value:this.state.price,onChange:function(t){return e.setState({price:t.target.value})},type:"number",name:"price",placeholder:"60 \u20ac"})),r.a.createElement("label",{htmlFor:""},"Size:",r.a.createElement("input",{value:this.state.size,onChange:function(t){return e.setState({size:t.target.value})},type:"text",name:"size",placeholder:"S"})),r.a.createElement("label",{htmlFor:""},"Description:",r.a.createElement("input",{value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})},type:"text",name:"description",placeholder:" Made of cotton"})),r.a.createElement("label",{htmlFor:""},"Image:",r.a.createElement("input",{onChange:function(t){return e.uploadImage(t)},type:"file"})),r.a.createElement("img",{src:this.state.image,alt:""}),r.a.createElement("button",null,"Submit your application"),r.a.createElement("button",null,"Add your product"))))}}]),t}(n.Component);var R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"removeFromCart",value:function(e,t,a,n,c){var l=this;c.preventDefault();var o=e+"|"+t+"|"+a+"|"+n;if(null==this.props.currentUser)return console.log("you need to login to add product"),r.a.createElement(y.a,{to:"/login-page"});b.a.post("/api/removeFromcart",{productString:o,price:n},{withCredentials:!0}).then(function(e){l.props.setCartData()}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.productData,n=t.cartTotal;return r.a.createElement("section",{className:"MyCart"},r.a.createElement("h1",null,"My Cart"),r.a.createElement("table",{id:"mycart"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price")),a.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",null,r.a.createElement("img",{src:t.imagePath,alt:t.name})),r.a.createElement("th",null,r.a.createElement("p",null,t.name)),r.a.createElement("th",null,r.a.createElement("p",null,t.price)),r.a.createElement("th",null,r.a.createElement("button",{onClick:function(a){return e.removeFromCart(t.id,t.name,t.imagePath,t.price,a)}},"Remove")))}),r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null,"cart total is ",n)))),r.a.createElement(k.a,{to:"/order-form"},r.a.createElement("button",null,"Checkout")))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"PendingPage"},r.a.createElement("h1",null," Congratulations! Your Application was sent successfully."),r.a.createElement("p",null,"You will receive an email when the admin will accept your application"),r.a.createElement(k.a,{to:"/home"},"Home"))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,"We are sorry, your application has been refused by the admin!")}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("inside mount"),b.a.get("/api/see-products",{withCredentials:!0}).then(function(t){console.log("Product Details",t.data),e.setState(t.data)}).catch(function(e){console.log("Phone Details",e),alert("Sorry! Something went wrong on SEE PRODUCTS of SELLER.")})}},{key:"render",value:function(){var e=this.state,t=Object.values(e);console.log("----",this.props);var a=t.map(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,e.name),r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"by",r.a.createElement("i",null,e.brand)),r.a.createElement("b",null,"\u20ac",e.price),r.a.createElement("h4",null,e.size),r.a.createElement("p",null,e.description))});return r.a.createElement("section",null,this.props.accepted&&{productList:a},!this.props.productCheck.accepted&&!this.props.productCheck.rejected&&r.a.createElement(I,null),this.props.rejected?r.a.createElement(F,null):null)}}]),t}(n.Component);function B(e){return"/admindetailpage/".concat(e._id)}var M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={adminlist:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/adminlistpage",{withCredentials:!0}).then(function(t){console.log("ADMIN LIST",t.data),e.setState({adminlist:t.data})}).catch(function(e){console.log("CHECK USER ERROR or product List error",e),alert("Sorry!Something went wrong")})}},{key:"render",value:function(){var e=this.state.adminlist;return console.log(e),console.log(this.state.adminlist),r.a.createElement("section",null,r.a.createElement("h1",null,"Admin Page"),this.state.adminlist.map(function(e){return r.a.createElement("li",{key:e._id},r.a.createElement(k.a,{to:B(e)},"See Details"),r.a.createElement("p",null,e.name))}))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={accepted:!1,rejected:!1,isVerified:"notverified"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"acceptbutton",value:function(){var e=this;console.log("clicked accept");var t=this.props.match.params;b.a.put(""+"/api/products/".concat(t.productId,"/accept"),{},{withCredentials:!0}).then(function(t){e.setState({isVerified:"verified",accepted:!0},function(){return e.props.productCheck(e.state)}),console.log(t.data)}).catch(function(e){console.log("Phone Details",e),alert("Sorry! Something went wrong on Detail PAGE of Admin.")})}},{key:"rejectbutton",value:function(){var e=this;console.log("clicked reject");var t=this.props.match.params;b.a.put(""+"/api/products/".concat(t.productId,"/reject"),{},{withCredentials:!0}).then(function(t){e.setState({isVerified:"refused",rejected:!0},function(){return e.props.productCheck(e.state)}),console.log(t.data)}).catch(function(e){console.log("Phone Details",e),alert("Sorry! Something went wrong on Detail PAGE of Admin.")})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;console.log("inside mount"),b.a.get(""+"/api/products/".concat(t.productId),{withCredentials:!0}).then(function(t){console.log("Product Details",t.data),e.setState(t.data,function(){return e.props.productCheck(e.state)})}).catch(function(e){console.log("Phone Details",e),alert("Sorry! Something went wrong on Detail PAGE of Admin.")})}},{key:"render",value:function(){var e=this;console.log("PROPS IN ADMIN DETAIL",this.props);var t=this.state,a=t.image,n=t.name,c=t.brand,l=t.price,o=t.size,i=t.description,s=t.accepted,u=t.rejected;return s?r.a.createElement(y.a,{to:"/adminlistpage"}):u?r.a.createElement(y.a,{to:"/rejectedpage"}):r.a.createElement("section",null,r.a.createElement("h1",null,"Company Detail Page "),r.a.createElement("h3",null,n),r.a.createElement("p",null,"by",r.a.createElement("i",null,c)),r.a.createElement("b",null,"\u20ac",l),r.a.createElement("h4",null,o),r.a.createElement("p",null,i),r.a.createElement("img",{src:a,alt:n}),r.a.createElement("button",{onClick:function(){return e.acceptbutton()}},"Accept"),r.a.createElement("button",{onClick:function(){return e.rejectbutton()}},"Reject"))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",null,"Refused Page"))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",null,"Accepted Companies"))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={users:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("inside mount"),b.a.get("/api/all-users",{withCredentials:!0}).then(function(t){console.log("USER  Details",t.data),e.setState({users:t.data}),console.log("users",e.state.users)}).catch(function(e){console.log("Phone Details",e),alert("Sorry! Something went wrong on ADMIN SETTINGS PAGE.")})}},{key:"changeRole",value:function(e,t){var a=this;b.a.put(""+"/api/user/".concat(t),{userRole:e},{withCredentials:!0}).then(function(e){console.log("USER  Details",e.data),a.setState({users:e.data}),console.log("users",a.state.users)}).catch(function(e){console.log("Phone Details",e),alert("Sorry! Something went wrong on ADMIN SETTINGS PAGE.")})}},{key:"render",value:function(){var e=this,t=this.state.users;return r.a.createElement("section",null,r.a.createElement("h1",null,"Admin Settings"),t.map(function(t){return r.a.createElement("ul",null,r.a.createElement("li",{key:t._id},r.a.createElement("h1",null,t.fullName),r.a.createElement("p",null,t.role),r.a.createElement("p",null,t.email),r.a.createElement("button",{onClick:function(){e.changeRole("admin",t._id)}},"Set Admin"),r.a.createElement("button",{onClick:function(){e.changeRole("seller",t._id)}},"Set Seller")))}))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={shippingName:"",shippingAddress:"",shippingMobile:"",orderSucces:!1,orderId:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(E.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),null==this.props.currentUser)return console.log("you need to login to add product"),r.a.createElement(y.a,{to:"/login-page"});var a=JSON.stringify(this.props.productData);return b.a.post("/api/place-order",{shippingName:this.state.shippingName,shippingAddress:this.state.shippingAddress,shippingMobile:this.state.shippingMobile,orderedProducts:a},{withCredentials:!0}).then(function(e){t.props.setCartToZero(),t.setState({orderSucces:!0,orderId:e.data.orderId})}).catch(function(e){console.log(e)}),r.a.createElement(y.a,{to:"/"})}},{key:"render",value:function(){var e=this;if(this.state.orderSucces){var t="/orderSuccess?orderId="+this.state.orderId;return r.a.createElement(y.a,{to:t})}return r.a.createElement("section",null,r.a.createElement("div",{className:"Order-form"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"OrderForm"},r.a.createElement("h1",null,"Fill Your Details"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-25"},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{type:"text",value:this.state.name,placeholder:"Your Name",name:"shippingName",onChange:function(t){return e.genericSync(t)}})),r.a.createElement("div",{className:"col-25"},r.a.createElement("label",null,"Address: "),r.a.createElement("input",{type:"text",value:this.state.address,placeholder:"Your shiiping Address",name:"shippingAddress",onChange:function(t){return e.genericSync(t)}})),r.a.createElement("div",{className:"col-25"},r.a.createElement("label",null,"Mobile No:"),r.a.createElement("input",{type:"number",value:this.state.mobileno,placeholder:"064646464",name:"shippingMobile",onChange:function(t){return e.genericSync(t)}})),r.a.createElement("div",{class:"row"},r.a.createElement("input",{type:"submit",value:"Place your order"}))))))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",null,"Successfully Order Placed "),r.a.createElement("p",null,"Your Id is"))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).syncFilteredArray=function(e){a.setState({menProducts:e},function(){return console.log("State APP JS after setstate",a.state)})},a.syncSelectCheckBox=function(e){var t=a.state.selecteCheckBox,n=Object(i.a)(t);n.push(e);var r=a.filterSize();a.setState({selecteCheckBox:n,filteredProducts:r})},a.addToCart=function(e,t,n,r,c){c.preventDefault(),null===a.state.currentUser?a.setState({shouldLogin:!0}):b.a.post("/api/addtocart",{key:e,name:t,image:n,price:r},{withCredentials:!0}).then(function(e){a.setCartData()}).catch(function(e){console.log(e)})},a.setCartToZero=function(){a.setState({cartProductNumbers:0})},a.state={myproducts:[],currentUser:null,searchString:"",menProducts:[],womenProduct:[],filteredProducts:[],productArray:[],category:"women",selecteCheckBox:[],cartProductNumbers:0,productData:[],cartTotal:0,productCheck:[],shouldLogin:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/checkuser",{withCredentials:!0}).then(function(t){var a=t.data.userDoc;return e.syncCurrentUser(a),e.setCartData(),b.a.get("/api/products")}).then(function(t){var a=t.data.filter(function(e){return"man"===e.category}),n=t.data.filter(function(e){return"women"===e.category});e.setState({productArray:t.data,menProducts:a,womenProduct:n})}).catch(function(e){console.log("CHECK USER ERROR or product List error",e),alert("Sorry!Something went wrong")})}},{key:"syncCurrentUser",value:function(e){this.setState({currentUser:e})}},{key:"filterSize",value:function(){var e=this.state,t=e.selecteCheckBox;return e.productArray.filter(function(e){return e.size.some(function(e){return t.includes(e)})})}},{key:"setCartData",value:function(){var e=this;b.a.post("/api/myproducts",{},{withCredentials:!0}).then(function(t){var a=JSON.parse(t.data.products).Products;e.setState({productData:a,cartProductNumbers:t.data.numbers,cartTotal:t.data.cartTotal})}).catch(function(e){console.log(e)})}},{key:"logoutClick",value:function(){b.a.delete("/api/logout",{withCredentials:!0}).then(this.syncCurrentUser(null)).catch(function(e){console.log("LOGOUT ERROR",e),alert("Sorry! Something went wrong")})}},{key:"handleSearch",value:function(e){var t=e.target.value,a=this.state.productArray.filter(function(e){var a=t.toLowerCase();return e.name.toLowerCase().includes(a)||e.brand.toLowerCase().includes(a)||e.subcategory.toLowerCase().includes(a)||e.description.toLowerCase().includes(a)});this.setState({searchString:t,filteredProducts:a})}},{key:"handleProductCheck",value:function(e){var t=this;this.setState({productCheck:e},function(){return console.log("My State after productCheck function",t.state)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.currentUser,n=t.productData,c=t.cartTotal,l=(t.productArray,t.menProducts),o=t.womenProduct;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(D,{currentUser:a,cartProductNumbers:this.state.cartProductNumbers,logoutClick:function(){return e.logoutClick()}})),r.a.createElement(h.a,null,r.a.createElement(g.a,{path:"/home",render:function(){return r.a.createElement(U,{handleSearch:function(t){return e.handleSearch(t)},searchString:e.state.searchString,filteredProducts:e.state.filteredProducts,syncFilteredArray:e.syncFilteredArray,syncSelectCheckBox:e.syncSelectCheckBox,addToCart:e.addToCart,shouldLogin:e.state.shouldLogin})}}),r.a.createElement(g.a,{path:"/product-list-man",render:function(){return r.a.createElement(w,{currentUser:a,filteredProducts:l,syncFilteredArray:e.syncFilteredArray,syncSelectCheckBox:e.syncSelectCheckBox,addToCart:e.addToCart,shouldLogin:e.state.shouldLogin,sortByPriceDsc:e.sortByPriceDsc})}}),r.a.createElement(g.a,{path:"/product-list-women",render:function(){return r.a.createElement(w,{currentUser:a,filteredProducts:o,syncFilteredArray:e.syncFilteredArray,syncSelectCheckBox:e.syncSelectCheckBox,addToCart:e.addToCart,shouldLogin:e.state.shouldLogin})}}),r.a.createElement(g.a,{path:"/product-details/:productId",render:function(t){var a=t.match;return r.a.createElement(L,{addToCart:e.addToCart,match:a,shouldLogin:e.state.shouldLogin,filteredProducts:e.state.filteredProducts})}}),r.a.createElement(g.a,{path:"/seller-form",component:x}),r.a.createElement(g.a,{path:"/signup-page",render:function(){return r.a.createElement(v,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(g.a,{path:"/pending-page",component:I}),r.a.createElement(g.a,{path:"/see-products",render:function(t){return r.a.createElement(T,Object.assign({},t,{currentUser:a,productCheck:e.state.productCheck}))}}),r.a.createElement(g.a,{path:"/adminlistpage",component:M}),r.a.createElement(g.a,{path:"/adminrefusedpage",component:z}),r.a.createElement(g.a,{path:"/adminacceptpage",component:_}),r.a.createElement(g.a,{path:"/admindetailpage/:productId",render:function(t){return r.a.createElement(G,Object.assign({},t,{currentUser:a,productCheck:function(t){return e.handleProductCheck(t)}}))}}),r.a.createElement(g.a,{path:"/adminsettings",component:W}),r.a.createElement(g.a,{path:"/showcart",render:function(){return r.a.createElement(R,{currentUser:a,productData:n,cartTotal:c,setCartData:function(t){return e.setCartData(t)}})}}),r.a.createElement(g.a,{path:"/login-page",render:function(){return r.a.createElement(S,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(g.a,{path:"/order-form",render:function(){return r.a.createElement(Y,{currentUser:e.state.currentUser,productData:e.state.productData,setCartToZero:e.setCartToZero})}}),r.a.createElement(g.a,{path:"/orderSuccess",render:function(){return r.a.createElement(H,{currentUser:e.state.currentUser})}})),r.a.createElement("footer",null,r.a.createElement("p",null,"Made by Priyanka and Harnit at Ironhack")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.fcff59d1.chunk.js.map