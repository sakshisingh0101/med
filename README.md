# 🩺 MedGuard Frontend  
**User Interface for Medicine Safety & Actionable Guidance**

---

## 📌 Overview

The **MedGuard Frontend** provides an intuitive and guided user experience for uploading prescriptions, entering health context, and viewing personalized medicine safety reports.

It consumes the **MedGuard Backend APIs** and dynamically renders results based on backend-driven logic.

---

## 👤 User Flow (End-to-End)

Landing Page
   ↓
Login / Signup
   ↓
Dashboard
   ↓
Upload Prescription / Medicine Image
   ↓
OCR Triggered Automatically
   ↓
Enter User Health Context
   ↓
Check Medicine Safety
   ↓
Result Page (Actionable Plan)


---

## 🔐 Authentication Flow

- Landing page contains **Login / Signup**
- `AuthContext` manages authentication state
- **Protected routes** restrict access to Dashboard & Results
- Logout clears session and redirects to Landing Page

---

## 📷 Image Upload & OCR Trigger

- User uploads a medicine or prescription image
- OCR API is triggered **immediately**
- OCR response is stored in `MedicineContext`
- User proceeds only after **successful OCR extraction**

---

## 🧠 State Management

### Contexts Used

#### 🔑 AuthContext
- Login / Logout state
- User session management

#### 💊 MedicineContext
- OCR result
- User health context
- Final processed medicine safety response

---

## 📄 Pages Overview

### 🏠 Landing Page
- Product introduction
- Call-to-Action for Login / Signup

### 📊 Dashboard
- Image upload
- User context input:
  - Age
  - Health conditions
  - Food state
  - Time
- **Check Safety** action

### 📋 Result Page
- Overall confidence indicator
- Multiple medicine cards
- Risk levels, schedules, and warnings
- English & Hindi instructions

---

## 🧾 Result Card Features

Each medicine card displays:

- Medicine name & dosage  
- Risk level (visual indicator)  
- Purpose of medicine  
- Step-by-step intake schedule  
- Warnings & alerts  
- Prescription availability notice  

All UI elements are **backend-driven**, ensuring consistency with rule-engine logic.

---

## ⚠️ Error Handling

- Graceful handling of empty or missing results
- Safe rendering using optional chaining
- User-friendly fallback messages

---

## 🛠️ Environment Setup

Create a `.env` file:

```env
VITE_API_BASE_URL=<backend_base_url>

Run locally
npm install
npm run dev


🚧 Known Limitations

Reminder notifications not implemented

OCR confidence may affect final accuracy

No offline support

🚀 Future Enhancements

Medicine reminders

Language toggle

Scan history

Caregiver access

UI accessibility improvements

🧾 Frontend Summary (One Line)

The MedGuard frontend guides users from prescription upload to actionable medicine safety reports through a clean, backend-driven UI.


