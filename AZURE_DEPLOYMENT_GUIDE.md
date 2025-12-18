# Azure Deployment Guide for MapChat Website

## Prerequisites
- Azure account (sign up at https://azure.microsoft.com)
- Your domain name registered (e.g., mapchat.com)
- Git installed on your system

## Step 1: Prepare Your Site for Deployment

### 1.1 Update package.json
Make sure your build script is correct (already done):
```json
"scripts": {
  "build": "next build",
  "start": "next start"
}
```

### 1.2 Create .gitignore (if not exists)
```
node_modules/
.next/
.env.local
.DS_Store
*.log
```

### 1.3 Initialize Git Repository
```bash
cd /home/mase/Desktop/mapchatnew/mapchat-website
git init
git add .
git commit -m "Initial commit - MapChat website"
```

## Step 2: Deploy to Azure

### Option A: Azure Static Web Apps (RECOMMENDED - Easiest)

1. **Go to Azure Portal**
   - Visit https://portal.azure.com
   - Sign in with your account

2. **Create Static Web App**
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure Deployment**
   - **Subscription**: Choose your subscription
   - **Resource Group**: Create new (e.g., "mapchat-web")
   - **Name**: Your app name (e.g., "mapchat-website")
   - **Region**: Choose closest to your users (e.g., East US)
   - **Deployment source**: Choose "GitHub" or "Other"

4. **For GitHub Deployment (EASIEST)**:
   - Push your code to GitHub first:
     ```bash
     # Create repo on GitHub first, then:
     git remote add origin https://github.com/YOUR_USERNAME/mapchat-website.git
     git branch -M main
     git push -u origin main
     ```
   - In Azure: Connect your GitHub account
   - Select repository: `mapchat-website`
   - Build preset: **Next.js**
   - App location: `/`
   - Output location: `.next`

5. **For Manual Deployment**:
   - Choose "Other" as source
   - After creation, use Azure CLI or VS Code extension

### Option B: Azure App Service (More Control)

1. **Create App Service**
   - Go to Azure Portal → Create a resource
   - Search "Web App"
   - Click Create

2. **Configure App Service**
   - **Resource Group**: Create new (e.g., "mapchat-web")
   - **Name**: Your app name (e.g., "mapchat")
   - **Publish**: Code
   - **Runtime stack**: Node 18 LTS or Node 20 LTS
   - **Operating System**: Linux
   - **Region**: East US or closest to your users
   - **Pricing**: Basic B1 ($13/month) or higher

3. **Deploy Your Code**

   Using VS Code (Easiest):
   - Install "Azure App Service" extension
   - Right-click on folder → Deploy to Web App
   - Select your app service

   Using Azure CLI:
   ```bash
   # Install Azure CLI first: https://aka.ms/installazurecli
   az login
   az webapp up --name mapchat --resource-group mapchat-web --runtime "NODE:18-lts"
   ```

   Using GitHub Actions:
   - Azure will auto-generate a GitHub Actions workflow
   - Push to main branch triggers automatic deployment

## Step 3: Configure Custom Domain

### 3.1 Add Custom Domain to Azure

1. **In Azure Portal**:
   - Go to your App Service or Static Web App
   - Select "Custom domains" from left menu
   - Click "Add custom domain"
   - Enter your domain (e.g., `mapchat.com` and `www.mapchat.com`)

2. **Get DNS Records from Azure**:
   Azure will show you the DNS records needed:
   - **A Record**: Points to Azure IP address
   - **TXT Record**: For domain verification
   - **CNAME Record**: For www subdomain

### 3.2 Configure DNS at Your Domain Registrar

Go to your domain registrar (GoDaddy, Namecheap, etc.):

**Add these DNS records:**

For root domain (`mapchat.com`):
```
Type: A
Host: @
Value: [Azure IP from portal]
TTL: 3600
```

For www subdomain (`www.mapchat.com`):
```
Type: CNAME
Host: www
Value: [your-app-name].azurewebsites.net
TTL: 3600
```

For domain verification:
```
Type: TXT
Host: asuid
Value: [verification code from Azure]
TTL: 3600
```

### 3.3 Verify Domain in Azure
- Wait 5-15 minutes for DNS propagation
- Go back to Azure Portal → Custom domains
- Click "Validate" to check DNS records
- Click "Add" to finalize

## Step 4: Enable HTTPS/SSL

### 4.1 Free SSL with Azure
1. In Azure Portal → Custom domains
2. Find your domain
3. Click "Add binding"
4. Select "Managed Certificate" (FREE)
5. TLS/SSL type: SNI SSL
6. Click "Add binding"

Azure will automatically provision and renew SSL certificates.

## Step 5: Configure Environment Variables

1. **In Azure Portal**:
   - Go to your App Service
   - Select "Configuration" → "Application settings"
   - Add your environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://wxlxsrnjrfeducsqprod.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your key from .env.local]
```

2. **Save and Restart** the app

## Step 6: Test Your Deployment

1. Visit your Azure URL: `https://[your-app-name].azurewebsites.net`
2. Visit your custom domain: `https://mapchat.com`
3. Test the waitlist form (check Supabase for entries)
4. Check all animations work
5. Test on mobile devices

## Pricing Estimates

### Static Web Apps (Recommended for this project):
- **Free tier**: 100GB bandwidth/month, custom domain, SSL
- **Standard**: $9/month - 100GB bandwidth, more features

### App Service:
- **Basic B1**: ~$13/month - Custom domain, SSL, 1.75GB RAM
- **Standard S1**: ~$70/month - More resources, auto-scaling

## Monitoring & Updates

### View Logs
```bash
# Using Azure CLI
az webapp log tail --name mapchat --resource-group mapchat-web
```

### Update Your Site
```bash
# Make changes locally
git add .
git commit -m "Update website"
git push origin main
# Automatic deployment via GitHub Actions
```

## Troubleshooting

### Site not loading?
- Check build logs in Azure Portal → Deployment Center
- Verify Node version matches your local (18 or 20)
- Check Application Insights for errors

### Domain not working?
- Use DNS checker: https://dnschecker.org
- Wait 24-48 hours for full DNS propagation
- Verify DNS records match Azure exactly

### Environment variables not working?
- Check Configuration → Application settings
- Restart app after adding variables
- Make sure variables start with `NEXT_PUBLIC_` for client-side access

## Quick Commands Reference

```bash
# Build locally first
npm run build

# Deploy with Azure CLI
az webapp up --name mapchat --resource-group mapchat-web

# View logs
az webapp log tail --name mapchat --resource-group mapchat-web

# Restart app
az webapp restart --name mapchat --resource-group mapchat-web
```

## Next Steps After Deployment

1. ✅ Test all features on live site
2. ✅ Set up monitoring/analytics
3. ✅ Configure CDN for faster loading (optional)
4. ✅ Set up automated backups
5. ✅ Add Application Insights for monitoring

## Support Resources

- Azure Documentation: https://docs.microsoft.com/azure
- Next.js Azure Deployment: https://nextjs.org/docs/deployment
- Azure Support: https://azure.microsoft.com/support

---

Your site should now be live at **https://mapchat.com** with free SSL! 🚀
