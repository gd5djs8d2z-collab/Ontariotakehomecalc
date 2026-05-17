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
    desc: "Estimate your Ontario provincial and federal income tax for 2026 using current CRA brackets.",
    url: "https://ontarioincometaxcalc.ca",
    live: true
  },
  {
    name: "Ontario Raise Calc",
    desc: "See exactly how a salary raise changes your Ontario take-home pay after all deductions.",
    url: "https://ontarioraisecalc.ca",
    live: true
  },
  {
    name: "Marginal Tax Calc",
    desc: "Find your Ontario marginal tax rate on additional income — federal + provincial brackets, CPP, EI, and surtax combined.",
    url: "https://marginaltaxcalc.ca",
    live: true
  },
  {
    name: "CPP Calc",
    desc: "Calculate your Canada Pension Plan contributions based on current CRA rates and income thresholds.",
    url: "https://cppcalc.ca",
    live: true
  },
  {
    name: "EI Calc",
    desc: "Calculate your Employment Insurance premiums based on insurable earnings and the 2026 MIE ceiling.",
    url: "https://eicalc.ca",
    live: true
  }
];
