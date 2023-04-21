from django.contrib import admin

from .models import *

class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'valor', 'estoque')

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nome', 'sobrenome', 'email')

admin.site.register(Produto, ProdutoAdmin)
admin.site.register(Cliente, ClienteAdmin)