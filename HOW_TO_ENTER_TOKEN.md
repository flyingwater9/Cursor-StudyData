# 在 Cursor 中输入 GitHub Token 的步骤

## ✅ 已完成的配置

- ✅ Git 用户名：`flyingwater9`
- ✅ 凭证存储：已禁用（不会自动保存）

## 📍 在 Cursor 中输入 Token 的位置

### 方法一：通过 Source Control 面板（推荐）

#### 步骤 1：打开 Source Control 面板

- **快捷键**：按 `Cmd+Shift+G` (Mac) 或 `Ctrl+Shift+G` (Windows)
- **或者**：点击左侧边栏的源代码管理图标（分支图标）

#### 步骤 2：点击推送按钮

在 Source Control 面板中：
1. 查看底部状态，会显示 `↑ 2`（表示有提交需要推送）
2. 点击 **"Sync Changes"** 按钮（带上下箭头）
   - 或者点击 **"..."** 菜单 → 选择 **"Push"**

#### 步骤 3：输入凭证（关键步骤）

**会弹出认证对话框**，通常有两种情况：

##### 情况 A：弹出系统认证对话框

如果弹出 macOS 的认证对话框：
1. **用户名**：输入 `flyingwater9`
2. **密码**：**粘贴你的 Personal Access Token**（不是密码！）
   - Token 格式类似：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
3. 点击 "确定" 或 "OK"

##### 情况 B：Cursor 内置认证对话框

如果显示 Cursor 的认证对话框：
1. 在输入框中输入：
   - 格式：`flyingwater9:你的token`
   - 例如：`flyingwater9:ghp_xxxxxxxxxxxxxxxxxxxx`
2. 或者分别输入：
   - Username: `flyingwater9`
   - Password: `你的token`

#### 步骤 4：完成推送

输入后，Cursor 会开始推送代码到 GitHub。

---

### 方法二：通过命令面板

1. **打开命令面板**：
   - 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows)

2. **执行推送命令**：
   - 输入 `Git: Push` 并选择
   - 或者输入 `Git: Sync` 并选择

3. **输入凭证**：
   - 会弹出同样的认证对话框
   - 按照上面的步骤输入 token

---

### 方法三：通过状态栏

1. **查看状态栏**：
   - 在 Cursor 底部状态栏，会显示 `↑ 2` 或类似信息

2. **点击状态栏**：
   - 点击状态栏的同步图标或分支名
   - 选择 "Push" 或 "Sync"

3. **输入凭证**：
   - 按照上面的步骤输入 token

---

## 🔑 如何生成 Token

如果还没有 Token，按以下步骤生成：

1. **访问 GitHub Token 页面**：
   - https://github.com/settings/tokens
   - 或：GitHub → 头像 → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **生成新 Token**：
   - 点击 "Generate new token" → "Generate new token (classic)"
   - Note（名称）：`Cursor Git Access`
   - Expiration（过期时间）：选择 "90 days" 或 "No expiration"
   - **勾选权限**：`repo`（完整仓库访问权限）
   - 点击 "Generate token"

3. **复制 Token**：
   - **重要**：Token 只显示一次，立即复制！
   - Token 格式：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## 📝 输入 Token 的注意事项

### ✅ 正确做法

- ✅ 用户名输入：`flyingwater9`
- ✅ 密码输入：粘贴完整的 Token（从 `ghp_` 开始）
- ✅ Token 格式：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### ❌ 常见错误

- ❌ 不要输入 GitHub 账号密码
- ❌ 不要输入不完整的 Token
- ❌ 不要有空格或换行

---

## 🎯 完整操作流程示例

### 1. 生成 Token（一次性）

```
访问：https://github.com/settings/tokens
→ Generate new token (classic)
→ 勾选 repo 权限
→ Generate
→ 复制 Token
```

### 2. 在 Cursor 中推送

```
1. 按 Cmd+Shift+G 打开 Source Control
2. 点击 "Sync Changes" 按钮
3. 弹出对话框时：
   - Username: flyingwater9
   - Password: 粘贴你的 Token
4. 点击确定
5. 等待推送完成
```

---

## 🔍 如果没看到认证对话框

如果点击推送后没有弹出认证对话框，可能是：

1. **已经保存了凭证**：
   - 检查 macOS 钥匙串中是否有保存
   - 或者删除已保存的凭证后重试

2. **使用命令行测试**：
   ```bash
   git push origin main
   ```
   - 这会强制弹出认证对话框

3. **清除已保存的凭证**：
   ```bash
   # 查看钥匙串中的凭证
   security find-internet-password -s github.com
   
   # 删除（如果需要）
   security delete-internet-password -s github.com
   ```

---

## ✅ 验证配置

推送成功后，你可以：

1. **在 GitHub 查看**：
   - 访问：https://github.com/flyingwater9/Cursor-StudyData
   - 应该能看到你的代码

2. **在 Cursor 中查看**：
   - Source Control 面板底部应该显示 `✓ 同步`
   - 状态栏不再显示 `↑`

---

## 🆘 遇到问题？

### Q: 提示 "Authentication failed"
- 检查 Token 是否完整复制
- 确认 Token 没有过期
- 确认勾选了 `repo` 权限

### Q: 没有弹出认证对话框
- 尝试使用命令行：`git push origin main`
- 检查是否有已保存的凭证

### Q: Token 在哪里输入？
- 在认证对话框的 **"密码"** 字段输入 Token
- 不是输入 GitHub 账号密码

### Q: 每次都要输入吗？
- 是的，因为已禁用自动保存
- 如果希望自动保存，可以重新启用钥匙串

---

## 💡 提示

- Token 相当于密码，请妥善保管
- 不要将 Token 提交到代码仓库
- 如果 Token 泄露，立即在 GitHub 中撤销
- 建议定期更新 Token

