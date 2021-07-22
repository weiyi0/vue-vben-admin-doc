import{o as e,c as a,a as n}from"./app.b2699450.js";const r='{"title":"Electron","description":"","frontmatter":{},"headers":[{"level":2,"title":"URL 模式","slug":"url-模式"},{"level":3,"title":"使用","slug":"使用"},{"level":3,"title":"从 GitHub 获取代码","slug":"从-github-获取代码"},{"level":3,"title":"安装依赖","slug":"安装依赖"},{"level":3,"title":"运行","slug":"运行"},{"level":3,"title":"打包","slug":"打包"},{"level":2,"title":"标准模式","slug":"标准模式"}],"relativePath":"guide/electron.md","lastUpdated":1626918940068}',s={},t=n('<h1 id="electron"><a class="header-anchor" href="#electron" aria-hidden="true">#</a> Electron</h1><h2 id="url-模式"><a class="header-anchor" href="#url-模式" aria-hidden="true">#</a> URL 模式</h2><p>这种模式会先启动 vite 服务，Electron 使用 Url 地址来进行渲染</p><h3 id="使用"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><h3 id="从-github-获取代码"><a class="header-anchor" href="#从-github-获取代码" aria-hidden="true">#</a> 从 GitHub 获取代码</h3><p><strong>Electron</strong> 代码在 <strong>electron-main</strong> 分支</p><div class="language-bash"><pre><code><span class="token comment"># clone electron-main分支代码</span>\n<span class="token function">git</span> clone -b electron-main https://github.com/anncwb/vue-vben-admin vben-admin-electron\n</code></pre></div><h3 id="安装依赖"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-bash"><pre><code><span class="token function">yarn</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>首次下载 Electron 依赖会比较慢，可以在项目根目录下新建<code>.npmrc</code>文件，填入下方内容即可</p><div class="language-bash"><pre><code><span class="token assign-left variable">ELETRON_MIRROR</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/electron/\n</code></pre></div></div><h3 id="运行"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> dev:app\n</code></pre></div><h3 id="打包"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> build:app\n</code></pre></div><h2 id="标准模式"><a class="header-anchor" href="#标准模式" aria-hidden="true">#</a> 标准模式</h2><p>TODO: 待适配</p>',16);s.render=function(n,r,s,l,i,c){return e(),a("div",null,[t])};export default s;export{r as __pageData};
