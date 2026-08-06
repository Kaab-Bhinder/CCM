# Form submissions → Google Sheet

The site has three forms. All post to `/api/submit`, which forwards them to a
Google Sheet you own.

| Form | Page | Sheet tab it creates |
|---|---|---|
| Contact | `/company/contact` | `Contact` |
| Publisher application | `/publishers/apply` | `Publisher Application` |
| Newsletter | Footer (every page) | `Newsletter` |

Until you finish the setup below, submissions still succeed for the visitor and
are logged to the server console — nothing crashes, nothing is lost silently.

---

## Setup (about 3 minutes)

### 1. Create the sheet
Go to <https://sheets.new>, name it something like **Close Crew — Form Submissions**.

### 2. Add the script
In the sheet: **Extensions → Apps Script**. Delete whatever is there, paste this:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var tabName = data.form || 'Contact';
    var sheet = ss.getSheetByName(tabName) || ss.insertSheet(tabName);

    // Header row: created on first submission, extended if new fields appear.
    var headers = sheet.getLastRow() > 0
      ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
      : [];

    Object.keys(data).forEach(function (key) {
      if (headers.indexOf(key) === -1) headers.push(key);
    });
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);

    var row = headers.map(function (h) { return data[h] !== undefined ? data[h] : ''; });
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

### 3. Publish it
**Deploy → New deployment → ⚙ → Web app**, then set:

- **Execute as:** Me
- **Who has access:** **Anyone**  ← required, or the site can't post to it

Click **Deploy**, approve the permission prompt, and copy the **Web app URL**
(it looks like `https://script.google.com/macros/s/AKfy…/exec`).

### 4. Give the site the URL
Create `.env.local` in the project root:

```
FORMS_ENDPOINT=https://script.google.com/macros/s/AKfy…/exec
```

Restart the dev server. Submit a test form — a new row appears in the sheet.

> On your host (Vercel, Netlify, etc.) add `FORMS_ENDPOINT` as an environment
> variable in the project settings too. Never commit `.env.local`.

---

## Notes

- **Spam protection:** every form has a hidden honeypot field, and the API route
  rate-limits to 5 submissions per minute per IP.
- **Email alerts:** in the sheet, **Tools → Notification rules → Notify me when…
  a user submits a form** to get an email on every new row.
- **Changing provider later** (Formspree, Getform, a CRM): only
  `app/api/submit/route.ts` changes — the forms themselves stay as they are.
- **Adding a field:** give the input a `name` attribute; it becomes a new column
  automatically.
