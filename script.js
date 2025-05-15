document.addEventListener("keydown", function(event) {
    let audioContext = new AudioContext();
    let oscillatorNode = new OscillatorNode(audioContext);
    oscillatorNode.connect(audioContext.destination);
    oscillatorNode.start();
})
