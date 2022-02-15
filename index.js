var songs=[
   
    {
        id:1,
        imageSrc: "./thumbnails/Jab-Tak.jpg",
        audioSrc:"./audio/JAB TAK Full Video _ M.S. DHONI -THE UNTOLD STORY _ Armaan Malik, Amaal Mallik _Sushant Singh Rajput.mp3",
        title:"Jab Tak"
    },
    {
        id:2,
        imageSrc: "./thumbnails/khairiyat.jpg",
        audioSrc:"./audio/Full Song - KHAIRIYAT (BONUS TRACK) _ CHHICHHORE _ Sushant, Shraddha _ Pritam, Amitabh B_Arijit Singh.mp3",
        title:"Khariyat"
    },
    {
        id:3,
        imageSrc :"./thumbnails/Lae-Dooba.jpg",
        audioSrc:"./audio/Lae Dooba - Full Video _ Aiyaary _ Sidharth Malhotra, Rakul Preet _ Sunidhi Chauhan _ Rochak Kohli.mp3",
        title:"Lae Dooba"
    },
    {
        id:4,
        imageSrc: "./thumbnails/makhana.jpg",
        audioSrc:"./audio/Makhna - Drive_ Sushant Singh Rajput, Jacqueline Fernandez_ Tanishk Bagchi, Asees Kaur.mp3",
        title:"Makhana"
    },
    {
        id:5,
        imageSrc: "./thumbnails/sukoon-mila.jpg",
        audioSrc:"./audio/Sukoon Mila Full Video _ Mary Kom _ Priyanka Chopra & Darshan Gandas _ Arijit Singh _ HD.mp3",
        title:"Sukoon Mila"
    },
    {
        id:6,
        imageSrc: "./thumbnails/shape.png",
        audioSrc:"./audio/Ed_Sheeran_-_Shape_of_You_Official_(getmp3.pro).mp3",
        title:"Shape Of You"
    },
    {
        id:7,
        imageSrc: "./thumbnails/Love Me Like You Do.jpg",
        audioSrc:"./audio/Ellie_Goulding_-_Love_Me_Like_You_D_(getmp3.pro).mp3",
        title:"Love me Like You Do"
    }
]

function playAudio(songid){

    let song = songs.find(function(song,index){
        return song.id === songid
    });
    
    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText=song.title;
    document.getElementById("audio_player").play();
}