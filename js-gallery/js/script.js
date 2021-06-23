const imgArray = [
    "https://images.unsplash.com/photo-1617331008613-9479b434b1e6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1623567533471-2c789007ce34?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1623336224534-22ead2f3f6d5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1623177579172-ae61df19e77d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1577048982771-1960014bde8b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1480109866847-0b432ceb666a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1577498358908-f393ca205cc7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
];
var count = 0;
const back = document.getElementById("back");
const add = document.getElementById("add");
const img = document.querySelector("img");
const showImg = document.getElementsByClassName("showimg")[0];

for (const element in imgArray){
        const  smallImg = document.createElement("img");

        smallImg.src = imgArray[element];
        smallImg.className=`img${element}`;
        showImg.append(smallImg);
        if(element == 0){
            smallImg.style.border = "thick solid red";
        }
}
const changeBorder = index=>{
    
    for (const no in imgArray){
        if(no == index){
           document.getElementsByClassName(`img${no}`)[0].style.border ="thick solid red" ;
        }else if (no != index){
            document.getElementsByClassName(`img${no}`)[0].style.border ="0 solid red" ;
        }
    }
}
const checkcount=num=>{
    if(num == 0){
        back.style.color= "gray";
    }else if(num == imgArray.length-1){
        add.style.color="gray";
    }else if(num != 0 && num !=imgArray.length-1){
        add.style.color ="#000";
        back.style.color = "#000";
    }
}

const  imgShowBack=()=>{
    if(count == 0){
        return;
    }
    count -= 1;
    img.src = imgArray[count];
    checkcount(count);

    console.log(img.style.animationIterationCount);
    changeBorder(count);
}

const  imgShowAdd=()=>{
    if(count == imgArray.length-1){
        return;
    }
    count += 1;
    img.src = imgArray[count];
    console.log(img.style.animationIterationCount);
    checkcount(count);
    changeBorder(count);
}

// const Show = plusorminu =>{
//     if(plusorminu == "+"){
//         if(count == imgArray.length-1){
//                     return;
//                 }
//         count += 1;
//         img.src = imgArray[count];
//         checkcount(count);
//         changeBorder(count);
//     }else if (plusorminu == "-"){
//         if(count == 0){
//                     return;
//                 }
//         count -= 1;
//         img.src = imgArray[count];
//         checkcount(count);
//         changeBorder(count);
//     }
// }

back.addEventListener("click",imgShowBack);
add.addEventListener("click",imgShowAdd);
