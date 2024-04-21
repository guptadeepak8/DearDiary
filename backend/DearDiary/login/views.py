from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class UserRegister(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        if username and email and password:
            if User.objects.filter(username=username).exists():
                return Response({'error': 'Username already exists'})
            elif User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'})
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()
                return Response({'message': 'User created successfully'})
        else:
            return Response({'error': 'All fields are required'})
        
    def get(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'User logged in successfully'})
        else:
            return Response({'error': 'Invalid credentials'})
    