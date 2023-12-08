let userInput = document.querySelector('#userInput')
let searchBtn = document.querySelector('#searchBtn')
let highPrice = document.querySelector('#hp')
let lowPrice = document.querySelector('#lp')
let output = document.querySelector('#products-section')
let productShown = JSON.parse(localStorage.getItem("movieList"));
let cart = []





// ADD TO CART function
function addToCart(index) {
    let selectedProduct = productShown[index];
    console.log('Button clicked for:', selectedProduct);

    cart.push(selectedProduct);
    localStorage.setItem('selectedMovies', JSON.stringify(cart));
}

// output.addEventListener('click', () =>{
//     if (event.target.hasAttribute('data-addBtn')) {
//         addToCart(event.target.value)
//     }
// })


// SPINNER SELF-INVOKING FINCTION
(function spinner() {
    [...productShown]
    if (productShown.length === 0) {
        output.innerHTML = `<div class="spinner-grow" style="padding: 5%; margin: 5% 100%!important;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`
    }
})()


// SEARCHING BUTTON EVEN LISTENER
searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let searched = userInput.value.toLowerCase()
    let filteredSearch = productShown.filter(item => {
        try { 
            switch (searched) {
                case ('lion king'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                        <h3 class="display-3 text-center pt-5 text-light">ANIME</h3>
                    </div>
                    <div id="cards"> 
                        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                        <div class="col">
                        <div>
                            <img src="https://i.postimg.cc/bwXPNHxn/The-Lion-King-Simba-Print-All-Posters-com-1.jpg" class="card-img-top" alt="Naruto" height="600px" style="margin-left: 32% !important;">
                            <div class="card-body p-3">
                                <h5 class="card-title text-center">The Lion King: The Movie</h5>
                            </div>
                            <div id="add-cart" class="d-flex justify-content-center">
                                <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-1">
                                    <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                    <p class="pt-1">Add to Cart</p>
                                </a>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
                    </section>`
                    break;
                case 'flash':
                    output.innerHTML = `<section id="about-section">
                    <div>
                    <h3 class="display-3 text-center pt-5 text-light">NEW RELEASE</h3>
                    </div>
                    <div id="cards"> 
                        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                            <div class="col">
                                <div>
                                    <img src="https://i.postimg.cc/GtBFt88S/download.jpg" class="card-img-top" alt="Flash" height="280px" style="margin-left: 32% !important;">
                                    <div class="card-body p-3">
                                        <h5 class="card-title text-center">Flash</h5>
                                    </div>
                                    <div id="add-cart" class="d-flex justify-content-center">
                                        <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-2">
                                            <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                            <p class="pt-1">Add to Cart</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </section>`
                    break;
                case ('demon slayer'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                    <h3 class="display-3 text-center pt-5 text-light">NEW RELEASE</h3>
                    </div>
                    <div id="cards"> 
                        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                            <div class="col">
                                <div>
                                    <img src="https://i.postimg.cc/DfbYyVBC/kny-new-s3-poster-art-1.jpg" class="card-img-top" alt="Flash" height="280px" style="margin-left: 32% !important;">
                                    <div class="card-body p-3">
                                        <h5 class="card-title text-center">Demon Slayer: Swordsmith Village</h5>
                                    </div>
                                    <div id="add-cart" class="d-flex justify-content-center">
                                        <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-2">
                                            <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                            <p class="pt-1">Add to Cart</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </section>`
                    break;
                case ('one piece'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                    <h3 class="display-3 text-center pt-5 text-light">ACTION</h3>
                    </div>
                    <div id="cards"> 
                        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                            <div class="col">
                                <div>
                                    <img src="https://i.postimg.cc/BvMvjJKr/One-Piece-Live-Action-Poster-61x91-5cm.jpg" alt="One Piece Live Action Series" height="600px" width="440px">
                                    <div class="card-body p-3" style="margin-left: 32% !important;">
                                        <h5 class="card-title text-center">One Piece Live Action Series</h5>
                                    </div>
                                    <div id="add-cart" class="d-flex justify-content-center">
                                        <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-4">
                                            <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                            <p class="pt-1">Add to Cart</p>
                                        </a>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                    </section>`
                    break;
                case ('the meg'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                    <h3 class="display-3 text-center pt-5 text-light">NEW RELEASE</h3>
                    </div>
                        <div id="cards"> 
                            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                                <div class="col">
                                    <div>
                                        <img src="https://i.postimg.cc/GhGgdt0m/Meg-2-The-Trench-2023.jpg" class="card-img-top" alt="The Meg 2" height="600px" style="margin-left: 32% !important;">
                                        <div class="card-body p-3">
                                            <h5 class="card-title text-center">The Meg 2</h5>
                                        </div>
                                        <div id="add-cart" class="d-flex justify-content-center">
                                            <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-5">
                                                <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                                <p class="pt-1">Add to Cart</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </section>`
                    break;
                case ('monkey king'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                    <h3 class="display-3 text-center pt-5 text-light">NEW RELEASE</h3>
                    </div>
                    <div id="cards"> 
                        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                        <div class="col">
                        <div>
                            <img src="https://i.postimg.cc/65JzjK7J/The-Monkey-King-top-movie.jpg" class="card-img-top" alt="The Monkey King" height="600px" style="margin-left: 32% !important;">
                            <div class="card-body p-3" >
                                <h5 class="card-title text-center">The Monkey King</h5>
                            </div>
                            <div id="add-cart" class="d-flex justify-content-center">
                                <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-6">
                                    <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                    <p class="pt-1">Add to Cart</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                    </div>
                </div>
                    </section>`
                    break;
                case ('naruto'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                        <h3 class="display-3 text-center pt-5 text-light">ANIME</h3>
                    </div>
                    <div id="cards"> 
                        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                        <div class="col">
                        <div>
                            <img src="https://i.postimg.cc/7hfvKkbT/Naruto-Picture-Image-Abyss.jpg" class="card-img-top" alt="Naruto" height="600px" style="margin-left: 32% !important;">
                            <div class="card-body p-3">
                                <h5 class="card-title text-center">Naruto</h5>
                            </div>
                            <div id="add-cart" class="d-flex justify-content-center">
                                <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-7">
                                    <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                    <p class="pt-1">Add to Cart</p>
                                </a>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
                    </section>`
                    break;
                case ('attack on titan'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                        <h3 class="display-3 text-center pt-5 text-light">ANIME</h3>
                    </div>
                        <div id="cards"> 
                            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                                <div class="col">
                                    <div>
                                        <img src="https://i.postimg.cc/66vx49sD/Attack-on-Titan-Gebr-ll-des-Erwachens-2018.jpg" class="card-img-top" alt="AOT" height="600px" style="margin-left: 32% !important;">
                                        <div class="card-body p-3">
                                            <h5 class="card-title text-center">Attack on Titan</h5>
                                        </div>
                                        <div id="add-cart" class="d-flex justify-content-center">
                                            <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-8">
                                                <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                                <p class="pt-1">Add to Cart</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </section>`
                    break;
                case ('your name'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                        <h3 class="display-3 text-center pt-5 text-light">NEW RELEASE</h3>
                    </div>
                        <div id="cards"> 
                            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                                <div class="col">
                                    <div>
                                        <img src="https://i.postimg.cc/P56RFcsW/The-Secret-World-Of-Arrietty.jpg" class="card-img-top" alt="Your Name" height="600px" style="margin-left: 32% !important;">
                                        <div class="card-body p-3">
                                            <h5 class="card-title text-center">Your Name</h5>
                                        </div>
                                        <div id="add-cart" class="d-flex justify-content-center">
                                            <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-9">
                                                <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                                <p class="pt-1">Add to Cart</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>`
                    break;
                case ('beautiful disaster'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                        <h3 class="display-3 text-center pt-5 text-light">ROMANCE</h3>
                    </div>
                        <div id="cards"> 
                            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                                <div class="col">
                                    <div>
                                        <img src="https://i.postimg.cc/qMh7T0h1/Upcoming-Movies-in-2023-8.jpg" class="card-img-top" alt="Beautiful Disaster" height="600px" style="margin-left: 32% !important;">
                                        <div class="card-body p-3">
                                            <h5 class="card-title text-center">Beautiful Disaster</h5>
                                        </div>
                                        <div id="add-cart" class="d-flex justify-content-center">
                                            <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-10">
                                                <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                                <p class="pt-1">Add to Cart</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>`
                    break;
                case ('everyday'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                        <h3 class="display-3 text-center pt-5 text-light">NEW RELEASE</h3>
                    </div>
                        <div id="cards"> 
                            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                                <div class="col">
                                    <div>
                                        <img src="https://i.postimg.cc/qB8NhpMg/download-5.jpg" class="card-img-top" alt="Everyday" height="600px" style="margin-left: 32% !important;">
                                        <div class="card-body p-3">
                                            <h5 class="card-title text-center">Every Day</h5>
                                        </div>
                                        <div id="add-cart" class="d-flex justify-content-center">
                                            <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-11">
                                                <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                                <p class="pt-1">Add to Cart</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>`
                    break;
                case ('crazy rich asians'):
                    output.innerHTML = `<section id="about-section">
                    <div>
                        <h3 class="display-3 text-center pt-5 text-light">NEW RELEASE</h3>
                    </div>
                        <div id="cards"> 
                            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                                <div class="col">
                                    <div>
                                        <img src="https://i.postimg.cc/KjRF5rhZ/5a7e0c31-0f35-44e4-8ce0-35ba09a2eb87.jpg" class="card-img-top" alt="Crazy Rich Asians" height="600px" style=""margin-left: 32% !important;>
                                        <div class="card-body p-3">
                                            <h5 class="card-title text-center">Crazy Rich Asians</h5>
                                        </div>
                                        <div id="add-cart" class="d-flex justify-content-center">
                                            <a class="btn btn-sm btn-outline-warning d-flex pt-3" id="add-12">
                                                <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                                                <p class="pt-1">Add to Cart</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>`
                    break;
                default:
                    output.innerHTML = `<section id="about-section">
                        <div id="cards"> 
                            <h1 class="display-4 text-light text-center" style="width: 100vh">ENTER MOVIE TO WATCH</h1>
                        </div>
                    </section>`
                    break;
                    break;
            }
            
        } catch (err) {
            alert(`RESULTS NOT FOUND: ${err}`)
        }

    })
})

sortBtn.addEventListener('click', (e) => {
    e.preventDefault()
    // referenced from ChatGPT
    prices = [...productShown]
        if (highPrice === 'High Price') {
            prices.sort((a, b) => b.price - a.price)
        } else {
            prices.sort((a, b) => a.price - b.price)
        }
        displayItems(prices)
    })


// SEARCH FUNCTION
function searchResults() {
    filteredSearch = productShown.filter(item => {
    return item.name.toLowerCase().contains(searched)
    })
    output.innerHTML = displayItems(filteredSearch)
}


function displayItems() {
    // referenced from: Traversy Media, javascript beginner tutorial
    if (Array.isArray(productShown)) {
        productShown.filter((item, index) => {
          try {
            output.innerHTML += `
            
            <div id="about-section">
                <div class="pt-5 pb-2 ms-5">
                  <img src="${item.picture}">
                  </div>
                  <p class="text-center text-light">${item.name}</p>
                  <p class="text-center text-light"> R${item.price}</p>
                  <div class="d-flex justify-content-center p-4">
                      <button data-addBtn class="btn btn-sm btn-outline-warning d-flex pt-3" value = "${index}" id="add-1" onclick=addToCart(${index})>
                      <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover"></lord-icon>
                      <p class="pt-1 addCart">Add to Cart</p>
                      </button>
                  </div>
              </div>
                 ` 
          } catch (error) {
            alert(`ERROR: ${error}`)
          }
        }).join('')
    }
}


displayItems()



















