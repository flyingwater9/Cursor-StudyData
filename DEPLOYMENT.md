# 部署指南

本项目支持多种云端部署方案，推荐按以下顺序选择：

## 方案一：Vercel（推荐 - 最简单）⭐

Vercel 是部署 Vite + React 项目最简单的方式，支持自动部署和免费 HTTPS。

### 方法A：通过 Vercel 网站部署（推荐）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub/GitLab/Bitbucket 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择你的代码仓库（如果没有，先推送到 GitHub）
   - Vercel 会自动检测到 Vite 项目

3. **配置项目**
   - Framework Preset: 选择 "Vite"
   - Build Command: `npm run build`（自动填充）
   - Output Directory: `dist`（自动填充）
   - Install Command: `npm install`（自动填充）

4. **部署**
   - 点击 "Deploy"
   - 等待几分钟，部署完成后会获得一个 URL（如：`your-project.vercel.app`）

5. **自动部署**
   - 之后每次推送到 GitHub，Vercel 会自动重新部署

### 方法B：通过 Vercel CLI 部署

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 在项目目录下运行
cd /Users/unipus/Documents/Cursor-StudyData
vercel

# 3. 按照提示操作
# - 登录 Vercel 账号
# - 确认项目设置
# - 部署完成
```

### 优点
- ✅ 完全免费（个人项目）
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 自动部署（Git 推送触发）
- ✅ 零配置

---

## 方案二：Netlify

Netlify 也是很好的选择，功能类似 Vercel。

### 方法A：通过 Netlify 网站部署

1. **访问 Netlify**
   - 打开 https://www.netlify.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add new site" → "Import an existing project"
   - 选择你的代码仓库

3. **配置构建设置**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **部署**
   - 点击 "Deploy site"
   - 等待部署完成

### 方法B：通过 Netlify CLI 部署

```bash
# 1. 安装 Netlify CLI
npm i -g netlify-cli

# 2. 在项目目录下运行
cd /Users/unipus/Documents/Cursor-StudyData
netlify deploy --prod

# 3. 按照提示操作
```

### 优点
- ✅ 完全免费
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 支持表单处理等功能

---

## 方案三：GitHub Pages

适合开源项目，完全免费但需要一些配置。

### 部署步骤

1. **安装 gh-pages 包**
```bash
npm install --save-dev gh-pages
```

2. **修改 package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **修改 vite.config.ts**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // 替换为你的仓库名
})
```

4. **推送到 GitHub**
```bash
git add .
git commit -m "准备部署"
git push origin main
```

5. **部署**
```bash
npm run deploy
```

6. **启用 GitHub Pages**
   - 在 GitHub 仓库设置中
   - 找到 "Pages" 选项
   - 选择 `gh-pages` 分支
   - 访问 `https://your-username.github.io/your-repo-name/`

### 优点
- ✅ 完全免费
- ✅ 与 GitHub 集成
- ⚠️ 需要手动配置 base 路径

---

## 方案四：Cloudflare Pages

Cloudflare 提供强大的 CDN 和免费托管。

### 部署步骤

1. **访问 Cloudflare Pages**
   - 打开 https://pages.cloudflare.com
   - 使用账号登录

2. **连接 GitHub 仓库**
   - 点击 "Create a project"
   - 选择你的仓库

3. **配置构建**
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

4. **部署**
   - 点击 "Save and Deploy"

### 优点
- ✅ 完全免费
- ✅ 强大的 CDN
- ✅ 全球加速

---

## 快速对比

| 方案 | 难度 | 免费额度 | 自动部署 | 推荐度 |
|------|------|----------|----------|--------|
| Vercel | ⭐ 最简单 | 无限 | ✅ | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐⭐ 简单 | 100GB/月 | ✅ | ⭐⭐⭐⭐ |
| GitHub Pages | ⭐⭐⭐ 中等 | 无限 | ⚠️ 需配置 | ⭐⭐⭐ |
| Cloudflare Pages | ⭐⭐ 简单 | 无限 | ✅ | ⭐⭐⭐⭐ |

---

## 推荐流程

### 最简单的方式（5分钟）：

1. **将代码推送到 GitHub**
```bash
# 如果还没有 Git 仓库
git init
git add .
git commit -m "Initial commit"

# 在 GitHub 创建新仓库，然后：
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

2. **使用 Vercel 部署**
   - 访问 https://vercel.com
   - 导入 GitHub 仓库
   - 点击部署
   - 完成！

### 部署前检查清单

- [ ] 确保 `npm run build` 可以成功构建
- [ ] 确保代码已推送到 Git 仓库
- [ ] 检查 `.gitignore` 是否正确（应该忽略 `node_modules` 和 `dist`）

---

## 常见问题

### Q: 部署后页面空白？
A: 检查 `vite.config.ts` 中的 `base` 配置，确保路径正确。

### Q: 路由404错误？
A: 确保配置了重定向规则（Vercel 和 Netlify 会自动处理，GitHub Pages 需要额外配置）。

### Q: 构建失败？
A: 检查构建日志，通常是依赖问题，确保 `package.json` 中的依赖都正确。

### Q: 如何更新部署？
A: 
- Vercel/Netlify: 推送到 Git 会自动部署
- GitHub Pages: 运行 `npm run deploy`

---

## 下一步

部署完成后，你可以：
- 配置自定义域名
- 设置环境变量
- 配置 CI/CD 流程
- 添加分析工具（如 Google Analytics）

