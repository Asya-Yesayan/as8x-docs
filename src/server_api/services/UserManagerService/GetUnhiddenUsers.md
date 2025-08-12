---
title: UserManagerService․GetUnhiddenUsers() մեթոդ
---
 
## Նկարագիր
 
**Համարժեքը 4x-ում՝** FrmAccessControl.Form_Load-ի մի մաս

**Դաս՝** [UserManagerService](../UserManagerService.md)
 
```c#
public Task<List<UserDescription>> GetUnhiddenUsers()
```

Վերադարձնում է համակարգի բոլոր անտեսանելի [օգտագործողների նկարագրությունների](../../types/UserDescription.md) ցուցակը։

Անտեսանելի օգտագործողների բացակայության դեպքում վերադարձնում է դատարկ ցուցակ։