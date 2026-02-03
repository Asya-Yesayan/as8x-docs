---
title: GetAccessibleRoles(short)
parent: "Մեթոդներ"
grand_parent: "UserManagerService"

---

# UserManagerService․GetAccessibleRoles(short) մեթոդ

 
## Նկարագիր

**Դաս՝** [UserManagerService](../UserManagerService.md)
 
```c#
protected virtual Task<List<string>> GetAccessibleRoles(short suid)
```

Վերադարձնում է օգտագործողին նշանակված դերերի ներքին անունների ցուցակը։

Օգտագործողի դերերի բացակայության դեպքում վերադարձնում է դատարկ ցուցակ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| suid            | short                | -              | Օգտագործողի ներքին համարը (կոդ)։ |
