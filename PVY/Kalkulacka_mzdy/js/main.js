console.log('Hello World');

function bonus(deti) {
    var castka = 0;
    switch (deti) {
        case "0":
            castka = 0;
            break;
        case "1":
            castka = 1117;
            break;
        case "2":
            castka = 1117 + 1617;
            break;
        default:
            castka = 1117 + 1617 + (deti - 2) * 2017;
            break;
    }
    return castka;
}

function sklonDeti(deti) {
    switch (deti) {
        case "0":
            return "Dětí";
            break;
        case "1":
            return "Dítě";
            break;
        case "2":
            return "Děti";
            break;
        case "3":
            return "Děti";
            break;
        case "4":
            return "Děti";
            break;
        default:
            return "Dětí";
            break;
    }
}

function slevaNaPoplatnika(poplatnik) {
    switch (poplatnik) {
        case true:
            return 2070;
            break;
        case false:
            return 0;
            break;
        default:
            return 2070;
            break;
    }
}

document.getElementById('tlacitkoVypocet').addEventListener('click', function() {
    console.log('Tlacitko bylo zmacknuto.');
    var mzda = document.getElementById('mzda').value;
    var deti = document.getElementById('deti').value;
    var poplatnik = document.getElementById('poplatnik').checked;
    console.log("Registrovaná mzda:", mzda);
    console.log('Registrovaný počet dětí:', deti);
    console.log('Sleva na poplatnika:', poplatnik);
    var zdravotniPojisteni = (0.045 * mzda);
    var socialniPojisteni = (0.065 * mzda);
    var zdravotniPojistenZam = (0.09 * mzda);
    var socialniPojistenZam = (0.25 * mzda);
    var superHruba = parseInt(mzda) + parseInt(zdravotniPojistenZam) + parseInt(socialniPojistenZam);
    var zalohaOdectenim = (0.15 * superHruba);
    var slevaPoplatnik = slevaNaPoplatnika(poplatnik);
    var bonusy = bonus(deti) + slevaPoplatnik;
    var zaloha = parseInt(zalohaOdectenim) - parseInt(bonusy);
    var cistaMzda = parseInt(mzda) - parseInt(socialniPojisteni) - parseInt(zdravotniPojisteni) - parseInt(zaloha);
    document.getElementById('cistaMzda').innerHTML = "<h1>" + cistaMzda + " " + "Kč" + "</h1>";
    document.getElementById('hrbMzda').innerHTML = mzda + " " + "Kč";
    document.getElementById('superHruba').innerHTML = superHruba + " " + "Kč";
    document.getElementById('socialniZamestnavatel').innerHTML = socialniPojistenZam + " " + "Kč";
    document.getElementById('zdravotniZamestnavatel').innerHTML = zdravotniPojistenZam + " " + "Kč";
    document.getElementById('socialniPracovnik').innerHTML = socialniPojisteni + " " + "Kč";
    document.getElementById('zdravotniPracovnik').innerHTML = zdravotniPojisteni + " " + "Kč";
    document.getElementById('zalohaPrOdectenim').innerHTML = zalohaOdectenim + " " + "Kč";
    document.getElementById('pocetDeti').innerHTML = deti + " " + sklonDeti(deti);
    document.getElementById('slevaNaDeti').innerHTML = bonus(deti) + " " + "Kč";
    document.getElementById('zaloha').innerHTML = zaloha + " " + "Kč";
    document.getElementById('slevaNaPoplatnika').innerHTML = slevaPoplatnik + " " + "Kč";
});