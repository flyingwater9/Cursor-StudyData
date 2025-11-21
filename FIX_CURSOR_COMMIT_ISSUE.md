# 解决 Cursor GUI Commit 卡住问题

## 🔍 问题分析

Cursor GUI 提交时陷入长时间 loading，可能的原因：

1. **提交编辑器问题**：Cursor 尝试打开编辑器输入提交信息，但卡住了
2. **Git 钩子问题**：可能有 Git hooks 执行时间过长
3. **文件锁定问题**：某些文件被锁定或正在使用
4. **Cursor Git 扩展问题**：Cursor 的 Git 集成有问题

## ✅ 解决方案

### 方案一：禁用提交编辑器（推荐）

让 Cursor 使用简单的输入框而不是编辑器：

#### 步骤 1：打开设置

1. 按 `Cmd+,` 打开设置
2. 搜索：`git.useEditorAsCommitInput`
3. **取消勾选**（不要使用编辑器）

或者直接编辑 settings.json：

1. 按 `Cmd+Shift+P`
2. 输入：`Preferences: Open User Settings (JSON)`
3. 添加：
```json
{
  "git.useEditorAsCommitInput": false
}
```

这样 Cursor 会使用简单的输入框，而不是打开编辑器。

### 方案二：使用命令行提交（最可靠）

既然命令行可以正常工作，建议：

1. **在 Cursor 的集成终端中提交**：
   - 按 `` Ctrl+` `` 打开终端
   - 使用 Git 命令：
   ```bash
   git add .
   git commit -m "你的提交信息"
   git push origin main
   ```

2. **在 Source Control 面板中只用于查看状态**：
   - 查看哪些文件有更改
   - 暂存文件（点击 `+`）
   - 但提交使用命令行

### 方案三：配置 Git 使用简单编辑器

如果必须使用 GUI，配置 Git 使用更简单的编辑器：

```bash
# 使用 nano（简单编辑器）
git config --global core.editor "nano"

# 或者使用 vim
git config --global core.editor "vim"

# 或者完全禁用编辑器，使用命令行参数
git config --global core.editor ""
```

### 方案四：清除 Git 状态并重试

如果提交卡住了，可能需要清除状态：

```bash
# 检查是否有未完成的提交
git status

# 如果有问题，可以重置
git reset HEAD~1  # 撤销最后一次提交（如果还没推送）

# 或者清除暂存区
git reset
```

## 🎯 推荐工作流程

### 混合使用方式（最佳实践）

1. **使用 Cursor GUI 查看和暂存**：
   - 打开 Source Control 面板（`Cmd+Shift+G`）
   - 查看文件更改
   - 点击 `+` 暂存文件

2. **使用命令行提交和推送**：
   - 打开集成终端（`` Ctrl+` ``）
   - 运行：
   ```bash
   git commit -m "你的提交信息"
   git push origin main
   ```

这样既利用了 GUI 的便利性，又避免了提交卡住的问题。

## 🔧 快速修复命令

如果现在提交卡住了，运行：

```bash
# 1. 检查状态
git status

# 2. 如果有未完成的提交，完成它
git commit -m "你的提交信息"

# 3. 或者取消提交（如果还没完成）
# 按 Ctrl+C 中断，然后：
git reset
```

## 📝 配置 Cursor 使用命令行方式

### 方法 1：禁用提交编辑器

在 settings.json 中添加：

```json
{
  "git.useEditorAsCommitInput": false,
  "git.useIntegratedTerminal": true
}
```

### 方法 2：设置 Git 编辑器

```bash
# 使用系统默认编辑器
git config --global core.editor "open -a TextEdit"

# 或者使用 nano（更简单）
git config --global core.editor "nano"
```

## 🆘 如果提交一直卡住

### 立即处理：

1. **中断当前操作**：
   - 如果终端中有命令在运行，按 `Ctrl+C`
   - 关闭 Cursor 的提交对话框

2. **检查 Git 状态**：
   ```bash
   git status
   ```

3. **完成提交**（用命令行）：
   ```bash
   git commit -m "你的提交信息"
   ```

4. **如果还是有问题，重置**：
   ```bash
   git reset HEAD~1  # 撤销未完成的提交
   ```

## ✅ 验证修复

修复后测试：

1. **在 Cursor GUI 中**：
   - 暂存一个文件
   - 尝试提交（应该使用简单输入框，不会卡住）

2. **或者使用命令行**：
   - 在集成终端中提交
   - 应该能正常工作

## 💡 最佳实践建议

**推荐工作流程**：

1. ✅ 使用 Cursor GUI 查看文件更改和暂存
2. ✅ 使用命令行提交和推送（更可靠）
3. ✅ 如果 GUI 提交卡住，立即用命令行完成

这样既能享受 GUI 的便利，又能避免卡住的问题。

