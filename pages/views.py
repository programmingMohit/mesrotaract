from django.views.generic import TemplateView


from .models import *

from PIL import Image, ImageDraw, ImageFont
from os import remove
from django.shortcuts import render,HttpResponse
class HomePageView(TemplateView):
	template_name = 'home.html'

class BoardOfDirectorsPageView(TemplateView):
	template_name = 'bod.html'

def QuizPageView(request):
    if request.POST:
        request.session["name"]=request.POST["name"]
        request.session["mail"]=request.POST["mail"]
        
    return render(request,"quiz.html")

class QuizHomePageView(TemplateView):
	template_name = 'quiz-home.html'

def CertificatePageView(request):
    if request.POST:
        request.session["res"]=request.POST["res"]
        data=quiz(
			name=request.session["name"],
			email=request.session["mail"],
			result=request.POST["res"]
		)
        data.save()
    
    return render(request,"certificate.html")

def cert(request):
    name=request.session["name"]
    pos=""
    if int(request.session["res"])<7:
        pos="Good"
    elif int(request.session["res"])<15:
        pos="Excellent"
    else:
        pos="Brilliant"
    font = ImageFont.truetype('century.ttf',60)
    img = Image.open('certificate.jpg')
    image_width = img.width
    draw = ImageDraw.Draw(img)
    text_width, _ = draw.textsize(name, font = font)
    pos_width, _ = draw.textsize(pos, font = font)
    draw.text(
            (
                
                (image_width - text_width) / 2,
                550
            ),
            name,fill=(253, 242, 210),
            font = font        )
    draw.text(
            (
                
                (image_width - pos_width) / 2,
                650
            ),
            pos,fill=(253, 242, 210),
            font = font        )
    im1 = img.convert('RGB')
    im1.save('certificate.pdf')
    response = HttpResponse(open("certificate.pdf","rb").read(),content_type='application/pdf')
    response['Content-Disposition'] = 'attachment;filename=certificate.pdf'
    
    remove("certificate.pdf")
    return response