# EmailJS Setup Instructions

To set up EmailJS for the contact form, follow these steps:

## 1. Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

\`\`\`
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested In: {{service}}
How They Found Us: {{source}}
Budget Range: {{budget}}
Specific Budget: {{custom_budget}}

Message:
{{message}}

Best regards,
PixelSphere Contact Form
\`\`\`

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Update the Contact Form
Replace the placeholder values in `app/contact/page.tsx`:

\`\`\`typescript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
)
\`\`\`

## 6. Test the Form
1. Fill out the contact form on your website
2. Check if the email is received
3. Verify all form data is properly included

## Security Notes
- EmailJS public keys are safe to use in client-side code
- Consider setting up domain restrictions in EmailJS dashboard
- Monitor your EmailJS usage to stay within free tier limits (200 emails/month)

## Troubleshooting
- Check browser console for any errors
- Verify all IDs are correctly copied from EmailJS dashboard
- Ensure email service is properly configured and active
- Test with a simple template first before using complex formatting
