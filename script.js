/*var b = 0;
for (let i = 0; i<3; i++) {
	b += 1;
};
alert(b);*/


/* Ищу и исправляю ошибку в коде:   поменял кавычки и поставил ; после круглых скобок*/

(
  function(win){
    var params = {
      states:{url:"/",
      template: "temlate.js"
    }
  }
  function setStates(params){
    if(win && !win.params){
      win.params = params;
    }
  }
  setStates();
  console.log(params.states.template);
  }
)
(window);
