import random

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt



def index(request):
    response_data = {'list': random.sample(xrange(100), 10)}
    return JsonResponse(response_data, content_type='application/json')


@csrf_exempt
def run(request):
    response_data = {'input': request.POST['input']}
    return JsonResponse(response_data)