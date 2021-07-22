import{o as e,c as s,a as n}from"./app.b2699450.js";const a='{"title":"Lint","description":"","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍"},{"level":2,"title":"ESLint","slug":"eslint"},{"level":3,"title":"手动校验代码","slug":"手动校验代码"},{"level":3,"title":"配置项","slug":"配置项"},{"level":3,"title":"编辑器配合","slug":"编辑器配合"},{"level":2,"title":"CommitLint","slug":"commitlint"},{"level":3,"title":"配置","slug":"配置"},{"level":3,"title":"Git 提交规范","slug":"git-提交规范"},{"level":3,"title":"如何关闭","slug":"如何关闭"},{"level":3,"title":"示例","slug":"示例"},{"level":2,"title":"Stylelint","slug":"stylelint"},{"level":3,"title":"配置","slug":"配置-1"},{"level":3,"title":"编辑器配合","slug":"编辑器配合-1"},{"level":2,"title":"Prettier","slug":"prettier"},{"level":3,"title":"配置","slug":"配置-2"},{"level":3,"title":"编辑器配合","slug":"编辑器配合-2"},{"level":2,"title":"Git Hook","slug":"git-hook"},{"level":3,"title":"husky","slug":"husky"},{"level":3,"title":"如何关闭","slug":"如何关闭-1"},{"level":3,"title":"如何跳过某一个检查","slug":"如何跳过某一个检查"},{"level":3,"title":"lint-staged","slug":"lint-staged"}],"relativePath":"dep/lint.md","lastUpdated":1626918940068}',t={},i=n('<h1 id="lint"><a class="header-anchor" href="#lint" aria-hidden="true">#</a> Lint</h1><h2 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><div class="tip custom-block"><p class="custom-block-title">使用 lint 的好处</p><p>具备基本工程素养的同学都会注重编码规范，而代码风格检查（Code Linting，简称 Lint）是保障代码规范一致性的重要手段。</p><p>遵循相应的代码规范有以下好处</p><ul><li>较少 bug 错误率</li><li>高效的开发效率</li><li>更高的可读性</li></ul></div><p>项目内集成了以下几种代码校验方式</p><ol><li>eslint 用于校验代码格式规范</li><li>commitlint 用于校验 git 提交信息规范</li><li>stylelint 用于校验 css/less 规范</li><li>prettier 代码格式化</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>lint 不是必须的，但是很有必要，一个项目做大了以后或者参与人员过多后，就会出现各种风格迥异的代码，对后续的维护造成了一定的麻烦</p></div><h2 id="eslint"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h2><p>ESLint 是一个代码规范和错误检查工具，有以下几个特性</p><ul><li>所有东西都是可以插拔的。你可以调用任意的 rule api 或者 formatter api 去打包或者定义 rule or formatter。</li><li>任意的 rule 都是独立的</li><li>没有特定的 coding style，你可以自己配置</li></ul><h3 id="手动校验代码"><a class="header-anchor" href="#手动校验代码" aria-hidden="true">#</a> 手动校验代码</h3><div class="language-bash"><pre><code><span class="token comment"># 执行下面代码.能修复的会自动修复，不能修复的需要手动修改</span>\n<span class="token function">yarn</span> run lint:eslint\n</code></pre></div><h3 id="配置项"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h3><p>项目的 eslint 配置位于根目录下 <strong>.eslintrc.js</strong> 内，可以根据团队自行修改代码规范</p><h3 id="编辑器配合"><a class="header-anchor" href="#编辑器配合" aria-hidden="true">#</a> 编辑器配合</h3><p>推荐使用 vscode 进行开发，vscode 自带 eslint 插件，可以自动修改一些错误。</p><p>同时项目内也自带了 vscode eslint 配置，具体在 <code>.vscode/setting.json</code> 文件夹内部。只要使用 vscode 开发不用任何设置即可使用</p><h2 id="commitlint"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> CommitLint</h2><p>在一个团队中，每个人的 git 的 commit 信息都不一样，五花八门，没有一个机制很难保证规范化，如何才能规范化呢？可能你想到的是 git 的 hook 机制，去写 shell 脚本去实现。这当然可以，其实 JavaScript 有一个很好的工具可以实现这个模板，它就是 commitlint（用于校验 git 提交信息规范）。</p><h3 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>commit-lint 的配置位于项目根目录下 <strong>commitlint.config.js</strong></p><h3 id="git-提交规范"><a class="header-anchor" href="#git-提交规范" aria-hidden="true">#</a> Git 提交规范</h3><ul><li><p>参考 <a href="https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md" target="_blank" rel="noopener noreferrer">vue</a> 规范 (<a href="https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular" target="_blank" rel="noopener noreferrer">Angular</a>)</p><ul><li><code>feat</code> 增加新功能</li><li><code>fix</code> 修复问题/BUG</li><li><code>style</code> 代码风格相关无影响运行结果的</li><li><code>perf</code> 优化/性能提升</li><li><code>refactor</code> 重构</li><li><code>revert</code> 撤销修改</li><li><code>test</code> 测试相关</li><li><code>docs</code> 文档/注释</li><li><code>chore</code> 依赖更新/脚手架配置修改等</li><li><code>workflow</code> 工作流改进</li><li><code>ci</code> 持续集成</li><li><code>mod</code> 不确定分类的修改</li><li><code>wip</code> 开发中</li><li><code>types</code> 类型修改</li></ul></li></ul><h3 id="如何关闭"><a class="header-anchor" href="#如何关闭" aria-hidden="true">#</a> 如何关闭</h3><p>在 <code>.husky/commit-msg</code> 内注释以下代码即可</p><div class="language-bash"><pre><code><span class="token comment"># npx --no-install commitlint --edit &quot;$1&quot;</span>\n</code></pre></div><h3 id="示例"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-bash"><pre><code>\n<span class="token function">git</span> commit -m <span class="token string">&#39;feat(home): add home page&#39;</span>\n\n</code></pre></div><h2 id="stylelint"><a class="header-anchor" href="#stylelint" aria-hidden="true">#</a> Stylelint</h2><p>stylelint 用于校验项目内部 css 的风格,加上编辑器的自动修复，可以很好的统一项目内部 css 风格</p><h3 id="配置-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h3><p>stylelint 配置位于根目录下 <strong>stylelint.config.js</strong></p><h3 id="编辑器配合-1"><a class="header-anchor" href="#编辑器配合-1" aria-hidden="true">#</a> 编辑器配合</h3><p>如果您使用的是 vscode 编辑器的话，只需要安装下面插件，即可在保存的时候自动格式化文件内部 css 样式</p><p><strong>插件</strong></p><p><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noopener noreferrer">StyleLint</a></p><h2 id="prettier"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h2><p>prettier 可以用于统一项目代码风格，统一的缩进，单双引号，尾逗号等等风格</p><h3 id="配置-2"><a class="header-anchor" href="#配置-2" aria-hidden="true">#</a> 配置</h3><p>prettier 配置文件位于项目根目录下 <strong>prettier.config.js</strong></p><h3 id="编辑器配合-2"><a class="header-anchor" href="#编辑器配合-2" aria-hidden="true">#</a> 编辑器配合</h3><p>如果您使用的是 vscode 编辑器的话，只需要安装下面插件，即可在保存的时候自动格式化文件内部 js 格式</p><p><strong>插件</strong></p><p><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier</a></p><h2 id="git-hook"><a class="header-anchor" href="#git-hook" aria-hidden="true">#</a> Git Hook</h2><p>git hook 一般结合各种 lint，在 git 提交代码的时候进行代码风格校验，如果校验没通过，则不会进行提交。需要开发者自行修改后再次进行提交</p><h3 id="husky"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h3><p>有一个问题就是校验会校验全部代码，但是我们只想校验我们自己提交的代码，这个时候就可以使用 husky。</p><p>最有效的解决方案就是将 Lint 校验放到本地，常见做法是使用 husky 或者 pre-commit 在本地提交之前先做一次 Lint 校验。</p><p>项目在 <code>.husky</code> 内部定义了相应的 hooks</p><h3 id="如何关闭-1"><a class="header-anchor" href="#如何关闭-1" aria-hidden="true">#</a> 如何关闭</h3><div class="language-bash"><pre><code><span class="token comment"># 删除husky依赖即可</span>\n<span class="token function">yarn</span> remove huksy\n\n</code></pre></div><h3 id="如何跳过某一个检查"><a class="header-anchor" href="#如何跳过某一个检查" aria-hidden="true">#</a> 如何跳过某一个检查</h3><div class="language-bash"><pre><code><span class="token comment"># 加上 --no-verify即可跳过git hook校验（--no-verify 简写为 -n）</span>\n<span class="token function">git</span> commit -m <span class="token string">&quot;xxx&quot;</span> --no-verify\n</code></pre></div><h3 id="lint-staged"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3><p>用于自动修复提交文件风格问题</p><p><strong>lint-staged</strong> 配置位于项目 <code>.husky</code> 目录下 <strong>lintstagedrc.js</strong></p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 对指定格式文件 在提交的时候执行相应的修复命令</span>\n  <span class="token string">&#39;*.{js,jsx,ts,tsx}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;{!(package)*.json,*.code-snippets,.!(browserslist)*rc}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write--parser json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;package.json&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;*.vue&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;stylelint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;git add .&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;*.{scss,less,styl,css,html}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;git add .&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;*.md&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div>',57);t.render=function(n,a,t,l,o,r){return e(),s("div",null,[i])};export default t;export{a as __pageData};
