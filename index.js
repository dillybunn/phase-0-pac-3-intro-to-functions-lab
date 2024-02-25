function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
    const quietAnswer = "I can't hear you!"; 
    const loudAnswer = "YES INDEED!"; 
    const dinnerAnswer = "I would love to!"; 
    if(string.toLowerCase() === string) {
        return quietAnswer;
     } else if (string.toUpperCase() === string) {
        return loudAnswer;
    } else if ("Let's have dinner together!" === string) {
        return dinnerAnswer;
}}
