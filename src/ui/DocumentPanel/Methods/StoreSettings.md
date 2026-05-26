---
title: StoreSettings
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.StoreSettings մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [StoreSettings()](#documentpanelstoresettings-մեթոդ) | Պահպանում է փաստաթղթի պատուհանի և աղյուսակների կարգավորումները Windows registry-ում։ |
| [StoreSettings(RegistryKey)](#documentpanelstoresettingsregistrykey-մեթոդ) | Սահմանում է փաստաթղթի պատուհանի և աղյուսակների կարգավորումների պահպանումը տրված Windows registry-ի բանալիում։ |

### DocumentPanel.StoreSettings() մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected void StoreSettings()
```

Պահպանում է փաստաթղթի պատուհանի և աղյուսակների կարգավորումները Windows registry-ում։ [RegistryKey](../Properties/RegistryKey.md) հատկության դատարկ արժեքի դեպքում մեթոդը որևէ գործողություն չի կատարում։

### DocumentPanel.StoreSettings(RegistryKey) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void StoreSettings(RegistryKey regKey)
```

Սահմանում է փաստաթղթի պատուհանի և աղյուսակների կարգավորումների պահպանումը տրված Windows registry-ի բանալիում։

Մեթոդը չմշակելու դեպքում պահպանվում են պատուհանի չափերն ու դիրքը և յուրաքանչյուր աղյուսակի դասավորությունն ու սյունակների կարգավորումները։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| regKey | RegistryKey | - | Windows registry-ի բանալին, որում պահպանվում են կարգավորումները։ |
