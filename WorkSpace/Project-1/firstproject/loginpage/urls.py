from django.urls import path
from .views import*

urlpatterns = [
    path('login/',loginpage),
    path('about/',about),
]