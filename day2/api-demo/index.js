import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
	const completion = await openai.chat.completions.create({
		messages: [{ role: "system", content: "You are a helpful assistant.", }, { role: "user", content: "What is the capital of the United States?" }],
		model: "gpt-3.5-turbo",
		temperature: 0,
		max_tokens: 100,

	});

	console.log(completion.choices[0]);
}


import express from "express";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
	try {
		const { transcript } = req.body;

		const completion = await openai.chat.completions.create({
			messages: [
				{ role: "system", content: "You are a helpful assistant." },
				{ role: "user", content: `Your helpful prompt ... """${transcript}"""` },
			],
			model: "gpt-3.5-turbo",
			temperature: 0.8,
			max_tokens: 100,
		});

		const tokensUsed = completion.usage.total_tokens;
		const cost = (tokensUsed / 1000) * 0.06;

		res.json({
			completion: completion.choices[0],
			tokensUsed: tokensUsed,
			estimatedCost: `$${cost.toFixed(4)}`,
		});
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'An error occurred while processing your request.' });
	}
}
)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


// main();