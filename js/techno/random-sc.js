var myArray = [
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/434215632&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/468387804&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/488220393&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/499987521&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/527429922&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/562212333&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572511663&color=%23171717&inverse=true&auto_play=true&show_user=false',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578830938&color=%23171717&inverse=true&auto_play=true&show_user=false',
];

var rand = myArray[Math.floor(Math.random() * myArray.length)];
console.log(rand);

document.getElementById('soundcloud').src = rand;

