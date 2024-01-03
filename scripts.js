// const img = require `./s.png`


const apiUrl = 'https://reqres.in/api/users';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    return response.json();
  })
  .then(data => {
    // Access and display the data in the console
    console.log(data.data[1]);
    const users =document.querySelector("ul")
const body =document.querySelector("body")


for (const x in  data.data) {

    var list = document.createElement("li")
    list.setAttribute("id",x)
    users.appendChild(list)
    let  li =document.getElementById(`${x}`)


    const img = document.createElement("img")
    img.setAttribute("class","usr")
    img.src = data.data[x].avatar
    img.style.height = "100px"
    img.style.width = "100px"


    li.appendChild(img)

    
    const h1 = document.createElement("h1")
    h1.innerText = `${data.data[x].first_name}`
    // console.log(x)


    li.appendChild(h1)
    }

    // console.log(users)

    const clickedUser = document.getElementById("clickedUser")
    users.addEventListener("click",function(x){
    
    // const liElm = document.createElement("ul")
    if (x.target.parentElement.tagName === 'LI') {

    const  liElm = x.target.parentElement.cloneNode(true); 
    console.log(x.target.parentElement)


      clickedUser.innerHTML = ''; // Clear previous content
      clickedUser.appendChild(liElm);

    // console.log(clickedUser)
    users.style.display ="none"
    }
  })

  .catch(error => {
    console.error('Error fetching data:', error);
  });





// const obj =[
//     {
//         image : "",
//         position:"full stack developer",
//         name:"ameer",
//     },

//     {
//         image :"",
//         position:"full stack developer",
//         name:"ameer1",
//     },

//     {
//         image :"",
//         position:"full stack developer",
//         name:"ameer2",
//     },

//     {
//         image :"",
//         position:"full stack developer",
//         name:"ameer3",
//     }

// ]
// const users =document.querySelector("ul")
// const body =document.querySelector("body")


// for (const x in  obj) {
//     var list = document.createElement("li")
//     list.setAttribute("id",x)
//     users.appendChild(list)
//     let  li =document.getElementById(`${x}`)


//     const img = document.createElement("div")
//     img.setAttribute("class","usr")
//     img.style.backgroundColor ="black"
//     img.style.height = "100px"
//     img.style.width = "100px"


//     li.appendChild(img)

    
//     const h1 = document.createElement("h1")
//     h1.innerText = `${obj[x].name}`
//     // console.log(x)


//     li.appendChild(h1)
//     }

//     console.log(users)


    // adding the clicked element to screen

// const clickedUser = document.getElementById("clickedUser")
//   users.addEventListener("click",function(x){
//     console.log(x.target.parentNode)
    
//     // const liElm = document.createElement("ul")
//     const  liElm = x.target.parentNode.cloneNode(true); 

//       clickedUser.innerHTML = ''; // Clear previous content
//       clickedUser.appendChild(liElm);

//     console.log(clickedUser)


})



