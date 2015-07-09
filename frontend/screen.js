var page = require('webpage').create();
page.open('http://localhost:9000/#/matrix', function() {
			page.viewportSize = {
				width: 9000,
				height: 9000
			};
			page.render('legco-matrix.png');
			phantom.exit();
		});
