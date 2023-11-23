from django.urls import path
from .views import *

urlpatterns=[
    path('new-question/',newQuestion),
    path('save-question/',saveQuestion),
    path('view-questions/',viewQuestions),
    path('edit-question/',editQuestion),
    path('edit-save-question/',editSaveQuestion),
    path('delete-question/',deleteQuestion),
]