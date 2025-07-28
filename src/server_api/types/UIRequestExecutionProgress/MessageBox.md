---
title: UIRequestExecutionProgress.MessageBox(string, MessageBoxButtons, MessageBoxIconType, MessageBoxDefaultButton, string, TimeSpan, int?) մեթոդ
---

```c#
public Task<MessageBoxResult> MessageBox(string prompt, MessageBoxButtons messageBoxButtons,
                                         MessageBoxIconType messageBoxIcon, MessageBoxDefaultButton messageBoxDefaultButton,
                                         string title, TimeSpan timeSpanToShow, int? id = null)
```

Այս մեթոդը օգտագործվում է [DataSource](../../definitions/ds.md), [DPR](../../definitions/dpr.md), [Document](../../definitions/document.md)-ի կատարման ընթացքում 8X սերվիսից 4X կամ 8X կլիենտին հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար։

**Պարամետրեր**

* `prompt` - Հաղորդագրության պատուհանի տեքստը։
* `messageBoxButtons` - [Հաղորդագրության պատուհանում ավելացվող կոճակները](../MessageBoxButtons.md)։
* `messageBoxIcon` - [Հաղորդագրության պատուհանում ավելացվող պատկերակը](../MessageBoxIconType.md)։ 
* `messageBoxDefaultButton` - [Հաղորդագրության պատուհանի լռությամբ կոճակը](../MessageBoxDefaultButton.md)։ Պատուհանի էկրանին երևալու ժամանակը լրանալուն պես պատուհանը ավտոմատ փակվում է` սեղմելով լռությամբ ընտրված կոճակը։
* `title` - Հաղորդագրության պատուհանի գլխագիրը։ 
* `timeSpanToShow` - Հաղորդագրության պատուհանի էկրանին երևալու ժամանակը:
* `id` - Հաղորդագրության պատուհանի ներքին նույնականացման համարը (id):
