from django.urls import path
from .views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    path("",store,name="store"),
    path("cart/",cart,name="cart"),
    path("checkout/",checkout,name="checkout"),
    path("update_item/",update_item,name="update_item"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)