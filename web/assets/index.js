// Danh sách sản phẩm
var productList = [
    { id: 1, name: 'Sản phẩm 1', description: 'Mô tả sản phẩm 1' },
    { id: 2, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2' },
    // Thêm các sản phẩm khác
];

// Giỏ hàng
var cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    // Tìm sản phẩm trong danh sách sản phẩm
    var product = productList.find(function(item) {
        return item.id === productId;
    });
    
    // Thêm sản phẩm vào giỏ hàng
    cart.push(product);
    
    // Cập nhật giao diện giỏ hàng
    updateCart();
}

// Hàm cập nhật giao diện giỏ hàng
function updateCart() {
    var cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    
    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Giỏ hàng trống</p>';
    } else {
        var ul = document.createElement('ul');
        
        cart.forEach(function(product) {
            var li = document.createElement('li');
            li.textContent = product.name;
            ul.appendChild(li);
        });
        
        cartElement.appendChild(ul);
    }
}
