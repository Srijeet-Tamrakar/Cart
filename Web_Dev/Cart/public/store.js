if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}

else{
    ready()
}

function ready(){
    var removeBtn = document.getElementsByClassName('btn_danger')
    for(var i=0; i<removeBtn.length; i++){
        var button = removeBtn[i]
        button.addEventListener('click', removeCartItem)
    }

    var cartQuantity = document.getElementsByClassName('cart_item_quantity')
    for(var i=0; i<cartQuantity.length; i++){
        var input = cartQuantity[i]
        input.addEventListener('change', quantityChange)
    }

    var addToCartBtn = document.getElementsByClassName('shop_item_btn')
    for(var i=0; i<addToCartBtn.length; i++){
        var button = addToCartBtn[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChange(event){
    var input = event.target
    if(isNaN(input.value) || input.value<=0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop_item_title')[0].innerText
    var price = shopItem.getElementsByClassName('shop_item_price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop_item_image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart_row')
    var cartItems = document.getElementsByClassName('cart_items')[0]
    var cartItemNames = document.getElementsByClassName('cart_item_title')
    for(var i =0; i<cartItemNames.length; i++){
        if (cartItemNames[i].innerText== title){
            alert('Item is already added to the cart!')
            return
        }
    }
    var cartRowContent = `
        <div class="cart_item cart_column">
            <img src="${imageSrc}" width="75" height="auto">
            <span class="cart_item_title">${title}</span>
        </div>

        <span class="cart_prices cart_column">${price}</span>

        <div class="cart_quantity cart_column">
            <input class="cart_item_quantity" type="number" value="1">
            <button class="btn btn_danger " role="button">REMOVE</button>

        </div>`
    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)
}



function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart_items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart_row')
    var total = 0
    for(var i=0; i<cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = document.getElementsByClassName('cart_prices')[0]
        var quantityElement = document.getElementsByClassName('cart_item_quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total+(price*quantity)
    }
    total = Math.round(total*100)/100
    document.getElementsByClassName('cart_total_price')[0].innerText = '$'+total
}

