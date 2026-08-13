# 🛒 Amazon.in Marketplace Clone - Salesforce LWC

A comprehensive, fully functional e-commerce marketplace web application modeled after Amazon.in, built natively using **Salesforce Lightning Web Components (LWC)**, custom Apex controllers, and Lightning Data Services. This project implements advanced UI/UX patterns, real-time modal interactions, dynamic location tracking, and responsive e-commerce workflows.

---

## 🏗️ Architecture & Component Hierarchy

The application is structured following a modular, component-driven architecture with clean parent-child communication patterns using Custom Events and **Lightning Message Channels (LMC)**.

```text
force-app/
│
├── main/default/
│   ├── lwc/
│   │   ├── storeFeatures/              # Parent / Container Component for Utilities & Banners
│   │   │   ├── livePriceDropAlert/     # Child Component: Live Price Drop Notification System
│   │   │   └── quickWishlistSaver/     # Child Component: Instant Wishlist & Item Saver
│   │   ├── productCatalog/             # Product Display, Filtering, and Search Grid
│   │   ├── shoppingCartModal/          # Interactive Cart Management & Checkout Flow
│   │   ├── orderHistoryModal/          # Order Tracking, History, and Invoice Management
│   │   ├── userAuthModal/              # Authentication Modal (Sign In / Create Account)
│   │   └── amazonFooter/               # Comprehensive Multi-Column Footer & Localization
│   ├── messageChannels/                # Inter-component communication channels
│   └── classes/                        # Apex controllers and database handlers

---

## 🚀 Key Modules & Functional Logic

### 1. 🛍️ Product Catalog & Search (`productCatalog`)
* **Dynamic Grid & Filtering:** Displays products with rich metadata including pricing, discounts, ratings, and stock badges.
* **Multi-criteria Filtering:** Real-time filtering based on categories (Electronics, Wearables, Footwear, Audio) and interactive price range sliders (up to ₹50,000).
* **Responsive Layout:** Optimized grid cards that seamlessly adapt across desktop, tablet, and mobile viewport breakpoints.

### 2. 👤 User Authentication Modal (`userAuthModal`)
* **Interactive Tabs:** Clean switching between **Sign In** and **Create Account** workflows.
* **Form Validation:** Input validation for email/mobile numbers and secure password requirements (minimum 6 characters).
* **Modal State Management:** Smooth overlay toggle behavior triggered from the navigation bar.

### 3. 📦 Order History & Tracking Modal (`orderHistoryModal`)
* **Comprehensive Order Management:** Displays user orders with detailed metadata (Order Date, Total Price, Delivery Status, and Shipping Address tied to user context like *Nandini Mishra*).
* **Multi-tab Views:** Filter orders across *Orders*, *Buy Again*, *Not Yet Shipped*, and *Cancelled Orders*.
* **Actionable Triggers:** Integrated buttons for tracking packages (`Track package`), reordering items (`Buy it again`), viewing order details/invoices, and writing product reviews.

### 4. 📍 Location & Delivery Selector (`storeFeatures`)
* **Pincode / City Lookup:** Interactive input box to check delivery options and speeds based on Indian pin-codes (e.g., Bhubaneswar 751024, Bangalore, New Delhi).
* **Geolocation Support:** "Detect my current location" utility logic.
* **Saved Addresses Hub:** Quick-select radio list allowing users to switch between predefined regional shipping addresses instantly.

### 5. ❤️ Wishlist & Price Drop Alert System (`storeFeatures` sub-components)
* **Live Price Drop Alert:** Integrated notification module allowing users to subscribe with their email address to catch immediate price reductions on saved wishlist items.
* **Quick Wishlist Saver:** Instant item-saving logic to bookmark products for quick reviews and later purchases.

### 6. ⚙️ Store Features & Footer Hub (`amazonFooter`)
* **Multi-column Navigation:** Replicates Amazon's structured footer categorized into *Get to Know Us*, *Connect with Us*, *Make Money with Us*, and *Let Us Help You*.
* **Localization:** Built-in currency and region selectors (India / English).

---

## 🛠️ Tech Stack & Tools

* **Frontend:** Salesforce Lightning Web Components (LWC), HTML5, CSS3 / Salesforce Lightning Design System (SLDS), JavaScript (ES6+)
* **Backend / Database:** Salesforce DX, Apex Controllers, SOQL, Custom Objects (`obj_3`)
* **Styling & Responsiveness:** Custom CSS Flexbox/Grid media queries ensuring complete cross-device responsiveness.
* **Version Control:** Git & GitHub (`nandiniii0505/amazon-lwc-clone`)

---
