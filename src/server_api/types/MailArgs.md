---
layout: page
title: "MailArgs" 
---

Այս դասը նախատեսված է էլեկտրոնային հասցե(ներ)ին ուղարկվող հաղորդագրության տեքստի, հատկությունների և ստացողների նկարագրման համար։

Օգտագործվում է [IMailService](../services/IMailService.md).[SendMail](../services/IMailService/Methods/SendMail.md) էլեկտրոնային հաղորդագրություն ուղարկելիս։

```c#
public class MailArgs
{
    public BodyFormatSE BodyFormat { get; set; } = BodyFormatSE.Text;
    public ImportanceSE Importance { get; set; } = ImportanceSE.Normal;
    public SensitivitySE Sensitivity { get; set; } = SensitivitySE.Normal;
    public string SmptParameterNamePrefix { get; set; } = string.Empty;
    public string ProfileName { get; set; }
    public IEnumerable<string> Recipients { get; set; }
    public IEnumerable<string> CopyRecipients { get; set; }
    public IEnumerable<string> BlindCopyRecipients { get; set; }
    public string Subject { get; set; }
    public string Body { get; set; }
    public List<string> FileAttachments { get; set; } = [];
    public bool RequestReceipt { get; set; }
}
```

## Հատկություններ

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------------|----------------|----------------|
| BodyFormat | BodyFormatSE | BodyFormatSE.Text | Հաղորդագրության տեքստի ձևաչափը։ BodyFormatSE.Text - Ստանդարտ, ոչ ֆորմատավորված տեքստ, BodyFormatSE.Html - HTML ձևաչափի տեքստ |
| Importance | ImportanceSE | ImportanceSE.Normal | Հաղորդագրության կարևորության աստիճանը։ ImportanceSE.Low - Ցածր կարևորության, ImportanceSE.Normal - Միջին կարևորության, ImportanceSE.High - Բարձր կարևորության |
| Sensitivity | SensitivitySE | SensitivitySE.Normal | Հաղորդագրության գաղտնիության աստիճանը։ SensitivitySE.Normal - Ստանդարտ, SensitivitySE.Personal - Պարունակում է անձնական տվյալներ, SensitivitySE.Private - Պարունակում է անձնական/գաղտնի տվյալներ, SensitivitySE.Confidential - Պարունակում է խիստ գաղտնի տվյալներ |
| SmptParameterNamePrefix | string | string.Empty | Օգտագործվում է `MailKitMailService`-ով հաղորդագրություն ուղարկելիս։ |
| ProfileName | string | - | [Պրոֆիլի անունը](https://learn.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-send-dbmail-transact-sql#----profile_name), որը օգտագործվում է `DBMailService`-ով [Database Mail](https://learn.microsoft.com/en-us/sql/relational-databases/database-mail/database-mail) ուղարկելիս։ |
| Recipients | IEnumerable<string> | - | Հաղորդագրությունը ստացողների էլեկտրոնային հասցեների ցուցակը։ |
| CopyRecipients | IEnumerable<string> | - | Այն էլեկտրոնային հասցեների ցուցակը, որոնք ստանալու են հաղորդագրության պատճենը այնպես, որ հաղորդագրության մնացած ստացողները (`Recipients`, `CopyRecipients`) չկարողանան տեսնել նրանց հասցեները։ |
| BlindCopyRecipients | IEnumerable<string> | - | - |
| Subject | string | - | Հաղորդագրության թեման։ |
| Body | string | - | Հաղորդագրության տեքստը։ |
| FileAttachments | List<string> | [] | Հաղորդագրությանը կցվող ֆայլերի ամբողջական ճանապարհների ցուցակ։ |
| RequestReceipt | bool | - | Ցույց է տալիս, արդյոք հաղորդագրություն ուղարկողը կստանա ծանուցում ստացող(ներ)ի կողմից հաղորդագրությունը բացելիս։ |

