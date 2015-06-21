/**
 *  @(#)rssParser.js    V0.1    2007/03/15
 *
 *  rss XML Parser extend Prototype.js v1.5
 *  Copyright 2005-2007 by VRICKS, All Right Reserved.
 *  http://www.vricks.com
 *
 *  GNU LESSER GENERAL PUBLIC LICENSE
 *  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *  @Author Woo-Chang Yang, routine@vrick.com
 */

function rssParser(xml) {
	var v = Try.these(
		// Rss 버전을 가져 옵니다.
		function() { return xml.getElementsByTagName("rss")[0].getAttribute("version") ? "2.0" : false; },
		function() { return xml.getElementsByTagName("rdf:RDF")[0].getAttribute("xmlns") ? "1.0" : false; },
		function() { return xml.getElementsByTagName("feed")[0].getAttribute("xmlns") ? "atom" : false; }
	)
	switch(v) {
		case "2.0"	: return new rssParser2(xml); break;
		case "1.0"	: return new rssParser1(xml); break;
		case "atom"	: return new rssParserAtom(xml); break;
		default		: return false;
	}
};

// Rss 2.0 Calss
var rssParser2 = Class.create();
Object.extend(rssParser2.prototype, {
	initialize	: function(xml) {
		var channel	= xml.getElementsByTagName("channel")[0];
		this.title	= channel.getElementsByTagName("title")[0].firstChild.nodeValue;
		this.link	= channel.getElementsByTagName("link")[0].firstChild.nodeValue;
		if(channel.getElementsByTagName("image")[0]) {
			var images	= channel.getElementsByTagName("image")[0];
			this.image	= {
				"url"	: images.getElementsByTagName("url")[0].firstChild.nodeValue,
				"title"	: images.getElementsByTagName("title")[0].firstChild.nodeValue,
				"link"	: images.getElementsByTagName("link")[0].firstChild.nodeValue
			};
		}
		else {
			this.image = {
				"url"	: "",
				"title"	: "",
				"link"	: ""
			}
		}
		this.description	= Try.these (
			function() { return channel.getElementsByTagName("description")[0].firstChild.nodeValue; },
			function() { return "" }
		);
		this.language		= Try.these (
			function() { return channel.getElementsByTagName("language")[0].firstChild.nodeValue; },
			function() { return channel.getElementsByTagName("dc:language")[0].firstChild.nodeValue; },
			function() { return ""}
		);
		this.pubDate		= Try.these(
			function() { return channel.getElementsByTagName("pubDate")[0].firstChild.nodeValue; },
			function() { return channel.getElementsByTagName("lastBuildDate")[0].firstChild.nodeValue; },
			function() { return ""; }
		);
		var items = new Array();
		$A(channel.getElementsByTagName("item")).each(function(i){
			items.push({
				"category" : Try.these(
					function() { return i.getElementsByTagName("category")[0].firstChild.nodeValue; },
					function() { return "" }
				),
				"title" : i.getElementsByTagName("title")[0].firstChild.nodeValue,
				"link"	: i.getElementsByTagName("link")[0].firstChild.nodeValue,
				"description" : Try.these (
					function() { return i.getElementsByTagName("description")[0].firstChild.nodeValue; },
					function() { return "" }
				),
				"pubDate" : Try.these (
					function() { return i.getElementsByTagName("pubDate")[0].firstChild.nodeValue; },
					function() { return i.getElementsByTagName("dc:date")[0].firstChild.nodeValue; },
					function() { return "" }
				)
			})
		})
		this.item = items;
	}
});

var rssParser1 = Class.create();
Object.extend(rssParser1.prototype, {
	initialize	: function(xml) {
		var channel	= xml.getElementsByTagName("channel")[0];
		var images	= xml.getElementsByTagName("image")[0];
		this.title	= channel.getElementsByTagName("title")[0].firstChild.nodeValue;
		this.link	= channel.getElementsByTagName("link")[0].firstChild.nodeValue;
		this.image	= {
			"url"	: images.getElementsByTagName("url")[0].firstChild.nodeValue,
			"title"	: images.getElementsByTagName("title")[0].firstChild.nodeValue,
			"link"	: images.getElementsByTagName("link")[0].firstChild.nodeValue
		};
		this.description	= channel.getElementsByTagName("description")[0].firstChild.nodeValue;
		this.language		= channel.getElementsByTagName("dc:language")[0].firstChild.nodeValue;
		this.pubDate		= channel.getElementsByTagName("dc:date")[0].firstChild.nodeValue;
		var items			= xml.getElementsByTagName("item");
		var itemValue		= new Array();
		for(var i = 0; i < items.length; i++) {
			itemValue.push({
				"category"		: items[i].getElementsByTagName("category")[0].firstChild.nodeValue,
				"title"			: items[i].getElementsByTagName("title")[0].firstChild.nodeValue,
				"link"			: items[i].getElementsByTagName("link")[0].firstChild.nodeValue,
				"description"	: items[i].getElementsByTagName("description")[0].firstChild.nodeValue,
				"pubDate"		: items[i].getElementsByTagName("dc:date")[0].firstChild.nodeValue
			});
		};
		this.item = itemValue;
	}
});

var rssParserAtom = Class.create();
Object.extend(rssParserAtom.prototype, {
	initialize	: function(xml) {
		this.title	= xml.getElementsByTagName("title")[0].firstChild.nodeValue;
		this.link	= xml.getElementsByTagName("link")[0].getAttribute("href");
		this.image	= {
			"url"	: "",
			"title"	: "",
			"link"	: ""
		};
		this.description	= xml.getElementsByTagName("info")[0].firstChild.nodeValue;
		this.language		= "";
		this.pubDate		= xml.getElementsByTagName("modified")[0].firstChild.nodeValue;
		var items			= xml.getElementsByTagName("entry");
		var itemValue		= new Array();
		for(var i = 0; i < items.length; i++) {
			itemValue.push({
				"category"		: "",
				"title"			: items[i].getElementsByTagName("title")[0].firstChild.nodeValue,
				"link"			: items[i].getElementsByTagName("link")[0].getAttribute("href"),
				"description"	: items[i].getElementsByTagName("summary")[0].firstChild.nodeValue,
				"pubDate"		: items[i].getElementsByTagName("created")[0].firstChild.nodeValue
			});
		};
		this.item = itemValue;
	}
});
