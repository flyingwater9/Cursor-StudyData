# 如何在 Cursor 中配置 Git 设置

## 📍 方法一：通过设置界面（图形化）

### 步骤 1：打开设置

有两种方式：

**方式 A：快捷键**
- Mac: 按 `Cmd+,`（Command + 逗号）
- Windows/Linux: 按 `Ctrl+,`

**方式 B：菜单栏**
- Mac: 菜单栏 → **Cursor** → **Settings...**
- Windows/Linux: 菜单栏 → **File** → **Preferences** → **Settings**

### 步骤 2：搜索 Git 设置

在设置页面的**顶部搜索框**中输入：

```
git.useIntegratedTerminal
```

或者直接搜索：

```
git terminal
```

### 步骤 3：找到并勾选设置

在搜索结果中，找到：

**"Git: Use Integrated Terminal"**

- 点击旁边的**复选框**，确保已勾选 ✅
- 这个设置让 Git 命令在集成终端中执行，而不是在后台

### 步骤 4：搜索其他相关设置（可选）

继续在搜索框中输入：

```
git.terminalAuthentication
```

找到：

**"Git: Terminal Authentication"**

- 如果存在，也勾选 ✅
- 这个设置允许在终端中进行认证

### 步骤 5：确认 Git 已启用

搜索：

```
git.enabled
```

找到：

**"Git: Enabled"**

- 确保已勾选 ✅

## 📍 方法二：通过 settings.json 文件（直接编辑）

### 步骤 1：打开用户设置文件

1. 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows/Linux) 打开命令面板
2. 输入：`Preferences: Open User Settings (JSON)`
3. 选择并回车

### 步骤 2：添加配置

在打开的 JSON 文件中，添加以下配置：

```json
{
  "git.enabled": true,
  "git.useIntegratedTerminal": true,
  "git.terminalAuthentication": true
}
```

**注意**：
- 如果文件中已有其他配置，在最后一个配置项后面加逗号
- 确保 JSON 格式正确（大括号、引号等）

### 步骤 3：保存文件

- 按 `Cmd+S` (Mac) 或 `Ctrl+S` (Windows/Linux) 保存

## 📍 方法三：通过命令面板快速打开

1. 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows/Linux)
2. 输入：`Preferences: Open Settings (UI)`
3. 选择并回车
4. 在搜索框中输入 `git.useIntegratedTerminal`
5. 勾选该选项

## 🎯 具体操作步骤（推荐方法一）

### 详细步骤：

1. **打开设置**
   ```
   Mac: Cmd + ,
   Windows: Ctrl + ,
   ```

2. **在顶部搜索框输入**
   ```
   git.useIntegratedTerminal
   ```

3. **找到设置项**
   - 在搜索结果中，你会看到 "Git: Use Integrated Terminal"
   - 它可能显示为：
     ```
     ☐ Git: Use Integrated Terminal
     ```
   - 点击复选框，变成：
     ```
     ☑ Git: Use Integrated Terminal
     ```

4. **保存并重启**
   - 设置会自动保存
   - 重启 Cursor 让配置生效

## 📸 设置界面位置说明

设置界面通常分为两部分：

**左侧**：设置分类（如 Editor, Git, Terminal 等）
**右侧**：具体设置项和搜索框

**顶部**：有一个搜索框，在这里输入 `git.useIntegratedTerminal`

## 🔍 如果找不到这个设置

### 可能的原因：

1. **Cursor 版本较旧**
   - 更新到最新版本
   - 菜单栏 → Help → Check for Updates

2. **设置名称不同**
   - 尝试搜索：`git terminal`
   - 或搜索：`integrated terminal`

3. **使用 settings.json 方式**
   - 如果 UI 中找不到，使用方法二（直接编辑 JSON）

## ✅ 配置完成后的验证

配置完成后：

1. **重启 Cursor**（重要！）
   - 完全退出：`Cmd+Q` (Mac) 或 `Alt+F4` (Windows)
   - 重新打开

2. **测试 Git 功能**
   - 打开 Source Control 面板（`Cmd+Shift+G`）
   - 应该能看到 Git 状态
   - 尝试提交和推送

## 📝 完整的 Git 相关设置列表

如果你想配置更多 Git 设置，可以搜索以下关键词：

- `git.enabled` - 启用/禁用 Git
- `git.path` - Git 可执行文件路径
- `git.useIntegratedTerminal` - 使用集成终端
- `git.terminalAuthentication` - 终端认证
- `git.useEditorAsCommitInput` - 使用编辑器输入提交信息
- `git.autofetch` - 自动获取更新

## 🆘 遇到问题？

### Q: 设置界面打不开？

**解决**：
- 尝试使用快捷键：`Cmd+,` 或 `Ctrl+,`
- 或通过菜单栏打开

### Q: 搜索不到设置？

**解决**：
- 尝试直接编辑 settings.json（方法二）
- 或搜索更简单的关键词：`git terminal`

### Q: 设置保存后不生效？

**解决**：
- 重启 Cursor
- 检查 JSON 格式是否正确（如果有语法错误会提示）

## 💡 提示

- **设置会自动保存**：修改后立即生效（但可能需要重启 Cursor）
- **JSON 格式要正确**：如果手动编辑 JSON，注意逗号、引号等
- **重启很重要**：很多 Git 相关设置需要重启才能生效

