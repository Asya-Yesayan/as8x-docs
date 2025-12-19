---
title: UIRequestExecutionProgress.MessageBox մեթոդ
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
[MessageBox(string, MessageBoxButtons, MessageBoxIconType, MessageBoxDefaultButton, string, TimeSpan, int?, bool)](#uirequestexecutionprogressmessageboxstring-messageboxbuttons-messageboxicontype-messageboxdefaultbutton-string-timespan-int-bool-մեթոդ)
[MessageBox(string, MessageBoxButtons, MessageBoxIconType, MessageBoxDefaultButton, string, int, int?, bool)](#uirequestexecutionprogressmessageboxstring-messageboxbuttons-messageboxicontype-messageboxdefaultbutton-string-int-int-bool-մեթոդ)

### UIRequestExecutionProgress.MessageBox(string, MessageBoxButtons, MessageBoxIconType, MessageBoxDefaultButton, string, TimeSpan, int?, bool) մեթոդ

```c#
public Task<MessageBoxResult> MessageBox(string prompt, 
                                         MessageBoxButtons messageBoxButtons,
                                         MessageBoxIconType messageBoxIcon, 
                                         MessageBoxDefaultButton messageBoxDefaultButton,
                                         string title, 
                                         TimeSpan timeSpanToShow, 
                                         int? id = null, 
                                         bool supportRememberTheAnswer = false)
```

Այս մեթոդը օգտագործվում է [DataSource](../../../definitions/ds.md)-ի, [DPR](../../../definitions/dpr.md)-ի, [Document](../../../definitions/document.md)-ի կատարման ընթացքում 8X սերվիսից 4X կամ 8X կլիենտին հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| prompt          | string               | -              | Հաղորդագրության պատուհանի տեքստը։ |
| messageBoxButtons | MessageBoxButtons    | -              | [Հաղորդագրության պատուհանում ավելացվող կոճակները](../../MessageBoxButtons.md)։ |
| messageBoxIcon  | MessageBoxIconType   | -              | [Հաղորդագրության պատուհանում ավելացվող պատկերակը](../../MessageBoxIconType.md)։ |
| messageBoxDefaultButton | MessageBoxDefaultButton | -              | [Հաղորդագրության պատուհանի լռությամբ կոճակը](../../MessageBoxDefaultButton.md)։ Պատուհանի էկրանին երևալու ժամանակը լրանալուն պես պատուհանը ավտոմատ փակվում է` սեղմելով լռությամբ ընտրված կոճակը։ |
| title           | string               | -              | Հաղորդագրության պատուհանի գլխագիրը։ |
| timeSpanToShow  | TimeSpan             | -              | Հաղորդագրության պատուհանի էկրանին երևալու ժամանակը: |
| id              | int?                 | null           | Հաղորդագրության պատուհանի ներքին նույնականացման համարը (id): |
| supportRememberTheAnswer | bool                 | false          | «Կիրառել պատասխանը հաջորդների համար նույնպես» նշիչի ցուցադրման հայտանիշ։ Պարամետրի **true** արժեքի և նշիչի ընտրման դեպքում հաղորդագրության պատուհանը կփակվի այն կոճակով, որը սեղմվել է առաջին ցուցադրման ժամանակ։ |

### UIRequestExecutionProgress.MessageBox(string, MessageBoxButtons, MessageBoxIconType, MessageBoxDefaultButton, string, int, int?, bool) մեթոդ

```c#
public Task<MessageBoxResult> MessageBox(string prompt, 
                                         MessageBoxButtons messageBoxButtons = MessageBoxButtons.OK,
                                         MessageBoxIconType messageBoxIcon = MessageBoxIconType.Default,
                                         MessageBoxDefaultButton messageBoxDefaultButton = MessageBoxDefaultButton.DefaultButton1,
                                         string title = "", 
                                         int millisecondsToShow = 15000, 
                                         int? id = null, 
                                         bool supportRememberTheAnswer = false)
```

Այս մեթոդը օգտագործվում է [DataSource](../../../definitions/ds.md)-ի, [DPR](../../../definitions/dpr.md)-ի, [Document](../../../definitions/document.md)-ի կատարման ընթացքում 8X սերվիսից 4X կամ 8X կլիենտին հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| prompt          | string               | -              | Հաղորդագրության պատուհանի տեքստը։ |
| messageBoxButtons | MessageBoxButtons    | MessageBoxButtons.OK | [Հաղորդագրության պատուհանում ավելացվող կոճակները](../../MessageBoxButtons.md): Չլրացնելու դեպքում պատուհանում ավելացվելու է միայն "Լավ" կոճակը։ |
| messageBoxIcon  | MessageBoxIconType   | MessageBoxIconType.Default | [Հաղորդագրության պատուհանում ավելացվող պատկերակը](../../MessageBoxIconType.md)։ Չլրացնելու դեպքում պատուհանում ավելացվելու է "Information Message" պատկերակը։ |
| messageBoxDefaultButton | MessageBoxDefaultButton | MessageBoxDefaultButton.DefaultButton1 | [Հաղորդագրության պատուհանի լռությամբ կոճակը](../../MessageBoxDefaultButton.md)։ Պատուհանի էկրանին երևալու ժամանակը լրանալուն պես պատուհանը փակվում է ավտոմատ սեղմելով լռությամբ ընտրված կոճակը։ Չլրացնելու դեպքում լռությամբ կոճակ հանդիսանալու է ձախից առաջին կոճակը։ |
| title           | string               | ""             | Հաղորդագրության պատուհանի գլխագիրը։ Չլրացնելու դեպքում գլխագիր հանդիսանալու է ծրագրի անունը, օրինակ "ՀԾ Բանկ", "ՀԾ Ձեռնարկություն"...: |
| millisecondsToShow | int                  | 15000          | Հաղորդագրության պատուհանի էկրանին երևալու ժամանակը միլիվայրկյաններով: Չլրացնելու դեպքում պատուհանը փակվելու է 15 վրկ հետո՝ սեղմելով լռությամբ ընտրված կոճակը (`messageBoxDefaultButton`)։ |
| id              | int?                 | null           | Հաղորդագրության պատուհանի ներքին նույնականացման համարը (id): |
| supportRememberTheAnswer | bool                 | false          | «Կիրառել պատասխանը հաջորդների համար նույնպես» նշիչի ցուցադրման հայտանիշ։ Պարամետրի **true** արժեքի և նշիչի ընտրման դեպքում հաղորդագրության պատուհանը կփակվի այն կոճակով, որը սեղմվել է առաջին ցուցադրման ժամանակ։ |

### Օրինակ

Այս օրինակում ներկայացված է  փաստաթղթի հեռացման տրանզակցիայում աշխատող [Delete](../../../../controllers/Document/Methods/Delete.md) իրադարձության մշակիչում ուղարկվում է հաղորդագրություն սերվերից կլիենտին `MessageBox` մեթոդի միջոցով։

```c#
public override async Task Delete(DeleteEventArgs args)
{
  // բեռնում է "Պայմանագիր" փաստաթղթի զավակ փաստաթղթերը
  var childs = await this.DocumentService.GetDocumentChildren(this.ISN);

  if (childs.Count > 0)
  {
    // MessageBox մեթոդի կանչի արդյունքում կլիենտում բացվում է հաղոորդագրւթյան պատուհան
    // "Հեռացնել պայմանագրի հաշիվները" տեքստով և "Այո" կոճակ սեղմման դեպքում հեռացվում է "Պայմանագիր" փաստաթղթի
    // և իր զավակ "Հաշիվ" փաստաթղթերի միջև կապերը։
    if ((await this.Progress.MessageBox("Հեռացնել պայմանագրի հաշիվները".ToArmenianANSI()),
        MessageBoxButtons.YesNo, MessageBoxIconType.Question)).UIRequestResult == MessageBoxRequestResult.Yes)
    {
        foreach (var (childISN, _) in childs)
        {
            await this.DocumentService.CutParentLink(childISN, this.ISN);          
        }           
    }
  }
}
```

