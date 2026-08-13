import { LightningElement, track } from 'lwc';

export default class UserAuthModal extends LightningElement {
    @track isLogin = true;

    @track loginData = { loginId: '', password: '' };
    @track loginErrors = { loginId: '', password: '', loginIdClass: '', passwordClass: '' };

    @track regData = { name: '', contact: '', password: '' };
    @track regErrors = { name: '', contact: '', password: '', nameClass: '', contactClass: '', passwordClass: '' };

    get loginTabClass() {
        return `tab-btn ${this.isLogin ? 'active' : ''}`;
    }

    get registerTabClass() {
        return `tab-btn ${!this.isLogin ? 'active' : ''}`;
    }

    showLogin() {
        this.isLogin = true;
        this.clearErrors();
    }

    showRegister() {
        this.isLogin = false;
        this.clearErrors();
    }

    clearErrors() {
        this.loginErrors = { loginId: '', password: '', loginIdClass: '', passwordClass: '' };
        this.regErrors = { name: '', contact: '', password: '', nameClass: '', contactClass: '', passwordClass: '' };
    }

    handleLoginInput(e) {
        const field = e.target.name;
        const val = e.target.value;
        this.loginData = { ...this.loginData, [field]: val };
    }

    handleRegInput(e) {
        const field = e.target.name;
        const val = e.target.value;
        this.regData = { ...this.regData, [field]: val };
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        let errors = { loginId: '', password: '', loginIdClass: '', passwordClass: '' };
        let isValid = true;

        if (!this.loginData.loginId || !this.loginData.loginId.trim()) {
            errors.loginId = 'Enter your email or mobile phone number';
            errors.loginIdClass = 'input-error';
            isValid = false;
        }

        if (!this.loginData.password) {
            errors.password = 'Enter your password';
            errors.passwordClass = 'input-error';
            isValid = false;
        }

        this.loginErrors = errors;

        if (isValid) {
            let namePart = this.loginData.loginId.split('@')[0];
            let userName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
            this.dispatchSuccessEvent(userName);
        }
    }

    handleRegisterSubmit(e) {
        e.preventDefault();
        let errors = { name: '', contact: '', password: '', nameClass: '', contactClass: '', passwordClass: '' };
        let isValid = true;

        if (!this.regData.name || !this.regData.name.trim()) {
            errors.name = 'Please enter your full name';
            errors.nameClass = 'input-error';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!this.regData.contact || !this.regData.contact.trim()) {
            errors.contact = 'Enter email or 10-digit mobile number';
            errors.contactClass = 'input-error';
            isValid = false;
        } else if (!emailRegex.test(this.regData.contact) && !phoneRegex.test(this.regData.contact)) {
            errors.contact = 'Enter a valid email address or 10-digit phone number';
            errors.contactClass = 'input-error';
            isValid = false;
        }

        if (!this.regData.password || this.regData.password.length < 6) {
            errors.password = 'Passwords must be at least 6 characters long';
            errors.passwordClass = 'input-error';
            isValid = false;
        }

        this.regErrors = errors;

        if (isValid) {
            this.dispatchSuccessEvent(this.regData.name);
        }
    }

    dispatchSuccessEvent(userName) {
        this.dispatchEvent(new CustomEvent('loginsuccess', {
            detail: { userName: userName }
        }));
    }

    handleClose() {
        this.dispatchEvent(new CustomEvent('closeauth'));
    }
}