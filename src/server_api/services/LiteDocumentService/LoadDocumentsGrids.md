---
title: LiteDocumentService.LoadDocumentsGrids(List<LiteDocument>, bool) մեթոդ  
---

## Նկարագիր

**Դաս՝** [LiteDocumentService](../LiteDocumentService.md)

```c#
public async Task LoadDocumentsGrids(List<LiteDocument> documents, 
                                     bool lookInArc = false)
```

Բեռնում է նշված փաստաթղթերի աղյուսակները տվյալների պահոցից։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| documents | List<LiteDocument> | - | Փաստաթղթերի ցուցակ։ |
| lookInArc | bool | false | Արխիվացված փաստաթղթերի աղյուսակների բեռնման հայտանիշ։ <br> Պարամետրի **true** արժեքի և հիմնական տվյալների պահոցում փաստաթղթերի աղյուսակների բացակայության դեպքում փորձում է բեռնել արխիվայինից։ |
