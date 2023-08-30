import{_ as s,v as a,b as o,R as n}from"./chunks/framework.6657fd1d.js";const C=JSON.parse('{"title":"Web","description":"","frontmatter":{},"headers":[],"relativePath":"api/random/web.md","filePath":"api/random/web.md","lastUpdated":null}'),l={name:"api/random/web.md"},p=n(`<h1 id="web" tabindex="-1">Web <a class="header-anchor" href="#web" aria-label="Permalink to &quot;Web&quot;">​</a></h1><h2 id="url" tabindex="-1">url <a class="header-anchor" href="#url" aria-label="Permalink to &quot;url&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个 URL。</p><p><strong>语法</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url</span><span style="color:#A6ACCD;">(protocol</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> host)</span></span></code></pre></div><p><strong>参数</strong>：</p><ul><li><p><strong>protocol</strong>：指定 URL 协议，例如 <code>http</code>。</p></li><li><p><strong>host</strong>：指定 URL 域名和端口号，例如 <code>nuysoft.com</code>。</p></li></ul><p><strong>示例</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Random.url()</span></span>
<span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// http://theqesdv.aero/amfivhxgx</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// http://stmd.mh/biietlmrb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Random.url(protocol, host)</span></span>
<span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">soft.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// http://soft.com/qglhef</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@url(&#39;http&#39;, &#39;soft.com&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// http://soft.com/fkazb</span></span></code></pre></div><h2 id="protocol" tabindex="-1">protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;protocol&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个 URL 协议，返回以下值之一：</p><p><code>&#39;http&#39;</code>、<code>&#39;ftp&#39;</code>、<code>&#39;gopher&#39;</code>、<code>&#39;mailto&#39;</code>、<code>&#39;mid&#39;</code>、<code>&#39;cid&#39;</code>、<code>&#39;news&#39;</code>、<code>&#39;nntp&#39;</code>、<code>&#39;prospero&#39;</code>、<code>&#39;telnet&#39;</code>、<code>&#39;rlogin&#39;</code>、<code>&#39;tn3270&#39;</code>、<code>&#39;wais&#39;</code>。</p><p><strong>使用</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">protocol</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;mailto&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@protocol</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;prospero&quot;</span></span></code></pre></div><h2 id="domain" tabindex="-1">domain <a class="header-anchor" href="#domain" aria-label="Permalink to &quot;domain&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个域名。</p><p><strong>使用</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">domain</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;snllh.tv&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@domain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;gdqbpf.wf&quot;</span></span></code></pre></div><h2 id="tld" tabindex="-1">tld <a class="header-anchor" href="#tld" aria-label="Permalink to &quot;tld&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个顶级域名。</p><p><strong>使用</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tld</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@tld</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;net&quot;</span></span></code></pre></div><h2 id="ip" tabindex="-1">ip <a class="header-anchor" href="#ip" aria-label="Permalink to &quot;ip&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个 IP 地址。</p><p><strong>使用</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ip</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;230.20.185.172&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@ip</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;229.140.178.59&quot;</span></span></code></pre></div><h2 id="email" tabindex="-1">email <a class="header-anchor" href="#email" aria-label="Permalink to &quot;email&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个邮件地址。</p><p><strong>语法</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">email</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">email</span><span style="color:#A6ACCD;">(domain)</span></span></code></pre></div><p><strong>参数</strong>：</p><ul><li><strong>domain</strong>：指定邮件地址的域名，例如 <code>nuysoft.com</code>。</li></ul><p><strong>示例</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Random.email()</span></span>
<span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">email</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;v.biphhmffs@uoymfy.net&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;d.nnyvb@oghqu.bz&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Random.email(domain)</span></span>
<span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">email</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nuysoft.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// q.qichtip@nuysoft.com</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email(&#39;nuysoft.com&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// s.ijrroc@nuysoft.com</span></span></code></pre></div>`,40),t=[p];function e(c,r,i,y,D,d){return a(),o("div",null,t)}const F=s(l,[["render",e]]);export{C as __pageData,F as default};
