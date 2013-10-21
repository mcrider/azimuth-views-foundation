// Function names in this helper file follow a strict convention, so that
//  various front-end implementations can work independently
window.utils = window.utils || {};
utils.openModal = function(selector) {
  $(selector).foundation('reveal', 'open');
}
utils.closeModal = function(selector) {
  $(selector).foundation('reveal', 'close');
}

// Put stuff in here that you want after templates are displayed and ready
utils.postHeaderRendered = function() {
  $(document).foundation();
}