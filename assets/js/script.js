'use strict';
///ボタンアニメーション用
const btn = document.querySelectorAll('.button a');

//各ボタン要素にイベント登録
btn.forEach((element) => {
    const hover_circle = element.querySelector('.hover-circle');

    //マウスオーバー・マウスアウトされた位置を取得して円の中心点にする

    element.addEventListener('mouseenter', (e) => {
        hover_circle.style.top = e.offsetY + 'px';
        hover_circle.style.left = e.offsetX + 'px';
    });

    element.addEventListener('mouseleave', (e) => {
        hover_circle.style.top = e.offsetY + 'px';
        hover_circle.style.left = e.offsetX + 'px';
    });
});

///ハンバーガーメニュー用
const hum_btn = document.querySelector('.humburger-btn');
const sp_nav = document.querySelector('.sp-nav');

/*
chrome利用時、再読み込みしたときにハンバーガーメニューのアニメーションが発生してしまうため、
activeクラスとcloseクラスにアニメーションを設定しておき、それのつけ外しでアニメーションさせる。
*/

hum_btn.onclick = () => {
    if(hum_btn.classList.contains('active')){

        closeHanburgerBtn();

    } else {

        hum_btn.classList.remove('close');
        hum_btn.classList.add('active');

        //GSAPアニメーション
        gsap.fromTo(".nav-area", { y: 20 }, { y: 0, duration: 0.8});
    }

    sp_nav.classList.toggle('active');
    document.body.classList.toggle('hidden');
}

///セクションナビゲーションをクリックしたとき
const nav_detail = document.querySelectorAll('.nav-detail a');

nav_detail.forEach((element) => {
    element.onclick = () => {

        closeHanburgerBtn();

        sp_nav.classList.remove('active');
        document.body.classList.remove('hidden');
    }

});

///ハンバーガーメニューボタンのクラス制御
function closeHanburgerBtn() {
    hum_btn.classList.remove('active');
    hum_btn.classList.add('close');

    //closeクラスが取り付けられたままだと、ウィンドウがリサイズされたときにアニメーションが発生してしまうため外しておく
    setTimeout(() => {
        hum_btn.classList.remove('close');
    }, 1000);
}

