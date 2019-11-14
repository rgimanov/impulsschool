let ege = document.getElementById('ege');
let oge = document.getElementById('oge');
let ege_math = document.getElementById('math');
let ege_soc = document.getElementById('soc');
let ege_phis = document.getElementById('phis');
let ege_rus = document.getElementById('rus');
let ege_inf = document.getElementById('inf');
let ege_liter = document.getElementById('liter');

function doo(ege,oge) {
    ege.onclick = function() {
        ege.style.color='#3a3938';
        oge.style.color='#b8b8b8';
        ege.style.borderBottom='3px solid #6e368c';
        oge.style.borderBottom='3px solid #b8b8b8'; 
      };
    oge.onclick = function() {
        oge.style.color='#3a3938';
        ege.style.color='#b8b8b8';
        oge.style.borderBottom='3px solid #6e368c';
        ege.style.borderBottom='3px solid #b8b8b8';
      };

};

function doo_content(ege_inf,ege_liter,ege_math,ege_phis,ege_rus,ege_soc) {
    ege_math.onclick = function() {
        ege_math.style.color='#4d82c3';
        ege_math.style.borderBottom='3px solid #4d82c3'; 
        ege_inf.style.color='#b8b8b8';
        ege_inf.style.borderBottom='0px '; 
        ege_liter.style.color='#b8b8b8';
        ege_liter.style.borderBottom='0px '; 
        ege_phis.style.color='#b8b8b8';
        ege_phis.style.borderBottom='0px '; 
        ege_rus.style.color='#b8b8b8';
        ege_rus.style.borderBottom='0px '; 
        ege_soc.style.color='#b8b8b8';
        ege_soc.style.borderBottom='0px '; 

        document.getElementById("c-title").innerHTML="Математика";
        document.getElementById("1").innerHTML=" Подберем план обучения индивидуально для каждого";
        document.getElementById("2").innerHTML="ученика. Подготовка к ЕГЭ по математике в зависимости";
        document.getElementById("3").innerHTML="от уровня и требований ученика включает подготовку по";
        document.getElementById("4").innerHTML="одному из трех направлений:";
        document.getElementById("5").innerHTML="- Профильная математика";
        document.getElementById("6").innerHTML="- Базовая математика";
        document.getElementById("7").innerHTML="- Продвинутая математика";
        document.getElementById("img-content-ege").src = "img/mathEGE.PNG";
      };
    ege_soc.onclick = function() {
        ege_soc.style.color='#4d82c3';
        ege_soc.style.borderBottom='3px solid #4d82c3'; 
        ege_inf.style.color='#b8b8b8';
        ege_inf.style.borderBottom='0px '; 
        ege_liter.style.color='#b8b8b8';
        ege_liter.style.borderBottom='0px '; 
        ege_phis.style.color='#b8b8b8';
        ege_phis.style.borderBottom='0px '; 
        ege_rus.style.color='#b8b8b8';
        ege_rus.style.borderBottom='0px '; 
        ege_math.style.color='#b8b8b8';
        ege_math.style.borderBottom='0px '; 

        document.getElementById("c-title").innerHTML=" Обществознание";
        document.getElementById("1").innerHTML=" Подберем план обучения индивидуально для каждого ";
        document.getElementById("2").innerHTML="ученика. Подготовка к ЕГЭ по обществознанию в  ";
        document.getElementById("3").innerHTML="зависимости от уровня и требований ученика.";
        document.getElementById("4").innerHTML=" Курс рекомендован для всех учеников 11 классов, ";
        document.getElementById("5").innerHTML=" которые планируют сдавать ЕГЭ по обществознанию.";
        document.getElementById("6").innerHTML=" ";
        document.getElementById("7").innerHTML=" ";
        document.getElementById("img-content-ege").src = "img/socialEGE.PNG";
        
      };

    ege_phis.onclick = function() {
        ege_phis.style.color='#4d82c3';
        ege_phis.style.borderBottom='3px solid #4d82c3'; 
        ege_inf.style.color='#b8b8b8';
        ege_inf.style.borderBottom='0px '; 
        ege_liter.style.color='#b8b8b8';
        ege_liter.style.borderBottom='0px '; 
        ege_math.style.color='#b8b8b8';
        ege_math.style.borderBottom='0px '; 
        ege_rus.style.color='#b8b8b8';
        ege_rus.style.borderBottom='0px '; 
        ege_soc.style.color='#b8b8b8';
        ege_soc.style.borderBottom='0px '; 
        
        document.getElementById("c-title").innerHTML="Физика ";
        document.getElementById("1").innerHTML=" Подберем план обучения индивидуально для каждого ";
        document.getElementById("2").innerHTML=" ученика. Подготовка к ЕГЭ по физике в зависимости от ";
        document.getElementById("3").innerHTML=" уровня и требований ученика включает подготовку по ";
        document.getElementById("4").innerHTML=" одному из двух направлений: ";
        document.getElementById("5").innerHTML=" - Базовая физика";
        document.getElementById("6").innerHTML=" - Продвинутая физика";
        document.getElementById("7").innerHTML=" ";
        document.getElementById("img-content-ege").src = "img/phisicEGE.PNG";
        
      };
    
    ege_rus.onclick = function() {
        ege_rus.style.color='#4d82c3';
        ege_rus.style.borderBottom='3px solid #4d82c3'; 
        ege_inf.style.color='#b8b8b8';
        ege_inf.style.borderBottom='0px '; 
        ege_liter.style.color='#b8b8b8';
        ege_liter.style.borderBottom='0px '; 
        ege_phis.style.color='#b8b8b8';
        ege_phis.style.borderBottom='0px '; 
        ege_math.style.color='#b8b8b8';
        ege_math.style.borderBottom='0px '; 
        ege_soc.style.color='#b8b8b8';
        ege_soc.style.borderBottom='0px '; 
        
        document.getElementById("c-title").innerHTML="Русский язык ";
        document.getElementById("1").innerHTML="К сожалению, на данный момент у нас нет курса по русскому языку, но скоро он обязательно появится. Нажми кнопку 'записаться', и мы пригласим тебя на курс, когда он начнется.  ";
        document.getElementById("2").innerHTML=" ";
        document.getElementById("3").innerHTML=" ";
        document.getElementById("4").innerHTML=" ";
        document.getElementById("5").innerHTML=" ";
        document.getElementById("6").innerHTML=" ";
        document.getElementById("7").innerHTML=" ";
        document.getElementById("img-content-ege").src = "";
        
      };

    ege_inf.onclick = function() {
        ege_inf.style.color='#4d82c3';
        ege_inf.style.borderBottom='3px solid #4d82c3'; 
        ege_math.style.color='#b8b8b8';
        ege_math.style.borderBottom='0px '; 
        ege_liter.style.color='#b8b8b8';
        ege_liter.style.borderBottom='0px '; 
        ege_phis.style.color='#b8b8b8';
        ege_phis.style.borderBottom='0px '; 
        ege_rus.style.color='#b8b8b8';
        ege_rus.style.borderBottom='0px '; 
        ege_soc.style.color='#b8b8b8';
        ege_soc.style.borderBottom='0px '; 

        document.getElementById("c-title").innerHTML="Информатика ";
        document.getElementById("1").innerHTML=" К сожалению, на данный момент у нас нет курса по информатике, но скоро он обязательно появится. Нажми кнопку 'записаться', и мы пригласим тебя на курс, когда он начнется.";
        document.getElementById("2").innerHTML=" ";
        document.getElementById("3").innerHTML=" ";
        document.getElementById("4").innerHTML=" ";
        document.getElementById("5").innerHTML=" ";
        document.getElementById("6").innerHTML=" ";
        document.getElementById("7").innerHTML=" ";
        document.getElementById("img-content-ege").src = "";
        
        
      };

    ege_liter.onclick = function() {
        ege_liter.style.color='#4d82c3';
        ege_liter.style.borderBottom='3px solid #4d82c3'; 
        ege_inf.style.color='#b8b8b8';
        ege_inf.style.borderBottom='0px '; 
        ege_math.style.color='#b8b8b8';
        ege_math.style.borderBottom='0px '; 
        ege_phis.style.color='#b8b8b8';
        ege_phis.style.borderBottom='0px '; 
        ege_rus.style.color='#b8b8b8';
        ege_rus.style.borderBottom='0px '; 
        ege_soc.style.color='#b8b8b8';
        ege_soc.style.borderBottom='0px '; 
        
        document.getElementById("c-title").innerHTML="Литература ";
        document.getElementById("1").innerHTML=" К сожалению, на данный момент у нас нет курса по литературе, но скоро он обязательно появится. Нажми кнопку 'записаться', и мы пригласим тебя на курс, когда он начнется.        ";
        document.getElementById("2").innerHTML=" ";
        document.getElementById("3").innerHTML=" ";
        document.getElementById("4").innerHTML=" ";
        document.getElementById("5").innerHTML=" ";
        document.getElementById("6").innerHTML=" ";
        document.getElementById("7").innerHTML=" ";
        document.getElementById("img-content-ege").src = "";
        
      };
};



doo(ege,oge);
doo_content(ege_inf,ege_liter,ege_math,ege_phis,ege_rus,ege_soc);