
from django.core.serializers import serialize
from django.db.models import Model
from django.http import HttpResponse
from django.db import connection
from django.shortcuts import render
#from django.views.generics import *
from rest_framework import generics
from rest_framework.views import APIView
from django.http import *

from AIR_Projekt.workflow import generatRDDs
from polls.helpers import LazyEncoder
from polls.models import *
from polls.serializers import *

"""
path('', views.index, name='index'),
path('login', views.LoginUserAPI.as_view()),
path('register', views.RegisterUserAPI.as_view()),
path('tasks', views.TasksAPI.as_view()),
path('history', views.HistoryAPI.as_view()),
path('notes', views.NotesAPI.as_view())
"""
class LoginUserAPI(APIView):
    def post(self, request): 	
        userNameRequest = request.POST.get('user_name')
        userPasswordRequest = request.POST.get('pass_field')
    	   
        if User.objects.filter(user_name = userNameRequest, pass_field = userPasswordRequest).exists():
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)#HttpResponseNotFound     
    	
      	
class RegisterUserAPI(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class TasksAPI(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
class HistoryAPI(APIView):
    queryset = TaskHist.objects.all()
    serializer_class = TaskHistorySerializer
    
class NotesAPI(APIView):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer
    
