var speech_rec = new webkitSpeechRecognition();


speech_rec.onspeechend = () => {
    speech_rec.stop();
};

function startListen() {
    console.log("listen started")
    speech_rec.start();
}
speech_rec.onresult = (event) => {
    console.log("speeched is ", event.results[0][0].transcript);
};