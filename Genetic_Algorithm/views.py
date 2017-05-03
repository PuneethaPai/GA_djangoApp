import random

from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('templates/index.html')
    context = {
        'new': {'some_key':'some_value'},
        'list': random.sample(xrange(100), 10)
    }
    return HttpResponse(template.render(context, request))


def run(request):
    input_sentence = request.POST['input']
    return HttpResponse("<h1> %s </h1>" % input_sentence)