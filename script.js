var arr = [
    {songName:"Enemy", url:"./songs/Enemy.mp3", img:"./images/Enemy.webp"},
    {songName:"One Love", url:"./songs/One Love.mp3", img:"./images/One_Love.webp"},
    {songName:"Phle Bhi Main", url:"./songs/PehleBhiMain.mp3", img:"./images/Phle_bhi_main.webp"},
    {songName:"Tu Hai Kahan", url:"./songs/Tu Hai Kahan.mp3", img:"./images/Tu_hai_kahan.webp"}
]

var allSongs = document.querySelector("#all-songs") 

var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainFunction(){
    var clutter = ""
    arr.forEach(function(elem,index){
        clutter +=  `<div class="song-card" id=${index}>
                        <div class="part1">
                            <img src=${elem.img} alt="">
                            <h2>${elem.songName}</h2>
                        </div>
                        <h6>3:56</h6>
                    </div>`
    })
    
    allSongs.innerHTML = clutter
    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}

mainFunction()

allSongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    mainFunction()
    audio.play()
})

var flag = 0;
play.addEventListener("click",function(){
   if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
   }
    else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag =0
   }
  
}) 

forward.addEventListener("click",function(){
    if(selectedSong < arr.length-1){
        selectedSong++
        mainFunction()
        audio.play()
        backward.style.opacity = 1
    }
    else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click",function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
        forward.style.opacity = 1
    }
    else{
        backward.style.opacity = 0.4
    }
})