from django.shortcuts import render


def landing_page(request):
    context = {

    }
    return render(request, 'landing.html', context)
