from django.http import HttpResponse
from django.db import connection
from django.shortcuts import render

from polls.models import Dupa


def index(request):
    dupas_list = Dupa.objects.all()
    return HttpResponse(dupas_list[0].login)


def login(request):
    return HttpResponse("Login Form")
