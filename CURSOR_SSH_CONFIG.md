# 在 Cursor 中配置 SSH 连接

## ✅ 当前状态

- ✅ 远程 URL 已配置为 SSH：`git@github.com:flyingwater9/Cursor-StudyData.git`
- ✅ SSH 密钥已生成并添加到 GitHub
- ✅ 命令行 SSH 连接测试成功

## 🔧 在 Cursor 中配置 SSH

### 方法一：通过 Cursor 设置配置（推荐）

#### 步骤 1：打开 Cursor 设置

1. 按 `Cmd+,` (Mac) 或 `Ctrl+,` (Windows) 打开设置
2. 或者：菜单栏 → Cursor → Settings (Mac) / File → Preferences → Settings (Windows)

#### 步骤 2：搜索 Git 相关设置

在设置搜索框中输入：`git`

找到以下设置项并确认：

- **Git: Enabled** - 确保已勾选 ✅
- **Git: Path** - 确认 Git 路径（通常是 `/usr/bin/git` 或自动检测）
- **Git: Use Editor As Commit Input** - 可以勾选（使用编辑器输入提交信息）

#### 步骤 3：配置 SSH

在设置中搜索：`ssh`

找到或添加以下设置：

- **Git: Use Integrated Terminal** - 可以勾选（使用集成终端执行 Git 命令）

### 方法二：通过 settings.json 配置

#### 步骤 1：打开用户设置文件

1. 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows) 打开命令面板
2. 输入：`Preferences: Open User Settings (JSON)`
3. 选择并打开

#### 步骤 2：添加 Git 配置

在 JSON 文件中添加以下配置：

```json
{
  "git.enabled": true,
  "git.path": "/usr/bin/git",
  "git.useEditorAsCommitInput": true,
  "git.useIntegratedTerminal": true,
  "git.terminalAuthentication": true
}
```

保存文件（`Cmd+S` 或 `Ctrl+S`）

### 方法三：确保 SSH 密钥在正确位置

#### 检查 SSH 密钥

在终端运行：

```bash
ls -la ~/.ssh/
```

应该看到：
- `id_ed25519` (私钥)
- `id_ed25519.pub` (公钥)

#### 检查 SSH 配置（可选）

创建或编辑 `~/.ssh/config` 文件：

```bash
nano ~/.ssh/config
```

添加以下内容：

```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
```

保存并退出（`Ctrl+X`，然后 `Y`，然后回车）

### 方法四：重启 Cursor

配置完成后：

1. **完全关闭 Cursor**（不是最小化）
2. **重新打开 Cursor**
3. **重新打开项目**

这会让 Cursor 重新加载所有 Git 配置。

## 🧪 测试 Cursor 中的 Git

### 测试 1：检查 Git 状态

1. 打开 Source Control 面板（`Cmd+Shift+G`）
2. 应该能看到文件状态和分支信息

### 测试 2：尝试提交

1. 修改一个文件（比如 README.md）
2. 在 Source Control 面板中：
   - 文件旁边会出现 `+` 号
   - 点击 `+` 暂存文件
   - 输入提交信息
   - 点击提交按钮（✓）

### 测试 3：尝试推送

1. 提交后，点击 "Sync Changes" 或 "Push"
2. 应该能成功推送（不需要输入密码，因为使用 SSH）

## 🔍 如果仍然不工作

### 检查 1：验证 SSH 连接

在 Cursor 的集成终端中运行：

```bash
ssh -T git@github.com
```

应该显示：
```
Hi flyingwater9! You've successfully authenticated, but GitHub does not provide shell access.
```

### 检查 2：验证远程 URL

在 Cursor 的集成终端中运行：

```bash
git remote -v
```

应该显示：
```
origin	git@github.com:flyingwater9/Cursor-StudyData.git (fetch)
origin	git@github.com:flyingwater9/Cursor-StudyData.git (push)
```

如果不是 SSH 格式，运行：

```bash
git remote set-url origin git@github.com:flyingwater9/Cursor-StudyData.git
```

### 检查 3：检查 Git 配置

在终端运行：

```bash
git config --global --list | grep -E "(user|credential)"
```

应该看到：
```
user.name=flyingwater9
user.email=flyingwater.young@gmail.com
```

### 检查 4：清除 Cursor 的 Git 缓存

1. 关闭 Cursor
2. 删除 Cursor 的缓存（如果存在）：
   ```bash
   # macOS
   rm -rf ~/Library/Application\ Support/Cursor/Cache
   ```
3. 重新打开 Cursor

## 📝 完整配置检查清单

- [ ] 远程 URL 是 SSH 格式（`git@github.com:...`）
- [ ] SSH 密钥已添加到 GitHub
- [ ] SSH 连接测试成功（`ssh -T git@github.com`）
- [ ] Cursor 设置中 Git 已启用
- [ ] Git 路径配置正确
- [ ] 已重启 Cursor
- [ ] 在 Cursor 中可以看到 Git 状态

## 🆘 常见问题

### Q: Cursor 中仍然提示需要密码

**解决**：
1. 确认远程 URL 是 SSH 格式
2. 确认 SSH 密钥已添加到 GitHub
3. 在终端测试：`ssh -T git@github.com`
4. 重启 Cursor

### Q: Cursor 中看不到 Git 状态

**解决**：
1. 确认在 Git 仓库目录中
2. 检查 Cursor 设置中 Git 是否启用
3. 重新加载窗口：`Cmd+Shift+P` → `Developer: Reload Window`

### Q: 提交按钮是灰色的

**解决**：
1. 确保有文件更改
2. 确保文件已暂存（点击 `+` 号）
3. 确保输入了提交信息

### Q: 推送失败

**解决**：
1. 在终端运行 `git push origin main` 查看详细错误
2. 确认 SSH 连接正常
3. 确认有推送权限

## ✅ 快速修复命令

如果遇到问题，在 Cursor 的集成终端中运行：

```bash
# 1. 确认远程 URL
git remote set-url origin git@github.com:flyingwater9/Cursor-StudyData.git

# 2. 测试 SSH
ssh -T git@github.com

# 3. 测试推送
git push origin main
```

## 💡 提示

- Cursor 基于 VSCode，Git 配置方式类似
- SSH 方式不需要每次输入密码
- 如果命令行可以推送，Cursor GUI 也应该可以
- 重启 Cursor 通常能解决大部分问题


