//Shopping Cart App
let cart = {};
const products = [
    {id:1, name: "Product 1", price: 25},
    {id:2, name: "Product 2", price: 50},
    {id:3, name: "Product 3", price: 75},
];

const showProducts = () => {
    str="";
    products.map((value)=>{
        str+= `${name} - ${price}`;
    })
    console.log(str);
}
showProducts();