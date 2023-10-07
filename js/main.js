let backgrounds = []

backgrounds[0] = './img/ImagenCowork1.jpg';
backgrounds[1] = './img/ImagenCowork2.jpg';
backgrounds[2] = './img/ImagenCowork3.jpg';
backgrounds[3] = './img/ImagenCowork4.jpg';


window.onload = function(){
    let setBackground = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[setBackground]})`;
}
