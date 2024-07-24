# Transforming

Let's explore how to use Large Language Models for text transformation tasks such as language translation, spelling and grammar checking, tone adjustment, and format conversion.

## Translation

ChatGPT is trained with sources in many languages. This gives the model the ability to do translation. Here are some examples of how to use this capability.

```
Translate the following English text to Spanish: \
"Hi, I would like to order a blender"
```

```
Tell me which language this is:
"Combien coûte le lampadaire?"
```

```
Translate the following  text to French and Spanish
and English pirate: \
"I want to order a basketball"
```

```
Translate the following text to Spanish in both the \
formal and informal forms:
'Would you like to order a pillow?'
```

### Universal Translator

Imagine you are in charge of IT at a large multinational e-commerce company. Users are messaging you with IT issues in all their native languages. Your staff is from all over the world and speaks only their native languages. You need a universal translator!

```
user_messages = [
  "La performance du système est plus lente que d'habitude.",
  "Mi monitor tiene píxeles que no se iluminan.",
  "Il mio mouse non funziona",
  "Mój klawisz Ctrl jest zepsuty",
  "我的屏幕在闪烁"
]

Tell me what language each of these are and translate them to english
```

```
 # System performance is slower than normal
   # My monitor has pixels that are not lighting
 # My mouse is not working
    # My keyboard has a broken control key
     # My screen is flashing
```

## Try it yourself!

Try some translations on your own!

## Tone Transformation

Writing can vary based on the intended audience. ChatGPT can produce different tones.

```
Translate the following from slang to a business letter:
'Dude, This is Joe, check out this spec on this standing lamp.'
```

## Format Conversion

ChatGPT can translate between formats. The prompt should describe the input and output formats.

```
data_json = { "resturant employees" :[
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},
    {"name":"Bob", "email":"bob32@gmail.com"},
    {"name":"Jai", "email":"jai87@gmail.com"}
]}

Translate the python dictionary from JSON to an HTML \
table with column headers and title: {data_json}
```

## Spellcheck/Grammar check.

Here are some examples of common grammar and spelling problems and the LLM's response.

To signal to the LLM that you want it to proofread your text, you instruct the model to 'proofread' or 'proofread and correct'.

```
text = [
  "The girl with the black and white puppies have a ball.",
  "Yolanda has her notebook.",
  "Its going to be a long day. Does the car need it’s oil changed?",
  "Their goes my freedom. There going to bring they’re suitcases.",
  "Your going to need you’re notebook.",
  "That medicine effects my ability to sleep. Have you heard of the butterfly affect?",
  "This phrase is to cherck chatGPT for speling abilitty"
]

Proofread and correct the following text
    and rewrite the corrected version. If you don't find
    and errors, just say "No errors found". Don't use
    any punctuation around the text.
```

```
proofread and correct this review:
"""
Got this for my daughter for her birthday cuz she keeps taking \
mine from my room.  Yes, adults also like pandas too.  She takes \
it everywhere with her, and it's super soft and cute.  One of the \
ears is a bit lower than the other, and I don't think that was \
designed to be asymmetrical. It's a bit small for what I paid for it \
though. I think there might be other options that are bigger for \
the same price.  It arrived a day earlier than expected, so I got \
to play with it myself before I gave it to my daughter.
"""
```

```
proofread and correct this review. Make it more compelling.
Ensure it follows APA style guide and targets an advanced reader.
Output in markdown format.
```

## Try it yourself!

https://writingprompts.com/bad-grammar-examples/
