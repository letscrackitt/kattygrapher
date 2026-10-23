CAT CARD CREATOR - SITE SETUP CHECKLIST
=======================================

FILES IN THIS FOLDER
  index.html            your card app (your version, with a footer menu, cookie notice and canonical link added)
  about.html            About Us (how it works + FAQ)
  ideas.html            Card Message Ideas and Tips (original text content)
  contact.html          Contact Us (form opens the visitor's email app)
  privacy-policy.html   Privacy Policy (cookies, Google ads, GDPR/CCPA rights)
  terms.html            Terms & Conditions and Disclaimer (includes copyright-complaint process)
  site.css / site.js    shared styling, cookie notice, ad loader
  robots.txt, sitemap.xml, ads.txt

STEP 1 - FILL IN 3 PLACEHOLDERS (your email gold24cc@gmail.com is already in) (open every file in a text editor, use Find & Replace)
  YOURDOMAIN.COM           ->  your real domain, for example mycatcards.com
  YOUR NAME                ->  your name or business name
  YOUR COUNTRY             ->  country whose law governs the Terms (for example "India")

STEP 2 - UPLOAD
  Upload ALL files to the root (top level) of your website, so that
  https://yourdomain.com/privacy-policy.html and https://yourdomain.com/ads.txt both open.

STEP 3 - APPLY TO GOOGLE ADSENSE
  - AdSense needs your own domain (not a free subdomain such as *.github.io, *.netlify.app or a claude.ai link).
  - In AdSense > Sites, add your domain and paste the code snippet it gives you into the <head> of every page,
    OR just paste your publisher ID into site.js (line "var ADSENSE_CLIENT = ''") after approval.
  - Replace the pub-XXXXXXXXXXXXXXXX line in ads.txt with the one shown in your AdSense account.
  - Submit sitemap.xml in Google Search Console.
  - If you get visitors from the EU, UK or Switzerland, switch on Google's free "Privacy & messaging" consent
    message in AdSense. Google requires a certified consent tool for those countries; the built-in cookie
    notice here is a simple notice and not a certified one. If you turn on Google's, delete the banner code in site.js.

STEP 4 - BEFORE YOU APPLY (important)
  - Own the artwork: only use card templates and images you created, bought, or have a licence to use.
    Some template images may be copied from the web and carry watermarks. Google can refuse or disable ads for
    copyright-infringing content. Remove or replace any you cannot prove you may use.
  - Visible content: the hidden "sr-seo" text in index.html is invisible to visitors. Google may treat hidden text as spam.
    The About and Card Ideas pages now carry that information visibly, so you can safely delete the hidden block.
  - Children: if your audience may include children under 13, tell AdSense and set child-directed treatment.
  - Do not place ads on the card-editor screens (site.js already keeps ads off index.html).
  - Do not ask visitors to click ads, and never click your own ads.
  - Let the site be live and public for a few weeks with real traffic. Thin sites are often rejected at first.

These pages are practical templates, not legal advice. For a business with significant traffic, have a lawyer review them.
