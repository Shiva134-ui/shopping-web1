document.getElementById('pay-btn').addEventListener('click', () => {
    const upiLink = 'upi://pay?pa=8928405063@fam&pn=S%20Madesh&am=10.00&cu=INR';
    window.location.href = upiLink;
});
