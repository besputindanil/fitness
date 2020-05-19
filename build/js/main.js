"use strict";

var tabToggles = document.querySelectorAll(".tabs__toggle");
var tabItems = document.querySelectorAll(".tabs__item");

var selectTabItem = function (name) {
  for (var i = 0; i < tabItems.length; i++) {
    var tabItem = tabItems[i];
    if (tabItem.classList.contains(name)) {
      tabItem.classList.add("tabs__item--active");
    } else {
      tabItem.classList.remove("tabs__item--active");
    }
  }
};

var selectTabToggle = function (evt) {
  evt.preventDefault();
  for (var i = 0; i < tabToggles.length; i++) {
    var tabToggle = tabToggles[i];
    tabToggle.classList.remove("tabs__toggle--active");
  }

  evt.target.classList.add("tabs__toggle--active");
  var tagName = evt.target.getAttribute("data-tab-name");
  selectTabItem(tagName);
};

var onTabToggleCLick = function (evt) {
  selectTabToggle(evt);
};

for (var i = 0; i < tabToggles.length; i++) {
  var tabToggle = tabToggles[i];
  if (tabToggle) {
    tabToggle.addEventListener("click", onTabToggleCLick);
  }
}

$(document).ready(function () {
  $(".coaches__list").slick({
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

  $(".coaches__toggle--prev").click(function () {
    $(".slider__list").slick("slickPrev");
  });

  $(".coaches__toggle--next").click(function () {
    $(".slider__list").slick("slickNext");
  });
});

$(document).ready(function () {
  $(".reviews__list").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".reviews__toggle--prev").click(function () {
    $(".reviews__list").slick("slickPrev");
  });

  $(".reviews__toggle--next").click(function () {
    $(".reviews__list").slick("slickNext");
  });
});
