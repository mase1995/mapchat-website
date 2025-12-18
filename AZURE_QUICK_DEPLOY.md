# Azure Deployment - Quick Start Guide

Your site builds successfully! Here's how to deploy to Azure:

## Option 1: Azure Static Web Apps (RECOMMENDED - FREE tier available)

### Step 1: Push to GitHub
```bash
cd /home/mase/Desktop/mapchatnew/mapchat-website
git init
git add .
git commit -m "Initial commit for Azure deployment"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/mapchat-website.git
git branch -M main
git push -u origin main
```

### Step 2: Create Azure Static Web App
1. Go to https://portal.azure.com
2. Click "+ Create a resource"
3. Search for "Static Web Apps" and click Create
4. Fill in:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Create new (e.g., "mapchat-resources")
   - **Name**: mapchat-website (or your preferred name)
   - **Plan type**: Free
   - **Region**: Select closest to your users
   - **Source**: GitHub
   - **Organization**: Your GitHub username
   - **Repository**: mapchat-website
   - **Branch**: main
5. Build Details:
   - **Build Presets**: Next.js
   - **App location**: /
   - **Output location**: .next
6. Click "Review + create" then "Create"

### Step 3: Add Environment Variables
1. Once deployed, go to your Static Web App in Azure Portal
2. Click "Configuration" in the left menu
3. Add these environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key

**Also add to GitHub Secrets:**
1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Add the same secrets there

### Step 4: Custom Domain (Optional)
1. In Azure Portal, go to your Static Web App
2. Click "Custom domains"
3. Add your domain (e.g., mapchat.com)
4. Follow DNS configuration instructions

---

## Option 2: Azure App Service (More control, starts at ~$13/month)

### Using Azure CLI (Fast method)

```bash
# Install Azure CLI if not already installed
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Login to Azure
az login

# Create resource group
az group create --name mapchat-resources --location eastus

# Create App Service plan
az appservice plan create --name mapchat-plan --resource-group mapchat-resources --sku B1 --is-linux

# Create web app
az webapp create --resource-group mapchat-resources --plan mapchat-plan --name mapchat-website --runtime "NODE:18-lts"

# Configure for Next.js
az webapp config appsettings set --resource-group mapchat-resources --name mapchat-website --settings \
  WEBSITE_NODE_DEFAULT_VERSION="18-lts" \
  SCM_DO_BUILD_DURING_DEPLOYMENT="true" \
  NEXT_PUBLIC_SUPABASE_URL="your-supabase-url" \
  NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"

# Deploy the code
cd /home/mase/Desktop/mapchatnew/mapchat-website
az webapp up --runtime "NODE:18-lts" --name mapchat-website --resource-group mapchat-resources
```

### Using GitHub Actions
1. Create App Service in Azure Portal (Web App)
2. Download the publish profile from your App Service
3. Add to GitHub Secrets as `AZURE_WEBAPP_PUBLISH_PROFILE`
4. Push your code with the `.github/workflows/azure-app-service.yml` file

---

## Option 3: Deploy with VS Code (Visual method)

### Prerequisites
```bash
code --install-extension ms-azuretools.vscode-azurestaticwebapps
# OR
code --install-extension ms-azuretools.vscode-azureappservice
```

### Steps
1. Open VS Code in the mapchat-website folder
2. Click the Azure icon in the sidebar (you might need to sign in)
3. Right-click on "Static Web Apps" or "App Services"
4. Click "Create Static Web App" or "Create New Web App"
5. Follow the prompts
6. Right-click your new app → "Deploy to Static Web App/Web App"

---

## What's Already Done
✅ Site builds successfully  
✅ Dependencies installed  
✅ GitHub Actions workflows created  
✅ Static Web App config created  

## Next Steps
1. Choose your deployment option (Option 1 is easiest and free)
2. Push code to GitHub (if using Option 1)
3. Create Azure resource using portal or CLI
4. Configure environment variables
5. Your site will be live!

## Your Site URL
After deployment, your site will be available at:
- Static Web Apps: `https://mapchat-website-xxx.azurestaticapps.net` (can add custom domain)
- App Service: `https://mapchat-website.azurewebsites.net` (can add custom domain)

## Need Help?
- Azure Static Web Apps Docs: https://learn.microsoft.com/azure/static-web-apps/
- Azure App Service Docs: https://learn.microsoft.com/azure/app-service/
