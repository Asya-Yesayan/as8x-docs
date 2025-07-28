---
title: Document.Grid(string) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsDoc.Grid](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Grid.html)

```c#
public IGrid Grid(string name)
```

Վերադարձնում է փաստաթղթի տրված ներքին անունով աղյուսակը։

IGrid-ի տակից կարող է լինել չտիպիզացված կամ տիպիզացված աղյուսակ` կախված նրանից, թե [CodeGen](../../CodeGen/CodeGen.md) գործիքի միջոցով աղյուսակերը ձևավորվել են տիպիզացված թե չտիպիզացված ձևով։

**Պարամետրեր**

* `fieldName` - Աղյուսակի ներքին անունը։

