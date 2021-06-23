const musicListArray = [
    { src : "../music/Lay Phyu Ka Na.mp3",title:"ဘ၀ဆုံးတိုင်",artils:"လေးဖြူ",images:"https://images.unsplash.com/photo-1623855531234-47a486a33065?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    { src : "../music/နီနီ.mp3",title:"အင်းလေးမှာရွာတဲ့မိုး",artils:"နီနီခင်ဇော်",images:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    { src : "../music/ရေခဲရိုက်အပြုံး- MP4 360p.mp3",title:"ရေခဲရိုက်အပြုံး",artils:"ပိုပို",images:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    { src : "../music/‌ပြော.mp3",title:"ပြော",artils:"မတိ",images:"https://images.unsplash.com/photo-1458560871784-56d23406c091?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    { src : "../music/ပျော်ကြပါစေ.mp3",title:"ပျော်ကြပါစေ",artils:"တွံတေးသိန်းတန်",images:"https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
]

const musicListContainer = document.getElementsByClassName("musicList")[0];
const audioPlay = document.querySelector("audio");
const time = document.getElementsByClassName("time")[0];
const imgContainer = document.getElementsByClassName("musicimg")[0];
const progressbar = document.getElementsByClassName("currenttime")[0];
const paly = document.getElementById("play");
const pause = document.getElementById("pause");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const img = document.createElement("img");
imgContainer.appendChild(img);

for(let i = 0 ; i <musicListArray.length ; i++){
    var  musicListItem = document.createElement("div");
    musicListItem.classList.add("musiclistitem");
    var musicListItemTitel = musicListArray[i].title;
    var musicListItemArtils = musicListArray[i].artils;
    musicListItem.textContent =i + ".  " +musicListItemTitel + "  (တေးဆို:" + musicListItemArtils  + ")" ;
    musicListItem.addEventListener("click",()=>{
        audioPlay.src = musicListArray[i].src;
        musicId = i;
        audioPlay.play();
        playing = true;
        checkPlaying(playing);
        img.src =  musicListArray[i].images;        
        playingActive(i);
    });
    musicListContainer.append(musicListItem);
}
var timeOut ;
var currentTimes;
var minute;
var seconds
var currentTimeMinAndSec;
var duartionTimeMinAndSec;
audioPlay.addEventListener("loadeddata",()=>{
    timeOut = audioPlay.duration;
    duartionTimeMinAndSec = calMinAndSec(timeOut);
})

audioPlay.addEventListener("timeupdate",()=>{
    currentTimes = audioPlay.currentTime;
    currentTimeMinAndSec = calMinAndSec(currentTimes);
    time.textContent = currentTimeMinAndSec  + " / " + duartionTimeMinAndSec;
    var long = calTime(timeOut);
    progressbar.style.width = (long*currentTimes).toString()+"px";
    if(currentTimes == timeOut){
        forwardFunction();
    }
    
})
var widTh;
var calTime = (curtime)=>{
    widTh = (400/curtime);

    return widTh;
};
var calMinAndSec = (current)=>{
    minute = Math.floor(current/60);
    seconds = Math.floor(current%60);
    const minuteText = minute >=10 ? minute : "0"+minute;
    const secondText = seconds >=10 ? seconds : "0"+seconds;
    return textContent =  minuteText + ":" + secondText;
};
var musicId = 0;
var playing ;

const checkPlaying = (bool)=>{
    if(bool){
        pause.style.display="block";
        play.style.display="none";
    }else{
        pause.style.display="none";
        play.style.display="block";
    }
};
forward.addEventListener("click",()=>{
    forwardFunction();
})
const forwardFunction =()=>{
    musicId += 1;
    if(musicId == musicListArray.length){
        musicId = 0;
        img.src =  musicListArray[musicId].images;       
        playingActive(musicId);
       return playFunction(musicId);       
    }
    img.src =  musicListArray[musicId].images;       
    playFunction(musicId);
    playingActive(musicId);
}
backward.addEventListener("click",()=>{
    musicId -= 1;
    if(musicId < 0){
         musicId = musicListArray.length-1;
        img.src =  musicListArray[musicId].images;       
     return playFunction(musicId);
    }
    img.src =  musicListArray[musicId].images;       
     playFunction(musicId);
     playingActive(musicId);
})
pause.addEventListener("click",()=>{
    audioPlay.pause();
    playing = false;
    checkPlaying(playing);
})
paly.addEventListener("click",()=>{
    currentTimes = audioPlay.currentTime;
    
    if(currentTimes == 0){
        playFunction(musicId);
        playing = true;
        checkPlaying(playing);
        img.src =  musicListArray[musicId].images;       

    }else{
        audioPlay.play();
        playing = true;
        checkPlaying(playing);
        img.src =  musicListArray[musicId].images;       

    }
    
})
const playFunction= (Id)=>{
    audioPlay.src = musicListArray[Id].src;
    audioPlay.play();
    playingActive(Id);
}
const playingActive = (iD)=>{ 
    for(let e = 0; e < musicListArray.length; e++){
        var musciItemId1 = document.getElementsByClassName("musiclistitem")[e];
        if(e == iD){
            musciItemId1.classList.add("active");
        }else if(e != iD){
            if(musciItemId1.classList.contains("active")){
                musciItemId1.classList.remove("active");
            }
        }
     }
    
}

