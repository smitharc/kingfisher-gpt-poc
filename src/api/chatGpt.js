export const searchRequest = async (search, query) => {
  const apiKey = process.env.VUE_APP_CHAT_GPT_API_KEY;

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `${query} ${search}`,
      max_tokens: 200,
      n: 1,
      stop: null,
      temperature: 0.7,
    }),
  });

  console.log("response", response);

  const data = await response.json();
  console.log(data);
  return data.choices[0].text;
};
