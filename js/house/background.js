var images = [
  "https://d2w9rnfcy7mm78.cloudfront.net/2818228/original_788e1b4da4c327b0f6879f24cd503832.gif", // color
  "https://d2w9rnfcy7mm78.cloudfront.net/1891065/original_0f98fd93ad9cd9e0bb61e2fdd14c0591.gif", // color explosion
  "https://d2w9rnfcy7mm78.cloudfront.net/2109658/original_e24ec2b7498aa5d767a6dc55e1408fbc.gif", // touch me not
  "https://d2w9rnfcy7mm78.cloudfront.net/1802131/original_0c0b44885d5f27ce53a6be2c89ced08f.gif", // illustration
  "https://d2w9rnfcy7mm78.cloudfront.net/211208/original_3bc59f9e4b643d988f90093e6dab5512.gif", // color illustration
  "https://d2w9rnfcy7mm78.cloudfront.net/2305187/original_84dccc2ab0b98a371c3066840239a719.gif", // color collage
  "https://d2w9rnfcy7mm78.cloudfront.net/2258536/original_15b6737dba7c7f249fc006b53e114b95.gif", // clouds
  "https://d2w9rnfcy7mm78.cloudfront.net/3655609/original_a7bab9f2cc7f4b89d5c5ea1c71be0f24.gif", // helmet karate
  "https://d2w9rnfcy7mm78.cloudfront.net/1305198/original_c707e9e3cf895fae36e196b3a2f2af9b.gif", // wavy color
  "https://66.media.tumblr.com/04538110ef9ee1f668f690249d102eb9/tumblr_nyyarr6oq51uke22ao1_500.gif", // peacock
  "https://d2w9rnfcy7mm78.cloudfront.net/2141056/original_6a9c4bb43d835c8c54252c09be3f557b.gif", // color dots
  "https://d2w9rnfcy7mm78.cloudfront.net/1551958/original_9290dc9487c726c1d433f6cbc7316ba7.gif", // love & fear
  "https://d2w9rnfcy7mm78.cloudfront.net/741291/original_727943b2c3132eb51ff71e4f711c8922.gif", // faces
  "https://d2w9rnfcy7mm78.cloudfront.net/1104219/original_6a36fd8db97f6c80bbbabc916b47f69e.gif", // painting animation
  "https://d2w9rnfcy7mm78.cloudfront.net/2252039/original_d125eff113fe83a23c4049e0b91bb00a.gif", // water + ball
  "https://d2w9rnfcy7mm78.cloudfront.net/1758359/original_9754ceb73371725ad50dd783dc181930.gif", // unimpressed doggo
  "https://d2w9rnfcy7mm78.cloudfront.net/716386/original_f7f1c70bd4209f83f531f8a3afb98dcf.gif", // dude in room
  "https://d2w9rnfcy7mm78.cloudfront.net/1269681/original_c7b6f0ec9edc709dec81b36f8e3ae786.gif", // on the edge
  "https://d2w9rnfcy7mm78.cloudfront.net/741268/original_615162b6bbf564ceeafcd46bbeda5cca.gif", // world illustrated
  "https://d2w9rnfcy7mm78.cloudfront.net/415465/original_81f80bb8b33fee2f15d9c589230e5466.gif", // slow mo balloon
  "https://d2w9rnfcy7mm78.cloudfront.net/1907334/original_5f7d1c1ae1155a9274d3731ea29cc61c.gif", // tornado
  "https://d2w9rnfcy7mm78.cloudfront.net/1910182/original_0f2c9150d941c630aeaa058d10eb9aae.gif", // ice creams
  "https://d2w9rnfcy7mm78.cloudfront.net/1907320/original_93fbe9a6c6d0faa768a88cc608314517.gif", // bike fall
  "https://d2w9rnfcy7mm78.cloudfront.net/1917615/original_afe4948a187bce530d4dc49ef2ec4758.gif", // city
  "https://d2w9rnfcy7mm78.cloudfront.net/1953329/original_4c7bd755539d878f2be9fb0b8b129464.gif", // LA
  "https://d2w9rnfcy7mm78.cloudfront.net/1931669/original_cc6130abe25c302026d24f44daaa754d.gif", // political party
  "https://d2w9rnfcy7mm78.cloudfront.net/1809334/original_92e0051406caf05c486e21b78653f05a.gif", // basketball
  "https://d2w9rnfcy7mm78.cloudfront.net/2141332/original_b172aa41b9d88059009f8bc01babd495.gif", // zuck
  "https://d2w9rnfcy7mm78.cloudfront.net/2067994/original_651c88a32556ca031e1995262096f60a.gif", // daft punk
  "https://d2w9rnfcy7mm78.cloudfront.net/2155911/original_bbc11933fda0a70c06456f98a1a41d20.gif", // india
  "https://d2w9rnfcy7mm78.cloudfront.net/1639434/original_e9de55837ff55d9a54c55e92cc51fd43.gif", // clay cook
  "https://d2w9rnfcy7mm78.cloudfront.net/1764557/original_2f308bd485b7141b0cd97cff61c8e653.gif", // glitter
  "https://d2w9rnfcy7mm78.cloudfront.net/1471864/original_9c4fa04225aec1f3159d5f476d536218.gif", // illustrated hand
  "https://d2w9rnfcy7mm78.cloudfront.net/671830/original_af4a1620cbdbc9d40faa477575fb3fd3.gif", // spinning dude
  "https://d2w9rnfcy7mm78.cloudfront.net/3670115/original_62c37f15773fbf8f9113910ad2bb33e6.gif", // not the father
  "https://d2w9rnfcy7mm78.cloudfront.net/3220668/original_d9f32d1468f7db0c10581dc09d745efc.gif", // doggo back
  "https://d2w9rnfcy7mm78.cloudfront.net/110653/original_f3793e74b49815a6445aa7998d22197c.gif", // squirtles
]

var imageHead = document.getElementById("full-background");

var i = 0;

setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
      	i =  0;
      }
}, 3000);
