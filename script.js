const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const progress = document.getElementById("progress");

// Play button
playBtn.addEventListener("click", () => {
  audio.play();
});

// Pause button
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
  progress.max = audio.duration;
});

// Seek when user drags progress bar
progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

// Extra: reset progress when song ends
audio.addEventListener("ended", () => {
  progress.value = 0;
});
