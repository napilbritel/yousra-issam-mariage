#!/usr/bin/env bash
# Construit le site et le publie sur la branche gh-pages (GitHub Pages).
# Usage : npm run deploy
set -euo pipefail

repo_url="$(git remote get-url origin)"
repo_name="$(basename -s .git "$repo_url")"
owner="$(basename "$(dirname "$repo_url")")"

rm -rf out
PAGES_BASE_PATH="/$repo_name" NEXT_PUBLIC_SITE_URL="https://$owner.github.io" npm run build
touch out/.nojekyll

cd out
git init -q -b gh-pages
git add -A
git commit -q -m "Déploiement du $(date '+%Y-%m-%d %H:%M')"
git push -q -f "$repo_url" gh-pages
rm -rf .git
echo "✓ En ligne : https://$owner.github.io/$repo_name/"
