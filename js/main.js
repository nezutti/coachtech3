const tabs = document.getElementsByClassName("tab-menu__item");
for (let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener("click", tabSwitch);

}//要素のインデックス番号がtabs.length(この場合[i]が”0~2")の範囲の中である場合この処理を繰り返す

function tabSwitch() {
  document.getElementsByClassName("active")[0].classList.remove("active");//デフォルトで設定してあるタブ1からactiveクラスを消す
  this.classList.add("active");//acitveクラスを追加する
  document.getElementsByClassName("show")[0].classList.remove("show");//デフォルトで設定してある、コンテンツ１からshowクラスを消す
  const arrayTabs = Array.prototype.slice.call(tabs);  //tabsの要素を入れた配列を作る

  const index = arrayTabs.indexOf(this);//arraytabsから要素のインデックス番号を取り出す
   document.getElementsByClassName('tab-content__item')[index].classList.add('show');//取り出した要素をshowクラスを見えるようにすることによって表示させる

 
};