---
title: IDocumentService.Create մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.CreateDoc](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/CreateDoc.html)

**Դաս՝** [IDocumentService](../IDocument/IDocumentService.md)

## IDocumentService.Create(List&lt;int&gt;, object[]) մեթոդ

```c#
public Task<T> Create<T>(List<int> parentsISN = null, 
                         params object[] parameters
                         ) where T : Document
```

Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../../Definitions/Document/Document.md)-ի ժառանգ։

**Պարամետրեր**


| Անվանում     | Տվյալների տիպ | Լռությամբ արժեք               | Նկարագրություն |
|--------------|---------------|-------------------------------|----------------|
| T            | T | —                         | Փաստաթղթի նկարագրված դաս 8X-ում, Document դասի ժառանգ։ |
| parentsISN   | List<int>     | null                          | Փաստաթղթի ծնող փաստաթղթերի ISN-ների ցուցակ: |
| parameters      | object[]    | - | Արգումենտների զանգված, որոնք փոխանցվում են փաստաթղթի կոնստրուկտորին և պիտի թվով, հերթականությամբ, տիպերով համընկնեն կանչվող կոնստրուկտորի շարահյուսությանը։ <br> Չփոխանցելու դեպքում փաստաթղթի նոր օբյեկտը ստեղծվելու է պարամետրեր չպարունակող կոնստրուկտորի միջոցով։ |

## IDocumentService.Create(List&lt;int&gt;, bool, object[]) մեթոդ

```c#
public Task<T> Create<T>(List<int> parentsISN = null,
                         bool suppressProgress,
                         params object[] parameters
                         ) where T : Document
```

Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../../Definitions/Document/Document.md)-ի ժառանգ։

**Պարամետրեր**


| Անվանում     | Տվյալների տիպ | Լռությամբ արժեք               | Նկարագրություն |
|--------------|---------------|-------------------------------|----------------|
| T            | T | —                         | Փաստաթղթի նկարագրված դաս 8X-ում, Document դասի ժառանգ։ |
| parentsISN   | List<int>     | null                          | Փաստաթղթի ծնող փաստաթղթերի ISN-ների ցուցակ: |
| suppressProgress   | bool               | —                          | Փաստաթղթի կատարման պրոգրեսի ցուցադրման հայտանիշ։  |
| parameters      | object[]    | - | Արգումենտների զանգված, որոնք փոխանցվում են փաստաթղթի կոնստրուկտորին և պիտի թվով, հերթականությամբ, տիպերով համընկնեն կանչվող կոնստրուկտորի շարահյուսությանը։ <br> Չփոխանցելու դեպքում փաստաթղթի նոր օբյեկտը ստեղծվելու է պարամետրեր չպարունակող կոնստրուկտորի միջոցով։ |

## IDocumentService.Create(int, object[]) մեթոդ

```c#
public Task<T> Create<T>(int parentISN, 
                         params object[] parameters
                         ) where T : Document
```

Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../../Definitions/Document/Document.md)-ի ժառանգ։

**Պարամետրեր**


| Անվանում    | Տվյալների տիպ    | Լռությամբ արժեք            | Նկարագրություն |
|-------------|-------------------|----------------------------|----------------|
| T           | T | —                        | Փաստաթղթի նկարագրված դաս 8X-ում, Document դասի ժառանգ։ |
| parentISN   | int               | —                          | Փաստաթղթի ծնող փաստաթղթի ISN-ը: |
| parameters      | object[]    | - | Արգումենտների զանգված, որոնք փոխանցվում են փաստաթղթի կոնստրուկտորին և պիտի թվով, հերթականությամբ, տիպերով համընկնեն կանչվող կոնստրուկտորի շարահյուսությանը։ <br> Չփոխանցելու դեպքում փաստաթղթի նոր օբյեկտը ստեղծվելու է պարամետրեր չպարունակող կոնստրուկտորի միջոցով։ |

## IDocumentService.Create(int, bool, object[]) մեթոդ

```c#
public Task<T> Create<T>(int parentISN,
                         bool suppressProgress,
                         params object[] parameters
                         ) where T : Document
```

Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../../Definitions/Document/Document.md)-ի ժառանգ։

**Պարամետրեր**


| Անվանում    | Տվյալների տիպ    | Լռությամբ արժեք            | Նկարագրություն |
|-------------|-------------------|----------------------------|----------------|
| T           | T | —                        | Փաստաթղթի նկարագրված դաս 8X-ում, Document դասի ժառանգ։ |
| parentISN   | int               | —                          | Փաստաթղթի ծնող փաստաթղթի ISN-ը: |
| suppressProgress   | bool               | —                          | Փաստաթղթի կատարման պրոգրեսի ցուցադրման հայտանիշ։  |
| parameters      | object[]    | - | Արգումենտների զանգված, որոնք փոխանցվում են փաստաթղթի կոնստրուկտորին և պիտի թվով, հերթականությամբ, տիպերով համընկնեն կանչվող կոնստրուկտորի շարահյուսությանը։ <br> Չփոխանցելու դեպքում փաստաթղթի նոր օբյեկտը ստեղծվելու է պարամետրեր չպարունակող կոնստրուկտորի միջոցով։ |

## IDocumentService.Create(string, List&lt;int&gt;, Type, Dictionary&lt;string, object&gt;, object[]) մեթոդ

```c#
public Task<Document> Create(string typeName, 
                             List<int> parentISN = null, 
                             Type instanceType = null,
                             Dictionary<string, object> properties = null, 
                             params object[] parameters)
```

Ստեղծում է նշված տեսակի (ներքին անունով) փաստաթղթի նոր օբյեկտ և վերադարձնում այն [Document](../../Definitions/Document/Document.md) բազային դասով։

**Պարամետրեր**


| Անվանում      | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|---------------|---------------|-----------------|----------------|
| typeName      | string        | —               | Փաստաթղթի ներքին անուն (տեսակ)։ |
| parentsISN    | List<int>     | —               | Փաստաթղթի ծնող փաստաթղթերի ISN-ների ցուցակ: |
| instanceType  | Type          | —               | Փաստաթղթի նկարագրված դաս 8X-ում, Document դասի ժառանգ։ |
| properties  | Dictionary<string, object>          | null               | Անուն/արժեքների ցուցակ, որոնք ավելացվելու են ստեղծվող փաստաթղթի Properties-ում։ |
| parameters      | object[]    | - | Արգումենտների զանգված, որոնք փոխանցվում են փաստաթղթի կոնստրուկտորին և պիտի թվով, հերթականությամբ, տիպերով համընկնեն կանչվող կոնստրուկտորի շարահյուսությանը։ <br> Չփոխանցելու դեպքում փաստաթղթի նոր օբյեկտը ստեղծվելու է պարամետրեր չպարունակող կոնստրուկտորի միջոցով։ |

## IDocumentService.Create(string, List&lt;int&gt;, Type, Dictionary&lt;string, object&gt;, bool, object[]) մեթոդ

```c#
public Task<Document> Create(string typeName, 
                             List<int> parentISN = null, 
                             Type instanceType = null,
                             Dictionary<string, object> properties = null,
                             bool suppressProgress, 
                             params object[] parameters)
```

Ստեղծում է նշված տեսակի (ներքին անունով) փաստաթղթի նոր օբյեկտ և վերադարձնում այն [Document](../../Definitions/Document/Document.md) բազային դասով։

**Պարամետրեր**


| Անվանում      | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|---------------|---------------|-----------------|----------------|
| typeName      | string        | —               | Փաստաթղթի ներքին անուն (տեսակ)։ |
| parentsISN    | List<int>     | —               | Փաստաթղթի ծնող փաստաթղթերի ISN-ների ցուցակ: |
| instanceType  | Type          | —               | Փաստաթղթի նկարագրված դաս 8X-ում, Document դասի ժառանգ։ |
| properties  | Dictionary<string, object>          | null               | Անուն/արժեքների ցուցակ, որոնք ավելացվելու են ստեղծվող փաստաթղթի Properties-ում։ |
| suppressProgress   | bool               | —                          | Փաստաթղթի կատարման պրոգրեսի ցուցադրման հայտանիշ։  |
| parameters      | object[]    | - | Արգումենտների զանգված, որոնք փոխանցվում են փաստաթղթի կոնստրուկտորին և պիտի թվով, հերթականությամբ, տիպերով համընկնեն կանչվող կոնստրուկտորի շարահյուսությանը։ <br> Չփոխանցելու դեպքում փաստաթղթի նոր օբյեկտը ստեղծվելու է պարամետրեր չպարունակող կոնստրուկտորի միջոցով։ |