var number = Math.floor(Math.random()*3);

var answer = parseInt(window.prompt('数あてゲーム。０～２の数字を入力してください！'));

var message;

if(answer === number){
  message = 'あたり！';
}

else if(answer < number){
  message = '残念！もっと大きいです';
}

else if(answer > number){
  message = '残念！もっと小さいです';
}

else{
  message = '０～２の数字を入力してください';
}

document.getElementById('choice').textContent = message;
