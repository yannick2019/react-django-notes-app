from django.urls import path, include

from . import views


urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path('api-auth/', include('rest_framework.urls'))
]
