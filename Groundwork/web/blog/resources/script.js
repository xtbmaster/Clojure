window.onload = function(){
  reloadSubtitle();
  document.getElementById('site_subtitle').onclick = reloadSubtitle;
}

function reloadSubtitle(){
  var subtitles = [
    'Вы уверены что хотите отменить? - Да / Нет / Отмена',
    'Произошла ошибка',
    'Привет!'
  ];
  var subtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
  var div = document.getElementById('site_subtitle');
  div.innerHTML = subtitle;
}
