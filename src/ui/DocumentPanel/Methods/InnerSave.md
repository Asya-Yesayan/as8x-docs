---
title: InnerSave
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.InnerSave(StoreRequest, bool) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected internal bool InnerSave(StoreRequest storeRequest,
                                  bool processAfterCommitException = true)
```

Կատարում է փաստաթղթի վալիդացիան, լրացումը և պահպանումը՝ սխալների մշակումով։ Մեթոդը հաջորդաբար կանչում է վալիդացիան, [FillDocument](FillDocument.md) մեթոդը, [BeforeStore](BeforeStore.md) մեթոդը և պահպանման ծառայությունը։ Պահպանումից հետո կանչվում է [AfterStore](AfterStore.md) մեթոդը։ Տրանզակցիայի կատարումից հետո առաջացած սխալները պահպանվում են և, **processAfterCommitException** պարամետրի **true** արժեքի դեպքում, անմիջապես մշակվում **ErrorHandler** ծառայության միջոցով։

**DocumentException** տիպի սխալի դեպքում կանչվում է [HandleDocumentException](HandleDocumentException.md) մեթոդը, իսկ **ASException** և այլ սխալների դեպքում սխալը մշակվում է **ErrorHandler** ծառայության միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| storeRequest | StoreRequest | - | Պահպանման հարցումի օբյեկտը։ |
| processAfterCommitException | bool | true | **true** արժեքի դեպքում տրանզակցիայի կատարումից հետո առաջացած սխալը անմիջապես մշակվում է, **false** արժեքի դեպքում՝ պահվում է հետագա մշակման համար։ |

**Վերադարձնում է**

**true** արժեքի դեպքում փաստաթուղթը պահպանվել է հաջող, **false** արժեքի դեպքում՝ ոչ։
