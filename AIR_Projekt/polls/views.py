from django.core.serializers import serialize
from django.db.models import Model
from django.http import HttpResponse
from django.db import connection
from django.shortcuts import render

from AIR_Projekt.workflow import generatRDDs
from polls.helpers import LazyEncoder
from polls.models import Dupa, Notes
"""
  path('', views.index, name='index'),
    path('login', views.LoginUserAPI.as_view()),
    path('register', views.RegisterUserAPI.as_view()),
    path('tasks', views.TasksAPI.as_view()),
    path('history', views.HistoryAPI.as_view()),
    path('notes', views.NotesAPI.as_view())
"""

class LoginUserAPI(APIView):
	pass
	