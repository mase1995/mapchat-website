# MapChat Website - Waitlist Setup

## Setup Instructions

### 1. Run the SQL migration in Supabase

Go to your Supabase dashboard → SQL Editor and run the contents of:
```
CREATE_WAITLIST_TABLE.sql
```

This creates the `waitlist` table to store email signups.

### 2. Add environment variables

Create a `.env.local` file in the `mapchat-website` folder:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Get these values from:
Supabase Dashboard → Settings → API

### 3. Test locally

```bash
npm run dev
```

Try signing up with an email on the waitlist form. Check Supabase → Table Editor → waitlist to see the entries.

### 4. Deploy to Azure

When deploying to Azure Static Web Apps or Azure App Service:

1. Add the environment variables in Azure Portal
2. Go to your app → Configuration → Application Settings
3. Add both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 5. View waitlist entries

In Supabase Dashboard:
- Go to Table Editor → waitlist
- You'll see all email signups with timestamps

Or export to CSV:
- Click the table → Export → CSV

## How it works

1. User enters email in WaitlistForm component
2. Form sends POST request to `/api/waitlist`
3. API route validates and saves to Supabase
4. Returns success/error message to user
5. Duplicate emails are automatically rejected

## Files created:

- `CREATE_WAITLIST_TABLE.sql` - Database migration
- `lib/supabase.ts` - Supabase client config
- `app/api/waitlist/route.ts` - API endpoint
- `components/WaitlistForm.tsx` - Updated form (now saves emails)
- `.env.local.example` - Template for environment variables
