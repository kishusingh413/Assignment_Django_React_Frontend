
---

### 📌 **`README.md`**  
```md
# 🛍 Order Management System - React App

## 📌 Overview
This is a **React-based Order Management System** that allows users to:
- 📋 **View purchased orders** with expandable details.
- 🛒 **Create a new order** with a drag-and-drop interface.
- 💬 **Contact support via a chat window** at the bottom-right corner.

---

## 🎯 Features
### ✅ **Order List (Homepage)**
- Displays all purchased orders.
- Expandable **order details** section.
- **New Order** button to create an order.

### ✅ **New Order Page**
- **Drag & Drop** functionality for adding items to the cart.
- **Real-time updates** when adding/removing items.
- **Quantity management** for cart items.
- **Form validation** to ensure valid order submission.

### ✅ **Support Chat**
- Floating **"Contact Support"** button.
- Expandable **chat window** for customer queries.
- Minimization/maximization functionality.


## 🚀 **Getting Started**
### 1️⃣ **Install Dependencies**
Make sure you have **Node.js** installed. Then, run:
```sh
npm install
```

### 2️⃣ **Start the Development Server**
```sh
npm start
```
The app will run at **`http://localhost:3000/`**.

### 3️⃣ **Build for Production**
```sh
npm run build
```

---

## ⚙️ **Tech Stack**
- **Frontend:** React.js, React Router
- **State Management:** Context API
- **Drag & Drop:** React DnD
- **Styling:** CSS Modules, Tailwind CSS
- **Data Handling:** JSON-based mock database

---

## 📝 **Usage Guide**
1. **Homepage (`/`)**
   - View all orders.
   - Click on an order to expand details.
   - Click "New Order" to create an order.

2. **New Order Page (`/new-order`)**
   - Drag items from the available list to the cart.
   - Adjust item quantities.
   - Click "Place Order" to confirm.

3. **Order Details (`/order-details`)**
   - Redirects after placing an order.
   - Saves the order and updates the homepage.

4. **Support Chat**
   - Click the floating button in the bottom-right corner.
   - Send messages and receive automated responses.
   - Minimize or close the chat.
