from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
def Menu():
    menu='<a href="http://localhost:8000/testapp/home/">Home</a>\
        <a href="http://localhost:8000/testapp/about/">About</a>\
        <a href="http://localhost:8000/testapp/contact">Contact</a>\
        <a href="http://localhost:8000/testapp/login">Login</a>'
    return menu

def home (request):
    '''menu='<a href="http://localhost:8000/home/">Home</a>\
        <a href="http://localhost:8000/about/">About</a>\
        <a href="http://localhost:8000/contact">Contact</a>\
        <a href="http://localhost:8000/login">Login</a>'
        '''

    S='<i><h1>This is Home Page</h1></i>'
    return HttpResponse(Menu()+S)


def about(request):
    '''menu='<a href="http://localhost:8000/home/">Home</a>\
        <a href="http://localhost:8000/about/">About</a>\
        <a href="http://localhost:8000/contact">Contact</a>\
        <a href="http://localhost:8000/login">Login</a>'
        '''

    S="<i><h1>This is About Page</h1></i>"

    return HttpResponse(Menu()+S) 



def contact(request):
    '''menu='<a href="http://localhost:8000/home/">Home</a>\
        <a href="http://localhost:8000/about/">About</a>\
        <a href="http://localhost:8000/contact">Contact</a>\
        <a href="http://localhost:8000/login">Login</a>'
        '''

    S="<i><h1>This is Contact Page</h1></i>"
    return HttpResponse(Menu()+S)


def login(request):
    '''menu='<a href="http://localhost:8000/home/">Home</a>\
        <a href="http://localhost:8000/about/">About</a>\
        <a href="http://localhost:8000/contact">Contact</a>\
        <a href="http://localhost:8000/login">Login</a>'
        '''
    S="<i><h1>This is Login Page</h1></i>"

    return HttpResponse(Menu()+S)