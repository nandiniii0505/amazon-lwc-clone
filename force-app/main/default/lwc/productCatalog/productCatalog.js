import { LightningElement, track } from 'lwc';

export default class ProductCatalog extends LightningElement {
    @track maxPriceFilter = 50000;
    @track selectedCategory = 'All';
    @track cartCount = 2;
    @track cartTotalPrice = 26498;

    @track isAuthModalOpen = false;
    @track isCartModalOpen = false;
    @track isRegisterMode = false;
    @track isOrderModalOpen = false;
    @track isAddressModalOpen = false;

    // Location & User Profile State
    @track currentUserName = 'Nandini';
    @track currentLocation = 'Bhubaneswar 751024';
    @track tempPincode = '';

    // Checkout Flow Step Tracker (false = Cart Summary, true = Payment Selection)
    @track isCheckoutStep = false;
    @track selectedPaymentType = 'UPI';

    @track products = [
        {
            id: '1',
            title: 'Polaroid Instant Vintage Camera (Grey)',
            category: 'Electronics',
            price: 15999,
            mrp: 19999,
            discount: '20% off',
            ratingCount: 1420,
            badge: 'Best Seller',
            isPrime: true,
            imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80'
        },
        {
            id: '2',
            title: 'Sony WH-1000XM4 Wireless Headphones',
            category: 'Audio & Headphones',
            price: 10499,
            mrp: 14999,
            discount: '30% off',
            ratingCount: 9210,
            badge: "Amazon's Choice",
            isPrime: true,
            imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'
        },
        {
            id: '3',
            title: 'Minimalist Smart Watch Series 7 (Silver)',
            category: 'Wearables',
            price: 3999,
            mrp: 6999,
            discount: '43% off',
            ratingCount: 340,
            badge: 'Best Seller',
            isPrime: true,
            imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80'
        },
        {
            id: '4',
            title: 'Nike Revolution 6 Running Shoes (Red)',
            category: 'Footwear',
            price: 7599,
            mrp: 9999,
            discount: '24% off',
            ratingCount: 3210,
            badge: "Amazon's Choice",
            isPrime: true,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80'
        },
        {
            id: '5',
            title: 'Apple iPad Air 10.9-inch M1 Chip',
            category: 'Electronics',
            price: 24999,
            mrp: 29999,
            discount: '17% off',
            ratingCount: 2120,
            badge: 'Best Seller',
            isPrime: true,
            imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80'
        },
        {
            id: '6',
            title: 'Ray-Ban Wayfarer Classic Sunglasses',
            category: 'Wearables',
            price: 5299,
            mrp: 7999,
            discount: '33% off',
            ratingCount: 1890,
            badge: "Amazon's Choice",
            isPrime: false,
            imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80'
        }
    ];

    get filteredProducts() {
        return this.products.filter(prod => {
            const matchesCategory = this.selectedCategory === 'All' || prod.category === this.selectedCategory;
            const matchesPrice = prod.price <= this.maxPriceFilter;
            return matchesCategory && matchesPrice;
        });
    }

    get isCategoryAll() {
        return this.selectedCategory === 'All' ? 'active-cat' : '';
    }

    get signInTabClass() {
        return this.isRegisterMode ? 'auth-tab' : 'auth-tab active';
    }

    get registerTabClass() {
        return this.isRegisterMode ? 'auth-tab active' : 'auth-tab';
    }

    get authButtonLabel() {
        return this.isRegisterMode ? 'Verify Mobile Number' : 'Continue';
    }

    handleCategorySelect(event) {
        this.selectedCategory = event.target.dataset.cat || event.target.value;
    }

    handlePriceChange(event) {
        this.maxPriceFilter = Number(event.target.value);
    }

    handleAddToCart(event) {
        event.stopPropagation();
        this.cartCount += 1;
        this.cartTotalPrice += 5000;
    }

    openAuthModal() {
        this.isRegisterMode = false;
        this.isAuthModalOpen = true;
    }

    closeAuthModal() {
        this.isAuthModalOpen = false;
    }

    switchToSignIn() {
        this.isRegisterMode = false;
    }

    switchToRegister() {
        this.isRegisterMode = true;
    }

    openCartModal() {
        this.isCheckoutStep = false; 
        this.isCartModalOpen = true;
    }

    closeCartModal() {
        this.isCartModalOpen = false;
    }

    // Returns & Orders Modal Handlers
    handleOrdersClick() {
        this.isOrderModalOpen = true;
    }

    closeOrderModal() {
        this.isOrderModalOpen = false;
    }

    // Address Modal Handlers
    openAddressModal() {
        this.isAddressModalOpen = true;
    }

    closeAddressModal() {
        this.isAddressModalOpen = false;
    }

    handlePincodeInput(event) {
        this.tempPincode = event.target.value;
    }

    applyPincode() {
        if (this.tempPincode.trim() !== '') {
            this.currentLocation = `Pincode ${this.tempPincode}`;
            this.isAddressModalOpen = false;
            this.tempPincode = '';
        } else {
            alert('Please enter a valid pincode or city');
        }
    }

    useCurrentLocation() {
        this.currentLocation = 'Bhubaneswar 751024';
        this.isAddressModalOpen = false;
    }

    selectSavedAddress(event) {
        const city = event.currentTarget.dataset.city;
        const pin = event.currentTarget.dataset.pin;
        this.currentLocation = `${city} ${pin}`;
        this.isAddressModalOpen = false;
    }

    stopPropagation(event) {
        event.stopPropagation();
    }

    handleAuthSubmit() {
        if (this.isRegisterMode) {
            alert('Account Created Successfully!');
        } else {
            alert('Login Successful!');
        }
        this.isAuthModalOpen = false;
    }

    // Checkout Flow Handlers
    proceedToPayment() {
        this.isCheckoutStep = true;
    }

    goBackToCart() {
        this.isCheckoutStep = false;
    }

    selectPaymentMethod(event) {
        this.selectedPaymentType = event.target.dataset.method;
    }

    handlePlaceOrder() {
        alert(`Order placed successfully using ${this.selectedPaymentType}! Thank you for shopping with Amazon.in`);
        this.isCartModalOpen = false;
        this.isCheckoutStep = false;
    }

    openPdpModal(event) {}
}