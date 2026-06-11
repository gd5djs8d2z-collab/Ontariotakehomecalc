/* GA4 - Calc-HQ Network Analytics (single injection point) */
(function(){if(!window.__GA4_LOADED){window.__GA4_LOADED=true;var id="G-W4SWZ1YRS2";var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+id;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag("js",new Date());gtag("config",id);}})();
/**
 * Ontario Take Home Calc — CA Network Tools Registry
 * Source of truth for all related .ca calculator tools.
 * Only tools with live: true will be displayed.
 * This site must NOT include itself (filtered at render time).
 *
 * Hub: https://calc-hq.ca
 */

var NETWORK_TOOLS = [
  {
    name: "Ontario Income Tax Calculator",
    url: "https://ontarioincometaxcalc.ca",
    live: true
  },
  {
    name: "Ontario Bonus Tax Calculator",
    url: "https://ontariobonustaxcalc.ca",
    live: true
  },
  {
    name: "Ontario Raise Calculator",
    url: "https://ontarioraisecalc.ca",
    live: true
  },
  {
    name: "Ontario Marginal Tax Calculator",
    url: "https://ontariomarginaltaxcalc.ca",
    live: true
  },
  {
    name: "Ontario Commission Tax Calculator",
    url: "https://ontariocommissiontaxcalc.ca",
    live: true
  },
  {
    name: "Ontario Severance Pay Calculator",
    url: "https://ontarioseverancepaycalc.ca",
    live: true
  },
  {
    name: "Ontario Termination Pay Calculator",
    url: "https://ontarioterminationpaycalc.ca",
    live: true
  },
  {
    name: "Ontario Self-Employed Tax Calculator",
    url: "https://ontarioselfemployedtaxcalc.ca",
    live: true
  }
];

(function () {
  'use strict';

  var CURRENT_HOST = window.location.hostname.replace(/^www\./, '');

  var container = document.getElementById('related-tools');
  if (!container) return;

  var tools = NETWORK_TOOLS.filter(function (t) {
    return t.live && t.url.indexOf(CURRENT_HOST) === -1;
  });

  var html = '';
  tools.forEach(function (t) {
    html += '<a href="' + t.url + '" rel="noopener">' + t.name + '</a>';
  });
  container.innerHTML = html;

})();
