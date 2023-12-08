let adminOutput = document.querySelector('#admin-table')
let movieList = []
let addItem = document.querySelector('#add-to-admin')
let addName = document.querySelector('#floatingInput1')
let addYear = document.querySelector('#floatingInput2')
let addDescription = document.querySelector('#floatingInput3')
let addPrice = document.querySelector('#floatingInput4')
let addCompleted = document.querySelector('#floatingInput5')
let addImage = document.querySelector('#formFile')
let sortAdmin = document.querySelector('#admin-sort')

// MOVIES WITH THEIR TEMPLATE

function Movie (name, year, description, price, isComplete, picture) {
    this.name = name,
    this.year = year,
    this.description = description,
    this.price = price,
    this.isComplete = isComplete
    this.picture = picture
}

let movie1 = new Movie("The Lion King: The Movie", 2022, "This Disney animated feature follows the adventures of the young lion Simba, the heir of his father who is the King of the Jungle, Mufasa. Simba's wicked uncle, Scar, plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests. Causing Simba to flee from home after he saw his father die in front of him", 249.99, true, "https://i.postimg.cc/bwXPNHxn/The-Lion-King-Simba-Print-All-Posters-com-1.jpg")

let movie2 = new Movie("Flash", 2023, "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.", 544.99, true, "https://i.postimg.cc/GtBFt88S/download.jpg")

let movie3 = new Movie("Demon Slayer: Swordsmith Village Arc", 2023, "The Swordsmith Village Arc follows Tanjiro and Nezuko after the Entertainment District battle. They embark on a mission to protect the village of the Demon Slayer Corps swordsmiths, face new challenges, battle fierce demons, and make new friends.", 349.99, true, "https://i.postimg.cc/DfbYyVBC/kny-new-s3-poster-art-1.jpg")
let movie4 = new Movie("One Piece: Live Action Season 1", 2023, "The series follows the adventures of the Straw Hat Pirates as they explore the dangerous oceans, lands, and beyond in search of the 'One Piece', a fabled treasure that will make their captain, Monkey D. Luffy, 'King of the Pirates'", 499.99, true, "https://i.postimg.cc/zGwjH8gj/One-Piece-Live-Action-Poster-61x91-5cm-1.jpg")

let movie5 = new Movie("The Meg 2", 2023, "Five years after the events of the first film, Jonas Taylor has been involved in fighting environmental crimes while also helping Mana One in exploring a further deep part of the Mariana Trench where the Megalodon had been found.", 509.99, true, "https://i.postimg.cc/7LgpLFH8/Meg-2-The-Trench-2023-1.jpg")

let movie6 = new Movie("The Monkey King", 2023, "He has vast memorization skills and can remember every monkey ever born. As king of the monkeys it is his duty to keep track of and protect every monkey. Sun Wukong also acquires the 72 Earthly Transformations, which allow him to access 72 unique powers, including the ability to transform into animals and objects.", 349.99, true, "https://i.postimg.cc/sgKWRXWt/The-Monkey-King-top-movie-1.jpg")

let movie7 = new Movie("Naruto", 2009, "Naruto is a ninja-in-training whose wild antics amuse his teammates. But he's completely serious about one thing: becoming the world's greatest ninja! As the battle against the Tailed Beast-targeting Akatsuki rages on, the heroic sibling battle between Sasuke and Itachi eventually concludes.", 199.99, true, "https://i.postimg.cc/26SB6fQV/Naruto-Picture-Image-Abyss-1.jpg")

let movie8 = new Movie("Attack On Titan", 2023, "Set in a post-apocalyptic world where the remains of humanity live behind walls protecting them from giant humanoid Titans, Attack on Titan follows protagonist Eren Yeager, along with friends Mikasa Ackerman and Armin Arlert", 249.99, true, "https://i.postimg.cc/zBzTghrD/Attack-on-Titan-Gebr-ll-des-Erwachens-2018-1.jpg")

let movie9 = new Movie("Your Name", 2016, "Your Name is a touching, emotional, dramatic movie about two character, Taki and Mitsuha, who begin waking up in each other's bodies every few days. They learn to work together to make both their lives as normal as possible and eventually, both attempt to visit one another.", 249.99, true, "https://i.postimg.cc/8P1xzK3x/The-Secret-World-Of-Arrietty-2.jpg")

let movie10 = new Movie("Beautiful Disaster", 2023, "In Beautiful Disaster, bad-boy Travis Maddox is exactly what college freshman Abby Abernathy needs and wants--to avoid. He spends his nights fighting in underground boxing matches, and his days as the ultimate college campus charmer. But Abby wants nothing to do with Travis.", 549.99, true, "https://i.postimg.cc/qMh7T0h1/Upcoming-Movies-in-2023-8.jpg")

let movie11 = new Movie("Every Day", 2018, "A shy teenager falls for a spirit who wakes up in the body of a different person every morning. 'A' is a traveling spirit who wakes up in the body of a different male or female teenager, every day. One day, 'A' wakes up in the body of Justin, the neglectful boyfriend of Rhiannon.", 149.99, true, "https://i.postimg.cc/qB8NhpMg/download-5.jpg")

let movie12 = new Movie("Crazy Rich Asians", 2018, "This contemporary romantic comedy based on a global bestseller follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family. Native New Yorker Rachel Chu goes with her boyfriend, Nick Young, to his best friend's wedding in Singapore.", 149.99, true, "https://i.postimg.cc/KjRF5rhZ/5a7e0c31-0f35-44e4-8ce0-35ba09a2eb87.jpg")

// ADDING MOVIES TO ARRAY
movieList.push(movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10, movie11, movie12)

// ADDING FROM MODAL
addItem.addEventListener('click', (e) => {
    e.preventDefault()
    let newMovie = new Movie(`${addName.value}`, `${addYear.value}`, `${addDescription.value}`, `${addPrice.value}`, `${addCompleted.value}`, addImage.value)
    movieList.push(newMovie)
    overall(movieList)
})

localStorage.setItem('movieList', JSON.stringify(movieList))


// SETTING LOCAL STORAGE
function storage() {
    localStorage.setItem('movieList', JSON.stringify(movieList))
    movieList = JSON.parse(localStorage.getItem('movieList'))
}
// DISPLAYING THE PRODUCTS
function overall() {
        newList = movieList.map((item, index)=>{
            
            return `
            
                
                    <tr id="admin-table">
                        <td  id="admin-section">${index + 1}</td>
                        <td>
                        <img src="${item.picture}" id="admin-pics">
                        </td>
                        <td id="admin-section" style="text-align: center; padding: 15px;">${item.name}</td>
                        <td id="admin-section">${item.description}</td>
                        <td id="admin-section"> R${item.price}</td>
                        <td id="admin-section"><div>
                        <button type="button" class="btn btn-success m-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
                      </div>
                
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Add products</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-dark text-warning">
                              <form>
                                <div class="form-floating mb-3">
                                  <input type="text" class="form-control" id="floatingInput1" placeholder="Product Name">
                                  <label for="floatingInput">${item.name}</label>
                                </div>
                                <div class="form-floating mb-3">
                                  <input type="date" class="form-control" id="floatingInput2" placeholder="Product Year">
                                  <label for="floatingInput">${item.year}</label>
                                </div>
                                <div class="form-floating">
                                  <input type="text" class="form-control" id="floatingInput3" placeholder="Item Decription">
                                  <label for="floatingPassword">${item.description}</label>
                                </div>
                                <br>
                                <div class="form-floating mb-3">
                                  <input type="number" class="form-control" id="floatingInput4" placeholder="Item Price">
                                  <label for="floatingInput">R${item.price}</label>
                                </div>
                                <div class="form-floating mb-3">
                                  <input type="text" class="form-control" id="floatingInput5" placeholder="Completed (true/false)">
                                  <label for="floatingInput">${item.isComplete}</label>
                                </div>
                                <div class="form-floating">
                                  <div class="mb-3">
                                    <label for="formFile" class="form-label">Default file input example</label>
                                    <input class="form-control" type="text"  value = "${item.picture}" id="formFile">
                                  </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-outline-warning" id="add-to-admin">Add Item</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section></td>
                        <td id="admin-section"><button style="padding: 15px; margin: 5px; border: none; border-radius: 25px; box-shadow: 0 0 8px #000;" class='delete' value = '${index}'>Remove</button></td>
                    </tr>
            
            `
        })
        adminOutput.innerHTML = newList.join('')
    }

    function removeItem(position) {
        movieList.splice(position, 1)
        storage()
        overall()

    }

    // ITEM REMOVAL FROM ADMIN
    adminOutput.addEventListener('click', (e)=>{
        e.preventDefault()
        try {
          if (e.target.classList.contains('delete')) {
              removeItem(e.target.value)
          }
          }
          catch (error) {
            alert(`Cannot delete, please try again ${error}`)
        }
        if (movieList.length === 0) {
              adminOutput.innerHTML = `<div class="spinner-grow" style="padding: 5%; margin-left: 50%;" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>`
          }
    })

    // function sort() {
    //         movieList.prices.sort((a, b) => b.price - a.price)
    //         movieList.prices.sort((a, b) => a.price - b.price)
    // }
    
    // sortAdmin.addEventListener('click', sort())


    // FUNCTION CALLING
overall()