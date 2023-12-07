---
layout: post
title: Macroeconomic Indicators
excerpt_separator: <!--more-->
---

A list of macroeconomic indicators I personally find interesting and useful to understand the state of the U.S. economy.

<!--more-->

<h2>Important Indicators</h2>

<div>
<ul>
<!-- <li><a target="_blank" href="https://www.statista.com/statistics/1250636/global-container-freight-index/">Global Container Freight Index</a></li> -->
<li><a target="_blank" href="https://www.neartermforwardspread.com/">Near Term Forward Spread</a></li>
<li><a target="_blank" href="https://stockcharts.com/freecharts/yieldcurve.php">Dynamic Yield Curve</a></li>
</ul>
</div>


<h2>M2 Money Supply</h2>

<h4>Interpretation</h4>
<p>
The "M2 Money Supply", also referred to as "M2 Money Stock", is a measure for the amount of currency in circulation. M2 includes M1 (physical cash and checkable deposits) as well as "less liquid money", such as saving bank accounts. The chart below plots the yearly <b>M2 Growth Rate</b> and the <b style="color:red">Inflation Rate</b>, which is defined as the yearly change in the Consumer Price Index (CPI). When inflation is high, prices for goods and services rise and thus the purchasing power per unit of currency decreases.

Historically, M2 has grown along with the <b style="color:blue">economy</b>. However, it has also grown along with <a target="_blank" href="https://www.longtermtrends.net/us-debt-to-gdp/">Federal Debt to GDP</a> during wars and recessions. In most recent history, M2 growth surpassed 10 percent in the crisis of 2001 and 2009, during which an expansionary monetary policy was deployed by the central bank, including large scale asset purchases.

According to <a target="_blank" href="yumpu.com/s/1WpqlPfhSgxat8eq">Bannister and Forward (2002, page 28)</a>, Money supply growth and inflation are inexorably linked.


</p>

<!--
<img style="border: 1px solid black" src = "images/m2-yearly-growth-vs-infl.svg" alt=""/>
-->

![M2 vs Inflation](/images/m2-yearly-growth-vs-infl.svg)


<p>Source: <a target="_blank" href="https://www.longtermtrends.net/m2-money-supply-vs-inflation/">Long Term Trends</a>. Retrieved: 7 December 2023.</p>

<h2>Bank solvency</h2>

<p>As of September, 2022, it was revealed that 722 banks reported unrealized losses exceeding 50% of their capital (Source: <a target="_blank" href="https://news.bitcoin.com/fed-reveals-722-banks-reported-unrealized-losses-over-50-of-capital-as-concerns-over-us-banking-crisis-grow/?ref=unusual-whales.ghost.io">news.bitcoin.com</a>; see a recent April, 2023 report <a target="_blank" href="https://www.federalreserve.gov/supervisionreg/files/board-briefing-on-impact-of-rising-interest-rates-and-supervisory-approach-20230214.pdf">here</a>). This means that the <a target="_blank" href="https://www.finder.com/fed-funds-rate">7 rate hikes</a> since then (as of August, 2023) occurred while these banks were insolvent and that the bank failures since then were foreseeable. This comes as banks make increasing use of the <a target="_blank" href="https://www.federalreserve.gov/regreform/discount-window.htm">Discount Window</a> (see chart below) and <a target="_blank" href="https://www.federalreserve.gov/financial-stability/bank-term-funding-program.htm">Bank Term Funding Program</a>, effectively bail-out loan programs.</p>

<h4>Net Unrealized Gains (Losses) on Available-for-Sale Securities (DISCONTINUED)</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17OTx&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>



<h4>Bank failures</h4>

<p>Note that, as of July, 2023, this statistic is already worst than the Great Financial Crisis.</p>

<img style="border: 1px solid black;" src="https://www.fdic.gov/bank/historical/bank/images/bfb-summary.gif"/>

<p>Source: <a target="_blank" href="https://www.fdic.gov/bank/historical/bank/">FDIC</a>.</p>



<h4>Bank Term Funding Program Asset level</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17MCe&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>



<h2>Household Debt and Credit Report</h2>

<p>Cumulative debt balances from 2004:Q1 to present.</p>

<!--
<div id="hhdci_iframe" style="overflow:scroll; width:660px; height:1175px; border: 1px solid black;">
<iframe id="HHDCIframe" data-latest="hhdc"  scrolling="no" style="width:100%; height:180%;" onload=" document.getElementById('hhdci_iframe').scrollTop = 340;
document.getElementById('hhdci_iframe').scrollLeft = 455; document.getElementById('hhdci_iframe').style['overflow'] = 'hidden'; 
" src="https://www.newyorkfed.org/microeconomics/hhdc"></iframe>
</div>
-->

<div id="hhdci_iframe" style="overflow:hidden; width:670px; height:835px; border: 1px solid black;">
<iframe id="HHDCIframe" data-latest="hhdc" scrolling="no" style="
width:200%; 
height:183%;
transform: scale(0.70);
overflow:hidden;

" onload=" document.getElementById('hhdci_iframe').scrollTop = 460;
document.getElementById('hhdci_iframe').scrollLeft = 325;  
" src="https://www.newyorkfed.org/microeconomics/hhdc"></iframe>
</div>

<!-- frameborder="0" 
width:670px;  ---- 940px
height:325px;
document.getElementById('hhdci_iframe').scrollTop = 10000;


document.getElementById('hhdci_iframe').style['overflow'] = 'hidden';
-->

<h2>Credit Cards</h2>

<h4>Commercial Bank Interest Rate on Credit Card Plans, All Accounts</h4>

<p>Banks are significantly tightening lending standards to an all-time high.</p>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17MAU&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>

<h4>Delinquency Rate on Consumer Loans</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=16WwF&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>

<h4>Delinquency Rate on Credit Card Loans (all and by bank size)</h4>

<p>Note that delinquency rates on smaller banks are at an all-time-high since 1991.</p>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=1aroH&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>

<h2>Interest Rates</h2>

<h4>Federal Funds Rate versus 2-year T-bill yield</h4>

<p>The federal funds rate, which is controlled, tends to follow the 2-year T-bill yield, which is determined by the market.</p>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17MCw&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>

<!--
<h2>Near Term Forward Spread</h2>

<iframe id="innerFrame" name="innerFrame" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads" frameborder="0" allowfullscreen="" src="https://1456573148-atari-embeds.googleusercontent.com/embeds/16cb204cf3a9d4d223a0a3fd8b0eec5d/inner-frame-minified.html?jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.S9zOXUg9rrA.O%2Fd%3D1%2Frs%3DAHpOoo-AXjUK4hNAaKzui0P9Fr9nG2_yZQ%2Fm%3D__features__" style="overflow: auto;">
</iframe>
-->


<h4>Yield Spreads</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17MFN&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>

<h2>Real-Estate</h2>


<h4>30-year fixed rate mortgage versus 10-year T-bill yield.</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17MCn&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>


<h4>Delinquency Rate on Single-Family Residential Mortgages and Commercial Real Estate Loans (Excluding Farmland)</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17OTj&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>




<h2>Overnight Reverse Repurchase Agreement</h2>

<h4>Award Rate</h4>

<p>The award rate for banks to effectively store their money with the Federal Reserve overnight.</p>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17MBH&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>

<h4>Usage of the overnight Reverse Repo facility.</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17MBV&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>

<h2>Discount Window</h2>

<h4>Discount Window Primary Credit Rate</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17MC8&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>

<h4>Discount Window Usage</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=17MC9&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>


<h2>Labor Market</h2>


<h4>Percent of Civilian Labor Force Unemployed 15 Weeks and over (U-1)</h4>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=18Iut&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>

<p>Percent change year-over-year:</p>

<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=18Iuy&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe>



<h2>Rolex Market Index</h2>

<p>The Rolex Market Index is an indicator of the financial performance of Rolex watches on the secondhand market. It is comprised of the top 30 Rolex models by transaction value. The index shows the average market price (in USD) of these 30 watches over time.</p>

<!--
<img style="border: 1px solid black" src = "images/rolex.png" alt=""/>
-->

![Rolex Market Index](/images/rolex.png)


<p>Source: <a target="_blank" href="https://watchcharts.com/watches/brand_index/rolex">Watch Charts</a>. Retrieved: 7 December 2023.</p>


