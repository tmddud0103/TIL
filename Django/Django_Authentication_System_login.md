# Login

![image-20210915102338370](photo/image-20210915102338370.png)

![image-20210915102348990](photo/image-20210915102348990.png)

![image-20210915102503717](photo/image-20210915102503717.png)

```python
# views.py
from django.shortcuts import redirect, render
from django.contrib.auth import login as auth_login
from django.contrib.auth.forms import AuthenticationForm

# Create your views here.
def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            # 로그인!
            auth_login(request, form.get_user())
            return redirect('articles:index')

    else:
        form = AuthenticationForm
    context = {
        'form' : form
    }
    return render(request, 'accounts/login.html', context)
```



![image-20210915102620824](photo/image-20210915102620824.png)



## Authemtication data in templates

![image-20210915103806773](photo/image-20210915103806773.png)

![image-20210915103945603](photo/image-20210915103945603.png)

![image-20210915103959895](photo/image-20210915103959895.png)

![image-20210915104017810](photo/image-20210915104017810.png)

![image-20210915104028483](photo/image-20210915104028483.png)



# Logout

### 로그아웃은 Session을 Delete하는 로직과 같음

![image-20210915104424211](photo/image-20210915104424211.png)

![image-20210915104444320](photo/image-20210915104444320.png)






