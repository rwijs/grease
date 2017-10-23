// ==UserScript==
// @name        SKG Syslog
// @namespace   skgsyslog
// @include     https://syslog.skggouda.nl/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @version     0.1
// @grant       none
// ==/UserScript==

// New jquery selector for case-insensitive contains
//jQuery.expr[':'].icontains = function(a, i, m) {
//  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
//};


/* When i do $(this).html($(this).html() ik get the javascript control to be able to do a javascript replkace() */

//info blauw
$('table td:contains(info)') .each(function () {
    $(this).html($(this).html().replace(/\\[37minfo\\[0m/gi, '<span style="color:blue; font-weight:bold;">info</span>'));
});
//warn oranje
$('table td:contains(warn)') .each(function () {
    $(this).html($(this).html().replace(/\\[33mwarn\\[0m/gi, '<span style="color:orange; font-weight:bold;">warn</span>'));
});
//debug gray
$('table td:contains(debug)') .each(function () {
    $(this).html($(this).html().replace(/\\[36mdebug\\[0m/gi, '<span style="color:gray; font-weight:bold;">debug</span>'));
});

// Remove unwanted prefix
$('table td:contains(mesos)') .each(function (index) {
    $(this).html($(this).html().replace(/^.* (.*) mesos.* - - /gi, '$1 '));
});

