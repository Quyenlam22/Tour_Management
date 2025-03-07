const itemCarts = localStorage.getItem("cart");

const link = `/cart/getTours/${itemCarts}`;

const option = {
    method: 'PATCH'
};

fetch(link, option)
    .then(res => res.json())
    .then(data => {
        const cartDetail = data.cartDetail;

        const tableCart = document.querySelector("[table-cart]");
        const tbody = tableCart.querySelector("tbody");
        const textMes = document.querySelector("[text-mes]");

        if(cartDetail.length > 0) {
            for(var i = 0; i < cartDetail.length; i++) {
                tbody.innerHTML += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>
                            <img src=${cartDetail[i].image} alt=${cartDetail[i].title} width="80px">
                        </td>
                        <td>
                            <a href="tours/detail/${cartDetail[i].slug}">${cartDetail[i].title}</a>
                        </td>
                        <td>${cartDetail[i].priceSpecial.toLocaleString()}đ</td>
                        <td>
                            <input type="number" name="quantity" value=${cartDetail[i].quantity} min="1" item-id=${cartDetail[i].id} style="width: 60px">
                        </td>
                        <td>${cartDetail[i].totalPrice.toLocaleString()}đ</td>
                        <td>
                            <a href="/cart/delete/${cartDetail[i].id}" class="btn btn-danger">Xóa</a>
                        </td>
                    </tr>
                `;
            }

            textMes.classList.add("text-end");
            textMes.innerHTML = `Tổng đơn hàng: ${data.total.toLocaleString()}đ`;
        }
        else{
            textMes.classList.add("text-center");
            textMes.innerHTML = `Giỏ hàng trống!`;
        }
    });

// const myArray = ['item1', 'item2', 'item3'];
// localStorage.setItem('myArray', JSON.stringify(myArray));

// const dataToSend = JSON.parse(localStorage.getItem('myArray'));

// fetch('http://localhost:3000/api/data', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ data: dataToSend }), // Gửi mảng trong body
// })
// .then(response => response.json())
// .then(data => {
//     console.log('Success:', data);
// })
// .catch((error) => {
//     console.error('Error:', error);
// });