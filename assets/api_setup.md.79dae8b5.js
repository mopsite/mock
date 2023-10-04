import{_ as s,v as a,b as n,R as o}from"./chunks/framework.6657fd1d.js";const A=JSON.parse('{"title":"Mock.setup()","description":"","frontmatter":{},"headers":[],"relativePath":"api/setup.md","filePath":"api/setup.md","lastUpdated":1693368326000}'),p={name:"api/setup.md"},e=o(`<h1 id="mock-setup" tabindex="-1">Mock.setup() <a class="header-anchor" href="#mock-setup" aria-label="Permalink to &quot;Mock.setup()&quot;">​</a></h1><p><strong>详情</strong>：</p><p>配置拦截 Ajax 请求时的行为。支持的配置项有：<code>timeout</code>。</p><p><strong>语法</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">(settings)</span></span></code></pre></div><p><strong>参数</strong>：</p><ul><li><strong>settings</strong>：必选。配置项集合。 <ul><li><strong>timeout</strong>：可选。被拦截的 Ajax 请求的响应时间，单位是毫秒。值可以是正整数，例如 <code>400</code>，表示 400 毫秒后响应内容；也可以是横杠 <code>-</code> 风格的字符串，例如 <code>&#39;200-600&#39;</code>，表示响应时间介于 200 到 600 毫秒之间。默认值是 <code>&#39;10-100&#39;</code>。</li></ul></li></ul><p><strong>示例</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">timeout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">400</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Mock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">timeout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">200-600</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,9),t=[e];function l(c,r,i,d,D,y){return a(),n("div",null,t)}const C=s(p,[["render",l]]);export{A as __pageData,C as default};
