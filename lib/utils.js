// Function names in this helper file follow a strict convention, so that
//  various front-end implementations can work independently

window.Azimuth = window.Azimuth || {};
Azimuth.utils = Azimuth.utils || {};

// Put stuff in here that you want after templates are displayed and ready
Azimuth.utils.postHeaderRendered = function() {
  $(document).foundation();
}