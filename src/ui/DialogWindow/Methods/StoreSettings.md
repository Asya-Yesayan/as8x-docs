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

Պահպանում է երկխոսության պատուհանի կարգավորումները Windows registry-ում։

### DialogWindow.StoreSettings(RegistryKey) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected virtual void StoreSettings(RegistryKey rk);
```

Տրված **RegistryKey**-ում պահպանում է երկխոսության պատուհանի կարգավորումները։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| rk | RegistryKey | — | Բացված registry բանալին, որում պահպանվում են կարգավորումները։ |
