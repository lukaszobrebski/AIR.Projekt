import sys

from django.core.serializers import serialize
from pyspark.python.pyspark.shell import sc

from polls.helpers import LazyEncoder
from polls.models import Dupa, Notes


def generatRDDs(): #array_of_words_to_find

    # Getting data from database
    dupas_list = Dupa.objects.all()
    jObject = serialize('json', dupas_list, cls=LazyEncoder)

    # create RDDs
    int_rdd = sc.parallelize(jObject)
    return int_rdd.count()
