---
title: IsAddEnabled
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.IsAddEnabled հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool IsAddEnabled { get; }
```

Ինդիկացնում է՝ արդյոք Add գործողությունն ընթացիկ պահին ակտիվ է:

Լռությամբ `true`: Override-ի դեպքում `false` վերադառնալը թույլ է
տալիս ժամանակավոր անջատել Add-ը՝ առանց `AllowAdd`-ը փոփոխելու:

