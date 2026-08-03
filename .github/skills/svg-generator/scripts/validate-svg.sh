#!/usr/bin/env bash
set -euo pipefail

# SVG バリデーションスクリプト
# SVG ファイルの基本的な構造とアクセシビリティをチェックします

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}========================================${NC}"
echo -e "${CYAN}  SVG バリデーション${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""

# 引数の確認
if [ $# -eq 0 ]; then
    echo -e "${RED}エラー: SVG ファイルのパスを指定してください${NC}"
    echo "使用方法: $0 <svg-file-path>"
    exit 1
fi

SVG_FILE="$1"

# ファイルの存在確認
if [ ! -f "$SVG_FILE" ]; then
    echo -e "${RED}エラー: ファイルが見つかりません: $SVG_FILE${NC}"
    exit 1
fi

echo -e "${YELLOW}チェック対象:${NC} $SVG_FILE"
echo ""

# SVG タグの存在確認
if ! grep -q '<svg' "$SVG_FILE"; then
    echo -e "${RED}✗ SVG タグが見つかりません${NC}"
    exit 1
fi
echo -e "${GREEN}✓ SVG タグが存在します${NC}"

# xmlns の確認
if ! grep -q 'xmlns="http://www.w3.org/2000/svg"' "$SVG_FILE"; then
    echo -e "${YELLOW}⚠ xmlns 属性が見つかりません${NC}"
else
    echo -e "${GREEN}✓ xmlns 属性が正しく設定されています${NC}"
fi

# viewBox の確認
if ! grep -q 'viewBox=' "$SVG_FILE"; then
    echo -e "${YELLOW}⚠ viewBox 属性が見つかりません（レスポンシブ対応が推奨されます）${NC}"
else
    echo -e "${GREEN}✓ viewBox 属性が設定されています${NC}"
fi

# role="img" の確認
if ! grep -q 'role="img"' "$SVG_FILE"; then
    echo -e "${YELLOW}⚠ role=\"img\" が見つかりません（アクセシビリティ対応が推奨されます）${NC}"
else
    echo -e "${GREEN}✓ role=\"img\" が設定されています${NC}"
fi

# aria-label の確認
if ! grep -q 'aria-label=' "$SVG_FILE"; then
    echo -e "${YELLOW}⚠ aria-label が見つかりません（アクセシビリティ対応が推奨されます）${NC}"
else
    echo -e "${GREEN}✓ aria-label が設定されています${NC}"
fi

# 日本語フォントの確認
if grep -q 'font-family=' "$SVG_FILE"; then
    if grep -q "Noto Sans JP" "$SVG_FILE"; then
        echo -e "${GREEN}✓ 日本語フォントが設定されています${NC}"
    else
        echo -e "${YELLOW}⚠ Noto Sans JP が設定されていません${NC}"
    fi
else
    echo -e "${YELLOW}⚠ font-family 属性が見つかりません${NC}"
fi

# ファイルサイズの確認
FILE_SIZE=$(wc -c < "$SVG_FILE")
if [ "$FILE_SIZE" -gt 100000 ]; then
    echo -e "${YELLOW}⚠ ファイルサイズが大きいです: ${FILE_SIZE} バイト（100KB 超過）${NC}"
else
    echo -e "${GREEN}✓ ファイルサイズは適切です: ${FILE_SIZE} バイト${NC}"
fi

echo ""
echo -e "${CYAN}========================================${NC}"
echo -e "${GREEN}バリデーション完了${NC}"
echo -e "${CYAN}========================================${NC}"