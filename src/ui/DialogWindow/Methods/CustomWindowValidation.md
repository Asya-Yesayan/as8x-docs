---
title: CustomWindowValidation
nav_exclude: true
---

# DialogWindow.CustomWindowValidation(DialogWindowValidationArgs) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected virtual void CustomWindowValidation(DialogWindowValidationArgs eventArg);
```

Կանչվում է երկխոսության պատուհանի վալիդացիայի վերջում՝ ստանդարտ դաշտերի ստուգումից հետո։ Թույլ է տալիս ժառանգ դասերին և **WindowValidation** իրադարձության բաժանորդներին իրականացնել լրացուցիչ ստուգումներ։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| eventArg | DialogWindowValidationArgs | — | Վալիդացիայի արգումենտները։ Ստուգման ձախողման դեպքում **IsValid**-ին պետք է վերագրել **false**, և լրացնել **ErrorMessage** ու **SetFocusTo** դաշտերը։ |
