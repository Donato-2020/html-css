// Variaves
const spanHour = document.getElementById('span-hour');
const spanMinutes = document.getElementById('span-minu');
const spanSeconds = document.getElementById('span-seco');

const spanWeek = document.getElementById('span-week');
const spanDay = document.getElementById('span-day');
const spanMounth = document.getElementById('span-mounth');
const spanYear = document.getElementById('span-year');

const relogio = setInterval(function time() {
    let date = new Date();
    
    //Coleta dados referente a data
    let week = date.getDate();
    let day = date.getDay();
    let mounth = date.getMonth();
    let year = date.getFullYear();

    //Coleta dados referente a hora
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    //Alteração do Background baseado na hora
    if(hour >= 6 && hour < 12) {
        document.body.style.background = 'var(--bg-morning)';
    } else if (hour >= 12 && hour < 18) {
        document.body.style.background = 'var(--bg-afternoon)';
    } else if (hour >= 18 && hour <= 23) {
        document.body.style.background = 'var(--bg-night)';
    } else if (hour >= 0 && hour < 6) {
        document.body.style.background = 'var(--bg-midnight)';
    } else {
        document.body.style.background = 'red';
    }

    //Acrescenta um 0 em numero singulares
    if(hour < 10) hour = '0' + hour;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;

    //Substitiu valores das horas
    spanHour.textContent = hour;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = seconds;

    //Substitiu valores dos dias e corrige o 0
    if(day < 10) day = '0' + day;
    spanDay.textContent = day;
    
    //Substitiu valores para ano
    spanYear.textContent = year;

    //Verificação do numero da semana par converter
    switch(week) {
        case 0:
        spanWeek.textContent = 'Domingo';
        break;
        case 1:
        spanWeek.textContent = 'Segunda-feira';
        break;
        case 2:
        spanWeek.textContent = 'Terça-feira';
        break;
        case 3:
        spanWeek.textContent = 'Quarta-feira';
        break;
        case 4:
        spanWeek.textContent = 'Quinta-feira';
        break;
        case 5:
        spanWeek.textContent = 'Sexta-feira';
        break;
        case 6:
        spanWeek.textContent = 'Sábado';
        break;
    }

    //Verificação do numero dos mes para converter
    switch(mounth) {
        case 0: 
        spanMounth.textContent = 'Janeiro';
        break;
        case 1: 
        spanMounth.textContent = 'Feveiro';
        break;
        case 2: 
        spanMounth.textContent = 'Março';
        break;
        case 3: 
        spanMounth.textContent = 'Abril';
        break;
        case 4: 
        spanMounth.textContent = 'Maio';
        break;
        case 5: 
        spanMounth.textContent = 'Junho';
        break;
        case 6: 
        spanMounth.textContent = 'Julho';
        break;
        case 7: 
        spanMounth.textContent = 'Agosto';
        break;
        case 8: 
        spanMounth.textContent = 'Setembro';
        break;
        case 9: 
        spanMounth.textContent = 'Outubro';
        break;
        case 10: 
        spanMounth.textContent = 'Novembro';
        break;
        case 11: 
        spanMounth.textContent = 'Dezembro';
        break;
    }
});