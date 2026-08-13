import { LightningElement } from 'lwc';

export default class OrderHistoryModal extends LightningElement {
    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}