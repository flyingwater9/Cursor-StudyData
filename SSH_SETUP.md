# SSH 配置步骤

## ✅ 已完成

1. ✅ SSH 密钥已生成
2. ✅ 公钥已复制到剪贴板
3. ✅ 远程 URL 已修改为 SSH 格式

## 📋 下一步：将 SSH 公钥添加到 GitHub

### 你的 SSH 公钥（已复制到剪贴板）：

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHjnPBY7v554Joo4/P5xx/yqm0+5ynB02atTmNQO07Fg flyingwater.young@gmail.com
```

### 添加步骤：

1. **访问 GitHub SSH 设置页面**：
   - https://github.com/settings/keys
   - 或：GitHub → 头像 → Settings → SSH and GPG keys

2. **添加新密钥**：
   - 点击 "New SSH key" 按钮
   - Title（标题）：`Cursor MacBook` 或任意名称
   - Key（密钥）：**直接粘贴**（已在剪贴板中，按 Cmd+V）
   - 点击 "Add SSH key"

3. **确认**：
   - 可能需要输入 GitHub 密码确认

## 🧪 测试 SSH 连接

添加密钥后，在终端运行：

```bash
ssh -T git@github.com
```

如果成功，会显示：
```
Hi flyingwater9! You've successfully authenticated, but GitHub does not provide shell access.
```

## 🚀 推送代码

SSH 配置完成后，就可以推送了：

```bash
git push origin main
```

或者在 Cursor 的 Source Control 面板中点击 "Sync Changes"

## 📝 当前配置

- **远程 URL（SSH）**: `git@github.com:flyingwater9/Cursor-StudyData.git`
- **SSH 密钥**: `~/.ssh/id_ed25519`
- **公钥**: 已复制到剪贴板

## 🆘 如果遇到问题

### 问题：Permission denied (publickey)

**解决**：
1. 确认公钥已正确添加到 GitHub
2. 检查密钥权限：
   ```bash
   chmod 600 ~/.ssh/id_ed25519
   chmod 644 ~/.ssh/id_ed25519.pub
   ```

### 问题：Host key verification failed

**解决**：
```bash
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

### 问题：仍然无法连接

**解决**：
1. 检查网络连接
2. 确认 GitHub 可以访问
3. 尝试使用 HTTPS 方式（如果 SSH 不行）

## ✅ 完成检查清单

- [ ] SSH 公钥已添加到 GitHub
- [ ] SSH 连接测试成功
- [ ] 代码已成功推送到 GitHub

