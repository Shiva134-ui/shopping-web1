document.getElementById('pay-btn').addEventListener('click', () => {
    const upiLink = 'upi://pay?pa=vijithulasi8@okhdfcbank&pn=Shiva%20Nadar&am=1.00&cu=INR';
    window.location.href = upiLink;
});
