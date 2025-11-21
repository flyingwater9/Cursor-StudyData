# Cursor GUI 使用 SSH 快速修复

## ✅ 已完成的配置

1. ✅ SSH 密钥已生成
2. ✅ SSH 密钥已添加到 GitHub
3. ✅ 远程 URL 已配置为 SSH 格式
4. ✅ SSH 配置文件已创建

## 🎯 在 Cursor 中操作（3步）

### 步骤 1：重启 Cursor

**重要**：完全关闭并重新打开 Cursor，让配置生效。

1. 退出 Cursor（`Cmd+Q` 或菜单栏 → Quit）
2. 重新打开 Cursor
3. 重新打开项目文件夹

### 步骤 2：检查 Source Control 面板

1. 按 `Cmd+Shift+G` 打开 Source Control 面板
2. 应该能看到：
   - 当前分支：`main`
   - 远程状态：`✓` 或显示同步状态

### 步骤 3：测试提交和推送

1. **修改一个文件**（比如在 README.md 中添加一行）
2. **在 Source Control 面板中**：
   - 文件旁边会出现 `M`（已修改）或 `U`（未跟踪）
   - 点击文件旁边的 `+` 号暂存文件
   - 在顶部输入框输入提交信息
   - 点击提交按钮（✓ 图标）
3. **推送**：
   - 点击 "Sync Changes" 按钮
   - 应该能成功推送，**不需要输入密码**（因为使用 SSH）

## 🔧 如果还是不工作

### 方法 A：在 Cursor 设置中配置

1. 按 `Cmd+,` 打开设置
2. 搜索：`git.useIntegratedTerminal`
3. 勾选：**"Git: Use Integrated Terminal"**
4. 搜索：`git.terminalAuthentication`
5. 勾选：**"Git: Terminal Authentication"**
6. 重启 Cursor

### 方法 B：使用命令面板

1. 按 `Cmd+Shift+P` 打开命令面板
2. 输入：`Git: Push`
3. 选择推送命令
4. 应该能成功（使用 SSH，不需要密码）

### 方法 C：检查 Git 路径

1. 按 `Cmd+,` 打开设置
2. 搜索：`git.path`
3. 确认路径是：`/usr/bin/git` 或自动检测

## 📋 验证清单

运行以下命令验证配置：

```bash
# 1. 检查远程 URL（应该是 SSH 格式）
git remote -v

# 2. 测试 SSH 连接
ssh -T git@github.com

# 3. 检查 Git 配置
git config --global user.name
git config --global user.email
```

## 🆘 如果遇到错误

### 错误：Permission denied

**解决**：
```bash
# 检查密钥权限
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/.ssh/id_ed25519.pub
```

### 错误：Host key verification failed

**解决**：
```bash
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

### 错误：仍然提示需要密码

**解决**：
1. 确认远程 URL 是 SSH 格式：
   ```bash
   git remote set-url origin git@github.com:flyingwater9/Cursor-StudyData.git
   ```
2. 重启 Cursor
3. 在 Cursor 设置中启用 "Git: Use Integrated Terminal"

## ✅ 成功标志

当一切正常时：
- ✅ Source Control 面板显示 Git 状态
- ✅ 可以正常提交（不需要输入密码）
- ✅ 可以正常推送（不需要输入密码）
- ✅ 推送后显示 "✓ 同步"

## 💡 提示

- **SSH 方式不需要密码**：如果还提示输入密码，说明没有使用 SSH
- **重启很重要**：配置更改后需要重启 Cursor
- **使用集成终端**：如果 GUI 不行，可以在集成终端中使用 Git 命令


