---
title: UserManagerService․GetAccessibleRoles(short) մեթոդ
---
 
## Նկարագիր
 
**Համարժեքը 4x-ում՝** FrmAccessControl.Form_Load-ի մի մաս

**Դաս՝** [UserManagerService](../UserManagerService.md)
 
```c#
protected virtual Task<List<string>> GetAccessibleRoles(short suid)
```

Վերադարձնում է օգտագործողին նշանակված դերերի ներքին անունների ցուցակը։

Օգտագործողի դերերի բացակայության դեպքում վերադարձնում է դատարկ ցուցակ։

**Պարամետրեր**
 
* `suid` - Օգտագործողի ներքին համարը (կոդ)։