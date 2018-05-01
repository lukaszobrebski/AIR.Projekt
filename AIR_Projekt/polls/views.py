from django.core.serializers import serialize
from django.db.models import Model
from django.http import HttpResponse
from django.db import connection
from django.shortcuts import render

from AIR_Projekt.workflow import generatRDDs
from polls.helpers import LazyEncoder
from polls.models import Dupa, Notes


def index(request):
    dupas_list = Dupa.objects.all()
    jObject = serialize('json', dupas_list, cls=LazyEncoder)
    return HttpResponse(generatRDDs())


def login(request):
    return HttpResponse("Login Form")

