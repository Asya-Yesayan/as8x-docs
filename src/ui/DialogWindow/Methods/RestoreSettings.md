---
title: RestoreSettings
nav_exclude: true
---

# DialogWindow.RestoreSettings մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [RestoreSettings()](#dialogwindowrestoresettings-մեթոդ) | Վերականգնում է երկխոսության պատուհանի կարգավորումները Windows registry-ից։ |
| [RestoreSettings(RegistryKey)](#dialogwindowrestoresettingsregistrykey-մեթոդ) | Տրված **RegistryKey**-ից վերականգնում է երկխոսության պատուհանի կարգավորումները։ |

### DialogWindow.RestoreSettings() մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected void RestoreSettings();
```

Վերականգնում է երկխոսության պատուհանի կարգավորումները Windows registry-ից՝ ըստ **RegistryKey** դաշտի։ Եթե **RegistryKey** սահմանված չէ, մեթոդը գործողություն չի կատարում։ Բացված registry բանալին փոխանցում է **RestoreSettings(RegistryKey)** գերբեռնմանը, որպեսզի ժառանգորդ դասերը կարողանան վերականգնել իրենց հատուկ կարգավորումները։

### DialogWindow.RestoreSettings(RegistryKey) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected virtual void RestoreSettings(RegistryKey rk);
```

Տրված **RegistryKey**-ից վերականգնում է երկխոսության պատուհանի կարգավորումները։ Ընդլայնման կետ ժառանգորդ դասերի համար։ Բազային իրականացումը գործողություն չի կատարում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| rk | RegistryKey | — | Բացված registry բանալին, որից վերականգնվում են կարգավորումները։ |
