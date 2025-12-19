---
title: LiteDocumentService.LoadGrids մեթոդ  
---

## LiteDocumentService.LoadGrids(LiteDocument, bool) մեթոդ 

### Նկարագիր

**Դաս՝** [LiteDocumentService](../../LiteDocumentService.md)

```c#
public Task LoadGrids(LiteDocument document, 
                      bool lookInArc = false);
```

Բեռնում է փաստաթղթի աղյուսակները տվյալների պահոցից և ավելացնում նշված փաստաթղթում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| document | LiteDocument | - | Փաստաթղթի օբյեկտ։ |
| lookInArc | bool | false | Արխիվացված փաստաթղթի աղյուսակների բեռնման հայտանիշ։ <br> Պարամետրի **true** արժեքի և հիմնական տվյալների պահոցում փաստաթղթի աղյուսակների բացակայության դեպքում փորձում է բեռնել արխիվայինից։ |

## LiteDocumentService.LoadGrids(List&lt;LiteDocument&gt;, bool) մեթոդ 

### Նկարագիր

**Դաս՝** [LiteDocumentService](../../LiteDocumentService.md)

```c#
public async Task LoadGrids(List<LiteDocument> documents, 
                            bool lookInArc = false)
```

Բեռնում է նշված փաստաթղթերի աղյուսակները տվյալների պահոցից։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| documents | List<LiteDocument> | - | Փաստաթղթերի ցուցակ։ |
| lookInArc | bool | false | Արխիվացված փաստաթղթերի աղյուսակների բեռնման հայտանիշ։ <br> Պարամետրի **true** արժեքի և հիմնական տվյալների պահոցում փաստաթղթերի աղյուսակների բացակայության դեպքում փորձում է բեռնել արխիվայինից։ |

