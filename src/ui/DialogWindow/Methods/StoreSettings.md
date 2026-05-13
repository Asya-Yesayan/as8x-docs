---
title: StoreSettings
nav_exclude: true
---

# DialogWindow.StoreSettings մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [StoreSettings()](#dialogwindowstoresettings-մեթոդ) | Պահպանում է երկխոսության պատուհանի կարգավորումները Windows registry-ում։ |
| [StoreSettings(RegistryKey)](#dialogwindowstoresettingsregistrykey-մեթոդ) | Տրված **RegistryKey**-ում պահպանում է երկխոսության պատուհանի կարգավորումները։ |

### DialogWindow.StoreSettings() մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected void StoreSettings();
```

Պահպանում է երկխոսության պատուհանի կարգավորումները Windows registry-ում՝ ըստ **RegistryKey** դաշտի։ Եթե **RegistryKey** սահմանված չէ, մեթոդը գործողություն չի կատարում։ Ստեղծված registry բանալին փոխանցում է **StoreSettings(RegistryKey)** գերբեռնմանը, որպեսզի ժառանգորդ դասերը կարողանան պահպանել իրենց հատուկ կարգավորումները։

### DialogWindow.StoreSettings(RegistryKey) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected virtual void StoreSettings(RegistryKey rk);
```

Տրված **RegistryKey**-ում պահպանում է երկխոսության պատուհանի կարգավորումները։ Ընդլայնման կետ ժառանգորդ դասերի համար։ Բազային իրականացումը գործողություն չի կատարում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| rk | RegistryKey | — | Բացված registry բանալին, որում պահպանվում են կարգավորումները։ |
