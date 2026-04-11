#!/usr/bin/env bash
# i18n.sh — Scan content/docs and regenerate todo.md with translation status
set -euo pipefail

DOCS="src/content/docs"
ES="$DOCS/es"
EN="$DOCS/en"
CA="$DOCS/ca"
TODO="todo.md"

check() {
  local lang_dir="$1" rel_path="$2"
  # try exact path, then with alternate extension
  if [[ -f "$lang_dir/$rel_path" ]]; then
    echo "✅"
  else
    # swap extension between .md and .mdx
    local alt
    if [[ "$rel_path" == *.mdx ]]; then
      alt="${rel_path%.mdx}.md"
    else
      alt="${rel_path%.md}.mdx"
    fi
    if [[ -f "$lang_dir/$alt" ]]; then
      echo "✅"
    else
      echo "⬜"
    fi
  fi
}

section() {
  local title="$1" subdir="$2"
  echo ""
  echo "## $title"
  echo ""
  echo "| File | EN | CA |"
  echo "|------|----|----|"

  local search_dir="$ES/$subdir"
  if [[ ! -d "$search_dir" ]]; then
    return
  fi

  while IFS= read -r -d '' file; do
    local rel="${file#$search_dir/}"
    local en_status ca_status
    en_status=$(check "$EN/$subdir" "$rel")
    ca_status=$(check "$CA/$subdir" "$rel")
    printf "| \`%s\` | %s | %s |\n" "$rel" "$en_status" "$ca_status"
  done < <(find "$search_dir" -maxdepth 1 -type f \( -name "*.md" -o -name "*.mdx" \) -print0 | sort -z)
}

module_section() {
  local mod="$1"
  local title
  title=$(echo "$mod" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2); print}')

  echo ""
  echo "## modules/$mod"
  echo ""
  echo "| File | EN | CA |"
  echo "|------|----|----|"

  local search_dir="$ES/modules/$mod"
  if [[ ! -d "$search_dir" ]]; then
    return
  fi

  while IFS= read -r -d '' file; do
    local rel="${file#$search_dir/}"
    local en_status ca_status
    en_status=$(check "$EN/modules/$mod" "$rel")
    ca_status=$(check "$CA/modules/$mod" "$rel")
    printf "| \`%s\` | %s | %s |\n" "$rel" "$en_status" "$ca_status"
  done < <(find "$search_dir" -maxdepth 1 -type f \( -name "*.md" -o -name "*.mdx" \) -print0 | sort -z)
}

{
  cat <<'HEADER'
# Translation Progress

Translating all content from Spanish (`es`) to English (`en`) and Catalan (`ca`).

## Infrastructure

- [x] `astro.config.mjs` — added `en` and `ca` locales
- [x] `src/content/nav/en.ts` — English sidebar labels
- [x] `src/content/i18n/en.json` — English UI strings
- [x] `src/content/i18n/ca.json` — completed missing keys (multipleChoice, checklist, tutorial)

---

## Root

| File | EN | CA |
|------|----|----|
HEADER

  # Root index
  for f in "$ES"/index.md "$ES"/index.mdx; do
    [[ -f "$f" ]] || continue
    rel="$(basename "$f")"
    en_status=$(check "$EN" "$rel")
    ca_status=$(check "$CA" "$rel")
    printf "| \`%s\` | %s | %s |\n" "$rel" "$en_status" "$ca_status"
  done

  echo ""
  echo "---"

  # Modules — discover dynamically, sorted
  while IFS= read -r -d '' mod_dir; do
    mod=$(basename "$mod_dir")
    module_section "$mod"
  done < <(find "$ES/modules" -mindepth 1 -maxdepth 1 -type d -print0 2>/dev/null | sort -z)

  echo ""
  echo "---"

  section "exercises" "exercises"

  echo ""
  echo "---"

  section "install" "install"

  echo ""
  echo "---"

  section "utils" "utils"

} > "$TODO"

echo "Updated $TODO"
