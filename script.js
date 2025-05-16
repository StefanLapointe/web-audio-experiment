const audioContext = new AudioContext();

// Map key codes to number of semitones from A4.
const keys = {
    "KeyA": -9,
    "KeyW": -8,
    "KeyS": -7,
    "KeyE": -6,
    "KeyD": -5,
    "KeyF": -4,
    "KeyT": -3,
    "KeyG": -2,
    "KeyY": -1,
    "KeyH": 0,
    "KeyU": 1,
    "KeyJ": 2,
    "KeyK": 3,
    "KeyO": 4,
    "KeyL": 5,
    "KeyP": 6,
}

// Store oscillators in use according to key codes.
const oscillators = {};

document.addEventListener("keydown", function(event) {
    if (oscillators[event.code] != null) return;
    let semitones = keys[event.code];
    if (semitones == null) return;
    let freq = 440 * 2 ** (semitones / 12);
    let oscillatorNode = new OscillatorNode(audioContext, {frequency: freq});
    oscillatorNode.connect(audioContext.destination);
    oscillatorNode.start();
    oscillators[event.code] = oscillatorNode;
})

document.addEventListener("keyup", function(event) {
    let oscillatorNode = oscillators[event.code];
    if (oscillatorNode == null) return;
    oscillatorNode.stop();
    delete oscillators[event.code];
})
