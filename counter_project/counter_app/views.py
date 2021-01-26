from django.shortcuts import render, HttpResponse, redirect

def index(request):
    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1
    context = {
        'num_visits' : num_visits
    }
    return render(request, "index.html", context=context)

def destroy(request):
    del request.session['num_visits']	# clears a specific key
    return redirect('/')