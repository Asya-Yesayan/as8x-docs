---
title: RestoreSettings
nav_exclude: true
---

# DialogWindow.RestoreSettings մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [RestoreSettings()](#dialogwindowrestoresettings-մեթոդ) | Վերականգնում է երկխոսության պատուհանի կարգավորումները Windows registry-ից։ |
| [RestoreSettings(RegistryKey)](#dialogwindowrestoresettingsregistrykey-մեթոդ) | Տրված **RegistryKey**-ից վերականգնում է երկխոսության պատուհանի կարգավորումները։  |

### DialogWindow.RestoreSettings() մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected void RestoreSettings();
```

Վերականգնում է երկխոսության պատուհանի կարգավորումները Windows registry-ից։

#### Օրինակ

```c#
// վերականգնում է երկխոսության պատուհանի կարգավորումները Windows registry-ից
RestoreSettings();
```

### DialogWindow.RestoreSettings(RegistryKey) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected virtual void RestoreSettings(RegistryKey rk);
```

Տրված **RegistryKey**-ից վերականգնում է երկխոսության պատուհանի կարգավորումները։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| rk | RegistryKey | — | Բացված registry բանալին, որից վերականգնվում են կարգավորումները։ |

#### Օրինակ

```c#
// Սահմանում է կարգավորումների վերականգնման լրացուցիչ տրամաբանությունը
protected override void RestoreSettings(RegistryKey rk)
{
    base.RestoreSettings(rk);

    // վերականգնում է կարգավորումը տրված registry բանալիից
    var value = rk.GetValue("CustomSetting");
}
```
