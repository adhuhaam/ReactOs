# HROS Expo App

[star my repositary](https://github.com/adhuhaam/ReactOs)

A React Native + Expo-based mobile application for HROS (Human Resource Operations System), built to display employee information and documents. Features login, dashboard, and profile with Tailwind UI styling via NativeWind.

---

## 🚀 Features

- ✅ Login with username & password
- ✅ Dashboard with welcome message
- ✅ Profile page with:
  - Employee info (name, designation, address)
  - Documents preview (passport, work permit, etc.)
- ✅ Axios API integration
- ✅ Tailwind CSS styling (via NativeWind)
- ✅ Expo compatible (runs on Android, iOS, and web)

---

## 📦 Folder Structure

```
.
├── App.js
├── babel.config.js
├── tailwind.config.js
├── screens/
│   ├── LoginScreen.js
│   ├── DashboardScreen.js
│   └── ProfileScreen.js
├── services/
│   └── api.js
```

---

## ⚙️ Setup & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start Expo

```bash
npx expo start
```

Scan the QR code using the **Expo Go app** on your device.

---

## 🌐 API Endpoint

The app uses the following backend API:

```
https://hros.rccmaldives.com/api-react/
```

Make sure the following endpoints are available:

- `auth/login.php`
- `employee.php?username=...`
- `documents.php?username=...`

---

## 🧩 Tech Stack

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [NativeWind (Tailwind)](https://www.nativewind.dev/)
- [Axios](https://axios-http.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

---

## 📄 License

This project is proprietary and belongs to RCC Maldives. For internal use only.
