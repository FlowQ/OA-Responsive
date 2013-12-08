var video = document.getElementById('test');
      var pBar = document.getElementById('p');
      video.addEventListener('timeupdate', function() {
      var percent = Math.floor((100 / video.duration) * video.currentTime);
      pBar.value = percent;
      pBar.getElementsByTagName('span')[0].innerHTML = percent;
      }, false);