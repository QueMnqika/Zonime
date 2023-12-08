let moviesSelected = JSON.parse(localStorage.getItem("selectedMovies"))
let message = document.querySelector('#checkout')

let output = document.querySelector('#cart-section')

function cartDisplay() {
        moviesSelected.filter((item, index) => {
            output.innerHTML += `
                <tr id="admin-table">
                    <td  id="admin-section">${index + 1}</td>
                    <td>
                    <img src="${item.picture}" id="admin-pics">
                    </td>
                    <td id="admin-section" style="text-align: center; padding: 15px;">${item.name}</td>
                    <td id="admin-section">${item.description}</td>
                    <td id="admin-section"> R${item.price}</td>
                    <td id="admin-section"><button style="padding: 15px; margin: 5px; border: none; border-radius: 25px; box-shadow: 0 0 8px #000" value = '${index}'>Edit</button></td>
                    <td id="admin-section"><button style="padding: 15px; margin: 5px; border: none; border-radius: 25px; box-shadow: 0 0 8px #000;" class='delete' value = '${index}' onclick=removeItem(${index})>Remove</button></td>
                </tr>` 
    })
}

if (moviesSelected.length === 0) {
    adminOutput.innerHTML = `<div class="spinner-grow" style="padding: 5%; margin-left: 50%;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`
}
function removeItem(position) {
    moviesSelected.splice(position, 1)
    localStorage.setItem('cart', JSON.stringify(moviesSelected))
    cartDisplay()

}

message.addEventListener('click', () => {
    try {
        if (moviesSelected.length !== 0) {
            alert('')
        }
    } catch (error) {
        
    }
})

cartDisplay()
removeItem()