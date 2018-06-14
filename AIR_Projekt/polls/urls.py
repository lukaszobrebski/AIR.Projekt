from django.urls import path

from . import views

urlpatterns = [
    #path('', views.index, name='index'),
    path('login', views.LoginUserAPI.as_view()),
    path('register', views.RegisterUserAPI.as_view()),
    path('tasks', views.TasksAPI.as_view()),
    path('history', views.HistoryAPI.as_view()),
    path('notes', views.NotesAPI.as_view())
]
