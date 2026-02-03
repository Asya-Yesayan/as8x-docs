---
title: GetScheduledJobStateName(int)
parent: "Մեթոդներ"
grand_parent: JobService
---

# JobService.GetScheduledJobStateName(int) մեթոդ

```c#
public Task<byte> GetScheduledJobState(int scheduledId)
```

Վերադարձնում է հերթագրված առաջադրանքի վիճակը։

Հերթագրված առաջադրանքը կարող է լինել նշված վիճակներից մեկում՝
* **0** - հերթագրված,
* **1** - կատարման ընթացքում,
* **2** - բարեհաջող կատարված,
* **3** - ձախողված։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| scheduledId | int | - | Հերթագրված առաջադրանքի id-ն։ |
