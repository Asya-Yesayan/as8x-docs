---
title: IDocumentService.FieldToAnsi(string, string, object) մեթոդ
---

## Նկարագիր

**Դաս՝** [IDocumentService](../IDocument/IDocumentService.md)

```c#
public  Task<object> FieldToAnsi(string docType, 
                                 string name, 
                                 object value)
```

<!-- Վերադարձնում է փաստաթղթի դաշտի արժեքը՝ձևափոխված համապատասխան լեզվի ANSI կոդավորման։ -->
Ձևափոխում է ցանցով փոխանցված արժեքը ANSI կոդավորման համարելով, որ այն պետք է լինի փաստաթղթի դաշտի արժեք։  

Հաշվի է առնվում  
- դաշտը լրացվում է հայերեն, թե ռուսերեն,
- փոխանցող կլինետը օգտագործում է յունկոդ տվյալներ, թե ANSI տվյալներ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| docType         | string               | -              | Փաստաթղթի ներքին անունը (տեսակը)։ |
| name            | string               | -              | Դաշտի ներքին անուն։ |
| value           | object               | -              | Ցանցով փոխանցված արժեք։ |

**Օրինակ**
Երբ ունենք [Տվյալների մշակման հարցում](../../Definitions/DataProcessingRequest/DataProcessingRequest.md), որը պարամետրեր է ստանում թե՛ յունիկոդով աշխատող կիենտից, թե՛ ANSI-ով աշխատող կլիենտից, ապա ստացված պարամետրերը կարիք է լինում ձևափոխել ANSI-ի կախված կլիենտի տեսակից։

<!-- CreateFinalCalculationsForSelectedRows DPR-ի մեջ  -->
**Օրինակ**
```c#
private async Task CreateVacationFromHR(Request.EmployeeFinalCalculation emplData, Request request)
{
    var docWgLvOrd = await this.documentService.Create<WgLvOrd>();
    docWgLvOrd.Code.Value = (string)await this.documentService.FieldToAnsi(nameof(WgLvOrd), nameof(WgLvOrd.Code), emplData.EmployeeNumber);
    docWgLvOrd.LvScheme.Value = (string)await this.documentService.FieldToAnsi(nameof(WgLvOrd), nameof(WgLvOrd.LvScheme), request.LeaveScheme);
    docWgLvOrd.fCalc.Value = true;
    docWgLvOrd.DedReCalc.Value = emplData.FinalCalculationDays < 0;
    docWgLvOrd.bPlan.Value = "f";
    docWgLvOrd.BuildEmbeddedUIRequest(this.Progress);
    await docWgLvOrd.Store();
}
```
