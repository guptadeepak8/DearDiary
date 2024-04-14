from django.shortcuts import render
from .models import collection
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from . import bot
from dotenv import load_dotenv
from openai import OpenAI
import os

negative_words = ['Done', 'done']
load_dotenv()
apikey = os.getenv("apikey")
client = OpenAI(api_key=apikey)
cwd = os.getcwd()  # Get the current working directory (cwd)
know_path = cwd + "\\DearDiary\\knowledge_base.json"
conversation_state = {}
user = ""
chat = []
chatss = []
questions = []
temp = []


@csrf_exempt
def get_question(request):
    session_key = request.session.session_key
    if session_key not in conversation_state:
        conversation_state[session_key] = {'question_index': 0, 'responses': [], 'result': True}

    current_index = conversation_state[session_key]['question_index']
    data = json.loads(request.body.decode('utf-8'))
    user_message = data.get('Usermessage', '')
    pointer = current_index - 1
    if user_message.lower() == 'done':
        chatss.append(user_message)
        intp = questions[pointer] + 'user: ' + chatss[pointer] + '\n'
        chat.append(intp)
        conversation_state[session_key]['result'] = False
        return JsonResponse(
            {'message': 'Ok got it Thank-you for Answering the questions Tap generate to generate diary response'})

    if conversation_state[session_key]['result'] and current_index <= 8:
        if request.method == 'POST':
            if current_index == 0:
                response = bot.chat_bot_greetings(user_message, know_path)
                response_data = {'message': response}
                conversation_state[session_key]['question_index'] += 1
                questions.append(response)
                return JsonResponse(response_data)

            elif current_index == 1:
                chatss.append(user_message)
                intp = questions[pointer] + 'user: ' + chatss[pointer] + '\n'
                response = bot.chat_bot(intp, know_path,
                                        'in 10 words create a creative response and ask are you ready to talk about it!')
                response_data = {'message': response}
                conversation_state[session_key]['question_index'] += 1
                questions.append(response)
                chat.append(intp)
                return JsonResponse(response_data)

            elif current_index == 2:
                chatss.append(user_message)
                intp = questions[pointer] + 'user: ' + chatss[pointer] + '\n'
                response = bot.chat_bot(intp, know_path,
                                        'in 10 words create a creative response and ask user about their morning')
                response_data = {'message': response}
                conversation_state[session_key]['question_index'] += 1
                questions.append(response)
                chat.append(intp)
                return JsonResponse(response_data)

            elif current_index == 3:
                chatss.append(user_message)
                intp = questions[pointer] + 'user: ' + chatss[pointer] + '\n'
                response = bot.chat_bot(intp, know_path,
                                        'in 10 words create a creative response and ask user about their afternoon')
                response_data = {'message': response}
                conversation_state[session_key]['question_index'] += 1
                questions.append(response)
                chat.append(intp)
                return JsonResponse(response_data)

            elif current_index == 4:
                chatss.append(user_message)
                intp = questions[pointer] + 'user: ' + chatss[pointer] + '\n'
                response = bot.chat_bot(intp, know_path,
                                        'in 10 words create a creative response and ask user about their evening')
                response_data = {'message': response}
                conversation_state[session_key]['question_index'] += 1
                questions.append(response)
                chat.append(intp)
                return JsonResponse(response_data)

            elif current_index == 5:
                chatss.append(user_message)
                intp = questions[pointer] + 'user: ' + chatss[pointer] + '\n'
                response = bot.chat_bot(intp, know_path,
                                        'in 10 words create a creative response and ask user about their night')
                response_data = {'message': response}
                conversation_state[session_key]['question_index'] += 1
                questions.append(response)
                chat.append(intp)
                return JsonResponse(response_data)

            else:
                chatss.append(user_message)
                intp = questions[pointer] + 'user: ' + chatss[pointer] + '\n'
                print(intp)
                response = bot.chat_bot(intp, know_path,
                                        'in 10 words create a creative response and ask user if they want to share something else ')
                response_data = {'message': response + ' If not enter "Done" to generate your diary entry'}
                conversation_state[session_key]['question_index'] += 1
                questions.append(response)
                chat.append(intp)
                return JsonResponse(response_data)
    else:
        chatss.append(user_message)

        try:
            intp = questions[pointer] + 'user: ' + chatss[pointer] + '\n'
            chat.append(intp)
        finally:
            return JsonResponse(
                {'message': 'Something went wrong please Reload the page and retry'})



@csrf_exempt
def post_response(request):
    session_key = request.session.session_key
    user_response = request.POST.get('response')

    if session_key in conversation_state:
        current_index = conversation_state[session_key]['question_index']
        print(f"Current question index: {current_index}")

        conversation_state[session_key]['responses'].append(user_response)

        updated_index = conversation_state[session_key]['question_index']
        print(f"Updated question index: {updated_index}")

        return JsonResponse({'message': 'Response stored'})
    else:
        return JsonResponse({'error': 'Invalid session key'})


@csrf_exempt
def reset_conversation(request):
    session_key = request.session.session_key

    if session_key in conversation_state:
        conversation_state[session_key] = {'question_index': 0, 'responses': [], 'result': True}
        return JsonResponse({'message': 'Conversation reset'})
    else:
        return JsonResponse({'error': 'Invalid session key'})


def get_records(prompt):
    ans = ''
    for i in chat:
        ans += i
    return JsonResponse({"generateData": ans})
    """result_string = '\n'.join(chat)
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        messages=[
            {"role": "system",
             "content": "You are a personal diary assistant that will create a diary entry in 200 words and title it in first line"},
            {"role": "user", "content": "give a title and create diary data :" + result_string + "/n"}
        ]
    )
    generated_diary_entry = completion.choices[0].message.content
    diary_entry = str(generated_diary_entry)
    return JsonResponse({"generateData": diary_entry})"""


def index(request):
    print(chat)
    records = {
        'user': user,
        'chats': chat,
    }
    collection.insert_one(records)
    return HttpResponse('<h1>app is running...</h1>')


def add_person(request):
    records = {
        'first': 'john',
        'last': 'smith'
    }
    collection.insert_one(records)
    return HttpResponse('<h1>new person is added</h1>')


def get_person(request):
    person = collection.find()
    return HttpResponse(person)
