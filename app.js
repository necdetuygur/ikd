#!/usr/bin/env node

var ikd = require("./rIKD.js");
var http = require("./rHttp.js");
var Call = () => {
	ikd.Get();
	setTimeout(() => {
		console.log(JSON.stringify(ikd.data(), 2, 2));
	}, 2e3);
	http.SetMsg(JSON.stringify(ikd.data(), 2, 2));
};
Call();
http.PageCalled(Call);
http.Start();
