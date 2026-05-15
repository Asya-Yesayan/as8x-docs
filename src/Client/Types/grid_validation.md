---
title: "Փաստաթղթի աղյուսակի վալիդացիա"
nav_exclude: true
---

# Փաստաթղթի աղյուսակի վալիդացիա

## Ներածություն

Փաստաթղթի աղյուսակը նախատեսված է համակարգված տողային տվյալների ցուցադրման համար, որտեղ յուրաքանչյուր տող ներկայացնում է մեկ միավոր՝ վաճառքի տող, հաշվարկի մուտքագրում, աշխատավարձի բաղադրիչ և այլն։

Վալիդացիայի (validation) մեխանիզմի նպատակն է ապահովել, որ աղյուսակի տվյալները փաստաթղթի պահպանումից առաջ համապատասխան լինեն նախապես սահմանված կանոններին, ինչպես նաև օգտագործողին տեղեկացնեն ցանկացած խախտման մասին։

Վալիդացիան իրականացվում է երկու շերտում, և UI-ն ու տվյալների մոդելը խստորեն տարանջատված են։

| Շերտ | Բաղադրիչներ | Պատասխանատվություն |
|------|-------------|--------------------|
| Տվյալներ | `Grid<T>`, `GridRow`, `GridInfo`, `GridColumn`, `GridValidators`, `PropertyValidatorCache` | Վալիդատորների պահպանում, քեշավորում, վալիդացիայի լոգիկայի սահմանում, վալիդացիայի լոգիկայի կիրառում՝ `IDataErrorInfo`։ |
| Ինտերֆեյս (UI) | `DocumentGridControl`, `IDocumentGridValidationProvider` | `HasValidationError` dependency property-ի արժեքավորում, աղյուսակի մակարդակում կանչվող մեթոդներ (`RowValidation`, `EnforceRowsValidation`, `EnforceAllRowsValidation`), DevExpress XPF-ի հետ ինտեգրացիա, `RequiresValidation` ֆիլտր։ |

Այսպիսի դասավորության շնորհիվ վալիդատորները կանչվում են ինչպես ինտերֆեյսի (UI) խմբագրման ժամանակ՝ ավտոմատ կերպով, այնպես էլ ծրագրային փոփոխության ժամանակ՝ explicit կերպով կանչելով վալիդացիա։ 

## Վալիդացիայի մակարդակները

Վալիդացիան ունի երեք մակարդակ․

| Մակարդակ | Կրող | Շարահյուսություն | Կանչվում է |
|----------|------|----------------|------------|
| **Սյունի** (cell-level) | `GridColumn.Validator` | `Func<GridRow, GridColumn, string>` | Յուրաքանչյուր սյան համար վալիդացիայի կանոնների սահմանում։ |
| **Տողի** (row-level) | `GridInfo.RowValidator` | `Func<GridRow, string>` | Բոլոր սյուների վալիդացիայից հետո, ընթացիկ տողի կտրվածքով։ |
| **Աղյուսակի** (grid-level) | `DocumentGridControl.HasValidationError` (DependencyProperty) | `bool` | Ագրեգացված ինդիկատոր՝ աղյուսակի առնվազն մեկ տողի սխալի առկայության դեպքում `true`, կամ `IsRequired = true` և աղյուսակը դատարկ է։ |

Վալիդատոր ֆունկցիաները վերադարձնում են `null`՝ արժեքի վալիդ լինելու դեպքում, կամ սխալի հաղորդագրությունը (`string`)՝ խախտման դեպքում։

## Համակարգային և Custom վալիդատորներ — `IDocumentGridValidationProvider`

`DocumentHelper.GetStandardGridsValidators(DocumentSchema)`-ը ստեղծում է լռությամբ (default) վալիդատորների հավաքածու՝ ըստ սյան համակարգային տիպի և `IsRequired` հայտանիշի։

Սակայն հնարավոր է նաև սյուների, ինչպես նաև տողերի սահմանել custom վալիդացիայի կանոններ։ Այն իրականացնելու համար `DocumentUI<T>`-ից ժառանգող դասը պետք է իրականցնի IDocumentGridValidationProvider ինտերֆեյսը՝ `GetValidators` մեթոդով՝ սահմանելով փաստաթղթի բոլոր աղյուսակների վալիդատորների ամբողջական կոնֆիգուրացիան։

```c#
public interface IDocumentGridValidationProvider
{
    static abstract List<GridValidators> GetValidators(DocumentSchema documentSchema);
}
```

### Վալիդատորների օգտագործման սցենարներ

Custom վալիդատորների միջոցով հնարավոր է․

* սահմանել սյուների միջև կախվածություններ (օրինակ՝ «եթե `Type = SERVICE`, ապա `Quantity` սյան արժեքը պարտադիր է հավասար լինի 1-ի»),
* սահմանել տողի մակարդակի վալիդատոր (`RowValidator`):

**Օրինակ**

```c#
public class MyDocumentUI : DocumentUI<MyDocument>, IDocumentGridValidationProvider
{
    public static List<GridValidators> GetValidators(DocumentSchema documentSchema)
    {
        var validators = DocumentHelper.GetStandardGridsValidators(documentSchema);
        var lines = validators.First(v => v.Name == "Lines");

        lines.Validators["Code"] = (row, column) =>
        {
            string code = (string)row["Code"];
            if (string.IsNullOrWhiteSpace(code))
                return Resources.CodeRequired;
            return null;
        };

        lines.RowValidator = row =>
        {
            decimal amount = (decimal)row["Amount"];
            decimal tax = (decimal)row["Tax"];
            if (amount > 0 && tax == 0)
                return Resources.TaxRequiredForNonZeroAmount;
            return null;
        };

        return validators;
    }
}
```

## Սյան արժեքի խմբագրում ծարագրային և ինտերֆեյսային եղանակներով

**UI-ից խմբագրման դեպքում**՝ երբ օգտագործողը editor-ում մուտքագրում է նոր արժեք և commit է անում, WPF-ը ակտիվացնում է validation pipeline-ը՝ կանչվելով `IDataErrorInfo.this[columnName]` հատկությունը, որը ստուգում է տվյալ սյունի արժեքի վալիդ լինելը, ապա կանչվում է `IDataErrorInfo.Error`-ը, որը ստուգում է **ամբողջ տողի վալիդ լինելը**՝ Validate() մեթոդի միջոցով։ 
Արդյունքում թարմացվում է `HasValidationError` հատկությունը և վալիդացիոն սխալի դեպքում cell-ն ընդգծվում է կարմիր եզրով, և tooltip-ում երևում է հաղորդագրությունը։

**Ծրագրային (կոդից) խմբագրման դեպքում** (օրինակ՝ `row["Amount"] = 100`) կանչվում է սյան Setter-ը `PropertyChanged` մեթոդով, որը UI-ում թարմացնում է cell-ի արժեքը, սակայն չի կանչվում validation pipeline-ը (`IDataErrorInfo.this[columnName]`, `IDataErrorInfo.Error` հատկությունները չեն կանչվում), validator-ները չեն աշխատում, և `HasValidationError` հատկությունը չի թարմացվում։ UI-ում նոր արժեքն արտացոլվում է, բայց  վալիդացիայի նախորդ վիճակը պահպանվում է․ կարող է շարունակել ցուցադրվել հին սխալի նշումը կամ սխալը չցուցադրվել, նույնիսկ եթե այն արդեն առկա է։

**Կարևոր** Այս պատճառով ծրագրային փոփոխությունից հետո անհրաժեշտ է explicit կերպով կանչել RowValidator մեթոդը՝ որպեսզի validator-ները աշխատեն և UI-ի վալիդացիոն վիճակը համապատասխանի իրականությանը։

Տես ստորև տեղադրված հղումները Wpf application-ների վալիդացիայի և data binding-ին ծանոթանալու համար՝

| Թեմա | Հղում |
|------|-------|
| `Binding Explanation` | https://learn.microsoft.com/en-us/dotnet/api/system.windows.data.binding |
| `Data binding overview` | https://learn.microsoft.com/en-us/dotnet/desktop/wpf/data/ |
| `INotifyPropertyChanged Interface` | https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged |
| `IDataErrorInfo Interface` | https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.idataerrorinfo |
| `DataErrorValidationRule` | https://learn.microsoft.com/en-us/dotnet/api/system.windows.controls.dataerrorvalidationrule |
| `Binding.ValidatesOnDataErrors` | https://learn.microsoft.com/en-us/dotnet/api/system.windows.data.binding.validatesondataerrors |
| `WPF Data binding validation` | https://learn.microsoft.com/en-us/dotnet/desktop/wpf/data/how-to-implement-binding-validation |

