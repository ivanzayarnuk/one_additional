        /* Задание на урок:
        1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
        'Сколько фильмов вы уже посмотрели?'
        2) Создать объект personalMovieDB и в него поместить такие свойства:
            - count - сюда передается ответ на первый вопрос
            - movies - в это свойство поместить пустой объект
            - actors - тоже поместить пустой объект
            - genres - сюда поместить пустой массив
            - privat - в это свойство поместить boolean(логическое) значение false
        3) Задайте пользователю по два раза вопросы:
            - 'Один из последних просмотренных фильмов?'
            - 'На сколько оцените его?'
        Ответы стоит поместить в отдельные переменные
        Записать ответы в объект movies в формате: 
            movies: {
                'logan': '8.1'
            }
        Проверить, чтобы все работало без ошибок в консоли */

        'use strict';

        const personalMovieDB = {
            count: 0,
            movies: {},
            actors: {},
            genres: [],
            privat: false,
            start: function () {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
                while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
                }
            },

            rememberMyFillms: function () {
                for (let i = 0; i < 2; i++) {
                    const a = prompt('Вопрос №' + (i + 1) + '   Один из последних просмотренных фильмов?', ''),
                        b = prompt('На сколько оцените его?', '');

                    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                    } else {
                        console.log('Error');
                        i--;
                    }
                }
            },

            detectPersonalLevel: function () {
                if (personalMovieDB < 10) {
                    console.log('Просмотрено довольно мало фильмов');
                } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
                    console.log('Вы клаcсический зритель');
                } else if (personalMovieDB.count > 30) {
                    console.log('Вы киноман');
                } else {
                    console.log('Произошла ошибка');
                }
            },

            showMyDB: function (hiden,personalMovieDB1) {
                if (!hiden) {
                    console.log(personalMovieDB);
                }
            },
            toggleVisibleMyDB: function () {
                if (personalMovieDB.privat) {
                    personalMovieDB.privat = false;
                } else {
                    personalMovieDB.privat = true;
                }
                },
                writeYourGenres: function () {
                    
                    for (let i = 1; i < 2; i++) {
                        // let genre= prompt(`Ваш любимый жанр под номером ${i}`);

                        // if(genre==='' || genre==null ){
                        //     console.log("Вы ввели не корректные данные или не ввели их вовсе");
                        //     i--;
                        // } else{
                        // personalMovieDB.genres[i - 1] =genre;
                        // }

                        let genres= prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
                        if (genres === '' || genres === null) {
                            console.log("Вы ввели не корректные данные или не ввели их вовсе");
                            i--;
                        } else {
                            personalMovieDB.genres = genres.split(',');
                            personalMovieDB.genres.sort();
                        }

                    }
                    personalMovieDB.genres.forEach((item,i)=>{
                        console.log(`Любимый жанр ${i+1} это ${item}`);
                    });
                }
                };
        // personalMovieDB.start();
        // personalMovieDB.rememberMyFillms();
        // personalMovieDB.showMyDB(personalMovieDB.privat,personalMovieDB);
        // personalMovieDB.detectPersonalLevel();
        // personalMovieDB.writeYourGenres();
        // personalMovieDB.toggleVisibleMyDB();
        // personalMovieDB.showMyDB(personalMovieDB.privat,personalMovieDB);