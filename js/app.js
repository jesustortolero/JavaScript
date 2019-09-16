var Calculadora = {
  componenteA:"",
  componenteB:"",
  operacion:"",


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


  init:function(){

    limpio = function(){
      if (Calculadora.resultado.innerHTML === 0 || Calculadora.resultado.innerHTML === '0'){
        return true
      }
    };

    function operando(){
      Calculadora.resultado.innerHTML = 0};

    function restablecer(){
      Calculadora.componenteA = "";
      Calculadora.componenteB = "";
      Calculadora.operacion = "";
    };

    this.dividido.onclick = function(){
      Calculadora.componenteA = Calculadora.resultado.innerHTML;
      Calculadora.operacion =  '/';
        operando()

    };

    this.siete.onclick = function(){
      if(limpio() == true){
        Calculadora.resultado.innerHTML = 7}
        else{
          Calculadora.resultado.innerHTML += 7}
    };

    this.ocho.onclick = function(){
      if(limpio() == true){
       Calculadora.resultado.innerHTML = 8}
      else{
        Calculadora.resultado.innerHTML += 8}
    };

    this.nueve.onclick = function(){
      if(limpio() == true){
        Calculadora.resultado.innerHTML = 9}
      else{
        Calculadora.resultado.innerHTML += 9}
    };

    this.por.onclick = function(){
      Calculadora.componenteA = Calculadora.resultado.innerHTML;
      Calculadora.operacion =  '*';
        operando()

    };

    this.cuatro.onclick = function(){
      if(limpio() == true){
        Calculadora.resultado.innerHTML = 4}
      else{
        Calculadora.resultado.innerHTML += 4}
    };

    this.cinco.onclick = function(){
      if(limpio() == true){
        Calculadora.resultado.innerHTML = 5}
      else{
        Calculadora.resultado.innerHTML += 5}
    };

    this.seis.onclick = function(){
      if(limpio() == true){
        Calculadora.resultado.innerHTML = 6}
      else{
        Calculadora.resultado.innerHTML += 6}
    };

    this.menos.onclick = function(){
      Calculadora.componenteA = Calculadora.resultado.innerHTML;
      Calculadora.operacion =  '-';
        operando()
    };

    this.uno.onclick = function(){
      if(limpio() == true){
        Calculadora.resultado.innerHTML = 1}
      else{
        Calculadora.resultado.innerHTML += 1}
    };

    this.dos.onclick = function(){
      if(limpio() == true){
        Calculadora.resultado.innerHTML = 2}
      else{
        Calculadora.resultado.innerHTML += 2}
    };

    this.tres.onclick = function(){
      if(limpio() == true){
        Calculadora.resultado.innerHTML = 3}
      else{
        Calculadora.resultado.innerHTML += 3}
    };

    this.cero.onclick = function(){
      if(limpio() == true){
        Calculadora.resultado.innerHTML = 0}
      else{
        Calculadora.resultado.innerHTML += 0}
    };

    this.punto.onclick = function(){
      if(limpio == true){
        Calculadora.resultado.innerHTML += '.'
      }
      else if(Calculadora.resultado.innerHTML.includes('.')) {
        }
      else{
        Calculadora.resultado.innerHTML += '.'}
    };

    this.mas.onclick = function(){
      Calculadora.componenteA = Calculadora.resultado.innerHTML;
      Calculadora.operacion =  '+';
        operando()
     };

    this.igual.onclick = function(){
      Calculadora.componenteB = Calculadora.resultado.innerHTML;


    };

    this.On.onclick = function(){
      Calculadora.resultado.innerHTML = 0;
      restablecer()
  };
  }
}


Calculadora.init()
