#!/bin/bash

# 推送代码到GitHub的脚本
# 使用方法：./push-to-github.sh <你的GitHub用户名> <仓库名>

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "使用方法: ./push-to-github.sh <GitHub用户名> <仓库名>"
    echo "例如: ./push-to-github.sh yourusername english-learning-dashboard"
    exit 1
fi

GITHUB_USER=$1
REPO_NAME=$2

echo "正在添加远程仓库..."
git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git 2>/dev/null || git remote set-url origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git

echo "正在推送到GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    echo "仓库地址: https://github.com/${GITHUB_USER}/${REPO_NAME}"
else
    echo "❌ 推送失败，请检查："
    echo "1. 仓库是否已在GitHub创建"
    echo "2. 是否有推送权限"
    echo "3. 是否已配置GitHub认证"
fi

