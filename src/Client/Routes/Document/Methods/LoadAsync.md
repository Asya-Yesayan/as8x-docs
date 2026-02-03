---
title: LoadAsync(int, bool, bool, CancellationToken)
nav_exclude: true
---

# DocumentRoutes.LoadAsync(int, bool, bool, CancellationToken) մեթոդ

```c#
public Task<DocumentModelSimple> LoadAsync(int isn, 
                                           bool throwExceptionIfDeleted = true, 
                                           bool lookInArchive = false, 
                                           CancellationToken cancellationToken = default)
```

Բեռնում է տվյալների պահոցում գոյություն ունեցող փաստաթուղթը ըստ ներքին նույնականացման համարի։

Վերադարձնում է Փաստաթղթի օբյեկտը, եթե հայտնաբերվել է։  
Եթե չի հայտնաբերվել առաջացնում է սխալ կամ վերադարձնում է **null** կախված `throwExceptionIfDeleted` պարամետրից։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| throwExceptionIfDeleted | bool                 | true           | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| lookInArchive   | bool                 | false          | Արխիվացված փաստաթղթի բեռնման հայտանիշ։ **true** արժեքի դեպքում փաստաթղթի բեռնումը փորձում է կատարել նաև արխիվային տվյալների պահոցից, եթե այնտեղ նույնպես փաստաթութը առկա չէ, առաջանում է սխալ։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |

