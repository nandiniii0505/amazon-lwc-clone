import { LightningElement, track } from 'lwc';

export default class StoreHub extends LightningElement {
    @track userEmail = '';
    @track itemName = '';
    @track savedItems = [];

    handleEmailChange(event) {
        this.userEmail = event.target.value;
    }

    handleSetAlert() {
        if (!this.userEmail.trim()) {
            alert('Please enter a valid email address first!');
            return;
        }
        alert(`Success! Price drop alert activated for: ${this.userEmail}`);
        this.userEmail = '';
    }

    handleNameChange(event) {
        this.userEmailName = event.target.value; // tracking input
        this.itemName = event.target.value;
    }

    handleAddItem() {
        if (!this.itemName.trim()) {
            alert('Please enter a valid product name!');
            return;
        }

        const newItem = {
            id: Date.now(),
            name: this.itemName.trim()
        };

        this.savedItems = [...this.savedItems, newItem];
        this.itemName = '';
    }

    handleDeleteItem(event) {
        const idToDelete = Number(event.target.dataset.id);
        this.savedItems = this.savedItems.filter(item => item.id !== idToDelete);
    }

    get hasItems() {
        return this.savedItems.length > 0;
    }
}