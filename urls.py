from django.urls import path
from .views import *
urlpatterns = [
	path('', HomePageView.as_view(), name='home'),
	path('bod/', BoardOfDirectorsPageView.as_view(), name='bod'),
	path('quiz/', QuizPageView, name='quiz'),
	path('quiz-home/', QuizHomePageView.as_view(), name='quiz-home'),
	path('certificate/', CertificatePageView, name='certificate'),
 	path('cert/', cert, name='cert'),
]