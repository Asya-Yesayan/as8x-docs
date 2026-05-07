---
title: AllowAdd
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowAdd հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowAdd { get; }
```

Ինդիկացնում է՝ արդյոք DataView-ում թույլատրված է նոր փաստաթղթերի ավելացումը:

Լռությամբ `true` է, երբ `IsDocumentBased=true` AND
`AllowedDocumentsToAdd != null` AND `AllowedDocumentsToAdd.Count > 0`:
Կոնտեքստային մենյուում ցուցադրվում է AddDocument ֆունկցիան:

Property-method interactions.
- `true` → panel-ն ցուցադրում է Add button/context menu item:
- `false` → Add button/item թաքցված/disabled է:

