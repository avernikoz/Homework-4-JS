let name = prompt (`Как Ваше имя?`,``);

function hello2 () {
   if (name == `Василий`){
      alert (`Привет ` + name);
   } else if (name == ``|| name == null) {
      alert (`Привет гость`);
   }
   return name
};

hello2 ();

