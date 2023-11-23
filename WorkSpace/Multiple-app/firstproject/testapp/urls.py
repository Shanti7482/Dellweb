from django.urls import path
from .views import home,about,contact,login

urlpatterns=[
    path('home/',home),
    path('about/',about),
    path('contact/',contact),
    path('login/',login),
]