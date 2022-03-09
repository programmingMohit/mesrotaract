from django.urls import path
from .views import HomePageView, BoardOfDirectorsPageView, QuizPageView

urlpatterns = [
	path('', HomePageView.as_view(), name='home'),
	path('bod/', BoardOfDirectorsPageView.as_view(), name='bod'),
	path('quiz/', QuizPageView.as_view(), name='quiz'),
]