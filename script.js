(function (window) {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt();
    if (firstLetter == "J" || firstLetter == "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})(window);
