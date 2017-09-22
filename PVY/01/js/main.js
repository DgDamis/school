console.log('Funguje to');
console.log(document.getElementById('zahlavi'));
document.getElementById('zahlavi').style.backgroundColor = 'yellow';
/*
document.getElementById('nadpis').innerText = prompt('Zadej text');

document.getElementsByTagName('img')[0].width /= 2;
*/

document.getElementById('nadpis').addEventListener('click', function () {
    // body
    document.getElementById('nadpis').innerText = prompt('Zadej Nadpis');
    this.style.color = 'red';
});

document.getElementsByTagName('img')[0].addEventListener('mouseenter', function(){
    this.src = 'img/white_tiger2.jpg';
    this.style.border = 'solid'
    this.style.opacity = '1'
});

document.getElementsByTagName('img')[0].addEventListener('mouseleave', function(){
    this.src = 'img/white_tiger.jpg';
    this.style.border = '0'
});

document.getElementById('meniciButton').addEventListener('click', function(){
    var r = Math.floor(Math.random() * 256);
    console.log(r);
    var g = Math.floor(Math.random() * 256);
    console.log(g);
    var b = Math.floor(Math.random() * 256);
    console.log(b);
    var rgb = '';
    rgb = 'rgb('+r+','+g+','+b+')'
    console.log(rgb);
    document.getElementById('zahlavi').style.backgroundColor = rgb;
});


