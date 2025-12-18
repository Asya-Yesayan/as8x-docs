---
title: AccessLogService.LogRoleChanges(HashSet<string>, HashSet<string>, short) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsAccessLogProvider.LogRoleChange

**Դաս՝** [AccessLogService](../AccessLogService.md)

```c#
public Task LogRoleChanges(HashSet<string> addedRoles, HashSet<string> removedRoles, short suid)
```

Գրանցում է օգտագործողի դերերի փոփոխությունների մասին ինֆորմացիան տվյալների պահոցի [ACCESSLOG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/AccessLog.html), `ACCESSARM` աղյուսակներում:

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| addedRoles      | HashSet<string>      | -              | Օգտագործողին ավելացված դերերի ներքին անունների ցուցակը։ |
| removedRoles    | HashSet<string>      | -              | Օգտագործողից հեռացված դերերի ներքին անունների ցուցակը։ |
| suid            | short                | -              | Օգտագործողի ներքին համարը (կոդ)։ |
