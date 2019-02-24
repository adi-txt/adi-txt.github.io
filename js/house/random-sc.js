var myArray = [
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/436529172&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/448766946&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/464934459&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/488590335&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/530003184&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/561152847&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572514798&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578296074&color=%23171717&inverse=true&auto_play=true&show_user=false',
];

var rand = myArray[Math.floor(Math.random() * myArray.length)];
console.log(rand);

document.getElementById('soundcloud').src = rand;

