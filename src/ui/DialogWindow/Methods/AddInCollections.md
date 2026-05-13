---
title: AddInCollections
nav_exclude: true
---

# DialogWindow.AddInCollections(Control, LayoutItemWithRequired, bool) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected void AddInCollections(Control xControl, LayoutItemWithRequired li, bool storeValue);
```

Ավելացված դաշտը գրանցում է երկխոսության պատուհանի ներքին հավաքածուներում՝ դաշտերի ցուցակում, դասավորման տարրերի ցուցակում, և (եթե դաշտը աջակցում է արժեքի պահպանումը) պահպանվող արժեքների ցուցակում։ Եթե ակտիվացման ֆոկուսը դեռ սահմանված չէ, ապա այն սահմանվում է տրված դաշտի վրա։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| xControl | Control | — | Գրանցվող դաշտը։ |
| li | LayoutItemWithRequired | — | Դաշտին համապատասխանող դասավորման տարրը։ |
| storeValue | bool | — | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
