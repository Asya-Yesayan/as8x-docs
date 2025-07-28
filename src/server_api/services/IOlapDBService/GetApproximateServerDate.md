---
title: IOlapDBService.GetApproximateServerDate() մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ AsUtil.GetApproximateServerDate

```c#
public Task<DateTime> GetApproximateServerDate();
```

Վերադարձնում է SQL սերվերի ընթացիկ ամսաթիվը/ժամը որոշակի շեղման հավանականությամբ։

Ավելի արագ է աշխատում քան [GetServerDate](GetServerDate.md), քանզի աշխատում է ամեն անգամ SQL չկատարելու սկզբունքով։