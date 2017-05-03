import random

from django.http import JsonResponse


def index(request):
    response_data = {'list': random.sample(xrange(100), 10)}
    return JsonResponse(response_data)


def run(request):
    response_data = {'input': request.POST['input']}
    return JsonResponse(response_data)