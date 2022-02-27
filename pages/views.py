from django.views.generic import TemplateView

class HomePageView(TemplateView):
	template_name = 'home.html'

class BoardOfDirectorsPageView(TemplateView):
	template_name = 'bod.html'
