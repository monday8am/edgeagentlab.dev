# Edge Agent Lab - Microsite

Static site for [edgeagentlab.dev](https://edgeagentlab.dev) hosted on GitHub Pages.

## Purpose

Hosts test definitions for the KoogAgent Android app:
- `tests/tool_tests.json` - Function calling test scenarios

## Local Development

Just open `index.html` in a browser. No build step required.

## Deployment

Push to `main` branch → GitHub Pages auto-deploys.

## DNS Configuration (IONOS)

### Required DNS Records

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| CNAME | www | YOUR_USERNAME.github.io | 3600 |

### Steps

1. Log into IONOS → Domains & SSL → Select `edgeagentlab.dev`
2. Go to DNS settings
3. Add the 4 A records pointing to GitHub's IP addresses
4. Add the CNAME record for `www` subdomain
5. Wait 10-30 minutes for propagation
6. In GitHub repo Settings → Pages → Custom domain: enter `edgeagentlab.dev`
7. Check "Enforce HTTPS" once DNS propagates

### Verify

```bash
dig edgeagentlab.dev +noall +answer
# Should show GitHub IPs
```

## App Integration

The Android app fetches tests from:
```
https://edgeagentlab.dev/tests/tool_tests.json
```

Update the URL in your app's test loader to point here instead of the bundled resource.
