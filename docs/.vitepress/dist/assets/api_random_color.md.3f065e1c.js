import{_ as s,v as a,b as o,R as n}from"./chunks/framework.6657fd1d.js";const C=JSON.parse('{"title":"Color","description":"","frontmatter":{},"headers":[],"relativePath":"api/random/color.md","filePath":"api/random/color.md","lastUpdated":1693368326000}'),l={name:"api/random/color.md"},p=n(`<h1 id="color" tabindex="-1">Color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;Color&quot;">​</a></h1><h2 id="color-1" tabindex="-1">color <a class="header-anchor" href="#color-1" aria-label="Permalink to &quot;color&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个有吸引力的颜色，格式为 <code>#RRGGBB</code>。</p><p><strong>使用</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">color</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;#79a7f2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@color</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;#caf279&quot;</span></span></code></pre></div><h2 id="hex" tabindex="-1">hex <a class="header-anchor" href="#hex" aria-label="Permalink to &quot;hex&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个有吸引力的颜色，格式为 <code>#RRGGBB</code>。</p><p><strong>使用</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hex</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;#79f2d3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@hex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;#f2af79&quot;</span></span></code></pre></div><h2 id="rgb" tabindex="-1">rgb <a class="header-anchor" href="#rgb" aria-label="Permalink to &quot;rgb&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个有吸引力的颜色，格式为 <code>rgb(r, g, b)</code>。</p><p><strong>使用</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rgb</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;rgb(137, 242, 121)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rgb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;rgb(242, 121, 172)&quot;</span></span></code></pre></div><h2 id="rgba" tabindex="-1">rgba <a class="header-anchor" href="#rgba" aria-label="Permalink to &quot;rgba&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个有吸引力的颜色，格式为 <code>rgb(r, g, b, a)</code>。</p><p><strong>使用</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rgba</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;rgba(242, 241, 121, 0.12)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rgba</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;rgba(205, 121, 242, 0.05)&quot;</span></span></code></pre></div><h2 id="hsl" tabindex="-1">hsl <a class="header-anchor" href="#hsl" aria-label="Permalink to &quot;hsl&quot;">​</a></h2><p><strong>详情</strong>：</p><p>随机生成一个有吸引力的颜色，格式为 <code>hsl(h, s, l)</code>。</p><p><strong>使用</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hsl</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;hsl(6, 82, 71)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mock</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@hsl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;hsl(229, 82, 71)&quot;</span></span></code></pre></div>`,26),t=[p];function e(r,c,i,y,d,D){return a(),o("div",null,t)}const h=s(l,[["render",e]]);export{C as __pageData,h as default};