---
title: FilteredSearchEnabled
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.FilteredSearchEnabled հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual bool FilteredSearchEnabled { get; }
```

Սահմանում է DropDownView-ի ֆիլտրացված որոնման իրավասությունը՝ [FilteredSearchSupported](FilteredSearchSupported.md) հատկության հետ համատեղ։ Հատկության լռությամբ արժեքը համընկնում է [FilteredSearchSupported](FilteredSearchSupported.md) հատկության արժեքի հետ։

* Եթե `FilteredSearchSupported=true` և `FilteredSearchEnabled=true`, ապա DropDownView-ում ցուցադրվում է «Որոնել» կոճակը, որը հասանելի է կատարման համար։
* Եթե `FilteredSearchSupported=true` և `FilteredSearchEnabled=false`, ապա DropDownView-ում ցուցադրվում է «Որոնել» կոճակը, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե `FilteredSearchSupported=false`, ապա DropDownView-ում չի ցուցադրվում «Որոնել» կոճակը։

«Որոնել» կոճակի կատարման արդյունքում բացվող որոնման պատուհանը սահմանվում է [`FilteredSearch`](../Methods/FilteredSearch.md) մեթոդով: 
