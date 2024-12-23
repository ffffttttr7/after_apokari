// JavaScript
//console.log('Hello world!');

// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

// window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 400 );

const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');
const items = document.querySelectorAll('.item');

const options = {
  duration: 600,
  easing: 'ease',
  fill: 'forwards',
}

const menuOpen = () => {
  const keyframes = {
    visibility: ['hidden','visible'],
    opacity: [0,1]
  }
  menu.animate(keyframes,options);

  items.forEach((item,index) => {
    item.animate({opacity:[0,1]},{
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
      delay: index * 200,
    });
  });

}
open.addEventListener('click',menuOpen);

const menuClose = () => {
  const keyframes = {
    visibility: ['visible','hidden'],
    opacity: [1,0]
  }
  menu.animate(keyframes,options);

  items.forEach((item) => {
    item.animate({opacity:[1,0]},{
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
    });
  });

}
close.addEventListener('click',menuClose);

// スライドインアニメーション
const slides = document.querySelectorAll('.slide-in');

slides.forEach((slide, index) => {
  const slideKeyframes = {
    opacity: [0, 1],
    transform: ['translateX(-50px)', 'translateX(0)'], // 左から右
  };

  const slideOptions = {
    duration: 1000,
    fill: 'forwards',
    delay: index * 200, // 順番に遅延を加える
  };

  slide.animate(slideKeyframes, slideOptions);
});

