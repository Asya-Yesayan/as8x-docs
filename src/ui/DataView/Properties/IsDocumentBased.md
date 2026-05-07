---
title: IsDocumentBased
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.IsDocumentBased հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool IsDocumentBased { get; }
```

Ինդիկացնում է՝ արդյոք DataView-ի rows-ը փաստաթղթային ռեկորդներ են:

Lazy computed: ստուգում է `typeof(R).GetInterface(nameof(IRowWithISN))`:
Ազդում է հետևյալ հատկությունների վրա.
`AllowAdd`, `AllowView`, `AllowCreateCopy`, `AllowEditUDR`,
`AllowDocumentHistory`, `AllowCallDocumentFunctions`,
`AllowPrintPreview`, `AllowDocumentParents`, `AllowDocumentChildren`:
Երբ `true` — `EditDocument`/`DeleteDocument` մեթոդները կիրառվում են
edit/delete flow-ի ժամանակ:

