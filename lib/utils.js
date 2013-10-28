// Function names in this helper file follow a strict convention, so that
//  various front-end implementations can work independently

window.utils = window.utils || {};

// Put stuff in here that you want after templates are displayed and ready
utils.postHeaderRendered = function() {
  $(document).foundation();
}