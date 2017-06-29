from django.views import generic as views


class HomeView(views.TemplateView):
    """Home page view."""
    template_name = 'textploration/home.html'
