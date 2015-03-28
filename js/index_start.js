var msg1 = new SpeechSynthesisUtterance("Tap a button once to receive audio instructions");
window.speechSynthesis.speak(msg1);
var msg2 = new SpeechSynthesisUtterance("Tap a button twice to use it and listen to the audio instructions");
window.speechSynthesis.speak(msg2);
