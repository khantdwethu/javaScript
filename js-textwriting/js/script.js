var typing = document.getElementsByClassName("type")[0];
console.log(typing);
// const value = ["My Name is Khant Dwe Thu","I am Coder","I am learning Javascript"];
const value = ["ဟိုင်း,","ကျွန်","တော်","နာ","မည်","မောင်","ခန့်","ဒွေး","သူ","ပါ"]
var index = -1;
var count = 0;
const box = document.getElementsByClassName("box")[0];
const box1 = document.getElementsByClassName("box1")[0];

window.addEventListener("load",()=>{
    console.log(typing.innerHTML.length);
    setTimeout(() => {
       
        box.classList.add("boxLoad");
        box1.classList.add("boxLoad");

        setTimeout(() => {
            (function hi(){

                if(count == value.length){
                    typing.innerHTML="";
                    count = 0;
                }
                var string =value[count];
            
                if(index != string.length){
                    index+=1;
                }
            
                var letter = string[index];
                if(index == string.length){
                    
                    //  var all = typing.innerHTML;
                    //  var length = all.length;
                    //  var stringSecondReverse = all.slice(0,--length);
                    //  typing.innerHTML = stringSecondReverse;
                    // if(length == 0){
                        count++;
                        index=-1; 
                    // }
                    // return  setTimeout(hi, 10);
                }else{
                    
                    typing.innerHTML += letter;     
                }
                setTimeout(hi, 100);
            })();
        }, 3000);

    }, 500);
});
