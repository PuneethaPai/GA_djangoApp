import random

from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('templates/index.html')
    context = {
        'list': random.sample(xrange(100), 10)
    }
    return HttpResponse(template.render(context, request))
