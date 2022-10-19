import{_ as e,o as a,c as t,a as o}from"./chunks/framework.ead4eca5.js";const f=JSON.parse('{"title":"Layout","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme-layout.md","lastUpdated":1662038480000}'),s={name:"guide/theme-layout.md"},n=o(`<h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h1><p>You may choose the page layout by setting <code>layout</code> option to the page <a href="./frontmatter">frontmatter</a>. There are 3 layout options, <code>doc</code>, <code>page</code>, and <code>home</code>. If nothing is specified, then the page is treated as <code>doc</code> page.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">doc</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="doc-layout" tabindex="-1">Doc Layout <a class="header-anchor" href="#doc-layout" aria-hidden="true">#</a></h2><p>Option <code>doc</code> is the default layout and it styles the whole Markdown content into &quot;documentation&quot; look. It works by wrapping whole content within <code>vp-doc</code> css class, and applying styles to elements underneath it.</p><p>Almost all generic elements such as <code>p</code>, or <code>h2</code> get special styling. Therefore, keep in mind that if you add any custom HTML inside a Markdown content, those will get affected by those styles as well.</p><p>It also provides documentation specific features listed below. These features are only enabled in this layout.</p><ul><li>Edit Link</li><li>Prev Next Link</li><li>Outline</li><li><a href="./theme-carbon-ads">Carbon Ads</a></li></ul><h2 id="page-layout" tabindex="-1">Page Layout <a class="header-anchor" href="#page-layout" aria-hidden="true">#</a></h2><p>Option <code>page</code> is treated as &quot;blank page&quot;. The Markdown will still be parsed, and all of the <a href="./markdown">Markdown Extensions</a> work as same as <code>doc</code> layout, but it wouldn&#39;t get any default stylings.</p><p>The page layout will let you style everything by you without VitePress theme affecting the markup. This is useful when you want to create your own custom page.</p><p>Note that even in this layout, sidebar will still show up if the page has a matching sidebar config.</p><h2 id="home-layout" tabindex="-1">Home Layout <a class="header-anchor" href="#home-layout" aria-hidden="true">#</a></h2><p>Option <code>home</code> will generate templated &quot;Homepage&quot;. In this layout, you can set extra options such as <code>hero</code> and <code>features</code> to customize the content further. Please visit <a href="./theme-home-page">Theme: Home Page</a> for more details.</p><h2 id="no-layout" tabindex="-1">No Layout <a class="header-anchor" href="#no-layout" aria-hidden="true">#</a></h2><p>If you don&#39;t want any layout, you can pass <code>layout: false</code> through frontmatter. This option is helpful if you want a fully-customizable landing page (without any sidebar, navbar, or footer by default).</p>`,16),l=[n];function i(d,c,r,h,p,u){return a(),t("div",null,l)}const m=e(s,[["render",i]]);export{f as __pageData,m as default};
