from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', UserRegister.as_view(), name='login'),
 
]