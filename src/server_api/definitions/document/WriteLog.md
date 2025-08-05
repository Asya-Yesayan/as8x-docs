---
title: Document.WriteLog(string, int, bool) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.WriteLog](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/WriteLog.html)

```c#
public Task WriteLog(string message, 
                     int dcrId = -1, 
                     bool dcrIdIsISN = false)
```

Ավելացնում է նոր գրառում [փաստաթղթի պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) մեջ։

Փաստաթղթի կյանքի ընթացքում մի շարք գործողություններ գրանցվում են պատմության մեջ ավտոմատ կերպով, ինչպիսին են փաստաթղթի ստեղծումը կամ խմբագրումը։ 
Այս մեթոդի միջոցով հնարավոր է ավելացնել լրացուցիչ տողեր։ 
`dcrIdIsISN` պարամետրի `false` արժեքի դեպքում [DOCLOG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) աղյուսակում ավելանում է գրառում `"M"` կոդով, հակառակ դեպքում `"L"` կոդով։

Մեթոդը [Action](Action.md) մեթոդի մեջ կանչելու դեպքում գրանցումները տվյալների պահոցում կատարվում են [Action](Action.md) մեթոդի ավարտից հետո, հակառակ դեպքում գրանցումը կատարվում է անմիջապես։

**Պարամետրեր**

* `message` - Փաստաթղթի պատմությունում ավելացվող հաղորդագրություն։
* `dcrId` - Փոփոխման հայտի համարը (DocChangeRequest) կամ հիմքային փաստաթղթի ներքին նույնականացման համարը։
* `dcrIdIsISN` - `false` արժեքը ցույց է տալիս, որ `dcrId`-ը փոփոխման հայտի համար է, `true` արժեքը՝ հիմքային փաստաթղթի ներքին նույնականացման համար։
