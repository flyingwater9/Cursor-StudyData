#!/bin/bash

# Git配置脚本
# 用于配置Git用户名、邮箱和凭证存储

echo "=== Git配置向导 ==="
echo ""

# 检查是否已配置
CURRENT_NAME=$(git config --global user.name 2>/dev/null)
CURRENT_EMAIL=$(git config --global user.email 2>/dev/null)

if [ -n "$CURRENT_NAME" ] && [ -n "$CURRENT_EMAIL" ]; then
    echo "当前Git配置："
    echo "  用户名: $CURRENT_NAME"
    echo "  邮箱: $CURRENT_EMAIL"
    echo ""
    read -p "是否要修改配置？(y/n): " change
    if [ "$change" != "y" ]; then
        echo "保持当前配置"
        exit 0
    fi
fi

# 获取用户名
if [ -z "$CURRENT_NAME" ]; then
    read -p "请输入GitHub用户名: " GIT_USERNAME
    git config --global user.name "$GIT_USERNAME"
    echo "✅ 已设置用户名: $GIT_USERNAME"
else
    read -p "请输入GitHub用户名 [当前: $CURRENT_NAME]: " GIT_USERNAME
    if [ -n "$GIT_USERNAME" ]; then
        git config --global user.name "$GIT_USERNAME"
        echo "✅ 已更新用户名: $GIT_USERNAME"
    fi
fi

# 获取邮箱
if [ -z "$CURRENT_EMAIL" ]; then
    read -p "请输入GitHub邮箱: " GIT_EMAIL
    git config --global user.email "$GIT_EMAIL"
    echo "✅ 已设置邮箱: $GIT_EMAIL"
else
    read -p "请输入GitHub邮箱 [当前: $CURRENT_EMAIL]: " GIT_EMAIL
    if [ -n "$GIT_EMAIL" ]; then
        git config --global user.email "$GIT_EMAIL"
        echo "✅ 已更新邮箱: $GIT_EMAIL"
    fi
fi

# 配置凭证存储（macOS使用keychain）
if [[ "$OSTYPE" == "darwin"* ]]; then
    git config --global credential.helper osxkeychain
    echo "✅ 已配置macOS钥匙串存储凭证"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    git config --global credential.helper store
    echo "✅ 已配置Linux凭证存储"
fi

echo ""
echo "=== 配置完成 ==="
echo ""
echo "当前Git配置："
git config --global --list | grep -E "(user.name|user.email|credential)"
echo ""
echo "📝 重要提示："
echo "GitHub现在不支持密码认证，需要使用Personal Access Token"
echo "生成Token: https://github.com/settings/tokens"
echo "在Cursor推送时，密码处输入Token即可"

