require(["gitbook", "jQuery"], function(gitbook, $) {

    gitbook.events.bind("start", function(e, config) {
      console.log('start top nav');
    });

    gitbook.events.bind("page.change", function(e) {
      function createHeader() { //Header to be added. Scripts included here because lazy
        return '<script> jQuery(function($) { $("#genesis-mobile-nav-secondary").click(function() { $("#genesis-nav-secondary").slideToggle(); }); $(window).resize(function() { $(".book-body").css("top", $("#menuwrap").outerHeight()); $(".book-summary").css("top", $("#menuwrap").outerHeight()); $(".book-header").css("top", $("#menuwrap").outerHeight()); }); }); </script><div class="site-container wp-embed-responsive custom-header header-image"> <header class="site-header" itemscope="" itemtype="https://schema.org/WPHeader"> <div class="wrap"> <div class="title-area"> <p class="site-title" itemprop="headline"><a href="https://litfl.com/">Life in the Fast Lane • LITFL • Medical Blog</a></p> <p class="site-description" itemprop="description">Emergency medicine and critical care medical education blog</p> </div> <div class="widget-area header-widget-area"> <section id="search-6" class="widget widget_search"> <div class="widget-wrap"> <form class="search-form" itemprop="potentialAction" itemscope="" itemtype="https://schema.org/SearchAction" method="get" action="https://litfl.com/" role="search"><label class="search-form-label screen-reader-text" for="searchform-5c8dd4d306d9c4.74312881">Search LITFL ...</label><input class="search-form-input" type="search" itemprop="query-input" name="s" id="searchform-5c8dd4d306d9c4.74312881" placeholder="Search LITFL ..."><input class="search-form-submit" type="submit" value="Search"> <meta itemprop="target" content="https://litfl.com/?s={s}"> </form> </div> </section> </div> </div> </header><button class="menu-toggle dashicons-before dashicons-menu activated" aria-expanded="true" aria-pressed="true" id="genesis-mobile-nav-secondary">Menu</button> <nav class="nav-secondary genesis-responsive-menu" aria-label="Secondary" itemscope="" itemtype="https://schema.org/SiteNavigationElement" id="genesis-nav-secondary" style="display: block;"> <div class="wrap"> <ul id="menu-top-menu" class="menu genesis-nav-menu menu-secondary js-superfish" style="touch-action: auto;"> <li id="menu-item-174446" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174446"><a href="https://litfl.com/library/" itemprop="url"><span itemprop="name">Libraries</span></a></li> <li id="menu-item-176855" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-176855"><a href="https://litfl.com/ecg-library/" itemprop="url"><span itemprop="name">ECG Library</span></a></li> <li id="menu-item-176856" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-176856"><a href="https://litfl.com/top-100/" itemprop="url"><span itemprop="name">Top 100</span></a></li> <li id="menu-item-548" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-548"><a href="https://litfl.com/podcasts/" itemprop="url"><span itemprop="name">Podcasts</span></a></li> <li id="menu-item-187254" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-187254"><a href="https://litfl.com/ccc-critical-care-compendium/" itemprop="url"><span itemprop="name">CCC</span></a></li> <li id="menu-item-189332" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-189332"><a href="http://www.partone.litfl.com/" itemprop="url"><span itemprop="name">PART ONE</span></a></li> </ul> </div> </nav> </div>';
      }
      // Get configuration.
      var headerTitle = 'NEW HEADER';
      
      // Add customised html to DOM
      if($('div.custom-header').length === 0) { //prevent multiples being added
        var $header = $('<div id="litfl-header" class="custom-header"></div>');
        var $headerWrapper = $('<div class="header-element-wrapper"></div>');
        var $link = $(createHeader());
        $headerWrapper.append($link);
        $header.append($headerWrapper);
        $('.book').before($header); //.book places header above summary and body elements which ensures these will be pushed down by dynamic headers
      }

    });

	window.addEventListener('load', function (event) {
		MathJax.Hub.Config({
			tex2jax: {}
		});

		gitbook.events.bind("page.change", function() {
			MathJax.Hub.Typeset()
		});
	});
});

