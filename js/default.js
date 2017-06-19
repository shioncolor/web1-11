var number = Math.floor(Math.random()*3);

var message;

do{
  var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください'));
  if(answer === number){
    message='あたり';
  }else if(answer < number){
    message='残念　もっと大きいです；；';
  }else if(answer > number){
    message='残念　もっと小さいです；；';
  }else{
    massage='0~3の数字を入力してください';
  }
  document.getElementById('choice').textContent=message;
}while(answer !== number);

