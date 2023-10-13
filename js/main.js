let backgrounds = []

backgrounds[0] = './img/ImagenCowork1.jpg';
backgrounds[1] = './img/ImagenCowork2.jpg';
backgrounds[2] = './img/ImagenCowork3.jpg';
backgrounds[3] = './img/ImagenCowork4.jpg';


window.onload = function(){
    let setBackground = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[setBackground]})`;
<<<<<<< HEAD
}
=======
}
>>>>>>> 8c2a2e79336298d1508bb98f34eae6671f4aab2f
