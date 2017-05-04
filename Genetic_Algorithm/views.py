import json
import random

from django.http import JsonResponse
from django.http import HttpResponse


def index(request):
    response_data = {'list': random.sample(xrange(100), 10)}
    return JsonResponse(response_data, content_type='application/json')


def run(request):
    response_data = {'input': request.POST['input']}
    return JsonResponse(response_data)