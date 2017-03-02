jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/orgs/'+username+'/repos?callback=?',callback);
};

jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");

    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing

        sortByName(repos);

        var list = jQuery('<div class="github-list" />');
        target.empty().append(list);
        jQuery(repos).each(function() {

			// https://developer.github.com/v3/repos/#list-organization-repositories
			// TODO: Add CodeClimate Scores & Travis Build Badges
			// TODO: Add social Share Buttons
	            list.append('<div class="col-sm-4"><div class="libraries-box"><h4 class="github-repo-title"><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a></h4><p class="repo-desc">' + this.description +'</p><ul class="repo-stats"><li>' + this.stargazers_count +' Stargazers</li><li>' + this.watchers_count +' Watchers</li><li>' + this.forks_count +' Forks</li></ul></div></div>');
        });
      });

	// Sort by Name.
    function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};