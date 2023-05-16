function janken(user) {
    
    let pcJankens = ['gu_rev.png', 'choki_rev.png', 'pa_rev.png'];
 
    
    let userJankens = ['gu.png', 'choki.png', 'pa.png'];
 
    // コンピュータの手を乱数(0～2）で作成
    let pc = Math.floor(Math.random() * 3);
 
    let userImg = document.getElementById("userImg");

    userImg.src = "img/" + userJankens[user];

    let pcImg = document.getElementById("pcImg");
    pcImg.src = "img/" + pcJankens[pc];
 
    // ユーザから見た勝敗結果を保存
    let result = [['あいこ', '勝ち', '負け'],
                  ['負け', 'あいこ', '勝ち'],
                  ['勝ち', '負け', 'あいこ']];
 
    // 勝敗結果を
    document.getElementById("result").textContent = result[user][pc];
}
function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}
function audio2() {
    document.getElementById('btn_audio2').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio2').play(); //クリックしたら音を再生
}
function audio3() {
    document.getElementById('btn_audio3').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio3').play(); //クリックしたら音を再生
}
