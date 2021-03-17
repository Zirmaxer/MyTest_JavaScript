/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start () {
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i<3; i++) {
    const   a = prompt ('Один из последних просмотренных фильмов?', ''),
            b = prompt ('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log ('done');
    } else {
        console.log ('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log ('Вы классический зритель');
} else if (personalMovieDB.count > 50) {
    console.log ('Вы киноман');
} else {
    console.log ('Произошла ошибка');
}

console.log(personalMovieDB);

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log (personalMovieDB)
    }
}

function writeYourGenres () {
    for (let i = 1; i < 4; i++) {
        const a = prompt (`Ваш любимый жанр под номером ${i}`, '');
        if (a != null && a != '') {
            personalMovieDB.genres[i-1] = a;
            console.log ('done');
        } else {
            console.log ('Error');
            i--;
        }    
    }
}

writeYourGenres();
console.log(personalMovieDB.genres);