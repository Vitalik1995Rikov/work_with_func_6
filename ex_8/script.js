let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // будет ошибка, т.к. sayHi создана внутри if, нельзя получить доступ к ней