from django.views.generic import TemplateView

class HomePageView(TemplateView):
	template_name = 'home.html'

class BoardOfDirectorsPageView(TemplateView):
	template_name = 'bod.html'

class QuizPageView(TemplateView):
	template_name = 'quiz.html'

class QuizHomePageView(TemplateView):
	template_name = 'quiz-home.html'
