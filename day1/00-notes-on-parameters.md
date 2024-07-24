### Understanding LLM Parameters

#### 3.1 Tokens: What They Are and How They Work

**Notes:**

- **Definition:**

  - Tokens are the basic units of text that the model processes. They can be as short as one character or as long as one word, depending on the language and tokenization method.
  - In English, tokens typically correspond to words and punctuation.

- **Tokenization:**

  - The process of converting text into tokens.
  - Examples of tokenization: "Hello, world!" might be tokenized as ["Hello", ",", "world", "!"].

- **Importance:**
  - Tokens determine the length of input that the model can handle.
  - The cost of using LLMs is often based on the number of tokens processed.

**Visuals/Diagrams:**

- Diagram showing the process of tokenization.
- Examples of sentences broken down into tokens.

**Exercise:**

1. **Tokenization Practice:**
   - Provide a text and ask participants to manually tokenize it.
   - Use an online tokenizer tool (e.g., OpenAI's tokenizer) to check their results.
   - Discuss any discrepancies and reasons for them.

#### 3.2 Temperature: Controlling Randomness

**Notes:**

- **Definition:**

  - Temperature is a parameter that controls the randomness of the model's output.
  - Lower temperatures make the output more deterministic (e.g., 0.2), while higher temperatures make it more random (e.g., 0.8).

- **Impact on Output:**
  - High temperature (e.g., 0.9): The model takes more risks and generates more creative or varied responses.
  - Low temperature (e.g., 0.2): The model produces more predictable and coherent responses.

**Visuals/Diagrams:**

- Graph showing how temperature affects the probability distribution of possible outputs.
- Examples of model outputs with different temperature settings.

**Exercise:** 2. **Temperature Tuning:**

- Provide a prompt and generate outputs with different temperature settings (e.g., 0.2, 0.5, 0.8).
- Ask participants to compare the outputs and discuss how temperature affected the responses.
- Experiment with finding the optimal temperature for different types of prompts (e.g., storytelling vs. factual responses).

#### 3.3 Other Parameters: Max Tokens, Top-p, etc.

**Notes:**

- **Max Tokens:**

  - Sets the maximum number of tokens the model can generate in the response.
  - Useful for controlling the length of the output.

- **Top-p (Nucleus Sampling):**

  - Top-p sampling (nucleus sampling) considers the smallest set of tokens whose cumulative probability is at least p.
  - Balances between deterministic and stochastic outputs.

- **Other Parameters:**
  - **Top-k Sampling:** Limits the model to considering the top-k most likely next tokens.
  - **Frequency Penalty:** Reduces the likelihood of the model repeating the same token.
  - **Presence Penalty:** Increases the likelihood of the model including new tokens.

**Visuals/Diagrams:**

- Explanation and examples of max tokens, top-p, top-k, frequency penalty, and presence penalty.
- Comparison charts showing the effects of different parameter settings.

**Exercise:** 3. **Parameter Tuning:**

- Provide a prompt and let participants experiment with different max tokens, top-p, and top-k settings.
- Analyze how these parameters change the model's output.
- Use a structured worksheet to record results and observations.

#### 3.4 Practical Exercises with Parameter Tuning

**Notes:**

- **Objective:**
  - Help participants understand the practical effects of different parameters on the model's output.
  - Encourage hands-on experimentation to solidify their understanding.

**Exercises:**

1. **Prompt and Response Tuning:**

   - Generate responses with different combinations of temperature, max tokens, top-p, and top-k for one or more of the following:

### Example Prompt 1: Storytelling

**Prompt:**
"Continue the story: Once upon a time in a faraway kingdom, there lived a young prince who..."

**Response Tuning:**

1. **Low Temperature (0.2), Medium Max Tokens (50), High Top-p (0.9), Medium Top-k (50)**
2. **High Temperature (0.9), Medium Max Tokens (50), High Top-p (0.9), Low Top-k (20)**
3. **Medium Temperature (0.5), High Max Tokens (100), Medium Top-p (0.7), High Top-k (100)**

**Discussion Points:**

- Which response was the most creative?
- Which response stayed closest to the prompt's theme?
- How did the variation in temperature affect the creativity and coherence of the responses?

### Example Prompt 2: Technical Explanation

**Prompt:**
"Explain how a neural network learns to recognize images."

**Response Tuning:**

1. **Low Temperature (0.2), Medium Max Tokens (75), High Top-p (0.95), Medium Top-k (40)**
2. **Medium Temperature (0.5), Low Max Tokens (50), Medium Top-p (0.7), Medium Top-k (50)**
3. **High Temperature (0.8), High Max Tokens (100), Low Top-p (0.6), High Top-k (100)**

**Discussion Points:**

- Which response was the most detailed?
- Which response was the most accurate?
- How did the variation in top-p and top-k affect the precision and depth of the responses?

### Example Prompt 3: Conversational Agent

**Prompt:**
"Hi there! How can I help you today?"

**Response Tuning:**

1. **Medium Temperature (0.5), Medium Max Tokens (30), High Top-p (0.9), Medium Top-k (50)**
2. **High Temperature (0.9), Low Max Tokens (20), Medium Top-p (0.8), Low Top-k (20)**
3. **Low Temperature (0.2), High Max Tokens (40), High Top-p (0.95), High Top-k (100)**

**Discussion Points:**

- Which response felt the most natural?
- Which response provided the best customer service experience?
- How did the variation in max tokens and temperature affect the responses' friendliness and usefulness?

### Example Prompt 4: Creative Writing

**Prompt:**
"Write a poem about the beauty of nature."

**Response Tuning:**

1. **High Temperature (0.9), Medium Max Tokens (50), High Top-p (0.9), Low Top-k (20)**
2. **Low Temperature (0.3), High Max Tokens (70), Medium Top-p (0.7), High Top-k (100)**
3. **Medium Temperature (0.5), Medium Max Tokens (50), High Top-p (0.95), Medium Top-k (50)**

**Discussion Points:**

- Which response was the most poetic and expressive?
- Which response had the best structure and flow?
- How did the variation in temperature and top-k affect the creativity and coherence of the poems?

### Example Prompt 5: Opinion Generation

**Prompt:**
"What are the benefits and drawbacks of remote work?"

**Response Tuning:**

1. **Medium Temperature (0.5), Medium Max Tokens (60), High Top-p (0.9), Medium Top-k (50)**
2. **Low Temperature (0.3), High Max Tokens (80), Medium Top-p (0.7), High Top-k (100)**
3. **High Temperature (0.8), Medium Max Tokens (60), Low Top-p (0.6), Low Top-k (30)**

**Discussion Points:**

- Which response provided the most balanced perspective?
- Which response included the most unique insights?
- How did the variation in temperature and max tokens affect the depth and breadth of the responses?

2. **Scenario-Based Tuning:**

- Give participants different scenarios (e.g., generating a poem, answering a factual question, summarizing a paragraph).
- Ask them to tune the parameters to get the best output for each scenario.
- Share and discuss their results with the group.

3. **Creative vs. Factual Outputs:**

   - Provide a creative writing prompt and a factual question.
   - Have participants adjust the temperature and other parameters to suit each type of prompt.
   - Discuss how parameter settings differ for creative vs. factual outputs.

4. **Group Discussion:**
   - Split participants into small groups and assign each group a specific parameter to explore in-depth.
   - Each group presents their findings on how their parameter affects the model's behavior and shares examples.

**Summary:**

- Recap the importance of understanding and tuning LLM parameters.
- Emphasize the balance between deterministic and stochastic outputs depending on the use case.
- Encourage continuous experimentation to master prompt engineering and parameter tuning.
