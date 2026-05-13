---
title: LoadBrowseParametersInfo
nav_exclude: true
---

# DialogWindow.LoadBrowseParametersInfo(Dictionary&lt;string, object&gt;) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public void LoadBrowseParametersInfo(Dictionary<string, object> parametersInfo);
```

Տրված բառարանից բեռնում է երկխոսության պատուհանի դաշտերի արժեքները։ Բառարանի յուրաքանչյուր բանալի համարվում է դաշտի ներքին անուն, իսկ համապատասխան արժեքը նշանակվում է այդ դաշտին։ Բառարանի մեջ բացակայող կամ ոչ համապատասխան բանալիները անտեսվում են։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| parametersInfo | Dictionary&lt;string, object&gt; | — | Բառարան, որտեղ բանալին դաշտի ներքին անունն է, իսկ արժեքը՝ բեռնվող արժեքը։ |
