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

