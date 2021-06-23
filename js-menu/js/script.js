const bar = document.getElementsByClassName("bar")[0];
const menuItem = document.getElementsByClassName("menuItem");


for(let i = 0 ;i < menuItem.length ;i++){
    const clickItem = document.getElementsByClassName(`menu${i}`)[0];
    let index = i;

    //when click menu item is work  
    clickItem.addEventListener("click",()=>{
        clickItem.classList.add("clickActive");
        //add class if does not exit add else  eixt remove when click item that get no with lenght of menu item
        for(var w = 0; w< menuItem.length; w++){ 
            if(index == w){
                const pargaraph = document.getElementsByClassName(w)[0];
                pargaraph.classList.add("pActive");
                console.log(pargaraph,clickItem);
            }else{
                const pargaraph = document.getElementsByClassName(w)[0];
                pargaraph.classList.remove("pActive");
                document.getElementsByClassName(`menu${w}`)[0].classList.remove("clickActive");
            }
        }

        // to move bar so should know what position need ,menu link margin left and width
        let width = clickItem.offsetWidth; 
        let left = clickItem.offsetLeft;
        bar.style.marginLeft = left+"px";
        bar.style.width = width+"px";
    });
}
