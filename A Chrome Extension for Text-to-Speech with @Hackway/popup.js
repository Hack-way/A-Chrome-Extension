window.onload = () => {
  const voiceSelect = document.getElementById("voice-select");

  // Fetch the available voices from the Web Speech API
  const voices = speechSynthesis.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.value = voice.voiceURI;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  }
};
window.onload = () => {
  const voiceSelect = document.getElementById("voice-select");

  // Fetch the available voices from the Web Speech API
  speechSynthesis.onvoiceschanged = () => {
    const voices = speechSynthesis.getVoices();

    // Filter the voices to include only female voices
    const femaleVoices = voices.filter(voice => voice.gender === 'female');

    for (const voice of femaleVoices) {
      const option = document.createElement("option");
      option.value = voice.voiceURI;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    }
  };
};
