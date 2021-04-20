let i = 0;
setTimeout(() => alert(i), 100); 
for(let j = 0; j < 100000000; j++) {
  i++;
}
// setTimeout сработает только после всех операций
// i будет 100000000