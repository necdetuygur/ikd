#!/usr/bin/env node

var ikd = require("./rIKD.js");
var http = require("./rHttp.js");
http.PageCalled(() => {
	var data = ikd.data();
	ikd.Get();
	http.SetMsg(JSON.stringify(data, 2, 2));
});
http.Start();

