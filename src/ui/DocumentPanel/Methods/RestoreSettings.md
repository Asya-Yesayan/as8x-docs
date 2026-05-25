---
title: RestoreSettings
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.RestoreSettings մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [RestoreSettings(double, double)](#documentpanelrestoresettingsdouble-double-մեթոդ) | Վերականգնում է փաստաթղթի պատուհանի և աղյուսակների կարգավորումները registry-ից։ |
| [RestoreSettings(double, double, RegistryKey)](#documentpanelrestoresettingsdouble-double-registrykey-մեթոդ) | Սահմանում է փաստաթղթի պատուհանի և աղյուսակների կարգավորումների վերականգնումը տրված registry-ի բանալիից։ |

### DocumentPanel.RestoreSettings(double, double) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected void RestoreSettings(double defaultWidth,
                               double defaultHeight)
```

Վերականգնում է փաստաթղթի պատուհանի և աղյուսակների կարգավորումները registry-ից։ Registry-ի բանալին կազմվում է գլոբալ ընթացիկ օգտագործողի բանալիից՝ [RegistryKey](../Properties/RegistryKey.md) հատկության արժեքի օգտագործմամբ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| defaultWidth | double | - | Պատուհանի լռությամբ լայնությունը՝ registry-ում պահպանված արժեքի բացակայության դեպքում։ |
| defaultHeight | double | - | Պատուհանի լռությամբ բարձրությունը՝ registry-ում պահպանված արժեքի բացակայության դեպքում։ |

### DocumentPanel.RestoreSettings(double, double, RegistryKey) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void RestoreSettings(double defaultWidth,
                                       double defaultHeight,
                                       RegistryKey registryKey)
```

Սահմանում է փաստաթղթի պատուհանի և աղյուսակների կարգավորումների վերականգնումը տրված registry-ի բանալիից։

Մեթոդը չմշակելու դեպքում վերականգնվում են պատուհանի չափերն ու դիրքը և յուրաքանչյուր աղյուսակի դասավորությունն ու սյունակների կարգավորումները։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| defaultWidth | double | - | Պատուհանի լռությամբ լայնությունը՝ registry-ում պահպանված արժեքի բացակայության դեպքում։ |
| defaultHeight | double | - | Պատուհանի լռությամբ բարձրությունը՝ registry-ում պահպանված արժեքի բացակայության դեպքում։ |
| registryKey | RegistryKey | - | Registry-ի բանալին, որից վերականգնվում են կարգավորումները։ |
