// emailService.js
const axios = require("axios");

async function sendEmail({ to, subject, message }) {
  const url = process.env.EMAIL_LAMBDA_URL;
  if (!url) {
    console.error("❌ EMAIL_LAMBDA_URL missing in .env");
    return;
  }

  const payload = { to, subject, message };
  console.log("📦 Sending payload:", payload);

  try {
    const res = await axios({
      method: "post",
      url,
      headers: { "Content-Type": "application/json" },
      data: payload,
    });

    console.log("📨 Lambda email response:", res.data);
    return res.data;
  } catch (err) {
    console.error("❌ Email Lambda Error:", err?.response?.data || err.message);
    console.error("⚠ Status:", err?.response?.status);
    console.error("⚠ Headers:", err?.response?.headers);
    return null;
  }
}

module.exports = { sendEmail };
