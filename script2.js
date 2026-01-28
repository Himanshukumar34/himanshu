const aiTools = [
    { name: "ChatGPT", url: "https://chat.openai.com" },
    { name: "Grok", url: "https://x.ai" },
    { name: "Gemini", url: "https://gemini.google.com" },
    { name: "Claude", url: "https://claude.ai" },
    { name: "Perplexity", url: "https://www.perplexity.ai" },
    { name: "LLaMA", url: "https://ai.meta.com/llama/" },
    { name: "Cursor", url: "https://cursor.sh" },
    { name: "DeepSeek", url: "https://www.deepseek.com" },
    { name: "gemini", url:"https://gemini.google.com" }
];

const content = document.getElementById("content");

aiTools.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${tool.name}</h2>
        <span>Click to Open</span>
    `;

    card.addEventListener("click", () => {
        window.open(tool.url, "_blank");
    });

    content.appendChild(card);
});
