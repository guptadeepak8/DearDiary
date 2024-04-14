import json
from difflib import get_close_matches
import random
from dotenv import load_dotenv
from openai import OpenAI
import os

load_dotenv()
apikey = os.getenv("apikey")
client = OpenAI(api_key=apikey)


def generate_gpt_response(user_input, prompt):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        messages= prompt
    )
    return response.choices[0].message.content


def find_intent_in_kb(suggested_intent, knowledge_base):
    return next((intent for intent in knowledge_base['intents'] if intent['name'] == suggested_intent), None)


def load_knowledge_base(file_path):
    with open(file_path, "r") as file:
        data = json.load(file)
    return data


def save_knowledge_base(file_path, data):
    with open(file_path, "w") as file:
        json.dump(data, file, indent=2)


def find_best_match(user_question, intents_data):
    all_questions = [q['question'] for intent in intents_data for q in intent['questions']]
    matches = get_close_matches(user_question.lower(), all_questions, n=2, cutoff=0.9)

    if matches:
        best_match = random.choice(matches)
        intent = next((intent['name'] for intent in intents_data if
                       any(q['question'] == best_match for q in intent['questions'])), None)
        return best_match, intent
    else:
        return None, None


def answer_for_question(intent, knowledge_base):
    matching_intent = next((i for i in knowledge_base['intents'] if i['name'] == intent), None)
    if matching_intent:
        return random.choice(matching_intent['questions'])['answer']
    else:
        return "I'm not sure about that."


def chat_bot_greetings(user_input, know_path):
    knowledge_base = load_knowledge_base(know_path)
    best_match, intent = find_best_match(user_input, knowledge_base['intents'])

    if best_match:
        answer = answer_for_question(intent, knowledge_base)
        return answer
    else:
        # Get GPT-3 response for the user input
        inp_prompt = [
            {"role": "system", "content": "You are a casual greeting chatbot that ask how was your day?"},
            {"role": "user", "content": f"User input: {user_input}"}
    ]
        gpt_response = generate_gpt_response(user_input, inp_prompt)

        existing_intent = find_intent_in_kb('greetings', knowledge_base)
        existing_intent['questions'].append({"question": user_input, "answer": gpt_response})
        save_knowledge_base(know_path, knowledge_base)

        return gpt_response


def chat_bot(user_input, know_path,content):
    knowledge_base = load_knowledge_base(know_path)
    best_match, intent = find_best_match(user_input, knowledge_base['intents'])

    if best_match:
        answer = answer_for_question(intent, knowledge_base)
        return answer
    else:
        # Get GPT-3 response for the user input
        inp_prompt = [
            {"role": "system", "content": content},
            {"role": "user", "content": f"User input: {user_input}"}
    ]
        gpt_response = generate_gpt_response(user_input, inp_prompt)
        return gpt_response


if __name__ == "__main__":
    str = chat_bot_greetings("hii")
    print(str)