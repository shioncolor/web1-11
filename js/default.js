
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください'));
var flag;
var message;

while(flag){
if(answer === number){
message='あたり';
  flag=true;
}else if(answer < number){
message='残念　もっとおおきいです；；';
  flag=false;
}else if(answer > number){
message='残念　もっと小さいです';
  flag=false;
}else{
massage='0~3の数字を入力してください';
  flag=false;
}
}

document.getElementById('choice').textContent=message;
