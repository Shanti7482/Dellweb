from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def loginpage (request):
    a='Hi,Abhishek'
    #return HttpResponse(a)
    p={'ab':a}
    res=render(request,'loginpage/login.html',p)
    return res
def about(request):
    b='<h1>About Page</h1>'

    res=render(request,'loginpage/about.html')
    return res