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

const NETWORK_TOOLS = [
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

  function renderFooter() {
    var container = document.getElementById('network-footer');
    if (!container) return;

    var tools = NETWORK_TOOLS.filter(function (t) {
      return t.live && t.url.indexOf(CURRENT_HOST) === -1;
    });

    var toolLinks = '';
    tools.forEach(function (t) {
      toolLinks += '<a href="' + t.url + '" rel="noopener">' + t.label + '</a>';
    });

    container.innerHTML =
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<div class="logo">🍁 Ontario Take Home Calc</div>' +
          '<p>Ontario take-home pay calculations for 2026. All calculations run in your browser. No data stored.</p>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>PAGES</h4>' +
          '<a href="index.html">Home</a>' +
          '<a href="faq.html">FAQ</a>' +
          '<a href="about.html">About</a>' +
          '<a href="contact.html">Contact</a>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>LEGAL</h4>' +
          '<a href="privacy-policy.html">Privacy Policy</a>' +
          '<a href="disclaimer.html">Disclaimer</a>' +
          '<a href="terms.html">Terms of Use</a>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>RELATED TOOLS</h4>' +
          toolLinks +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>MORE TOOLS</h4>' +
          '<a href="https://calc-hq.ca" class="more-tools-link" target="_blank" rel="noopener noreferrer">' +
            '<span class="more-tools-title">Calc-HQ.ca</span>' +
            '<span class="subtext">Canadian payroll, tax, and contribution calculators</span>' +
          '</a>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span>© 2026 Ontario Take Home Calc — All calculations run in your browser. No data stored.</span>' +
        '<span>Tax Year: 2026 | Rates: CRA &amp; ESDC</span>' +
      '</div>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderFooter();
  });

})();
