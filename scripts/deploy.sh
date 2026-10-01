#!/usr/bin/env bash
# Construit le site et le publie sur la branche gh-pages (GitHub Pages).
# Seuls les fichiers modifiés sont envoyés (images et polices déjà en ligne).
# Usage : npm run deploy
set -euo pipefail

repo_url="$(git remote get-url origin)"
repo_name="$(basename -s .git "$repo_url")"
owner="$(basename "$(dirname "$repo_url")")"

rm -rf out
PAGES_BASE_PATH="/$repo_name" NEXT_PUBLIC_SITE_URL="https://$owner.github.io" npm run build
touch out/.nojekyll

work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

if git clone -q --depth 1 --branch gh-pages "$repo_url" "$work" 2>/dev/null; then
  find "$work" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
else
  git -C "$work" init -q -b gh-pages
  git -C "$work" remote add origin "$repo_url"
fi

cp -R out/. "$work"/
git -C "$work" add -A
if git -C "$work" diff --cached --quiet; then
  echo "Rien de nouveau à publier."
else
  git -C "$work" commit -q -m "Déploiement du $(date '+%Y-%m-%d %H:%M')"
  git -C "$work" -c http.postBuffer=524288000 push -q origin gh-pages
fi
echo "✓ En ligne : https://$owner.github.io/$repo_name/"
