# FuelHub Deployment Guide

## GitHub Actions CI/CD Pipeline

This project includes automated continuous integration and deployment via GitHub Actions.

### Workflow Overview

The deployment workflow (`.github/workflows/deploy.yml`) consists of **4 jobs**:

1. **Build Job** - Compiles and builds the Next.js application
2. **Deploy Job** - Deploys to Vercel (only on push to main)
3. **Security Check** - Checks for npm vulnerabilities
4. **Test Job** - Runs any test suites

### Prerequisites

Before setting up GitHub Actions, ensure you have:

- A Vercel account ([vercel.com](https://vercel.com))
- A GitHub repository
- Admin access to both Vercel and GitHub

### Setup Instructions

#### Step 1: Create Vercel API Token

1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Name: `FUELHUB_GITHUB_ACTION` or similar
4. Expiration: Recommended 90 days
5. Copy the token (you won't see it again!)

#### Step 2: Get Vercel Project IDs

Two methods to find your IDs:

**Method A: Using Vercel CLI**
```bash
npm i -g vercel
vercel link
```
This will create a `.vercel` folder with your project details.

**Method B: Manual lookup**
1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **General**
4. Find `Project ID` and note it
5. Go to **Settings** → **Account** → copy your `Team ID` (Org ID)

#### Step 3: Add GitHub Secrets

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Add 3 new repository secrets:

| Secret Name | Value | Source |
|------------|-------|--------|
| `VERCEL_TOKEN` | Your Vercel API token | From Step 1 |
| `VERCEL_ORG_ID` | Your Vercel Team/Org ID | From Step 2 |
| `VERCEL_PROJECT_ID` | Your Vercel Project ID | From Step 2 |

**Example:**
```
VERCEL_TOKEN: xxxxxxxxxxxxxxxxxxxxx
VERCEL_ORG_ID: team_xxxxxxxxxx
VERCEL_PROJECT_ID: prj_xxxxxxxxxx
```

#### Step 4: Verify Workflow

1. Push a commit to `main` branch
2. Go to **Actions** tab in your repository
3. Watch the workflow run in real-time
4. Check for any errors in the logs

### Workflow Triggers

The workflow runs on:
- ✅ **Push to `main` branch** - Full build + deploy to Vercel
- ✅ **Pull requests** - Build + security checks only (no deploy)

### Manual Deployment

If you need to deploy manually without GitHub Actions:

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel deploy --prod
```

### Environment Variables

If your app needs environment variables in production:

1. **In Vercel**: Go to **Settings** → **Environment Variables**
2. Add your variables (e.g., API keys, database URLs)
3. They'll be automatically available in deployed builds

### Troubleshooting

#### Issue: Workflow fails with "Vercel token invalid"
- ✅ Verify `VERCEL_TOKEN` is correctly set in GitHub Secrets
- ✅ Check token hasn't expired (create a new one if needed)
- ✅ Ensure token has correct permissions

#### Issue: Build fails with "npm dependencies not found"
- ✅ Run `npm ci` (clean install) to verify package-lock.json is correct
- ✅ Check for syntax errors in TypeScript files
- ✅ Run `npm run lint` locally to catch errors early

#### Issue: Deployment succeeds but site has errors
- ✅ Check Vercel logs: **Deployments** → select failed deployment
- ✅ Verify environment variables are set in Vercel
- ✅ Check buildspec and test locally first

### Monitoring Deployments

1. **In GitHub**: Actions tab shows workflow status ✅ or ❌
2. **In Vercel**: Deployments tab shows live deployment history
3. **Production**: Visit deployed URL to verify changes live

### Rollback to Previous Version

If something breaks after deployment:

1. Go to **Vercel Dashboard** → **Deployments**
2. Find the last stable deployment
3. Click the **"..."** menu
4. Select **"Promote to Production"**

### Security Best Practices

✅ **DO:**
- Rotate API tokens regularly
- Use branch protection rules
- Require PR reviews before merge
- Monitor deployment logs
- Keep Node.js version updated

❌ **DON'T:**
- Commit secrets to GitHub
- Share API tokens
- Deploy without tests
- Use overly permissive token scopes
- Ignore security warnings

### Performance Monitoring

After deployment, monitor:

1. **Build time**: Should be under 5 minutes
2. **Site speed**: Use [PageSpeed Insights](https://pagespeed.web.dev)
3. **Uptime**: Check Vercel Analytics dashboard
4. **Errors**: Monitor in Vercel logs and GitHub Actions

### Next Steps

- Configure **automatic deployments** for staging environments
- Set up **preview deployments** for pull requests
- Add **performance budgets** in Next.js config
- Implement **E2E tests** with Playwright or Cypress
- Set up **monitoring & alerts** (Sentry, DataDog)

---

**For questions or issues, check:**
- [Vercel Deployment Documentation](https://vercel.com/docs/concepts/deployments/overview)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
