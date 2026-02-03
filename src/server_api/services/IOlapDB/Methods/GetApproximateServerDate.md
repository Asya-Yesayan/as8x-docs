---
title: GetApproximateServerDate()
parent: "Մեթոդներ"
grand_parent: "IOlapDBService"
---

# IOlapDBService.GetApproximateServerDate() մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** AsUtil.GetApproximateServerDate

**Դաս՝** [IOlapDBService](../IOlapDBService.md)

```c#
public Task<DateTime> GetApproximateServerDate();
```

Վերադարձնում է SQL սերվերի ընթացիկ ամսաթիվը/ժամը որոշակի շեղման հավանականությամբ։

Ավելի արագ է աշխատում քան [GetServerDate](GetServerDate.md), քանզի աշխատում է ամեն անգամ SQL չկատարելու սկզբունքով։