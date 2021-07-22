
"use strict";
const numberOfFilm = prompt('Сколько фильмов вы уже просмотрели?','');

const personalMovieDB={
            count:numberOfFilm,
            muvies:{},
            actors:{},
            genres:[],
            privat:false
};

const a=prompt('Один из последних просмотреных фильмов?',''),
      b=prompt('На сколько его оцените?',''),
      c=prompt('Сколько фильмов вы уже просмотрели?',''),
      d=prompt('На сколько его оцените?','');

personalMovieDB.muvies[a]=b;
personalMovieDB.muvies[c]=d;

console.log(personalMovieDB);