# 快速解决方案：在 Cursor 中输入 Token

## ✅ 已完成的配置

- ✅ 远程 URL 已修改为包含用户名：`https://flyingwater9@github.com/...`
- ✅ 现在只需要输入 Token（作为密码）

## 🎯 现在在 Cursor 中操作

### 方法一：使用 Source Control 面板

1. **打开 Source Control**：
   - 按 `Cmd+Shift+G`

2. **点击推送**：
   - 点击 "Sync Changes" 按钮
   - 或点击 "..." → "Push"

3. **输入 Token**：
   - 如果弹出对话框，在 **"密码"** 字段输入你的 Token
   - Token 格式：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 方法二：使用集成终端（推荐，更可靠）

如果 Source Control 面板没有弹出输入框，使用终端：

1. **打开集成终端**：
   - 按 `` Ctrl+` `` 或 `Cmd+` (反引号)
   - 或：菜单栏 → Terminal → New Terminal

2. **运行推送命令**：
   ```bash
   git push origin main
   ```

3. **输入凭证**：
   - 会提示：`Password for 'https://flyingwater9@github.com':`
   - **输入你的 Token**（不是密码！）
   - 注意：输入时不会显示字符（安全机制）
   - 输入完成后按回车

4. **完成推送**

## 🔑 如果还没有 Token

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 生成并复制 Token

## 📝 重要提示

- ✅ URL 中已包含用户名 `flyingwater9`
- ✅ 只需要输入 Token（作为密码）
- ✅ Token 格式：`ghp_` 开头的长字符串
- ❌ 不要输入 GitHub 账号密码

## 🆘 如果终端也没有提示输入

尝试以下命令强制清除并重新输入：

```bash
# 清除可能缓存的凭证
git credential-cache exit 2>/dev/null
rm -f ~/.git-credentials

# 然后推送
git push origin main
```

## ✅ 验证

推送成功后：
- 终端显示：`To https://github.com/...`
- Source Control 面板显示：`✓ 同步`
- GitHub 上可以看到你的代码

