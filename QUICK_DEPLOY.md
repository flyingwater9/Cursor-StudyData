# 快速部署指南（5分钟搞定）

## 🚀 最简单的方法：使用 Vercel

### 步骤1：将代码推送到 GitHub（如果还没有）

```bash
# 在项目目录下执行
cd /Users/unipus/Documents/Cursor-StudyData

# 初始化 Git（如果还没有）
git init
git add .
git commit -m "准备部署"

# 在 GitHub 创建新仓库，然后连接
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

### 步骤2：使用 Vercel 部署

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 点击 "Sign Up" 或 "Log In"
   - 使用 GitHub 账号登录（推荐）

2. **导入项目**
   - 登录后，点击 "Add New Project"
   - 选择你的 GitHub 仓库
   - 点击 "Import"

3. **配置项目（通常自动检测）**
   - Framework Preset: **Vite**（自动检测）
   - Build Command: `npm run build`（自动填充）
   - Output Directory: `dist`（自动填充）
   - Install Command: `npm install`（自动填充）

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待 1-2 分钟
   - 部署完成后会显示你的网站 URL（如：`your-project.vercel.app`）

5. **完成！**
   - 现在你的网站已经在线了
   - 之后每次推送到 GitHub，Vercel 会自动重新部署

---

## 📱 其他快速部署方法

### Netlify（同样简单）

1. 访问 https://www.netlify.com
2. 使用 GitHub 登录
3. 点击 "Add new site" → "Import an existing project"
4. 选择你的仓库
5. 配置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 "Deploy site"

---

## ✅ 部署前检查

我已经帮你完成了以下检查：

- ✅ 构建测试通过（`npm run build` 成功）
- ✅ 创建了 `vercel.json` 配置文件
- ✅ 创建了 `netlify.toml` 配置文件
- ✅ 修复了所有 TypeScript 错误

---

## 🎉 部署后的功能

部署成功后，你的网站将拥有：

- ✅ 免费的 HTTPS 证书
- ✅ 全球 CDN 加速
- ✅ 自动部署（Git 推送触发）
- ✅ 自定义域名支持（可选）

---

## 💡 提示

- **Vercel 和 Netlify 都是完全免费的**（个人项目）
- **不需要服务器**，直接托管静态文件
- **自动 HTTPS**，安全可靠
- **全球 CDN**，访问速度快

---

## 🆘 遇到问题？

如果部署失败，检查：
1. 确保代码已推送到 GitHub
2. 确保 `package.json` 中的脚本正确
3. 查看部署日志中的错误信息

