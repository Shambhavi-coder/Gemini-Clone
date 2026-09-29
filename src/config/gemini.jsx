async function run(prompt) {
    try {
        const response = await fetch("/.netlify/functions/gemini", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Gemini request failed");
        }

        return data.text;
    } catch (error) {
        console.error("Gemini request failed:", error);
        throw error;
    }
}

export default run;