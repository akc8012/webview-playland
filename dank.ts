import { WebView } from 'https://deno.land/x/webview/mod.ts';

let html = `
	<html>
	<head>
		<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'>
	</head>
	<body>
	<section class='section'>
		<div class='container'>
		<h1 class='title'>
			Hello friends!
		</h1>
		<p class='subtitle'>
			Press the ass button... <strong>If you dare</strong>!
		</p>
		<button class='button is-danger is-light'>Ass!</button>
		</div>
	</section>
	</body>
	</html>
`;

const webview = new WebView({
	title: 'Deno Webview Example',
	url: 'data:text/html,' + html,
	width: 800,
	height: 600,
	resizable: true,
	debug: true,
	frameless: false,
});

webview.run();
