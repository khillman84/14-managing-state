'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
  // This function is called on aboutController.js.  repoView.index is passed in as a callback.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
