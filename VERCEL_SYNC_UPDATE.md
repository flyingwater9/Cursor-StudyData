# Vercel 同步更新指南

## 🎯 两种情况

### 情况一：Vercel 已经连接了 GitHub 仓库（自动部署）

如果你已经按照之前的步骤在 Vercel 中导入了 GitHub 仓库，那么：

✅ **自动部署已启用** - 每次推送到 GitHub，Vercel 会自动重新部署

#### 验证自动部署是否工作：

1. **检查 Vercel 项目设置**：
   - 登录 Vercel：https://vercel.com
   - 进入你的项目（Cursor-StudyData）
   - 点击 **"Settings"** → **"Git"**
   - 确认 **"Production Branch"** 是 `main`
   - 确认已连接 GitHub 仓库

2. **查看部署历史**：
   - 在 Vercel 项目页面，点击 **"Deployments"** 标签
   - 应该能看到每次推送后的自动部署记录
   - 最新的部署应该对应你刚才的提交

3. **如果自动部署没有触发**：
   - 检查 GitHub 仓库是否正确连接
   - 检查 Production Branch 设置
   - 手动触发部署（见下方）

### 情况二：Vercel 还没有连接 GitHub（需要首次部署）

如果还没有在 Vercel 中部署，按照以下步骤：

## 🚀 首次部署到 Vercel

### 步骤 1：登录 Vercel

1. 访问：https://vercel.com
2. 使用 GitHub 账号登录

### 步骤 2：导入项目

1. 点击 **"Add New Project"** 或 **"Import Project"**
2. 在仓库列表中找到 **"Cursor-StudyData"**
3. 点击 **"Import"**

### 步骤 3：配置项目

Vercel 会自动检测到 Vite 项目，确认以下设置：

- **Framework Preset**: `Vite` ✅
- **Root Directory**: `./` ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

### 步骤 4：部署

1. 点击 **"Deploy"** 按钮
2. 等待 1-3 分钟
3. 部署完成后会显示网站 URL

### 步骤 5：启用自动部署

部署完成后，自动部署已经启用：
- ✅ 每次推送到 `main` 分支，Vercel 会自动重新部署
- ✅ 每次部署都会生成新的 URL（用于预览）
- ✅ 生产环境使用主 URL

## 🔄 手动触发部署（如果需要）

### 方法一：在 Vercel 中手动触发

1. 登录 Vercel：https://vercel.com
2. 进入你的项目
3. 点击 **"Deployments"** 标签
4. 点击右上角的 **"Redeploy"** 按钮
5. 选择要重新部署的版本
6. 点击 **"Redeploy"**

### 方法二：通过 GitHub 触发

1. 在 GitHub 上，进入你的仓库
2. 点击 **"Actions"** 标签（如果有）
3. 或者直接推送一个新提交：
   ```bash
   # 做一个小的更改
   echo "# Updated" >> README.md
   git add README.md
   git commit -m "Trigger Vercel deployment"
   git push origin main
   ```

## 📊 查看部署状态

### 在 Vercel 中查看：

1. **部署列表**：
   - 项目页面 → **"Deployments"** 标签
   - 可以看到所有部署历史
   - 每个部署显示：时间、状态、提交信息

2. **构建日志**：
   - 点击任意部署
   - 查看 **"Build Logs"**
   - 可以看到详细的构建过程

3. **部署状态**：
   - ✅ **Ready** - 部署成功
   - ⏳ **Building** - 正在构建
   - ❌ **Error** - 部署失败（查看日志）

### 在 GitHub 中查看：

1. 进入仓库：https://github.com/flyingwater9/Cursor-StudyData
2. 查看提交历史
3. 每个提交应该对应一个 Vercel 部署

## 🔍 验证更新是否生效

### 方法一：检查 Vercel 部署

1. 登录 Vercel
2. 查看最新的部署时间
3. 应该对应你最近的提交时间

### 方法二：检查网站内容

1. 访问你的 Vercel 网站 URL
2. 检查新文件是否出现（比如 `index2.html`）
3. 如果使用缓存，可能需要强制刷新（`Cmd+Shift+R`）

### 方法三：查看构建日志

1. 在 Vercel 中打开最新的部署
2. 查看构建日志
3. 确认所有文件都被构建

## ⚙️ 配置自动部署

### 确保自动部署已启用：

1. **Vercel 项目设置**：
   - Settings → Git
   - 确认 **"Production Branch"** 是 `main`
   - 确认 **"Auto-deploy"** 已启用

2. **GitHub 集成**：
   - Settings → Git → Connected Git Repository
   - 确认仓库已连接
   - 确认分支是 `main`

## 🆘 常见问题

### Q: 推送后 Vercel 没有自动部署？

**检查**：
1. 确认 Vercel 已连接 GitHub 仓库
2. 确认推送到的是 `main` 分支
3. 检查 Vercel 项目设置中的 Production Branch
4. 查看 Vercel 的部署日志

**解决**：
- 手动触发部署
- 或者重新连接 GitHub 仓库

### Q: 部署失败怎么办？

**检查构建日志**：
1. 在 Vercel 中打开失败的部署
2. 查看 Build Logs
3. 找到错误信息

**常见错误**：
- 依赖安装失败：检查 `package.json`
- 构建错误：检查代码是否有错误
- 路径错误：确认 Output Directory 是 `dist`

### Q: 如何回滚到之前的版本？

1. 在 Vercel 的 Deployments 页面
2. 找到之前的成功部署
3. 点击右侧的 **"..."** 菜单
4. 选择 **"Promote to Production"**

### Q: 如何查看部署的详细信息？

1. 点击任意部署
2. 查看：
   - Build Logs（构建日志）
   - Runtime Logs（运行日志）
   - Source（源代码信息）

## ✅ 快速检查清单

- [ ] Vercel 已连接 GitHub 仓库
- [ ] Production Branch 设置为 `main`
- [ ] 自动部署已启用
- [ ] 代码已推送到 GitHub
- [ ] Vercel 显示新的部署
- [ ] 网站内容已更新

## 🎯 当前状态检查

运行以下命令检查：

```bash
# 1. 检查本地提交
git log --oneline -3

# 2. 检查是否已推送
git log origin/main..HEAD --oneline

# 3. 如果没有输出，说明已全部推送
```

## 💡 最佳实践

1. **每次推送后检查 Vercel**：
   - 确认自动部署已触发
   - 查看部署状态

2. **使用预览部署**：
   - 每次提交都有预览链接
   - 可以在合并前测试

3. **监控部署**：
   - 设置通知（邮件/Slack）
   - 及时发现问题

## 🎉 完成！

现在你的工作流程是：

1. ✅ 在本地开发
2. ✅ 提交到本地 Git
3. ✅ 推送到 GitHub
4. ✅ Vercel 自动部署（或手动触发）
5. ✅ 网站自动更新

所有新提交的文件都会自动同步到 Vercel！

