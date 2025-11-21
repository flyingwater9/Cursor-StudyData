# Vercel 部署详细步骤指南

## 📋 准备工作

✅ 代码已推送到 GitHub：`https://github.com/flyingwater9/Cursor-StudyData`
✅ 项目已配置好构建脚本
✅ 所有文件已准备就绪

## 🚀 第一步：访问 Vercel 并登录

### 1.1 打开 Vercel 网站

在浏览器中打开：**https://vercel.com**

### 1.2 注册/登录账号

- 点击右上角的 **"Sign Up"** 或 **"Log In"**
- **推荐使用 GitHub 账号登录**（最简单）：
  - 点击 **"Continue with GitHub"**
  - 授权 Vercel 访问你的 GitHub 账号
  - 完成登录

## 📦 第二步：导入项目

### 2.1 创建新项目

登录后，你会看到 Vercel 的仪表板：
- 点击 **"Add New Project"** 按钮
- 或者点击 **"Import Project"**

### 2.2 选择 GitHub 仓库

1. 在仓库列表中，找到 **"Cursor-StudyData"**
2. 点击仓库名称或旁边的 **"Import"** 按钮

### 2.3 配置项目设置

Vercel 会自动检测到这是一个 Vite 项目，但我们需要确认配置：

#### Framework Preset（框架预设）
- 应该自动显示：**"Vite"**
- 如果没有，手动选择 **"Vite"**

#### Root Directory（根目录）
- 保持默认：**`./`**（项目在仓库根目录）

#### Build and Output Settings（构建和输出设置）

点击 **"Override"** 展开详细设置，确认：

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

（这些通常会自动填充，确认即可）

#### Environment Variables（环境变量）
- 当前项目不需要环境变量，跳过即可

### 2.4 项目名称

- **Project Name**: `cursor-studydata` 或 `english-learning-dashboard`（可以自定义）
- **可以保持默认**，Vercel 会自动使用仓库名

## 🎯 第三步：部署

### 3.1 开始部署

1. 确认所有设置正确
2. 点击页面底部的 **"Deploy"** 按钮

### 3.2 等待构建

- Vercel 会开始构建你的项目
- 你可以看到实时的构建日志
- 通常需要 **1-3 分钟**

构建过程会显示：
```
Cloning repository...
Installing dependencies...
Building...
```

### 3.3 部署完成

构建完成后，你会看到：
- ✅ **"Congratulations!"** 消息
- 你的网站 URL（例如：`cursor-studydata.vercel.app`）

## 🌐 第四步：访问你的网站

### 4.1 获取网站地址

部署完成后，你会看到：
- **Production URL**: `https://cursor-studydata.vercel.app`
- 点击这个链接即可访问你的网站

### 4.2 测试网站

1. 打开网站链接
2. 检查所有功能是否正常：
   - 筛选器是否工作
   - 图表是否显示
   - 日历热力图是否正常
   - 数据是否正确加载

## 🔄 第五步：自动部署（已自动配置）

### 5.1 自动部署功能

Vercel 已经自动配置了：
- ✅ 每次推送到 GitHub 的 `main` 分支，会自动重新部署
- ✅ 每次部署都会生成一个新的 URL（用于预览）
- ✅ 生产环境使用主 URL

### 5.2 测试自动部署

1. 在本地修改一个文件（比如 README.md）
2. 提交并推送：
   ```bash
   git add .
   git commit -m "Test auto deployment"
   git push origin main
   ```
3. 在 Vercel 仪表板中，你会看到新的部署自动开始

## ⚙️ 第六步：自定义域名（可选）

### 6.1 添加自定义域名

如果你想使用自己的域名：

1. 在 Vercel 项目页面，点击 **"Settings"**
2. 选择 **"Domains"**
3. 输入你的域名（例如：`dashboard.yourdomain.com`）
4. 按照提示配置 DNS 记录

### 6.2 DNS 配置

Vercel 会提供 DNS 记录，在你的域名注册商处添加：
- **CNAME 记录** 或 **A 记录**
- 按照 Vercel 的提示配置即可

## 📊 第七步：查看部署状态

### 7.1 Vercel 仪表板

在 Vercel 仪表板中，你可以：
- 查看所有部署历史
- 查看构建日志
- 查看性能指标
- 管理环境变量
- 查看分析数据

### 7.2 部署信息

每个部署会显示：
- 部署时间
- 构建状态（成功/失败）
- 部署 URL
- Git 提交信息

## 🎨 功能特性

部署后，你的网站拥有：

- ✅ **全球 CDN 加速**：访问速度快
- ✅ **自动 HTTPS**：安全可靠
- ✅ **自动部署**：Git 推送自动更新
- ✅ **预览部署**：每次提交都有预览链接
- ✅ **性能监控**：可以查看访问统计

## 🆘 常见问题

### Q: 构建失败怎么办？

**检查**：
1. 查看构建日志中的错误信息
2. 确认 `package.json` 中的脚本正确
3. 确认所有依赖都已安装

**常见错误**：
- 依赖安装失败：检查 `package.json`
- 构建错误：检查代码是否有语法错误
- 路径错误：确认 `Output Directory` 是 `dist`

### Q: 网站显示空白？

**检查**：
1. 打开浏览器开发者工具（F12）
2. 查看 Console 是否有错误
3. 检查 Network 标签，看资源是否加载成功

**可能原因**：
- 构建输出目录错误
- 路由配置问题
- 资源路径问题

### Q: 如何回滚到之前的版本？

1. 在 Vercel 仪表板中，找到之前的部署
2. 点击部署右侧的 **"..."** 菜单
3. 选择 **"Promote to Production"**

### Q: 如何查看构建日志？

1. 在 Vercel 项目页面
2. 点击 **"Deployments"** 标签
3. 点击任意部署
4. 查看 **"Build Logs"**

## ✅ 部署检查清单

- [ ] 已登录 Vercel
- [ ] 已导入 GitHub 仓库
- [ ] 已确认构建配置（Vite, dist, npm run build）
- [ ] 已点击 Deploy
- [ ] 构建成功完成
- [ ] 网站可以正常访问
- [ ] 所有功能测试正常

## 🎉 完成！

部署完成后，你的英语学习数据看板就已经在线了！

**网站地址**：`https://你的项目名.vercel.app`

可以分享给其他人使用了！

---

## 📝 快速参考

- **Vercel 网站**：https://vercel.com
- **你的 GitHub 仓库**：https://github.com/flyingwater9/Cursor-StudyData
- **Vercel 文档**：https://vercel.com/docs


