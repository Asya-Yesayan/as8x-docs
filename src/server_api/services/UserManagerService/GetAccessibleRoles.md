---
title: UserManagerService․GetAccessibleRoles(short) մեթոդ
---
 
## Նկարագիր

**Դաս՝** [UserManagerService](../UserManagerService.md)
 
```c#
protected virtual Task<List<string>> GetAccessibleRoles(short suid)
```

Վերադարձնում է օգտագործողին նշանակված դերերի ներքին անունների ցուցակը։

Օգտագործողի դերերի բացակայության դեպքում վերադարձնում է դատարկ ցուցակ։

**Պարամետրեր**
 
* `suid` - Օգտագործողի ներքին համարը (կոդ)։