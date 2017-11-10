document.getElementById('button').addEventListener('click', 
    function(){
        var m = document.getElementById('weight').value;
        var h = document.getElementById('height').value;
        console.log('Výška:',m,' Hmotnost:',h,'');
        var bmi = (m / Math.pow(h,2)).toFixed(2);
        console.log(bmi);
        document.getElementById('vysledek').innerHTML = '<h3>BMI = '+ bmi +'</h3>';

});