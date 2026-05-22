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

Սահմանում է դիտելու ձևում նոր տող ավելացնելու իրավասությունը` [IsAddEnabled](IsAddEnabled.md) հատկության հետ համատեղ: 

* Եթե `AllowAdd=true` և [`IsAddEnabled=true`](IsAddEnabled.md), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Ավելացնել» կոնտեքստային ֆունկցիան, որը հասանելի է կատարման համար։
* Եթե `AllowAdd=true` և [`IsAddEnabled=false`](IsAddEnabled.md), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Ավելացնել» կոնտեքստային ֆունկցիան, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե `AllowAdd=false`, ապա դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում «Ավելացնել» կոնտեքստային ֆունկցիան։

«Ավելացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող ավելացման պատուհանը սահմանվում է [`Add`](../Methods/Add.md) կամ [`AddDocument`](../Methods/AddDocument.md) մեթոդներով: 
* Եթե `AllowAdd=true` և [`IsAddEnabled=true`](IsAddEnabled.md) և [`IsDocumentBased=false`](IsDocumentBased.md), ապա կանչվում է [`Add`](../Methods/Add.md) մեթոդը:
* Եթե `AllowAdd=true` և [`IsAddEnabled=true`](IsAddEnabled.md) և [`IsDocumentBased=true`](IsDocumentBased.md), ապա կանչվում է [`AddDocument`](../Methods/AddDocument.md) մեթոդը:

![Add_Function](../../images/DataView/Add_Function.png)

![Add_Window](../../images/DataView/Add_Window.png)

