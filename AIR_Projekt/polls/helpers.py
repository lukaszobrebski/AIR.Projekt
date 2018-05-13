from django.core.serializers.json import DjangoJSONEncoder
from django.db.models import Model


class LazyEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, Model):
            return str(obj)
        return super().default(obj)