/// RemoveWarningToast.js
const myInterval = setInterval(ToastClean, 100);
function ToastClean() {
    const toasts = document.querySelectorAll('.toast-root');
    if (toasts.length > 0) {
        toasts.forEach(toast => toast.remove());
        console.log("Warning toast removed!");
        clearInterval(myInterval);
    } else {
        console.log("tick");
    }
}
