from django.shortcuts import render

# Create your views here.

def backend(request, *args, **kwargs):
    return render("Hello")