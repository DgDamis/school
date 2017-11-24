console.log('Hello World');

function casVSeznamu() {
document.getElementById('seznam') = "<li>" + new Date() + "</li>";
document.getElementById('seznam') += "<li>" + new Date() + "</li>";
document.getElementById('seznam') += "<li>" + new Date() + "</li>";
}

document.getElementById('rgbTest').addEventListener('click', function () {
    console.log('Jsem ve funkci');
    var odpoved = prompt("Odpověď je:");
    console.log('Načtená odpověd je:',odpoved);
    kontrola = false;
    switch (odpoved) {
        case "RGB":
            kontrola = true;
            break;
        case "rgb":
            kontrola = true;
            break;
        default:
            kontrola = false;;
            break;
    }
    if (kontrola === true) {
        document.getElementById('testik').style = "background-color: yellow";
        alert('Jsi machr');
    }
    else {
        document.getElementById('testik').style = "background-color: red";
        alert('Nemachruj, když to nevíš');
    }
});

document.getElementById('beanImage').addEventListener('mouseover', function () {
    this.src="images/bean2.jpg";
    
});

document.getElementById('beanImage').addEventListener('mouseleave', function () {
    this.src="images/bean1.jpg";
});
    d = new Date();
    document.getElementById('seznam').innerHTML = '<li>' + d.getUTCDate() + '.' + (d.getMonth()+1) + '.' + d.getFullYear(d) + '</li>';
    document.getElementById('seznam').innerHTML += "<li>" + 'Rok ' + d.getFullYear() + "</li>";
    if (d.getMonth() > 6) {  
    document.getElementById('seznam').innerHTML += "<li>" + 'II. pololetí' + "</li>";
    }
    else {
        document.getElementById('seznam').innerHTML += "<li>" + 'I. pololetí' + "</li>";
    }

document.getElementById('beanImage').addEventListener('click', function () {
    var random = (Math.ceil(Math.random() * 400)+39) + 'px' 
    console.log(random);
    this.style.width = random;
});

