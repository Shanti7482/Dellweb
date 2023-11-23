from django.shortcuts import render
from OTS.models import Question
from django.http import HttpResponseRedirect,HttpResponse
# Create your views here.
def newQuestion(request):
    result=render(request ,'OTS/new_question.html')
    return result


def saveQuestion(request):
    question=Question()
    question.que=request.POST['question']
    question.option_a=request.POST['option_a']
    question.option_b=request.POST['option_b']
    question.option_c=request.POST['option_c']
    question.option_d=request.POST['option_d']
    question.answer=request.POST['answer']
    question.save()
    return HttpResponseRedirect('http://localhost:8000/OTS/view-questions/')



def viewQuestions(request):
    questions=Question.objects.all()
    result=render(request,'OTS/view_question.html',{'questions':questions})

    return result



def editQuestion(request):
    q=request.GET['qno']
    question=Question.objects.get(qno=int(q))
    result=render(request,'OTS/edit_question.html',{'question':question})

    return result

def editSaveQuestion(request):
    question=Question() 
    question.qno=request.POST['qno']
    question.que=request.POST['question']
    question.option_a=request.POST['option_a']
    question.option_b=request.POST['option_b']
    question.option_c=request.POST['option_c']
    question.option_d=request.POST['option_d']
    question.answer=request.POST['answer']
    question.save()

    return HttpResponseRedirect('http://localhost:8000/OTS/view-questions/')



def deleteQuestion(request):
    q=request.GET['qno']
    question=Question.objects.filter(qno=int(q))
    question.delete()
    return HttpResponseRedirect('http://localhost:8000/OTS/view-questions/')
