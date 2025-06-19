document.getElementById("consultForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
  
    fetch("https://script.google.com/macros/s/AKfycbzYBJnVohuom7B37eHOXgd_bprVPioKRSqJQlKyp35xu0SgFg8PiPW3e7r87lnvmPNh-A/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, phone, message })
    })
    .then(res => res.text())
    .then(data => {
      document.getElementById("responseMsg").innerText = "✅ 상담 요청이 접수되었습니다!";
      document.getElementById("consultForm").reset();
    })
    .catch(err => {
      document.getElementById("responseMsg").innerText = "❌ 오류 발생! 다시 시도해주세요.";
      alert("에러 내용: " + err);  // 🔔 에러 팝업으로 확인;
    });
  });
  