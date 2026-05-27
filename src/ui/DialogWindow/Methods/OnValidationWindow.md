---
title: OnValidationWindow
nav_exclude: true
---

# DialogWindow.OnValidationWindow(bool) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected void OnValidationWindow(bool okPressed);
```

Իրականացնում է երկխոսության պատուհանի վալիդացիան **OK** կամ **Next** կոճակը սեղմելիս և կատարում փակման համապատասխան գործողությունները։ Հաջորդաբար բոլոր դաշտերի վրա կանչվում է **DoValidate** մեթոդը։ Հաջող վալիդացիայի դեպքում կանչվում է [CustomWindowValidation](CustomWindowValidation.md) մեթոդը, պահպանվում են արժեքները ([OnStoreActualValues](OnStoreActualValues.md)), կարգավորումները ([StoreSettings](StoreSettings.md)) և, կախված **okPressed** պարամետրից, փակվում է երկխոսության պատուհանը կամ կանչվում **NextPressed** իրադարձությունը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| okPressed | bool | — | **true**՝ եթե սեղմվել է **OK** կոճակը, **false**՝ եթե սեղմվել է **Next** կոճակը։ |

## Օրինակ

```c#
// OK կոճակի սեղմման դեպքում իրականացնում է վալիդացիան և փակում պատուհանը
OnValidationWindow(okPressed: true);
```
