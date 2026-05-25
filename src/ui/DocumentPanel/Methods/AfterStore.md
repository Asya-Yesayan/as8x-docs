---
title: AfterStore
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AfterStore(StoreRequest, bool) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void AfterStore(StoreRequest sr,
                                  bool isNewDocument)
```

Սահմանում է փաստաթղթի պահպանումից հետո ծնող վահանակի թարմացման գործողությունները։

Մեթոդը չմշակելու դեպքում փաստաթղթի ISN-ը ավելացվում է [KeysToUpdate](../Properties/KeysToUpdate.md) բազմությանը, և ծնող դիտելու ձևի կամ ծառային խմբագրիչի տողերը թարմացվում են։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| sr | StoreRequest | - | Պահպանման հարցումի օբյեկտը։ |
| isNewDocument | bool | - | **true** արժեքի դեպքում նշանակում է, որ պահպանվել է նոր փաստաթուղթ, **false** արժեքի դեպքում՝ խմբագրված եղած փաստաթուղթ։ |
