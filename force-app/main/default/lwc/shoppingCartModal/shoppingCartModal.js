import { LightningElement, api, track } from 'lwc';

export default class ShoppingCart extends LightningElement {
    @track cartItems = [];

    // Check if cart has items
    get hasItems() {
        return this.cartItems && this.cartItems.length > 0;
    }

    // Calculate subtotal automatically
    get subtotal() {
        return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    // Method to add item from parent or event
    @api
    addItem(product) {
        let existingItem = this.cartItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice = existingItem.price * existingItem.quantity;
            this.cartItems = [...this.cartItems];
        } else {
            this.cartItems = [...this.cartItems, {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
                totalPrice: product.price
            }];
        }
    }

    handleIncrement(event) {
        const id = event.target.dataset.id;
        this.cartItems = this.cartItems.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + 1;
                return { ...item, quantity: newQty, totalPrice: item.price * newQty };
            }
            return item;
        });
    }

    handleDecrement(event) {
        const id = event.target.dataset.id;
        this.cartItems = this.cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                const newQty = item.quantity - 1;
                return { ...item, quantity: newQty, totalPrice: item.price * newQty };
            }
            return item;
        });
    }

    handleRemoveItem(event) {
        const id = event.target.dataset.id;
        this.cartItems = this.cartItems.filter(item => item.id !== id);
    }

    handleCheckout() {
        alert('Proceeding to checkout with total amount: ₹' + this.subtotal);
    }
}