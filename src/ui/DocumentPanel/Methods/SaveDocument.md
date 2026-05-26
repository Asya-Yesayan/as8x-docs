---
title: SaveDocument
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.SaveDocument(bool) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected bool SaveDocument(bool isAsDraft = false)
```

Պահպանում է փաստաթուղթը։ ReadOnly ռեժիմում մեթոդը որևէ գործողություն չի կատարում և վերադարձնում է **false**։ 

Պահպանումից հետո փաստաթուղթը վերբեռնվում է բազայից և վահանակը անցնում է խմբագրման ռեժիմի։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| isAsDraft | bool | false | **true** արժեքի դեպքում փաստաթուղթը պահպանվում է որպես սևագիր, **false** արժեքի դեպքում՝ նորմալ ռեժիմում։ |