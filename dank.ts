import { WebView } from "https://deno.land/x/webview/mod.ts";

let html = `
	<html>
		<body>
			<h1>Hello World!</h1>
		</body>
	</html>
`;

const webview = new WebView({
	title: "Deno Webview Example",
	url: "data:text/html," + html,
	width: 800,
	height: 600,
	resizable: true,
	debug: true,
	frameless: false,
});

webview.run();
