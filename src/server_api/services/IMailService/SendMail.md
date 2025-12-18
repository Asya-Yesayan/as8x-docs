---
title: IMailService.SendMail(MailArgs) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsKernel.SendMail

**Դաս՝** [IMailService](../IMailService.md)

```c#
public Task SendMail(MailArgs args)
```

Ուղարկում է էլեկտրոնային նամակ (email) ըստ `args` տվյալների։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | MailArgs             | -              | [Էլ. նամակի տվյալներ](../../types/MailArgs.md)։ |
