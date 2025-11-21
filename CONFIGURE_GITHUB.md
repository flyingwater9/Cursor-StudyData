# 在 Cursor 中配置 GitHub 认证

## 📋 当前信息

- **远程仓库**: `https://github.com/flyingwater9/Cursor-StudyData.git`
- **GitHub 用户名**: `flyingwater9`（根据仓库推断）

## 🔧 配置步骤

### 步骤 1：配置 Git 基本信息

在 Cursor 中打开终端（`` Ctrl+` `` 或 `Cmd+`），运行：

```bash
# 设置用户名（已根据仓库推断）
git config --global user.name "flyingwater9"

# 设置邮箱（请替换为你的GitHub邮箱）
git config --global user.email "your-email@example.com"
```

**重要**：请将 `your-email@example.com` 替换为你的 GitHub 账号邮箱。

### 步骤 2：配置 GitHub 认证

GitHub 现在**不支持密码认证**，需要使用 **Personal Access Token**。

#### 方法 A：在 Cursor 中直接配置（推荐）

1. **生成 Personal Access Token**：
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token" → "Generate new token (classic)"
   - 设置名称：`Cursor Git Access`
   - 选择过期时间：建议选择 "90 days" 或 "No expiration"
   - **勾选权限**：`repo`（完整仓库访问权限）
   - 点击 "Generate token"
   - **重要**：复制生成的 token（格式类似：`ghp_xxxxxxxxxxxxxxxxxxxx`），只显示一次！

2. **在 Cursor 中使用 Token**：
   - 打开 Source Control 面板（`Cmd+Shift+G`）
   - 点击 "Sync Changes" 或 "Push"
   - 当提示输入凭证时：
     - **用户名**：输入 `flyingwater9`
     - **密码**：粘贴刚才复制的 **Token**（不是密码！）

3. **保存凭证**（macOS）：
   - Cursor 会自动将凭证保存到 macOS 钥匙串
   - 之后推送就不需要再输入了

#### 方法 B：使用 Cursor 设置界面

1. **打开设置**：
   - 按 `Cmd+,` 打开设置
   - 搜索 "git"

2. **配置 Git**：
   - 找到 "Git: Enabled" 确保已启用
   - 找到 "Git: Path" 确认 Git 路径正确

3. **配置认证**：
   - Cursor 会在首次推送时提示认证
   - 按照上面的方法 A 使用 Token

### 步骤 3：验证配置

在终端运行：

```bash
# 查看Git配置
git config --global --list

# 应该看到：
# user.name=flyingwater9
# user.email=your-email@example.com
```

## 🎯 快速配置命令

如果你想快速配置，可以在终端运行：

```bash
cd /Users/unipus/Documents/Cursor-StudyData

# 设置用户名
git config --global user.name "flyingwater9"

# 设置邮箱（请替换为你的邮箱）
git config --global user.email "你的GitHub邮箱"

# 配置macOS钥匙串存储凭证
git config --global credential.helper osxkeychain
```

## 📝 完整操作流程

### 1. 配置 Git 基本信息

```bash
git config --global user.name "flyingwater9"
git config --global user.email "你的邮箱@example.com"
```

### 2. 生成 GitHub Token

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 生成并复制 Token

### 3. 在 Cursor 中推送

1. 打开 Source Control（`Cmd+Shift+G`）
2. 点击 "Sync Changes"
3. 输入：
   - 用户名：`flyingwater9`
   - 密码：粘贴 Token
4. 完成！

## 🔐 Token 安全提示

- ✅ Token 相当于密码，请妥善保管
- ✅ 不要将 Token 提交到代码仓库
- ✅ 如果 Token 泄露，立即在 GitHub 设置中撤销
- ✅ 建议设置过期时间，定期更新

## 🆘 常见问题

### Q: 提示 "Authentication failed"
A: 确保使用的是 Token 而不是密码，Token 格式类似 `ghp_xxxxxxxxxxxx`

### Q: 每次都要输入密码
A: 确保配置了 `credential.helper`，macOS 会自动保存到钥匙串

### Q: 找不到 Token 在哪里
A: 访问：https://github.com/settings/tokens，在 "Personal access tokens" 下查看

### Q: Token 过期了怎么办
A: 生成新的 Token，在 Cursor 中重新认证

## ✅ 配置检查清单

- [ ] Git 用户名已设置
- [ ] Git 邮箱已设置
- [ ] 已生成 GitHub Personal Access Token
- [ ] 在 Cursor 中成功推送一次
- [ ] 凭证已保存（之后不需要再输入）

