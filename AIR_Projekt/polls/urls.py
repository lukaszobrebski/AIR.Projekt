from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.LoginUserAPI.as_view()),
    path('register', views.RegisterUserAPI.as_view()),
    path('tasks', views.TaskAPI.as_view()),
    path('history', views.HistoryAPI.as_view()),
    path('notes', views.NoteAPI.as_view())
]