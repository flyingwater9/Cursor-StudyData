# 在 Cursor 中使用 Git GUI 操作指南

## 📋 当前状态

✅ Git 仓库已初始化
✅ 代码已提交到本地
✅ 远程仓库已配置：`https://github.com/flyingwater9/Cursor-StudyData.git`

## 🎯 在 Cursor GUI 中操作步骤

### 方法一：使用 Source Control 面板（推荐）

#### 1. 打开 Source Control 面板

- **快捷键**：按 `Ctrl+Shift+G` (Windows/Linux) 或 `Cmd+Shift+G` (Mac)
- **或者**：点击左侧边栏的源代码管理图标（分支图标）
- **或者**：菜单栏 → View → Source Control

#### 2. 查看更改

在 Source Control 面板中，你会看到：
- **Changes**: 显示所有已修改但未暂存的文件
- **Staged Changes**: 显示已暂存准备提交的文件

#### 3. 提交代码

1. **暂存文件**（如果需要）：
   - 点击文件旁边的 `+` 号，将文件添加到暂存区
   - 或者点击 "Changes" 旁边的 `+` 号，暂存所有更改

2. **输入提交信息**：
   - 在顶部输入框输入提交信息，例如：`Add deployment configuration`

3. **提交**：
   - 点击输入框上方的 ✓ 图标（或按 `Ctrl+Enter` / `Cmd+Enter`）

#### 4. 推送到 GitHub

1. **查看同步状态**：
   - 在 Source Control 面板底部，会显示本地和远程的同步状态
   - 例如：`↑ 2` 表示有 2 个提交需要推送

2. **推送代码**：
   - 点击底部的 **"Sync Changes"** 按钮（带上下箭头）
   - 或者点击 **"..."** 菜单 → 选择 **"Push"**
   - 或者点击状态栏右下角的同步图标

3. **认证**：
   - 如果是第一次推送，Cursor 会提示你登录 GitHub
   - 选择使用浏览器登录或 Personal Access Token
   - 按照提示完成认证

### 方法二：使用命令面板

1. **打开命令面板**：
   - 快捷键：`Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (Mac)

2. **执行 Git 命令**：
   - 输入 `Git: Push` 并选择，推送到远程
   - 输入 `Git: Commit` 并选择，提交更改
   - 输入 `Git: Pull` 并选择，拉取远程更改

### 方法三：使用状态栏

在 Cursor 底部状态栏：
- 左侧会显示当前分支名（如：`main`）
- 右侧会显示同步状态（如：`↑ 2 ↓ 0` 表示需要推送 2 个提交）
- 点击状态栏可以快速执行 Git 操作

## 🔐 GitHub 认证设置

### 如果推送时提示需要认证：

#### 选项1：使用 Personal Access Token（推荐）

1. **生成 Token**：
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token" → "Generate new token (classic)"
   - 设置名称和过期时间
   - 勾选 `repo` 权限
   - 点击 "Generate token"
   - **复制生成的 token**（只显示一次）

2. **在 Cursor 中使用**：
   - 推送时，当提示输入密码时，粘贴 token 而不是密码
   - 用户名输入你的 GitHub 用户名

#### 选项2：使用 GitHub 账号登录

1. 推送时选择 "Sign in with GitHub"
2. 在浏览器中完成登录
3. 授权 Cursor 访问你的 GitHub 账号

#### 选项3：配置 SSH 密钥（一次性设置）

1. **生成 SSH 密钥**（如果还没有）：
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. **添加到 GitHub**：
   - 复制公钥：`cat ~/.ssh/id_ed25519.pub`
   - 访问：https://github.com/settings/keys
   - 点击 "New SSH key"，粘贴公钥

3. **修改远程仓库地址为 SSH**：
   - 在 Cursor 命令面板输入：`Git: Remote: Add`
   - 或者手动修改：`.git/config` 文件中的 URL 为 SSH 格式

## 📊 当前需要推送的内容

根据检查，你的本地仓库有以下提交需要推送：

1. `Initial commit: 英语学习学情数据看板` (4f47baa)
2. `Add deployment script` (85edfb2)

## ✅ 快速操作清单

- [ ] 打开 Source Control 面板（`Cmd+Shift+G`）
- [ ] 检查是否有未提交的更改
- [ ] 如果有，先提交更改
- [ ] 点击 "Sync Changes" 或 "Push" 按钮
- [ ] 完成 GitHub 认证（如果需要）
- [ ] 等待推送完成

## 🎉 推送成功后

推送成功后，你可以：
1. 在 GitHub 上查看代码：https://github.com/flyingwater9/Cursor-StudyData
2. 使用 Vercel 部署（参考 `QUICK_DEPLOY.md`）
3. 继续在 Cursor 中开发，每次提交后同步即可

## 💡 提示

- **自动同步**：可以在设置中开启自动推送（Settings → Git → Auto Push）
- **查看历史**：在 Source Control 面板点击提交记录可以查看历史
- **分支管理**：点击状态栏的分支名可以创建/切换分支
- **冲突解决**：如果有冲突，Cursor 会提供可视化工具解决

## 🆘 遇到问题？

- **认证失败**：尝试使用 Personal Access Token
- **推送被拒绝**：先拉取远程更改（Pull），解决冲突后再推送
- **找不到 Source Control**：检查是否在 Git 仓库目录中

