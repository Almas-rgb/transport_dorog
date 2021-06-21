from django.urls import path
from .views import (
    PostListView,
    PostDetailView,
    PostCreateView,
    PostUpdateView,
    PostDeleteView,
    UserPostListView
)
from . import views

urlpatterns = [
    path('', PostListView.as_view(), name='blog-home'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/new/', PostCreateView.as_view(), name='post-create'),
    path('post/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    path('about/', views.about, name='blog-about'),
    path('calendar/', views.calendar, name='blog-calendar'),
    path('rukovoditelya/', views.rukovoditelya, name='blog-rukovoditelya'),
    path('biography/', views.biography, name='blog-biography'),
    path('vacancies/', views.vacancies, name='blog-vacancies'),
    path('struktura/', views.struktura, name='blog-struktura'),
    path('contact/', views.contact, name='blog-contact'),
    path('index/', views.index, name='index'),
    path('add/', views.add, name='add'),

]
