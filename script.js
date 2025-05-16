const audioContext = new AudioContext();
let oscillatorNode;

document.addEventListener("keydown", function(event) {
    if (oscillatorNode != null) return;
    oscillatorNode = new OscillatorNode(audioContext);
    oscillatorNode.connect(audioContext.destination);
    oscillatorNode.start();
})

document.addEventListener("keyup", function(event) {
    oscillatorNode.stop();
    oscillatorNode = null;
})
