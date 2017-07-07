from django.views import generic as views


class IndexView(views.TemplateView):
    """Home page view."""
    template_name = 'textploration/index.template.html'
