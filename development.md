# Publish / Release Guide

## 1) One-time setup (NPM auth)

Login:

```bash
npm logout
npm login
npm whoami
```

```md
If you see: Access token expired or revoked
→ just login again (npm login) or generate a new token in npmjs.com → Access Tokens.
```

---

## 2) Release workflow (publish a new version)

### Step 1: Check working tree

```bash
git status
```

### Step 2: Commit changes

```bash
git add .
git commit -m "feat: add Checkbox"
```

### Step 3: Bump version

Patch:

```bash
npm version patch
```

Minor:

```bash
npm version minor
```

Major:

```bash
npm version major
```

```md
If error: Git working directory not clean
→ you must commit first.
```

### Step 4: Publish

```bash
npm publish --access public
```

## Troubleshooting

### Cannot publish over existing version

Error:

```sql
You cannot publish over the previously published versions
```

Fix:

```bash
npm version patch
npm publish --access public
```

### Token expired / revoked

Error:

```sql
Access token expired or revoked
```

Fix:

```bash
npm logout
npm login
```

### Verify published version

```bash
npm view kelvinward-libs version
```
