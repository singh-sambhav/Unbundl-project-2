const data = [
    {
        name : "Dairy Milk",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Five Star",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Milkybar",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Dairy Milk Silk",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Dairy Milk Oreo",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Dairy Milk Fruit & Nut",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Kitkat",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Shiva ki Chocolate",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Dealer ki Chocolate",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Ganji ki Chocolate",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },
    {
        name : "Pandit ki Chocolate",
        price :  "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUN26kMRPLu1EFjQoNBeMkJQK_J3tYvD_fQ&s'
    },

]

function createChild(product,id){
    const name = product.name;
    const price = product.price;
    const img = product.img;

    const child = document.createElement('div');
    const firstGrandChild = document.createElement('div');
    firstGrandChild.setAttribute('class', 'name');
    const secondGrandChild = document.createElement('div');
    secondGrandChild.setAttribute('class', 'price')
    const thirdGrandChild = document.createElement('img');
    thirdGrandChild.setAttribute('src', img);

    firstGrandChild.innerHTML = name;
    secondGrandChild.innerHTML = price;

    child.appendChild(firstGrandChild)
    child.appendChild(secondGrandChild)
    child.appendChild(thirdGrandChild)

    child.addEventListener('click', addToCart)

    child.setAttribute('class', "card");
    child.setAttribute('id',id);
    return child;

}

let cart = 0;
function addToCart(){
    if(cart == 8){
        alert('Cannot add more');
        return;
    }

    cart++;
    let newCart = document.getElementById('basket');
    newCart.innerHTML = `basket = ${cart}`;
}

let childId = 'children';
function getProducts(){
    let products = document.getElementById('products')
    
    for(let i =0 ; i<data.length ; i++){
        products.appendChild(createChild(data[i],childId));
    }   
}



getProducts();