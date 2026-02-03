---
title: TemplateSubstitution դաս
nav_exclude: true
---

# TemplateSubstitution դաս

## Ներածություն

Տպելու ձևանմուշը ֆայլ է՝ նախապես սահմանված ընդլայնմամբ, որը պարունակում է տեքստ։ Այն կարող է ներառել ինչպես հաստատուն (կոնստանտ) տեքստեր, այնպես էլ հաշվարկվող արժեքներ՝ պարամետրեր։

Պարամետրերը ձևանմուշում նշվում են հատուկ սիմվոլով (#, %, ~), որին անմիջապես հաջորդում է պարամետրի կոդը՝ առանց բացատների, օրինակ՝ **#2020**, **%GR.DATE**, **~405**։

Պարամետրերի արժեքների հաշվարկը կատարվում է տպելու ձևանմուշին կցված փաստաթղթի [TemplateSubstitution](../Definitions/Document/Methods/TemplateSubstitution.md) մեթոդում կամ ձևանմուշի ընդլայնման [Calculate](../Extensions/Definitions/TemplateSubstitution/Methods/Calculate.md) մեթոդում։

Տպելու ձևանմուշների հասանելի ընդլայնումների ցանկին կարող եք ծանոթանալ [այստեղ](SubstitutionType.md):

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Add(string, string)](TemplateSubstitution/Methods/Add.md) | Ավելացնում է ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, object)](TemplateSubstitution/Methods/Add1.md) | Ավելացնում է **object** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, bool)](TemplateSubstitution/Methods/Add2.md) | Ավելացնում է **bool** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, byte)](TemplateSubstitution/Methods/Add3.md) | Ավելացնում է **byte** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, char)](TemplateSubstitution/Methods/Add4.md) | Ավելացնում է **char** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, decimal)](TemplateSubstitution/Methods/Add5.md) | Ավելացնում է **decimal** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, double)](TemplateSubstitution/Methods/Add6.md) | Ավելացնում է **double** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, float)](TemplateSubstitution/Methods/Add7.md) | Ավելացնում է **float** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, int)](TemplateSubstitution/Methods/Add8.md) | Ավելացնում է **int** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, long)](TemplateSubstitution/Methods/Add9.md) | Ավելացնում է **long** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, short)](TemplateSubstitution/Methods/Add10.md) | Ավելացնում է **short** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, DateTime)](TemplateSubstitution/Methods/Add11.md) | Ավելացնում է **DateTime** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, DateTime?)](TemplateSubstitution/Methods/Add12.md) | Ավելացնում է **DateTime?** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [Add(string, TimeSpan?)](TemplateSubstitution/Methods/Add13.md) | Ավելացնում է **TimeSpan?** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։ |
| [AddImage(string)](TemplateSubstitution/Methods/AddImage.md) | Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է նկար և վերադարձնում նկարի նկարագրությունը, որի միջոցով անհրաժեշտ է ավելացնել նկարի տվյալները (ֆայլը, երկարությունը, լայնությունը...): |
| [AddGrid(string)](TemplateSubstitution/Methods/AddGrid.md) | Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է աղյուսակ և վերադարձնում աղյուսակի նկարագրությունը, որի միջոցով անհրաժեշտ է ավելացնել աղյուսակի տվյալները (սյուները, տողերը, ցուցադրման ոճը․․․): |
| [AddGridValuesFromDoc(Document.Document, string, string, string, bool)](TemplateSubstitution/Methods/AddGridValuesFromDoc.md) | Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է աղյուսակ և լրացնում այն ըստ փաստաթղթի նշված աղյուսակի։ |
| [AddGridsValuesFromDoc(Document.Document, string, string, bool)](TemplateSubstitution/Methods/AddGridsValuesFromDoc.md) | Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է աղյուսակ և լրացնում այն ըստ փաստաթղթի նշված աղյուսակի։ |
| [AddRekvValuesFromDoc(Document.Document, string, string)](TemplateSubstitution/Methods/AddRekvValuesFromDoc.md) | Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է ատոմար արժեքներ՝ ըստ փաստաթղթի բոլոր դաշտերի (ռեկվիզիտների) անունների և արժեքների։ |
| [ExistsAtomic(string)](TemplateSubstitution/Methods/ExistsAtomic.md) | Ստուգում է տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում նշված ատոմար արժեքի առկայությունը։ |
| [ExistsGrid(string)](TemplateSubstitution/Methods/ExistsGrid.md) | Ստուգում է տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում նշված աղյուսակի առկայությունը։ |
| [ExistsImage(string)](TemplateSubstitution/Methods/ExistsImage.md) | Ստուգում է տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում նշված նկարի առկայությունը։ |
| [Grid(string)](TemplateSubstitution/Methods/Grid.md) | Վերադարձնում է տպելու ձևանմուշում տեղադրվող աղյուսակի նկարագրությունը՝ ըստ աղյուսակի ներքին անվան (կոդի)։ |
| [Image(string)](TemplateSubstitution/Methods/Image.md) | Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունից վերադարձնում է նշված ներքին անունով (կոդով) նկարի նկարագրությունը, բացակայության դեպքում առաջացնում է սխալ։ |

