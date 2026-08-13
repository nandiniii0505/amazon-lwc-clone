import { LightningElement } from 'lwc';

export default class AmazonFooter extends LightningElement {
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    handleLinkClick(event) {
        const linkName = event.target.textContent;
        // Aap chaho toh yahan navigation laga sakti ho ya alert dekh sakti ho
        console.log(`Clicked on: ${linkName}`);
    }
}