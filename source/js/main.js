"use strict";

var tabToggles = document.querySelectorAll(".tabs__toggle");
var tabItems = document.querySelectorAll(".tabs__item");

var selectTabItem = function (name) {
  for (var i = 0; i < tabItems.length; i++) {
    var tabItem = tabItems[i];
    tabItem.classList.contains(name)
      ? tabItem.classList.add("tabs__item--active")
      : tabItem.classList.remove("tabs__item--active");
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
