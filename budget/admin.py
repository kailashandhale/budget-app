from django.contrib import admin
from .models import Project,Category,Expenses

admin.site.register(Project)
admin.site.register(Expenses)
admin.site.register(Category)

