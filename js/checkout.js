function renderCheckout() {
    const tableEl = document.querySelector('.table__product tbody');
    const cart = JSON.parse(localStorage.getItem("CART"));
    
    cart.forEach((item) => {
        const total = item.prices * item.numberOfUnits
        tableEl.innerHTML += `
        <tr class="rem1">
            <td class="invert invert__image">
                <img src="${item.img}" alt="">
            </td>
            <td class="invert">
                <div class="quantity">
                    <div class="quantity__select">
                        <div class="quantity__value">${item.numberOfUnits}</div>
                    </div>
                </div>
            </td>
            <td class="invert">${item.name}</td>
            <td class="invert">$${item.prices}.00</td>
            <td class="invert">$${total}.00</td>
        </tr>
    `
    })
}


renderCheckout()
