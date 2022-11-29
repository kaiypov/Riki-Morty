let block1 = $('.block1');
let list = $('.list');
let API = 'https://rickandmortyapi.com/api/character';
async function getCartoon(){
let response =  await fetch(API)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((person) => {
        // getPerson(person)
      list.append(`<h2>${person.name}</h2>
      <img src=${person.image}></li>`);
     
    });
  });
}
getCartoon()

//   async function getPerson(item){
//     await fetch("http://localhost:8008/characters",{
//         method: "POST",
//         body: JSON.stringify(item),
//         headers: {
//             "Content-type": "application/json; charset=utf-8"
//         }
//     })
//   }
  let list2 = document.querySelector(".list2") 
  let block2 = document.querySelector(".block-2")
  let API2 = "http://localhost:8008/characters"

  async function getCartoon2() {
    let response2 = await fetch(API2)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    console.log(response2);
  
    list2.innerHTML = "";
    response2.forEach((person) => {
      let newElem = document.createElement("div");
      newElem.id = person.id;
      newElem.innerHTML = `
      <h2>${person.name}</h2>
      <img src=${person.image} alt="">
        `;
        list2.style.background = ""
      list2.append(newElem);
    });
  }
  getCartoon2();