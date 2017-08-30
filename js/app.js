const Reveal = require('reveal.js');

Reveal.initialize({
	width: 1100,
	history: true,
    dependencies: [
        // Syntax highlight for <code> elements
        { src: '/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    ]
});
