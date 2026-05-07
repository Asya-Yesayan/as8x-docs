---
title: SupportsExtensions
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.SupportsExtensions հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public override bool SupportsExtensions { get; }
```

Ինդիկացնում է՝ արդյոք DataView-ն աջակցում է extension-ներին:

Կարդացվում է `DataViewAttribute`-ից constructor-ում: Եթե `true` է,
`ShowBrowser`-ը կփորձի ստանալ extension-ների ցանկը server-ից:

