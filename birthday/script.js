
function playMusic() {
            const music = document.getElementById('birthdayMusic');
            music.play();
        }

function showWish() {
  // const messages = [
    // "🎉 ikkada em ledhu kani next click cheyyi!",
    // "🎂 cake kavala ante malli click cheyyi",
    // "🎁 chusindhi chalu kani malli click cheyyi! !",
  // ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").innerText = msg;
}

