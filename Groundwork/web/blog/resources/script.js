window.onload = function(){
  reloadSubtitle();
    document.getElementById('.subtitle > span').onclick = reloadSubtitle;
    if (document.cookie.indexOf("blog_user=") >= 0) {
        document.body.classList.remove("anonymous");
    }
}

function reloadSubtitle(){
  var subtitles = [
    'Вы уверены что хотите отменить? - Да / Нет / Отмена',
    'Произошла ошибка',
    'Привет!'
  ];
  var subtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
  var div = document.querySelector('.subtitle > span');
  div.innerHTML = subtitle;
}
