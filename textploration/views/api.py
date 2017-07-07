from django.views import generic as views


class APIHelpView(views.TemplateView):
    """Home page view."""
    template_name = 'textploration/api-help.template.html'
