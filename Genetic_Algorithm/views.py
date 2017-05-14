from __future__ import print_function
import random

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from src.genetic_algorithm_app import StartApp


def index(request):
    response_data = {'list': random.sample(xrange(100), 10)}
    return JsonResponse(response_data, content_type='application/json')


@csrf_exempt
def run(request):
    app = StartApp(population_size=500, kill_percentage=40, mutate_percentage=20)
    target_string = request.POST['input']
    result = app.run(target_string=target_string)
    response_data = {'result': result}
    return JsonResponse(response_data)
