from django.shortcuts import render
from .models import collection
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

conversation_state = {}

question_list = [
    "how was your morning?",
    "does something special or unique happened with you? ",
    "how are you feelin at night?",
    "want to share anything?"
]
chat = []

@csrf_exempt
def get_question(request):
    session_key = request.session.session_key
    chatss = {}
    if session_key not in conversation_state:
        conversation_state[session_key] = {'question_index': 0, 'responses': []}

    current_index = conversation_state[session_key]['question_index']

    if current_index < len(question_list):
        if request.method == 'POST':
            # Assuming the data is sent as JSON
            data = json.loads(request.body.decode('utf-8'))
            user_message = data.get('Usermessage', '')
            chatss[question_list[current_index]] = user_message
            chat.append(chatss)
        current_question = question_list[current_index]
        response_data = {'message': current_question}
        conversation_state[session_key]['question_index'] += 1
        updated_index = conversation_state[session_key]['question_index']
        print(f"Updated question index: {updated_index}")

        return JsonResponse(response_data)
    else:
        return JsonResponse({'message': 'Thank-you for Answering the questions '})

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
        conversation_state[session_key] = {'question_index': 0, 'responses': []}
        return JsonResponse({'message': 'Conversation reset'})
    else:
        return JsonResponse({'error': 'Invalid session key'})



user = "john"
# Create your views here.
"""apikey = "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"
client = OpenAI(api_key=apikey)"""



def get_records(prompt):
    """result_string = '\n'.join(prompt)
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        messages=[
            {"role": "system",
             "content": "You are a personal diary assistant that will create a diary entry in 150 to 200 words"},
            {"role": "user", "content": result_string}
        ]
    )
    generated_diary_entry = completion.choices[0].message.content
    diary_entry = str(generated_diary_entry)
    return diary_entry"""
    return "hahaha"


def get_answers(questions):
    answers = []
    only_ans = []
    for i, question in enumerate(questions):
        ans = input(question + " ")
        if ans == "no":
            continue
        rec = {
            'Ques': question,
            'ans': ans
        }
        answers.append(rec)
        only_ans.append(ans)
        return answers,only_ans


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

