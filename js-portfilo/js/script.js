const getEle = (ele,id = 1)=>{
    if(id == 1){
        return document.getElementsByClassName(ele);
    }
  return  document.getElementsByClassName(ele)[id];
};
const loading = getEle("loading",0);
const li = getEle("menuItem");
const span = getEle("bar",0);
const menuicon = getEle("menuicon",0);
const bar1 = getEle("bar1",0);
const bar2 = getEle("bar2",0);
const bar3 = getEle("bar3",0)
const menuColoum = getEle("menuColoum",0);
const writing = getEle("writing",0);
const info = getEle("info");
const myimg = getEle("myimg");
const body = getEle("body")[0];
const i = getEle("arrow",0);
const home = getEle("home",0);
const typeingText = [
    ["H","i",","," ","I"," ","a","m"," ","K","h","a","n","t"," ","D","w","e"," ","T","h","u"],
    ["I"," ","a","m"," ","W","e","b"," ","D","e","v","e","l","o","p","e","r"]];
const type = getEle("type",0);
var count = 0;
var index = 0;
var height = window.innerHeight-100;
window.addEventListener("load",()=>{

    loading.classList.add("loadingEffect");
    setTimeout(()=>{(function typing() {
        if(index == -1 ){
            index = 0;
            return setTimeout(typing,2000);
        }
        if(index == 0 ){
            type.innerHTML= "";
        }
        var string = typeingText[count];
        type.innerHTML+= string[index++];
        if(index == string.length){
            count += 1;
            index = -1;
          } 
          if(count == typeingText.length){
              count=0;
          }
          
        setTimeout(typing, 100);
    })();},2000);
    
    


})

//  for(let i = 0 ; i < li.length ; i++){
//      li[i].addEventListener("click",()=>{

//         for(let w = 0; w < li.length ; w++){
//             if(w == i){
//                 li[w].classList.add("spanActive");
//             }else{
//                 li[w].classList.remove("spanActive");
//             }
//         }
//         var width = li[i].offsetWidth;
//         var left = li[i].offsetLeft;
//         span.style.width = width+"px";
//         span.style.marginLeft = left+"px";
//         span.style.height = "5px";
//      })
    
//  }

 menuicon.addEventListener("click",()=>{
    document.body.classList.toggle("scroll");
    menuColoum.classList.toggle("menuColoumClick");
    bar1.classList.toggle("bar1Click");
    bar2.classList.toggle("bar2Click");
    bar3.classList.toggle("bar3Click");

 });

 function closeMenu(){
    menuColoum.classList.toggle("menuColoumClick");
    bar1.classList.toggle("bar1Click");
    bar2.classList.toggle("bar2Click");
    bar3.classList.toggle("bar3Click");
 }

window.addEventListener("scroll",()=>{
    if(window.scrollY > 200){
        i.style.visibility="visible";
        i.style.opacity = "1";
        i.style.transform = `translateY(${height}px)`;
    }else if(window.scrollY < 200){
        i.style.visibility="hidden";
        i.style.opacity = "0";
        i.style.transform = `translateY(0px)`;
    }
})

















// intersection Observe
const fadeIn = document.getElementsByClassName("fadeIn");
const aboutCallBack=(entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("myimgObserve");
      }
    });
};
let abooutOptions = {
    rootMargin:"0px",
    threshold:0.3
}
const aboutobserve = new IntersectionObserver(aboutCallBack,abooutOptions);
for(item of fadeIn){
    aboutobserve.observe(item);
}




function addClass(Name){
    const skillCallBack=(entries)=>{
        entries.forEach(entry => {
          if(entry.isIntersecting){
                entry.target.children[0].classList.add("percetEffect");
                entry.target.children[1].classList.add("barEffect");
          }
        });
    };
    const skillobserve = new IntersectionObserver(skillCallBack,abooutOptions);
    for(skill of Name){
        skillobserve.observe(skill);
    }
}
addClass(document.getElementsByClassName('progess'));

