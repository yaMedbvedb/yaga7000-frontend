const API_URL = "https://yaga7000-backend.onrender.com/api/ask";

async function askYaga() {
  const input = document.getElementById("userInput");
  const output = document.getElementById("response");

  const message = input.value.trim();
  if (!message) {
    output.innerText = "🧙‍♀️ Яга ждёт вопрос...";
    return;
  }

  output.innerText = "✨ Яга размышляет...";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error("Ошибка связи с миром духов");
    }

    const data = await response.json();
   output.innerText = JSON.stringify(data, null, 2);


  } catch (error) {
    output.innerText = "❌ Яга потеряла связь с миром. Попробуй позже.";
  }
}
