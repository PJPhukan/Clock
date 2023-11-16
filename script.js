let hr=document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc=document.querySelector('#sc');

setInterval(() => {
    let dt = new Date();
    let Minute = dt.getMinutes();
    let Second = dt.getSeconds();
    
    let Hourse = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours();
    let HourseTodeg = Number.parseFloat(30 * Hourse);
    let MinuteTodeg = Number.parseFloat(6 * Minute);
    let SecondTodeg = Number.parseFloat(6 * Second);
    hr.style.transform= `rotateZ(${HourseTodeg}deg)`;
    mn.style.transform = `rotateZ(${MinuteTodeg}deg)`;
    sc.style.transform = `rotateZ(${SecondTodeg}deg)`;
}, 1000);