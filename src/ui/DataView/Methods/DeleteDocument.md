---
title: DeleteDocument
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.DeleteDocument() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void DeleteDocument()
```

Ջնջում է ֆոկուսավորված row-ի փաստաթուղթը՝ կատարելով վիճակի ստուգումներ:

Նախապայմաններ.
- `Panel.FocusedRow()`-ը ոչ-`null` է:
- Փաստաթղթի վիճակը ≠ `-1` (invalid ISN):

Կատարում է.
1. Ստանում է focused row-ի ISN-ը (`GetISN`):
2. Ստուգում է ISN-ի վալիդությունը (`DocumentHelper.GetState`):
3. Կանչում է `DocumentHelper.Delete(isn, true)`:
4. Հաջողության դեպքում (`deletedDoc.IsDeleted=true`) — `Panel.Update(isn)`:

Exceptions.
- `ASException`: Եթե ISN-ը invalid է (GetState == -1):

