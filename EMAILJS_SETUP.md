# EmailJS Setup Guide for Contact Form

## Overview
The contact form now uses EmailJS to send emails directly to sdrshndahal@gmail.com. This guide will help you set it up.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended) or "Outlook"
4. Connect your email account (sdrshndahal@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update the Code
Replace the placeholders in `app/contact/page.tsx`:

```typescript
// ✅ Service ID already updated: 'service_3alozdc'
// ✅ Template ID already updated: 'template_7jz1x9h'
// ✅ Public Key already updated: 's_aYuhBV28UMNzuxP'
```

## Step 6: Test the Form
1. Fill out the contact form
2. Submit and check your email (sdrshndahal@gmail.com)
3. You should receive the message

## Alternative: Direct Email Link
If you prefer not to use EmailJS, the form also includes a direct mailto link that opens the user's email client:

```html
<a href="mailto:sdrshndahal@gmail.com">sdrshndahal@gmail.com</a>
```

## Troubleshooting
- **Form not sending**: Check browser console for errors
- **EmailJS not loading**: Check internet connection
- **Wrong email received**: Verify the service is connected to the correct email
- **Template errors**: Ensure template variables match the code

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- Gmail: No sending limits
- Consider upgrading if you expect high volume

## Security Notes
- Public key is safe to expose in client-side code
- Service ID and template ID are also public
- Only the email service connection is private
