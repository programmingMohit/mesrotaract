from django.urls import path
from .views import HomePageView, BoardOfDirectorsPageView, QuizPageView, QuizHomePageView, CertificatePageView

urlpatterns = [
	path('', HomePageView.as_view(), name='home'),
	path('bod/', BoardOfDirectorsPageView.as_view(), name='bod'),
	path('quiz/', QuizPageView.as_view(), name='quiz'),
	path('quiz-home/', QuizHomePageView.as_view(), name='quiz-home'),
	path('certificate/', CertificatePageView.as_view(), name='certificate'),
]