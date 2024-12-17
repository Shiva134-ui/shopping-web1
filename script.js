document.getElementById('pay-btn').addEventListener('click', () => {
    const upiLink = 'upi://pay?pa=8928405063@fam&pn=S Madesh&mc=&tid=&tr=&tn=Payment&am=1.00&cu=INR';
    window.location.href = upiLink;
});
