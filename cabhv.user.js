// ==UserScript==
// @name        CA BHV
// @namespace   cabhv
// @description Ordina BHV overzicht
// @include     https://cabhv.ordina.nl/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

// New jquery selector for case-insensitive contains
jQuery.expr[':'].icontains = function(a, i, m) {
  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

// Zoveel mogelijk ruimte benutten
$('body') .css('margin', '0 20px');
$('table') .css('width', '100%');
$('img[alt=\'Ordina Nederland\']') .appendTo('h3:contains(BHV overzicht)') .css('float', 'right');

// Locatie accentueren
$('table.zebrine2 td:contains(Apeldoorn)') .closest('tr') .css('background-color', '#BCC6FF');
$('table.zebrine2 td:contains(Eindhoven)') .closest('tr') .css('background-color', '#FF7A97');
$('table.zebrine2 td:contains(Groningen)') .closest('tr') .css('background-color', '#99FFA1');

// Aantal BHV functies bold maken
$('table.zebrine2 td:contains(techniek)') .closest('tr') .css('font-weight', 'bold');
$('table.zebrine2 td:contains(Hoofd BHV)') .closest('tr') .css('font-weight', 'bold');
$('table.zebrine2 td:contains(HBHV)') .closest('tr') .css('font-weight', 'bold');
$('table.zebrine2 td:contains(Coördinator BHV)') .closest('tr') .css('font-weight', 'bold');
$('table.zebrine2 td:contains(Coordinator BHV)') .closest('tr') .css('font-weight', 'bold');

//Rabo blauw
$('table.zebrine2 td:icontains(rabo)') .each(function () {
    $(this) .html($(this) .html() .replace(/rabo/gi, '<span style="color:blue; font-weight:bold;">$&</span>'));
});

//EHBO groen
$('table.zebrine2 td:icontains(ehbo)') .each(function () {
    $(this) .html($(this) .html() .replace(/ehbo/gi, '<span style="color:green; font-weight:bold;">$&</span>'));
});