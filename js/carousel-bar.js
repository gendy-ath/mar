var interval =8000;
var mycarousel = $('#carouselRadio');

var update = null;
var percentage = 0;
var options = {
  classname: 'carousel-nanoBar',
  id: 'my-id',
  target: document.getElementById('myDivId')
};
var nanobar = new Nanobar(options);

var finishProgress = () => {
  if (update!==null) {
    window.clearInterval(update);
    nanobar.go(100);
  }
};
var startProgress = () => {
  percentage = 0;
  update = window.setInterval(() => {
    percentage = percentage + 1;
    if (percentage < 100) {
      console.log(percentage);
      nanobar.go(percentage);
    }
  }, interval/100);
};


mycarousel.carousel({ interval, pause:false });


mycarousel.on('slide.bs.carousel', () => {
  // we are going for the next one
  finishProgress();
  
});
mycarousel.on('slid.bs.carousel', () => {
  // interval-progress starts on stop of previous slide
  startProgress();
});


