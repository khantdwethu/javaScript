let i = 1;
function add(){
    let list = document.getElementById("text").value;
    let date = new Date();
    let time = date.toLocaleDateString('en',{month:'long',weekday:'long',year:'numeric',hour:'2-digit',minute:"2-digit",second:'2-digit'
});
const testing = document.getElementsByClassName("conatiner")[0];
console.log("width",getComputedStyle(testing).backgroundColor);
    let listdate = `<li id="listitem${i}">
    <div class="list">
        <h5 id="item${i}">${list}</h5>
         <span class="date">${time}</span>
    </div>
    <div class="icon">
        <span onclick="edit(${i})"><i class="far fa-edit green"></i></span>
        <span onclick="del(${i})"><i class="far fa-trash-alt red"></i></span>
    </div>
</li>`;

    document.getElementById("ul").innerHTML+= listdate;
    document.getElementById("text").value = "";
    i++;
}
function del(id){
    let parent = document.getElementById("ul");
    let removeele = document.getElementById(`listitem${id}`);
    parent.removeChild(removeele);
}
function edit(id){
   let vlaue = document.getElementById(`item${id}`).innerText;
   let data = prompt("Enter New List",`${vlaue}`);
    
    document.getElementById(`item${id}`).innerText = data;
}
