var speech_rec = new webkitSpeechRecognition();

speech_rec.onaudiostart = () => {
    console.log("audio started");
};

speech_rec.onaudioend = () => {
    console.log("audio ended");
};

speech_rec.onsoundstart = () => {
    console.log("sound starts");
};

speech_rec.onsoundend = () => {
    console.log("sound ends");
};

speech_rec.onspeechstart = () => {
    console.log("speech starts");
};

speech_rec.onspeechend = () => {
    console.log("speech ends");
};

function startListen() {
    console.log("listen started")
    speech_rec.start();
}
speech_rec.onresult = (event) => {
    console.log("on result ", event);
};