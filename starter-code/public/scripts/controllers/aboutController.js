'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // DONE: What value is in 'module'? What is the purpose of this line of code?
  // The value of module is aboutController.  The purpose of this line of code is to call the function.
  module.aboutController = aboutController;
  
})(window);
