//  Login section 
document.getElementById("btn").addEventListener("click",function getStart(){
    const name = document.getElementById("name").value;
    console.log(typeof(name));
    const password = document.getElementById("password").value;
    console.log(typeof(password))
    if (password === "123456"){
        document.getElementById("nav").style.display = "block";
        document.getElementById("banner").style.display = "none";
        document.getElementById("container1").style.display = "block";
        document.getElementById("container2").style.display = "block";

    }
    else{
        alert("please enter your name & password!")
    }
})


//All button load
const loadButton = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/levels/all");
    const allData = await response.json();
    
    showCategory(allData.data)
}

const showCategory = (data) => {
    data.forEach((element) => {

        const categoryContainer = document.getElementById("container-button");
        const div = document.createElement("div");

        div.innerHTML = `
        <button onclick = "showWord()" id = "${element.id}" class="p-1 hover:cursor-pointer font-semibold text-blue-800 border-blue-800 mx-1 border rounded-sm 
              hover:bg-blue-800 hover:text-white transition-all"><i class="fa-solid fa-school"></i>${element.lessonName}
              </button>
        `
        categoryContainer.appendChild(div)
    })
}
// all word load
const  loadWords = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/level/5");
    const data2 = await response.json();
    displayWords(data2.data);
    
}
const displayWords = (word) =>{
    console.log(word)
    const wordContainer = document.getElementById("word-container");
    word.forEach((element) => {
        const wordCard = document.createElement("div");
        wordCard.innerHTML = `
        <div class="justify-between  bg-base-100 w-96 shadow-md hover:bg-blue-100 rounded-sm p-5 ">
  
  <div class="card-body">
    <h2 class="text-2xl text-center mb-3 font-bold">${element.word}</h2>
    <h2 class= "text-center font-bold">meaning/pronounciation</h2><br>
    <h2 class= "text-center font-bold text-xl">${element.meaning}/${element.pronunciation}</h2>
      <div class="flex justify-between">
            <button class = "btn" ><div class=""><i class="fa-solid fa-circle-info"></i></div></button>
            <btton class = "btn"><div class=""><i class="fa-solid fa-volume-low"></i></div></button>
      </div>
      
   
  </div>
</div>

        `
        wordContainer.appendChild(wordCard)
    })
    
}

function showWord(){
    document.getElementById("word-container").style.display = "block";
    document.getElementById("word-container").style.display = "grid";
    
    document.getElementById("selection").style.display = "none";
}
function loginClicked(){
    document.getElementById("nav").style.display = "none";
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("banner").style.display = "block";

}


loadButton()
loadWords()