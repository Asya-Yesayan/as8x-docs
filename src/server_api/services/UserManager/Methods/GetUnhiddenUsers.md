---
title: GetUnhiddenUsers
parent: "Մեթոդներ"
grand_parent: "UserManagerService"

---

# UserManagerService․GetUnhiddenUsers() մեթոդ

 
## Նկարագիր

**Դաս՝** [UserManagerService](../UserManagerService.md)
 
```c#
public Task<List<UserDescription>> GetUnhiddenUsers()
```

Վերադարձնում է համակարգի բոլոր անտեսանելի [օգտագործողների նկարագրությունների](../../../Types/UserDescription.md) ցուցակը։

Անտեսանելի օգտագործողների բացակայության դեպքում վերադարձնում է դատարկ ցուցակ։