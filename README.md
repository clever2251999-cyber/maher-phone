# Maher Phone - Frontend + Firebase Example

IMPORTANT SECURITY NOTE:
- Do NOT upload or include your Firebase service account private key in client files or public repos.
- The service account JSON you pasted contains a private key. Keep it secret and never store it in browser-distributed files.
- The files in this package are client-side web pages that use Firebase **web app config** (apiKey, authDomain, etc), which you can get from Firebase Console -> Project settings -> Your apps -> Web app.

FILES:
- index.html     : Public product listing + signup/signin + add to cart
- admin.html     : Admin page to upload product (admin must sign in with ADMIN_EMAIL)
- profile.html   : User profile + cart management
- firebase.rules : Suggested Firestore rules (in repo)
- README.md      : This file

WHAT YOU MUST DO:
1. In Firebase Console, create a project (or use existing `maher-phone-18581`).
2. Enable Authentication -> Sign-in method -> Email/Password (and/or Google).
3. Create a **Web app** in Project settings and copy its config (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId).
4. Open each HTML file and replace the firebaseConfig object placeholder with your web app config.
5. Set an admin email in the HTML files: search for `admin@example.com` and replace it with your admin email address.
6. Firestore & Storage:
   - Create Firestore database (in production or test, but secure rules before public use).
   - In Storage, ensure rules allow uploads by authenticated admins (see firebase.rules).
7. OPTIONAL (safer admin):
   - Instead of checking email in client, create a collection `admins` in Firestore and add documents with admin UIDs.
   - Or use Firebase Admin SDK on a server to set custom claims.

FIRESTORE RULES (recommended starting point):
See firebase.rules file.

DEPLOY:
- You can host these files on Firebase Hosting or GitHub Pages.
- For Firebase Hosting:
  1. Install Firebase CLI: `npm install -g firebase-tools`
  2. `firebase login`
  3. `firebase init hosting` (choose project, public directory `public` or as you like)
  4. Place these files in the public folder and `firebase deploy --only hosting`

SECURITY REMINDERS:
- NEVER place service account keys in client files.
- Use server-side code (Cloud Functions / small Node server) if you need privileged operations.
- If you shared the service account privately already, rotate the key in GCP Console and delete the leaked key.

If you want, I can:
- Create a `firebase.rules` file with the example rules for you to paste.
- Prepare a ZIP (this package) ready to download.
- Explain how to rotate/delete the leaked service account key safely.

