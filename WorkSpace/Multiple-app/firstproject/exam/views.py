from django.shortcuts import render

# Create your views here.
#from django.http import HttpResponse
"""def Menu():
    menu='<a href="http://localhost:8000/exam/start-test/">Start</a>
          <a href="http://localhost:8000/exam/get-result/">Result</a> '
    return menu"""

def testPaper(request):
    """q='<h3>Who Developed by C Language</h3><br>'
    a='<input type="radio" value="a" name="option">Gudo Van rossum<br>'
    b='<input type="radio" value="b" name="option">Denish Ritchie<br>'
    c='<input type="radio" value="c" name="option">Ken Thompson<br>'
    d='<input type="radio" value="d" name="option">Bjarne Stroustup<br>'
    but='<input type="submit" value="Submit">'"""
    #S=q+a+b+c+d+but
    #return HttpResponse(Menu()+S)
    q='Who Developed by C Language'
    a='Gudo Van rossum'
    b='Denish Ritchie'
    c='Ken Thompson'
    d='Bjarne Stroustup'
    #es sab ko ek dictionary me dalna hai or ese render ke third variable
    # ke roop me pass kareange

    d1={
        'que':q,
        'a':a,
        'b':b,
        'c':c,
        'd':d
    }

    #res= render(request,'exam/test_template.html')
    res=render(request,'exam/test_template.html',d1)
    return res
def result(request):
   # S='<h1>result page</h1>'

    #return HttpResponse(Menu()+S)
    res=render(request,'exam/result_template.html')
    return res
