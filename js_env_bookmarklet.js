javascript:(function() {
	var script = document.createElement('script');
	script.setAttribute('charset','utf-8');
	script.async = true;
	script.src   = 'https://cdn.rawgit.com/zopim/js_env_report/f9033b774f/js_env_tester.js';
	script.type  = 'text/javascript';
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(script);
})();
