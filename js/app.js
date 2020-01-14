$(function() {
  // フロートヘッダーメニュー
  // ヒーローヘッダーが上に通り過ぎた時に上部に背景色を入れる処理
  // 700pxとベタ書きしてもいいが、px指定が変わった時のことを考え、変数にしておく
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function() {
    $('.js-float-menu').toggleClass(
      'float-active',
      // ここでtrue falseの判定をしている
      $(this).scrollTop() > targetHeight
    );
  });

  // SPメニュー
  // ハンバーガーメニューを押した時にactiveとし、ナビメニューを表示する処理
  $('.js-toggle-sp-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
    $('html').toggleClass('menu');
  });

  // ハンバーガーメニュー内のリンクをクリックするとメニューが閉じる処理
  $('.js-toggle-sp-menu-target a').on('click', function() {
    $('.js-toggle-sp-menu').removeClass('active');
    $('html').removeClass('menu');
    $('.js-toggle-sp-menu-target').removeClass('active');
  });
});
