'use strict';

var SCROLL_DURATION = 500;

var mainBlockScroll = document.querySelector('.main-block__button');
var subscriptionBlock = document.querySelector('#subscription');
var tabToggles = document.querySelectorAll('.tabs__toggle');
var tabItems = document.querySelectorAll('.tabs__item');

var animation = function (duration) {
  var temp;
  return function (element) {
    cancelAnimationFrame(temp);
    var start = performance.now();
    var from = window.pageYOffset || document.documentElement.scrollTop;
    var to = element.getBoundingClientRect().top;
    requestAnimationFrame(function step(timestamp) {
      var progress = (timestamp - start) / duration;
      progress > 1 && (progress = 1);
      window.scrollTo(0, (from + to * progress) | 0);
      progress < 1 && (temp = requestAnimationFrame(step));
    });
  };
};

var scrollMenu = animation(SCROLL_DURATION);

var onMainBlockScroll = function (evt) {
  evt.preventDefault();
  scrollMenu(subscriptionBlock);
};

mainBlockScroll.addEventListener('click', onMainBlockScroll);

var selectTabItem = function (name) {
  for (var i = 0; i < tabItems.length; i++) {
    var tabItem = tabItems[i];
    if (tabItem.classList.contains(name)) {
      tabItem.classList.add('tabs__item--active');
    } else {
      tabItem.classList.remove('tabs__item--active');
    }
  }
};

var selectTabToggle = function (evt) {
  evt.preventDefault();
  for (var i = 0; i < tabToggles.length; i++) {
    var tabToggle = tabToggles[i];
    tabToggle.classList.remove('tabs__toggle--active');
  }

  evt.target.classList.add('tabs__toggle--active');
  var tagName = evt.target.getAttribute('data-tab-name');
  selectTabItem(tagName);
};

var onTabToggleCLick = function (evt) {
  selectTabToggle(evt);
};

for (var i = 0; i < tabToggles.length; i++) {
  var tabToggle = tabToggles[i];
  if (tabToggle) {
    tabToggle.addEventListener('click', onTabToggleCLick);
  }
}

$(document).ready(function () {
  $('.coaches__list').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.coaches__toggle--prev').click(function () {
    $('.coaches__list').slick('slickPrev');
  });

  $('.coaches__toggle--next').click(function () {
    $('.coaches__list').slick('slickNext');
  });
});

$(document).ready(function () {
  $('.reviews__list').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.reviews__toggle--prev').click(function () {
    $('.reviews__list').slick('slickPrev');
  });

  $('.reviews__toggle--next').click(function () {
    $('.reviews__list').slick('slickNext');
  });
});
