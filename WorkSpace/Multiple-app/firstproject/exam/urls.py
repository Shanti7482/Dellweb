from django.urls import path
from .views import testPaper,result

urlpatterns=[
            path('start-test/',testPaper),
            path('get-result/',result),
            
            ]