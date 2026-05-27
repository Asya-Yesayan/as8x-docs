---
title: Item
nav_exclude: true
---

# DialogWindow.Item[string] հատկություն

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public object this[string name] { get; set; }
```

Վերադարձնում կամ նշանակում է երկխոսության պատուհանի՝ տրված ներքին անունով դաշտի արժեքը։ 
 
Նշված ներքին անունով դաշտի բացակայության դեպքում վերադարձնում է **null**։

## Օրինակ

```c#
// նշանակում է «code» ներքին անունով դաշտի արժեքը
this["code"] = "001";

// ստանում է «code» դաշտի արժեքը (դաշտի բացակայության դեպքում՝ null)
var value = this["code"];
```
