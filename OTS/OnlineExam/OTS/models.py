from django.db import models

# Create your models here.

class Question(models.Model):
    qno=models.IntegerField(primary_key=True, auto_created=True)
    que=models.CharField(max_length=200)
    option_a=models.CharField(max_length=100)
    option_b=models.CharField(max_length=100)
    option_c=models.CharField(max_length=100)
    option_d=models.CharField(max_length=100)
    answer=models.CharField(max_length=1)

