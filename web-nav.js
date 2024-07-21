// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log('Voice Navigation Extension installed');
});

// content.js
let recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.onresult = function(event) {
  let command = event.results[event.results.length - 1][0].transcript;
  processCommand(command);
};

function processCommand(command) {
  // Implement NLP and command execution logic here
  console.log('Command received:', command);
}

recognition.start();

// few-shot-learning.js
class FewShotLearner {
  constructor() {
    this.commandMappings = {};
  }

  learn(command, action) {
    // Implement learning logic
    this.commandMappings[command] = action;
  }

  predict(command) {
    // Implement prediction logic
    return this.commandMappings[command] || 'unknown';
  }
}

// Integrate with content.js
let learner = new FewShotLearner();


