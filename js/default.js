
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください'));

var message;

while(1){
if(answer === number){
message='あたり';
break;
}else if(answer < number){
message='残念　もっとおおきいです；；';
}else if(answer > number){
message='残念　もっと小さいです';
}else{
massage='0~3の数字を入力してください';
}
}

document.getElementById('choice').textContent=message;
