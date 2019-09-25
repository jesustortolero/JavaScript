var Calculadora = {
  componenteA:"",
  componenteB:"",
  operacion:"",

  //DOM

  resultado : document.getElementById('display'),
  On : document.getElementById('on'),
  signo : document.getElementById('sign'),
  raiz : document.getElementById('raiz'),
  dividido : document.getElementById('dividido'),
  siete : document.getElementById('7'),
  ocho : document.getElementById('8'),
  nueve : document.getElementById('9'),
  por : document.getElementById('por'),
  cuatro : document.getElementById('4'),
  cinco : document.getElementById('5'),
  seis : document.getElementById('6'),
  menos : document.getElementById('menos'),
  uno : document.getElementById('1'),
  dos : document.getElementById('2'),
  tres : document.getElementById('3'),
  cero : document.getElementById('0'),
  punto : document.getElementById('punto'),
  igual : document.getElementById('igual'),
  mas : document.getElementById('mas'),
  botones : document.querySelectorAll('img'),


  init:function(){

    //funcionalidad

    limpio = function(){
      if (Calculadora.resultado.innerHTML === 0 || Calculadora.resultado.innerHTML === '0'){
        return true
      }
    };

    function operando(){
      Calculadora.resultado.innerHTML = ''};

    function restablecer(){
      Calculadora.componenteA = "";
      Calculadora.componenteB = "";
      Calculadora.operacion = "";
    };



    this.dividido.onclick = function(){
      Calculadora.operacion =  '/';
      Calculadora.componenteA = Calculadora.resultado.innerHTML;
        operando();
      }

    this.siete.onclick = function(){
      if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){
        Calculadora.resultado.innerHTML = 7}
        else{
          Calculadora.resultado.innerHTML += 7}
    }};

    this.ocho.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){
       Calculadora.resultado.innerHTML = 8}
      else{
        Calculadora.resultado.innerHTML += 8}
    }};

    this.nueve.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){
        Calculadora.resultado.innerHTML = 9}
      else{
        Calculadora.resultado.innerHTML += 9}
    }};

    this.por.onclick = function(){
      Calculadora.componenteA = Calculadora.resultado.innerHTML;
      Calculadora.operacion =  '*';
        operando()

    };

    this.cuatro.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){
        Calculadora.resultado.innerHTML = 4}
      else{
        Calculadora.resultado.innerHTML += 4}
    }};

    this.cinco.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){
        Calculadora.resultado.innerHTML = 5}
      else{
        Calculadora.resultado.innerHTML += 5}
    }};

    this.seis.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){
        Calculadora.resultado.innerHTML = 6}
      else{
        Calculadora.resultado.innerHTML += 6}
    }};

    this.menos.onclick = function(){
      Calculadora.componenteA = Calculadora.resultado.innerHTML;
      Calculadora.operacion =  '-';
        operando()
    };

    this.uno.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){
        Calculadora.resultado.innerHTML = 1}
      else{
        Calculadora.resultado.innerHTML += 1}
    }};

    this.dos.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){Calculadora.componenteA = Calculadora.resultado.innerHTML;
        Calculadora.resultado.innerHTML = 2}
      else{
        Calculadora.resultado.innerHTML += 2}
    }};

    this.tres.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){
        Calculadora.resultado.innerHTML = 3}
      else{
        Calculadora.resultado.innerHTML += 3}
    }};

    this.cero.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(limpio() == true){
        Calculadora.resultado.innerHTML = 0}
      else{
        Calculadora.resultado.innerHTML += 0}
    }};

//punto
    this.punto.onclick = function(){
        if(Calculadora.resultado.innerHTML.length < 8){if(Calculadora.resultado.innerHTML.includes('.')) {
        }
      else{
        Calculadora.resultado.innerHTML += '.'}
    }};

    this.mas.onclick = function(){
      Calculadora.componenteA = Calculadora.resultado.innerHTML;
      Calculadora.operacion =  '+';
        operando()
     };
//Igual
    this.igual.onclick =  function igual(){
        Calculadora.componenteB = Calculadora.resultado.innerHTML;
        function resultado(){
          resDisplay = '';
          switch (Calculadora.operacion) {
            case '+':
              resDisplay = parseFloat(Calculadora.componenteA)  +  parseFloat(Calculadora.componenteB);
            break;

            case '-':
              resDisplay = parseFloat(Calculadora.componenteA)  -  parseFloat(Calculadora.componenteB);
            break;

            case '*':
              resDisplay = parseFloat(Calculadora.componenteA)  *  parseFloat(Calculadora.componenteB);
            break;

            case '/':
              resDisplay = parseFloat(Calculadora.componenteA)  /  parseFloat(Calculadora.componenteB);
            break;
          };
          restablecer()
          Calculadora.resultado.innerHTML = resDisplay;
        };

        resultado()
      };

//on
    this.On.onclick = function(){
      Calculadora.resultado.innerHTML = 0;
      restablecer()
    };
//signo
    this.signo.onclick = function(){
      if (limpio() == true) {
      }
      else if(Calculadora.resultado.innerHTML.includes('-')) {
        Calculadora.resultado.innerHTML = Calculadora.resultado.innerHTML.substring(1)
        }
      else {
        Calculadora.resultado.innerHTML = '-' + Calculadora.resultado.innerHTML
      }
    };


  //Apariencia
  for (var i = 0; i < this.botones.length; i++) {
    this.botones[i].addEventListener('mousedown', function() {
      this.style.transform="scale(0.95)"
    })
  }
  for (var i = 0; i < this.botones.length; i++) {
    this.botones[i].addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    })
  }



  }
};


Calculadora.init()
