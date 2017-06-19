
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください'));

var message;

for (i = 0; i < 10; i++){
if(answer === number){
message='あたり';
break;
}else if(answer < number){
message='残念　もっと大きいです；；';
}else if(answer > number){
message='残念　もっと小さいです；；';
}else{
massage='0~3の数字を入力してください';
}
if(i===9){
  messeage='なんかいはずしてんねん？？？';
}
}

document.getElementById('choice').textContent=message;
