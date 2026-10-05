document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (e) => {
    const submitButton = form.querySelector("button[type='submit']");
    
    // Disable button khi gửi
    submitButton.disabled = true;
    submitButton.textContent = "Đang gửi...";
    
    // Sau 2 giây, reset lại (hoặc bạn có thể đợi response từ server)
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Gửi ý kiến";
    }, 2000);
  });
});
