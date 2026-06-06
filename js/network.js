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
    name: "Ontario Income Tax Calc",
    label: "Ontario Income Tax Calc — Estimate your Ontario provincial and federal income tax",
    desc: "Estimate your Ontario provincial and federal income tax for 2026 using current CRA brackets.",
    url: "https://ontarioincometaxcalc.ca",
    live: true
  },
  {
    name: "Ontario Raise Calc",
    label: "Ontario Raise Calc — See how a salary raise changes your Ontario take-home pay",
    desc: "See exactly how a salary raise changes your Ontario take-home pay after all deductions.",
    url: "https://ontarioraisecalc.ca",
    live: true
  },
  {
    name: "Ontario Marginal Tax Calc",
    label: "Ontario Marginal Tax Calc — Find your Ontario marginal tax rate on additional income",
    desc: "Find your Ontario marginal tax rate on additional income — federal + provincial brackets, CPP, EI, and surtax combined.",
    url: "https://ontariomarginaltaxcalc.ca",
    live: true
  },
  {
    name: "CPP Calc",
    label: "CPP Calc — Calculate your Canada Pension Plan contributions",
    desc: "Calculate your Canada Pension Plan contributions based on current CRA rates and income thresholds.",
    url: "https://cppcalc.ca",
    live: true
  },
  {
    name: "EI Calc",
    label: "EI Calc — Calculate your Employment Insurance premiums",
    desc: "Calculate your Employment Insurance premiums based on insurable earnings and the 2026 MIE ceiling.",
    url: "https://eicalc.ca",
    live: true
  }
];

(function () {
  'use strict';

  var CURRENT_HOST = window.location.hostname.replace(/^www\./, '');

  // Populate the related-tools div in the footer (matches gold-standard pattern)
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
