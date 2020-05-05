var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var printcss = fs.readFileSync(__dirname + "/print.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	return Handlebars.compile(template)({
		css,
		printcss,
		resume: resume
	});
}

module.exports = {
	render: render,
	pdfRenderOptions: {
		format: 'A4',
		mediaType: 'print',
		margin: {
			top: 36,
			right: 36,
			bottom: 36,
			left: 36,
		},
	}
};
