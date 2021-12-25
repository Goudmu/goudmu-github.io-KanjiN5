// var kanjiN5 = ['一', '二', '三'];
// var OKanjiN5 = ['ichi', 'ni', 'san'];
// var KKanjiN5 = [['hitotsu', 'itsu'],['futatsu'],['mitsu', 'mittsu']];

// for ( let i = 0; i < kanjiN5.length; i++){
//     var tebakO = prompt('tebak Onyomi dari kanji ' + kanjiN5[i]);
//     if (OKanjiN5[i] == tebakO){
//         console.log('BENAR');
//     } else {
//         console.log('SALAH');
//     }
// };

// for ( let i = 0; i < kanjiN5.length; i++){
//     var tebakK = prompt('tebak Kunyomi dari kanji ' + kanjiN5[i]);
//     if (KKanjiN5[i].length > 1){
//         for ( let j = 0; j < KKanjiN5[i].length; j++){
//             if (KKanjiN5[i][j] == tebakK){
//                 console.log('BENAR');
//                 break;
//             } else if (j == KKanjiN5[i].length - 1) {
//                 console.log('SALAH');
//             };
//         };
//     } else if (KKanjiN5[i].length == 1){
//         if (KKanjiN5[i] == tebakK){
//             console.log('BENAR');
//         } else {
//             console.log('SALAH');
//         }
//     };
// };

// aura bawah top bar
const container_each_bar = document.querySelectorAll('.container_each_bar');
const container_isi_topbar_n5 = document.querySelector('.container_isi_topbar_n5');
console.log(container_each_bar);

container_each_bar[1].addEventListener('mouseover', function () {
    container_isi_topbar_n5.style.display = 'flex';
});
container_each_bar[1].addEventListener('mouseout', function () {
    container_isi_topbar_n5.style.display = 'none';
});

// FLIP CARD
const card = document.querySelectorAll(".card__inner");

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function (e) {
        card[i].classList.toggle('is-flipped');
    });
}

// Soal
const container_judul_SL = document.querySelector('.container_judul_SL');
const skor = document.querySelector('.skor');
const container_next_soal = document.querySelector('.container_next_soal');
const container_back_soal = document.querySelector('.container_back_soal');
const container_soalke1 = document.querySelectorAll('.container_soalke1');
const start_latihan = document.querySelector('.start_latihan');
const start_latihan_essay = document.querySelector('.start_latihan_essay');
const restart_container = document.querySelector('.restart_container');
const restart_container_PG = document.querySelector('.restart_container_PG');
const submit_container = document.querySelector('.submit_container');
var soalke1 = document.querySelectorAll('.soalke1');
const container_jawaban = document.querySelectorAll('.container_jawaban');


start_latihan.addEventListener('click', function () {
    container_judul_SL.style.display = 'none';
    skor.style.display = 'inline';
    restart_container_PG.style.display = 'inline';
    for (var k = 0; k < container_soalke1.length; k++) {
        container_soalke1[k].style.display = 'flex';
    }

    var numbers = []; // new empty array
    var min, max, r, n, p;
    min = 0;
    max = soal.length - 1;
    r = 3; // how many numbers you want to extract
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numbers.includes(n);
            if (!p) {
                numbers.push(n);
            }
        }
        while (p);
    }
    console.log(numbers);

    var numberss = []; // new empty array
    var min, max, r, n, p;
    min = 0;
    max = jawaban.length - 1;
    r = 5; // how many numberss you want to extract
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numberss.includes(n);
            if (!p) {
                numberss.push(n);
            }
        }
        while (p);
    }
    var numberss2 = []; // new empty array
    var min, max, r, n, p;
    min = 0;
    max = listJawaban.length - 1;
    r = 5; // how many numberss you want to extract
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numberss2.includes(n);
            if (!p) {
                numberss2.push(n);
            }
        }
        while (p);
    }

    var numberss3 = []; // new empty array
    var min, max, r, n, p;
    min = 0;
    max = listJawaban.length - 1;
    r = 5; // how many numberss you want to extract
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numberss3.includes(n);
            if (!p) {
                numberss3.push(n);
            }
        }
        while (p);
    }

    var numberss4 = []; // new empty array
    var min, max, r, n, p;
    min = 0;
    max = jawaban1.length - 1;
    r = 1; // how many numberss you want to extract
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numberss4.includes(n);
            if (!p) {
                numberss4.push(n);
            }
        }
        while (p);
    }
    var numberss5 = []; // new empty array
    var min, max, r, n, p;
    min = 0;
    max = jawaban1.length - 1;
    r = 1; // how many numberss you want to extract
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numberss5.includes(n);
            if (!p) {
                numberss5.push(n);
            }
        }
        while (p);
    }
    var numberss6 = []; // new empty array
    var min, max, r, n, p;
    min = 0;
    max = jawaban1.length - 1;
    r = 1; // how many numberss you want to extract
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numberss6.includes(n);
            if (!p) {
                numberss6.push(n);
            }
        }
        while (p);
    }

    for (let apk = 0; apk < jawaban1.length; apk++) {
        var aspg = numberss[apk];
        var aspg2 = numberss2[apk];
        var aspg3 = numberss3[apk];
        jawaban1[apk].innerHTML = listJawaban[aspg];
        jawaban2[apk].innerHTML = listJawaban[aspg2];
        jawaban3[apk].innerHTML = listJawaban[aspg3];
    };

    for (let acakbener = 0; acakbener < jawaban1.length; acakbener++) {
        jawaban1[numberss4].innerHTML = listJawaban[numbers[0]];
        jawaban2[numberss5].innerHTML = listJawaban[numbers[1]];
        jawaban3[numberss6].innerHTML = listJawaban[numbers[2]];
    };

    var skorPG = 0;
    var skorPGs = document.createElement('h3');
    var skorPGsText = document.createTextNode(skorPG + ' / ' + container_soalke1.length);
    skorPGs.appendChild(skorPGsText);
    skor.appendChild(skorPGs);
    const skorsss = skor.querySelectorAll('h3');

    for (let i = 0; i < container_soalke1.length; i++) {
        const soalacak1 = document.createElement('h3');
        var asdf = numbers[i];
        const isisoalacak1 = document.createTextNode(soal[asdf]);
        soalacak1.appendChild(isisoalacak1);
        soalke1[i].appendChild(soalacak1);
    };
    for (let j = 0; j < jawaban2.length; j++) {
        jawaban1[j].addEventListener('click', function () {
            if (jawaban1[j].innerHTML == jawaban[numbers[0]]) {
                skorPG = skorPG + 1;
                skorsss[1].innerHTML = skorPG + ' / ' + container_soalke1.length;
                for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
                    jawaban1[asalaaaa].style.backgroundColor = 'white';
                };
                jawaban1[j].style.backgroundColor = 'green';
            } else {
                for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
                    jawaban1[asalaaaa].style.backgroundColor = 'white';
                };
                jawaban1[j].style.backgroundColor = 'red';
            }
        });
        jawaban2[j].addEventListener('click', function () {
            if (jawaban2[j].innerHTML == jawaban[numbers[1]]) {
                skorPG = skorPG + 1;
                skorsss[1].innerHTML = skorPG + ' / ' + container_soalke1.length;
                for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
                    jawaban2[asalaaaa].style.backgroundColor = 'white';
                };
                jawaban2[j].style.backgroundColor = 'green';
            } else {
                for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
                    jawaban2[asalaaaa].style.backgroundColor = 'white';
                };
                jawaban2[j].style.backgroundColor = 'red';
            }
        });
        jawaban3[j].addEventListener('click', function () {
            if (jawaban3[j].innerHTML == jawaban[numbers[2]]) {
                skorPG = skorPG + 1;
                skorsss[1].innerHTML = skorPG + ' / ' + container_soalke1.length;
                for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
                    jawaban3[asalaaaa].style.backgroundColor = 'white';
                };
                jawaban3[j].style.backgroundColor = 'green';
            } else {
                for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
                    jawaban3[asalaaaa].style.backgroundColor = 'white';
                };
                jawaban3[j].style.backgroundColor = 'red';
            }
        });
    };
    start_latihan_essay.style.display = 'none';
    start_latihan.style.display = 'none';
});

var jawaban = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'hitotsu',
    'futatsu',
    'mitsu',
    'yotsu',
    'itsutsu',
    'muttsu',
    'nanatsu',
    'yatsu',
    'kokonotsu',
    'too',
];
var soal = ['Kanji yang memiliki onyommi "ichi" ? ', 'Kanji yang memiliki onyommi "ni" ?', 'Kanji yang memiliki onyommi "san" ?', 'Kanji yang memiliki onyommi "yon" ?', 'Kanji yang memiliki onyommi "go" ?',
    'Kanji yang memiliki onyommi "roku" ?',
    'Kanji yang memiliki onyommi "shichi" ?',
    'Kanji yang memiliki onyommi "hachi" ?',
    'Kanji yang memiliki onyommi "kyuu" ?',
    'Kanji yang memiliki onyommi "jyuu" ?',
    'Arti dari 一',
    'Arti dari 二',
    'Arti dari 三',
    'Arti dari 四',
    'Arti dari 五',
    'Arti dari 六',
    'Arti dari 七',
    'Arti dari 八',
    'Arti dari 九',
    'Arti dari 十',
    'Romaji dari kunyomi 一',
    'Romaji dari kunyomi 二',
    'Romaji dari kunyomi 三',
    'Romaji dari kunyomi 四',
    'Romaji dari kunyomi 五',
    'Romaji dari kunyomi 六',
    'Romaji dari kunyomi 七',
    'Romaji dari kunyomi 八',
    'Romaji dari kunyomi 九',
    'Romaji dari kunyomi 十',
];
var listJawaban = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'hitotsu',
    'futatsu',
    'mitsu',
    'yotsu',
    'itsutsu',
    'muttsu',
    'nanatsu',
    'yatsu',
    'kokonotsu',
    'too',
];



var soal_essay = ['Tuliskan romaji dari onyomi 一', 'Tuliskan romaji dari onyomi 二', 'Tuliskan romaji dari onyomi 三', 'Tuliskan romaji dari onyomi 四', 'Tuliskan romaji dari onyomi 五',
    'Tuliskan romaji dari onyomi 六',
    'Tuliskan romaji dari onyomi 七',
    'Tuliskan romaji dari onyomi 八',
    'Tuliskan romaji dari onyomi 九',
    'Tuliskan romaji dari onyomi 十',
    'Tuliskan romaji dari kunyomi 一',
    'Tuliskan romaji dari kunyomi 二',
    'Tuliskan romaji dari kunyomi 三',
    'Tuliskan romaji dari kunyomi 四',
    'Tuliskan romaji dari kunyomi 五',
    'Tuliskan romaji dari kunyomi 六',
    'Tuliskan romaji dari kunyomi 七',
    'Tuliskan romaji dari kunyomi 八',
    'Tuliskan romaji dari kunyomi 九',
    'Tuliskan romaji dari kunyomi 十',
    'Tuliskan arti dari 一',
    'Tuliskan arti dari 二',
    'Tuliskan arti dari 三',
    'Tuliskan arti dari 四',
    'Tuliskan arti dari 五',
    'Tuliskan arti dari 六',
    'Tuliskan arti dari 七',
    'Tuliskan arti dari 八',
    'Tuliskan arti dari 九',
    'Tuliskan arti dari 十',
];
var listjawaban_essay = ['ichi', 'ni', 'san', 'yon', 'go', 'roku', 'shichi', 'hachi', 'kyuu', 'jyuu',
    'hitotsu',
    'futatsu',
    'mitsu',
    'yotsu',
    'itsutsu',
    'muttsu',
    'nanatsu',
    'yatsu',
    'kokonotsu',
    'too',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
];

const container_soal_essay = document.querySelectorAll('.container_soal_essay');
const container_essay = document.querySelector('.container_essay');
var soalessay = document.querySelectorAll('.soalessay');
const jawaban_essay = document.querySelectorAll('.jawaban_essay');

start_latihan_essay.addEventListener('click', function () {
    start_latihan.style.display = 'none';
    start_latihan_essay.style.display = 'none';
    container_judul_SL.style.display = 'none';
    container_essay.style.display = 'flex';
    restart_container.style.display = 'inline';
    submit_container.style.display = 'inline';
    skor.style.display = 'inline';
    for (let ii = 0; ii < soalessay.length; ii++) {
        container_soal_essay[ii].style.display = 'flex';
    }

    var numbers = []; // new empty array
    var min, max, r, n, p;
    min = 0;
    max = listjawaban_essay.length - 1;
    r = 10; // how many numbers you want to extract
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numbers.includes(n);
            if (!p) {
                numbers.push(n);
            }
        }
        while (p);
    }

    for (let i = 0; i < container_soal_essay.length; i++) {
        const soalacakessay = document.createElement('h4');
        var asdf = numbers[i];
        const isisoalacakessay = document.createTextNode(soal_essay[asdf]);
        soalacakessay.appendChild(isisoalacakessay);
        soalessay[i].appendChild(soalacakessay);
    };

    const submit = document.querySelector('.submit');
    var jumlahskor = 0;
    submit.addEventListener('click', function () {
        for (let i = 0; i < jawaban_essay.length; i++) {
            if (jawaban_essay[i].value == listjawaban_essay[numbers[i]]) {
                jumlahskor = jumlahskor + 1;
                jawaban_essay[i].style.backgroundColor = 'green';
            } else {
                jawaban_essay[i].style.backgroundColor = 'red';
            };
        };
        if (remove_skor.length < 2) {
            var isiskor = document.createElement('h3');
            var isiskortext = document.createTextNode(jumlahskor + ' / ' + jawaban_essay.length);
            isiskor.appendChild(isiskortext);
            skor.appendChild(isiskor);
        } else if (remove_skor.length > 1) {
            console.log(skor.childNodes);
            var isiskorr = document.createElement('h3');
            var isiskorrtext = document.createTextNode(jumlahskor + ' / ' + jawaban_essay.length);
            isiskorr.appendChild(isiskorrtext);
            skor.replaceChild(isiskorr, skor.childNodes[3]);
        }
    });
});

// restart
const restart = document.querySelector('.restart');
const remove_skor = skor.getElementsByTagName('h3');


restart.addEventListener('click', function () {

    restart_container.style.display = 'none';
    submit_container.style.display = 'none';
    container_judul_SL.style.display = 'inline';
    start_latihan_essay.style.display = 'inline';
    start_latihan.style.display = 'inline';
    const container_soal_essay_h4 = document.querySelectorAll('h4');



    if (remove_skor.length > 1) {
        skor.removeChild(remove_skor[1]);
    };

    for (var k = 0; k < container_soal_essay.length; k++) {
        soalessay[k].removeChild(container_soal_essay_h4[k])
        container_soal_essay[k].style.display = 'none';
        jawaban_essay[k].style.backgroundColor = 'white';
        jawaban_essay[k].value = '';
    }
    skor.style.display = 'none';
});


// restart PG
const restart_PG = document.querySelector('.restart_PG');


restart_PG.addEventListener('click', function () {

    // restart_container.style.display = 'none';
    restart_container_PG.style.display = 'none';
    container_judul_SL.style.display = 'inline';
    start_latihan_essay.style.display = 'inline';
    start_latihan.style.display = 'inline';

    for (let asdsa = 0; asdsa < jawaban1.length; asdsa++) {
        jawaban1[asdsa].style.backgroundColor = 'white';
        jawaban2[asdsa].style.backgroundColor = 'white';
        jawaban3[asdsa].style.backgroundColor = 'white';
    }

    if (remove_skor.length > 1) {
        skor.removeChild(remove_skor[1]);
    };
    for (let i = 0; i < container_soalke1.length; i++) {
        soalke1[i].innerHTML = ' ';
    };

    for (var k = 0; k < container_soalke1.length; k++) {
        container_soalke1[k].style.display = 'none';
    };

    skor.style.display = 'none';
});





// tentukan jumlah soal
const container_select_number_of_quiz = document.querySelector('.container_select_number_of_quiz');
const container_select_number = document.querySelector('.container_select_number');
const container_5soal = document.querySelector('.container_5soal');
const container_10soal = document.querySelector('.container_10soal');
const container_20soal = document.querySelector('.container_20soal');

// tutup tentukan jumlah soal



// backup 6:00

// start_latihan_essay.addEventListener('click', function () {
//     start_latihan.style.display = 'none';
//     start_latihan_essay.style.display = 'none';
//     container_judul_SL.style.display = 'none';
//     container_essay.style.display = 'flex';
//     restart_container.style.display = 'inline';
//     submit_container.style.display = 'inline';
//     skor.style.display = 'inline';
//     for (let ii = 0; ii < soalessay.length; ii++) {
//         container_soal_essay[ii].style.display = 'flex';
//     }

//     var numbers = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = listjawaban_essay.length - 1;
//     r = 10; // how many numbers you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numbers.includes(n);
//             if (!p) {
//                 numbers.push(n);
//             }
//         }
//         while (p);
//     }

//     for (let i = 0; i < container_soal_essay.length; i++) {
//         const soalacakessay = document.createElement('h4');
//         var asdf = numbers[i];
//         const isisoalacakessay = document.createTextNode(soal_essay[asdf]);
//         soalacakessay.appendChild(isisoalacakessay);
//         soalessay[i].appendChild(soalacakessay);
//     };

//     const submit = document.querySelector('.submit');
//     var jumlahskor = 0;
//     submit.addEventListener('click', function () {
//         for (let i = 0; i < jawaban_essay.length; i++) {
//             if (jawaban_essay[i].value == listjawaban_essay[numbers[i]]) {
//                 jumlahskor = jumlahskor + 1;
//                 jawaban_essay[i].style.backgroundColor = 'green';
//                 console.log('benar');
//             } else {
//                 jawaban_essay[i].style.backgroundColor = 'red';
//                 console.log('salah');
//             };
//         };
//         if (remove_skor.length < 2){
//             var isiskor = document.createElement('h3');
//             var isiskortext = document.createTextNode(jumlahskor + ' / ' + jawaban_essay.length);
//             isiskor.appendChild(isiskortext);
//             skor.appendChild(isiskor);
//         } else if (remove_skor.length > 1) {
//             console.log(skor.childNodes);
//             var isiskorr = document.createElement('h3');
//             var isiskorrtext = document.createTextNode(jumlahskor + ' / ' + jawaban_essay.length);
//             isiskorr.appendChild(isiskorrtext);
//             skor.replaceChild(isiskorr, skor.childNodes[3]);
//         }
//     });
// });

// // restart
// const restart = document.querySelector('.restart');
// const remove_skor = skor.getElementsByTagName('h3');


// restart.addEventListener('click', function(){

//     restart_container.style.display = 'none';
//     submit_container.style.display = 'none';
//     container_judul_SL.style.display = 'inline';
//     start_latihan_essay.style.display = 'inline';
//     start_latihan.style.display = 'inline';
//     const container_soal_essay_h4 = document.querySelectorAll('h4');



//     if (remove_skor.length > 1){
//         skor.removeChild(remove_skor[1]);
//     };

//     for (var k = 0; k < container_soal_essay.length; k++) {
//         soalessay[k].removeChild(container_soal_essay_h4[k])
//         container_soal_essay[k].style.display = 'none';
//         jawaban_essay[k].style.backgroundColor = 'white';
//         jawaban_essay[k].value = ' ';
//     }
//     skor.style.display = 'none';
// });

// tutup backup 6:00









// for (let ai = 0;ai < jawaban_essay.length; ai++){
//     jawaban_essay[ai].addEventListener('click', function(){
//         jawaban_essay[ai].style.border = '3px solid lightblue';
//     });
// };


// tutup aura input jika diclick jawaban_essay


// for (let i = 0; i < soal.length - 1; i++){
//     var angkaacaksoal = Math.floor(Math.random() * 4);
//     console.log(soal[angkaacaksoal]);
// }

// acak soal
// function getrandom3(list) {
//     const res = [];
//     for (let i = 0; i < soal.length; i++) {
//         const random = Math.floor(Math.random() * soal.length);
//         res.push(list[random]);
//     };
//     return res;
// };

// function getsoalrandom(list) {
//     return [...list].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3);
// }
// tutup acak soal

// ngocok angka

// var numbers = []; // new empty array

// var min, max, r, n, p;

// min = 0;
// max = jawaban.length;
// r = 2; // how many numbers you want to extract

// for (let i = 0; i < r; i++) {
//     do {
//         n = Math.floor(Math.random() * (max - min + 1)) + min;
//         p = numbers.includes(n);
//         if (!p) {
//             numbers.push(n);
//         }
//     }
//     while (p);
// }

// console.log(numbers);

// tutup ngocok angka









// tentukan jawaban

const jawaban1 = document.querySelectorAll('.jawaban1');
const jawaban2 = document.querySelectorAll('.jawaban2');
const jawaban3 = document.querySelectorAll('.jawaban3');


// tutup tentukan jawaban

// start_latihan.addEventListener('click', function () {
//     // var angkaacaksoal = getsoalrandom(soal);
//     // var acakjawaban = getsoalrandom(jawaban);
//     container_judul_SL.style.display = 'none';
//     cotainer_soal_ke.style.display = 'inline';
//     skor.style.display = 'inline';
//     for (var k = 0; k < container_soalke1.length; k++) {
//         container_soalke1[k].style.display = 'flex';
//     }

//     var numbers = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = jawaban.length - 1;
//     r = 3; // how many numbers you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numbers.includes(n);
//             if (!p) {
//                 numbers.push(n);
//             }
//         }
//         while (p);
//     }
//     console.log(numbers);

//     for (let i = 0; i < container_soalke1.length; i++) {
//         const soalacak1 = document.createElement('h3');
//         var asdf = numbers[i];
//         const isisoalacak1 = document.createTextNode(soal[asdf]);
//         soalacak1.appendChild(isisoalacak1);
//         soalke1[i].appendChild(soalacak1);
//         console.log(jawaban[asdf]);
//     };
//     for ( let j = 0; j < jawaban2.length; j++){
//         jawaban2[j].addEventListener('click', function(){
//             if (jawaban2[j].innerHTML == jawaban[numbers[0]]){
//                 console.log('BENAR');
//             } else {
//                 console.log('SALAH');
//             }
//         });
//         jawaban2[j].addEventListener('click', function(){
//             if (jawaban2[j].innerHTML == jawaban[numbers[1]]){
//                 console.log('BENAR');
//             } else {
//                 console.log('SALAH');
//             }
//         });

//     };
//     start_latihan.style.display = 'none';
// });

// start_latihan[aa].addEventListener('click', function () {
//     // var angkaacaksoal = getsoalrandom(soal);
//     // var acakjawaban = getsoalrandom(jawaban);
//     container_judul_SL.style.display = 'none';
//     cotainer_soal_ke.style.display = 'inline';
//     skor.style.display = 'inline';
//     for (var k = 0; k < container_soalke1.length; k++) {
//         container_soalke1[k].style.display = 'flex';
//     }

//     var numbers = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = jawaban.length - 1;
//     r = 3; // how many numbers you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numbers.includes(n);
//             if (!p) {
//                 numbers.push(n);
//             }
//         }
//         while (p);
//     }
//     console.log(numbers);

//     for (let i = 0; i < container_soalke1.length; i++) {
//         const soalacak1 = document.createElement('h3');
//         var asdf = numbers[i];
//         const isisoalacak1 = document.createTextNode(soal[asdf]);
//         soalacak1.appendChild(isisoalacak1);
//         soalke1[i].appendChild(soalacak1);
//         console.log(jawaban[asdf]);
//     };
//     for ( let j = 0; j < jawaban2.length; j++){
//         jawaban1[j].addEventListener('click', function(){
//             if (jawaban1[j].innerHTML == jawaban[numbers[0]]){
//                 console.log('BENAR');
//             } else {
//                 console.log('SALAH');
//             }
//         });
//         jawaban2[j].addEventListener('click', function(){
//             if (jawaban2[j].innerHTML == jawaban[numbers[1]]){
//                 console.log('BENAR');
//             } else {
//                 console.log('SALAH');
//             }
//         });
//         jawaban3[j].addEventListener('click', function(){
//             if (jawaban3[j].innerHTML == jawaban[numbers[2]]){
//                 console.log('BENAR');
//             } else {
//                 console.log('SALAH');
//             }
//         });
//     };
//     start_latihan.style.display = 'none';
// });


// start_latihan.addEventListener('click', function(){
//     var angkaacaksoal = getsoalrandom(soal);
//     container_judul_SL.style.display = 'none';
//     cotainer_soal_ke.style.display = 'inline';
//     skor.style.display = 'inline';
//     container_next_soal.style.display = 'inline';
//     container_back_soal.style.display = 'inline';
//     for ( var i = 0; i < container_soalke1.length; i++) {
//         container_soalke1[i].style.display = 'flex';
//         const soalacak1 = document.createElement('h3');
//         const isisoalacak1 = document.createTextNode(angkaacaksoal[i]);
//         soalacak1.appendChild(isisoalacak1);
//         soalke1[i].appendChild(soalacak1);
//         for ( let j = 0; j < jawaban1.length; j++) {
//             console.log(jawaban1[j].innerHTML);
//             console.log(jawaban[i]);
//             jawaban1[j].addEventListener('click', function(){
//                 if (jawaban1[j].innerHTML == jawaban[i]){
//                     console.log('BENAR');
//                 } else {
//                     console.log('SALAH');
//                 };
//             });
//         };
//     };
//     start_latihan.style.display = 'none';
// });



// 17:28 18/12/2021
// start_latihan.addEventListener('click', function () {
//     // var angkaacaksoal = getsoalrandom(soal);
//     // var acakjawaban = getsoalrandom(jawaban);
//     container_judul_SL.style.display = 'none';
//     skor.style.display = 'inline';
//     restart_container_PG.style.display = 'inline';
//     for (var k = 0; k < container_soalke1.length; k++) {
//         container_soalke1[k].style.display = 'flex';
//     }

//     var numbers = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = jawaban.length - 1;
//     r = 3; // how many numbers you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numbers.includes(n);
//             if (!p) {
//                 numbers.push(n);
//             }
//         }
//         while (p);
//     }
//     console.log(numbers);

//     var skorPG = 0;
//     var skorPGs = document.createElement('h3');
//     var skorPGsText = document.createTextNode(skorPG + ' / ' + container_soalke1.length);
//     skorPGs.appendChild(skorPGsText);
//     skor.appendChild(skorPGs);
//     const skorsss = skor.querySelectorAll('h3');

//     for (let i = 0; i < container_soalke1.length; i++) {
//         const soalacak1 = document.createElement('h3');
//         var asdf = numbers[i];
//         const isisoalacak1 = document.createTextNode(soal[asdf]);
//         soalacak1.appendChild(isisoalacak1);
//         soalke1[i].appendChild(soalacak1);
//     };
//     for (let j = 0; j < jawaban2.length; j++) {
//         jawaban1[j].addEventListener('click', function () {
//             if (jawaban1[j].innerHTML == jawaban[numbers[0]]) {
//                 skorPG = skorPG + 1;
//                 skorsss[1].innerHTML = skorPG + ' / ' + container_soalke1.length;
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++){
//                     jawaban1[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban1[j].style.backgroundColor = 'green';
//             } else {
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++){
//                     jawaban1[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban1[j].style.backgroundColor = 'red';
//                 jawaban1[numbers[0]].style.backgroundColor = 'green';
//             }
//         });
//         jawaban2[j].addEventListener('click', function () {
//             if (jawaban2[j].innerHTML == jawaban[numbers[1]]) {
//                 skorPG = skorPG + 1;
//                 skorsss[1].innerHTML = skorPG + ' / ' + container_soalke1.length;
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++){
//                     jawaban2[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban2[j].style.backgroundColor = 'green';
//             } else {
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++){
//                     jawaban2[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban2[j].style.backgroundColor = 'red';
//                 jawaban2[numbers[1]].style.backgroundColor = 'green';
//             }
//         });
//         jawaban3[j].addEventListener('click', function () {
//             if (jawaban3[j].innerHTML == jawaban[numbers[2]]) {
//                 skorPG = skorPG + 1;
//                 skorsss[1].innerHTML = skorPG + ' / ' + container_soalke1.length;
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++){
//                     jawaban3[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban3[j].style.backgroundColor = 'green';
//             } else {
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++){
//                     jawaban3[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban3[j].style.backgroundColor = 'red';
//                 jawaban3[numbers[2]].style.backgroundColor = 'green';
//             }
//         });
//     };
//     start_latihan_essay.style.display = 'none';
//     start_latihan.style.display = 'none';
// });

// waktu 18:10 12/12/2021
// start_latihan.addEventListener('click', function () {
//     container_judul_SL.style.display = 'none';
//     skor.style.display = 'inline';
//     restart_container_PG.style.display = 'inline';
//     for (var k = 0; k < container_soalke1.length; k++) {
//         container_soalke1[k].style.display = 'flex';
//     }

//     var numbers = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = jawaban1.length - 1;
//     r = 3; // how many numbers you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numbers.includes(n);
//             if (!p) {
//                 numbers.push(n);
//             }
//         }
//         while (p);
//     }
//     console.log(numbers);

//     var numberss = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = jawaban.length - 1;
//     r = 5; // how many numberss you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numberss.includes(n);
//             if (!p) {
//                 numberss.push(n);
//             }
//         }
//         while (p);
//     }
//     var numberss2 = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = listJawaban.length - 1;
//     r = 5; // how many numberss you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numberss2.includes(n);
//             if (!p) {
//                 numberss2.push(n);
//             }
//         }
//         while (p);
//     }

//     var numberss3 = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = listJawaban.length - 1;
//     r = 5; // how many numberss you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numberss3.includes(n);
//             if (!p) {
//                 numberss3.push(n);
//             }
//         }
//         while (p);
//     }

//     var numberss4 = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = jawaban1.length - 1;
//     r = 1; // how many numberss you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numberss4.includes(n);
//             if (!p) {
//                 numberss4.push(n);
//             }
//         }
//         while (p);
//     }
//     var numberss5 = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = jawaban1.length - 1;
//     r = 1; // how many numberss you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numberss5.includes(n);
//             if (!p) {
//                 numberss5.push(n);
//             }
//         }
//         while (p);
//     }
//     var numberss6 = []; // new empty array
//     var min, max, r, n, p;
//     min = 0;
//     max = jawaban1.length - 1;
//     r = 1; // how many numberss you want to extract
//     for (let i = 0; i < r; i++) {
//         do {
//             n = Math.floor(Math.random() * (max - min + 1)) + min;
//             p = numberss6.includes(n);
//             if (!p) {
//                 numberss6.push(n);
//             }
//         }
//         while (p);
//     }

//     for (let apk = 0; apk < jawaban1.length; apk++) {
//         var aspg = numberss[apk];
//         var aspg2 = numberss2[apk];
//         var aspg3 = numberss3[apk];
//         jawaban1[apk].innerHTML = listJawaban[aspg];
//         jawaban2[apk].innerHTML = listJawaban[aspg2];
//         jawaban3[apk].innerHTML = listJawaban[aspg3];
//     };

//     for (let acakbener = 0;  acakbener < jawaban1.length ; acakbener++){
//         jawaban1[numberss4].innerHTML = listJawaban[numbers[0]];
//         jawaban2[numberss5].innerHTML = listJawaban[numbers[1]];
//         jawaban3[numberss6].innerHTML = listJawaban[numbers[2]];
//     };

//     var skorPG = 0;
//     var skorPGs = document.createElement('h3');
//     var skorPGsText = document.createTextNode(skorPG + ' / ' + container_soalke1.length);
//     skorPGs.appendChild(skorPGsText);
//     skor.appendChild(skorPGs);
//     const skorsss = skor.querySelectorAll('h3');

//     for (let i = 0; i < container_soalke1.length; i++) {
//         const soalacak1 = document.createElement('h3');
//         var asdf = numbers[i];
//         const isisoalacak1 = document.createTextNode(soal[asdf]);
//         soalacak1.appendChild(isisoalacak1);
//         soalke1[i].appendChild(soalacak1);
//     };
//     for (let j = 0; j < jawaban2.length; j++) {
//         jawaban1[j].addEventListener('click', function () {
//             if (jawaban1[j].innerHTML == jawaban[numbers[0]]) {
//                 skorPG = skorPG + 1;
//                 skorsss[1].innerHTML = skorPG + ' / ' + container_soalke1.length;
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
//                     jawaban1[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban1[j].style.backgroundColor = 'green';
//             } else {
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
//                     jawaban1[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban1[j].style.backgroundColor = 'red';
//             }
//         });
//         jawaban2[j].addEventListener('click', function () {
//             if (jawaban2[j].innerHTML == jawaban[numbers[1]]) {
//                 skorPG = skorPG + 1;
//                 skorsss[1].innerHTML = skorPG + ' / ' + container_soalke1.length;
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
//                     jawaban2[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban2[j].style.backgroundColor = 'green';
//             } else {
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
//                     jawaban2[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban2[j].style.backgroundColor = 'red';
//             }
//         });
//         jawaban3[j].addEventListener('click', function () {
//             if (jawaban3[j].innerHTML == jawaban[numbers[2]]) {
//                 skorPG = skorPG + 1;
//                 skorsss[1].innerHTML = skorPG + ' / ' + container_soalke1.length;
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
//                     jawaban3[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban3[j].style.backgroundColor = 'green';
//             } else {
//                 for (let asalaaaa = 0; asalaaaa < 5; asalaaaa++) {
//                     jawaban3[asalaaaa].style.backgroundColor = 'white';
//                 };
//                 jawaban3[j].style.backgroundColor = 'red';
//             }
//         });
//     };
//     start_latihan_essay.style.display = 'none';
//     start_latihan.style.display = 'none';
// });