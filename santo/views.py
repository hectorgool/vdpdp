# - * - Coding: utf -8 - * -
from django.http import HttpResponse
from django.shortcuts import render


# View for index page.
def index (request) :
	return render(request, 'en/public/index.html')