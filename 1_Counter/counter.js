alert("Ну здарова уебан, " +
    "приготовь свои глаза с самому ужасному зрелищу, " +
    "которое ты только мог себе представить, за то через что я прошел, " +
    "пока писал эту хуйню, ты поплатишься своими нервными клетками и гандон " +
    "ты вообще ебаный , я убил на это 6 часов времени . Ебаная ты тварь")

let num = 0;
localStorage.getItem("counter");

function handleIncrement() {
    document.getElementById("num").textContent = ++num;
    localStorage.setItem("counter", document.getElementById("num").textContent);

};


