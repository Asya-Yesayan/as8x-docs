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

## Արժեքի փոփոխում UI-ից

Երբ օգտագործողը խմբագրում է cell-ը UI-ից, DevExpress XPF-ի և `DocumentGridControl`-ի կոնտեքստում տեղի են ունենում հետևյալ քայլերը՝ խստորեն հաջորդական։

### Քայլ 1. Խմբագրման ռեժիմ

DevExpress `TableView`-ը կանչում է `ShowEditor()`, բջիջն անցնում է ակտիվ editor-ի վիճակի։

### Քայլ 2. `CellValueChanging` իրադարձություն

`DocumentGridControl.View_CellValueChanging` handler-ը `CheckEditSettings`-ով սյունի (boolean) դեպքում անմիջապես կանչում է `View.CommitEditing()`-ը, որպեսզի checkbox-ի փոփոխությունը անհապաղ commit արվի։

### Քայլ 3. `ValidateCell` իրադարձություն

`InnerView_ValidateCell` handler-ը `DateEditControl`-ի դեպքում փոխարինում է "դատարկ" տեսքով արժեքը `null`-ով՝ DevExpress-ի ստանդարտ վալիդացիայից առաջ։

### Քայլ 4. Commit — `CellValueChanged`

`View_CellValueChanged` handler-ը կիրառում է լրացուցիչ նորմալիզացիա․

* `DocumentGridColumn.TrimValue = true` սյունի դեպքում՝ `value.Trim()`,
* `TextEditSettings`-ով սյան `null` արժեքը փոխարկում `string.Empty`-ի։

### Քայլ 5. `GridRow`-ի setter-ի կանչ

`CommitEditing()`-ից հետո WPF-ի TwoWay binding-ը setter է կանչում `GridRow.this[GridColumn]`-ի վրա։ Setter-ն իր հերթին գործարկում է `OnPropertyChanged(column.Name)`-ը, ինչը կանչում է `PropertyChanged` իրադարձությունը։

### Քայլ 6. `IDataErrorInfo`-ի հարցում

`PropertyChanged`-ին subscriber DevExpress-ը պահանջում է cell-ի սխալի հաղորդագրությունը՝ `IDataErrorInfo.this[columnName]`-ի միջոցով։ Indexer-ը delegate է `GridRow.ErrorInfo(columnName)` ներքին մեթոդին․

### Քայլ 7. Տողի վալիդացիա — `IDataErrorInfo.Error`

DevExpress-ը նաև հարցում է անում `IDataErrorInfo.Error`-ին, որը կանչում է `Validate()` մեթոդը։ `Validate()`-ը հաջորդաբար անցնում է բոլոր `ValidatorColumns`-ով, օգտագործում է քեշը, ապա կանչում է `RowValidator`-ը (եթե սահմանված է), վերադարձնում է առաջին հայտնաբերված սխալը և թարմացնում է `HasValidationError` հատկությունը։

Բացառության դեպքում կանչվում է `IGrid.OnRowError(Exception)`-ը, որը կանչում է `RowErrorHandler` իրադարձությունը։ `DocumentGridControl`-ում այդ իրադարձությունը կապված է `Value_RowErrorHandler` handler-ի հետ, որը UI dispatcher-ով ցուցադրում է `SingleErrorWindow`։

### Քայլ 8. UI-ի ինդիկատորի թարմացում

DevExpress-ը ոչ-`null` սխալի հաղորդագրության դեպքում cell-ը ընդգծում է կարմիր եզրով, իսկ tooltip-ում ցուցադրում է հաղորդագրությունը։

### Քայլ 9. `RequiresValidation` ֆիլտր

Մինչև յուրաքանչյուր ստուգում `Grid<T>`-ը կանչում է `NeedsValidation(column)`-ը, որն իր հերթին կանչում է `RequiresValidation` իրադարձությունը։ `DocumentGridControl`-ի handler-ը հաշվի է առնում `SkipValidationIfReadOnly` հատկությունը՝ ոչ խմբագրելի (readonly) սյուների վալիդացիան բացառելու համար։

## Արժեքի փոփոխում ծրագրային կոդից

Ծրագրային փոփոխման դեպքում, օրինակ․

```c#
row["Amount"] = 100;
grid.Rows[i]["Code"] = newCode;
```

Տողի համապատասխան սյան setter-ը կրկին կանչում է `OnPropertyChanged(column.Name)`-ը, բայց **չի վերանայում** քեշը։ Արդյունքում տեղի են ունենում հետևյալ էֆեկտները․

| Էֆեկտ | Պատճառ |
|-------|--------|
| Քեշը չի թարմացվում | Setter-ը `ForceValidation`-ը `true` չի սահմանում, ուստի հաջորդ վալիդացիան կօգտագործի հին `Message`-ը։ |
| `HasValidationError`-ը հնացած է | Տողի `HasValidationError`-ը թարմացվում է միայն `Validate()`-ի ժամանակ։ |
| UI-ի «կարմիր» ինդիկատորը կարող է չհամապատասխանել իրականությանը | DevExpress-ը `PropertyChanged`-ին responding-ի ժամանակ կարդում է `IDataErrorInfo`-ից քեշավորված հին հաղորդագրությունը։ |
| `DocumentGridControl.HasValidationError`-ը կարող է չհամընկնել աղյուսակի իրական վիճակի հետ | Ագրեգացված dependency property-ն թարմացվում է միայն `RowValidation` / `CheckHasValidationError`-ի կանչից։ |

Հետևաբար, ծրագրային փոփոխությունից հետո սխեման հետևյալն է․

```c#
row["Amount"] = 100;
documentGridControl.RowValidation(row);     // կանչ Validate() + HasValidationError-ի թարմացում
```

Կամ՝ `EnforceValidation`-ի կոմպակտ ձևով (քեշի վերանայում + DevExpress requery միաժամանակ)․

```c#
row["Amount"] = 100;
row.EnforceValidation("Amount");
documentGridControl.RowValidation(row);
```

## `DocumentGridControl`-ի վալիդացիոն մեթոդներ

### `DocumentGridControl.RowValidation(GridRow)` մեթոդ

```c#
public void RowValidation(Client.Document.GridRow row)
```

Կանչում է տրված տողի `Validate()`-ը և համապատասխանեցնում `DocumentGridControl.HasValidationError`-ը տողի `HasValidationError`-ի հետ։

**Ներքին ալգորիթմ**

1. Կանչվում է `row.Validate()`։ Տողի `HasValidationError`-ը թարմացվում է։
2. Եթե տողի `HasValidationError`-ը արդեն համընկնում է աղյուսակի `HasValidationError`-ի հետ — ելք առանց գործողության։
3. Եթե տողը սխալ ստացավ, իսկ աղյուսակը նախկինում սխալ չուներ — `HasValidationError` → `true` (արագ ճանապարհ՝ `SetValidationErrorProperty(true)`)։
4. Եթե տողն ուղղվեց, իսկ աղյուսակը նախկինում սխալ ուներ — կանչվում է `CheckHasValidationError()`, որը iterate է անում ողջ աղյուսակով՝ ստուգելու համար, արդյո՞ք մնացած տողերում սխալ կա։

**Կարևոր**․ `RowValidation`-ը **չի վերանայում** քեշը։ Քեշավորված տողի համար `Validate()`-ը կօգտագործի առկա քեշը, և եթե քեշը հնացած է, արդյունքը նույնպես հնացած կլինի։ Ծրագրային փոփոխությունից առաջ պարտադիր է կանչել `ResetForceValidationBit`-ը կամ `EnforceValidation`-ը։

**Կանչվում է ինքնաբերաբար**

| Տեղ | Հանգամանք |
|-----|-----------|
| Տողի dialog-ի փակում (`EditingRowWithDialog`) | `DocumentGridControl`-ը կանչում է `row.Validate()` dialog-ի հաջող փակումից հետո։ |
| Նոր տողի ավելացում | Տողի ստեղծումից հետո կատարվում է `row.Validate()` (առաջին վալիդացիայի համար)։ |

**Օրինակ**

```c#
public void ApplyExchangeRate(GridRow row, decimal rate)
{
    row["Rate"] = rate;
    row["Amount"] = (decimal)row["AmountForeign"] * rate;
    row.EnforceValidation("Rate", "Amount");
    this.documentGridControl.RowValidation(row);
}
```

---

### `DocumentGridControl.EnforceRowsValidation(params string[] columns)` մեթոդ

```c#
public void EnforceRowsValidation(params string[] columns)
```

Կիրառում է `EnforceValidation(string[])`-ը աղյուսակի **բոլոր տողերի** վրա՝ տրված սյուների կտրվածքով։

**Ներքին ալգորիթմ**

```c#
foreach (Client.Document.GridRow row in this.documentGrid)
{
    if (columns.Length != 0)
    {
        row.EnforceValidation(columns);
    }
}
```

Յուրաքանչյուր տողի համար տրված սյուների քեշը վերանայվում է, և կանչվում է `EnforcePropertyChanged()`-ը, որը DevExpress XPF-ի կտրվածքով կանչում է requery-ն բոլոր visible սյուների `IDataErrorInfo` indexer-ով։

**Կարևոր սահմանափակումներ**

* Եթե `columns` պարամետրը դատարկ է (`EnforceRowsValidation()`), `if (columns.Length != 0)` պայմանն արգելափակում է կատարումը. մեթոդը կկատարի iteration առանց որևէ գործողության։ Բոլոր տողերի վալիդացիան վերակայելու համար պետք է կիրառել [`EnforceAllRowsValidation`](#documentgridcontrolenforceallrowsvalidation-մեթոդ)-ը։
* Մեթոդը **չի կանչում** `Validate()`-ը և **չի թարմացնում** `HasValidationError`-ը անմիջապես։ Թարմացումը կկատարվի DevExpress-ի UI dispatch ցիկլում՝ `PropertyChanged`-ից հետո, երբ DevExpress-ը հարցում կանի `IDataErrorInfo.this[columnName]`-ի վրա։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|---------------|-----------------|----------------|
| columns | `string[]` (params) | - | Սյուների ներքին անունները (կոդերը), որոնց վալիդացիոն քեշը պետք է վերակայվի։ |

**Կիրառման սցենարներ**

* Ընդհանուր սյունակի (օրինակ՝ արժույթի փոխարժեք) խմբային թարմացում, երբ պետք է վերավալիդացիա անել միայն ազդակիր սյունի հաշվով։
* Արտաքին պարունակիչի (drop-down-ի աղբյուր, ծառի վիճակ) թարմացում՝ աղյուսակի տրված սյունին հղված ատյանների համար։

**Օրինակ**

```c#
foreach (var row in document.Lines)
{
    row["UnitPrice"] = GetPriceFromCatalog(row["ItemCode"]);
}
this.documentGridControl.EnforceRowsValidation("UnitPrice");
```

---

### `DocumentGridControl.EnforceAllRowsValidation()` մեթոդ

```c#
public void EnforceAllRowsValidation()
```

Կիրառում է `EnforceValidation()`-ը աղյուսակի **բոլոր տողերի** վրա՝ **բոլոր սյուների** կտրվածքով։

**Ներքին ալգորիթմ**

```c#
foreach (Client.Document.GridRow row in this.documentGrid)
{
    row.EnforceValidation();
}
```

Յուրաքանչյուր տողի համար բոլոր `PropertyValidatorCache` մուտքերի `ForceValidation = true`, `Message = null` է դառնում, ապա կանչվում է `EnforcePropertyChanged()`-ը։

**Կարևոր**

* Մեթոդը **չի կանչում** `RowValidation`-ը, ուստի `DocumentGridControl.HasValidationError`-ը անմիջապես չի թարմացվի։ Թարմացումը հետևում է DevExpress-ի UI dispatch ցիկլում, երբ `IDataErrorInfo` indexer-ները կհարցվեն։
* Եթե անհրաժեշտ է փաստաթղթի պահպանումից առաջ սինխրոն ստուգել ողջ աղյուսակը, պետք է կանչել `row.Validate()`-ը կամ `RowValidation`-ը յուրաքանչյուր տողի համար (տե՛ս սցենար «Պահպանումից առաջ»-ը)։

**Կիրառման սցենարներ**

* Փաստաթղթի բեռնում (`DocumentGrid` property-ի վերագրումից հետո)։
* Մեծ ծավալի ներմուծում/import։
* Փաստաթղթի ժամանակաշրջանի կամ համատեքստի փոփոխություն, երբ բոլոր սյուների վալիդացիան կարող է փոխվել։

**Օրինակ**

```c#
document = await client.Document.GetDocument(isn);
this.documentGridControl.DocumentGrid = document.Lines;
this.documentGridControl.EnforceAllRowsValidation();
```

---

### Համեմատություն

| Հատկություն | `RowValidation` | `EnforceRowsValidation` | `EnforceAllRowsValidation` |
|-------------|------------------|--------------------------|------------------------------|
| Ընդգրկում | 1 տող | Բոլոր տողերը | Բոլոր տողերը |
| Կանչում է `Validate()` | Այո | Ոչ | Ոչ |
| Վերանայում է քեշը | **Ոչ** | Տրված սյուների | Բոլոր սյուների |
| Կանչում է `PropertyChanged` | Ոչ (ուղիղ) | Այո (`EnforcePropertyChanged()`) | Այո (`EnforcePropertyChanged()`) |
| Թարմացնում է `HasValidationError`-ը անմիջապես | Այո | Ոչ | Ոչ |
| Թարմացնում է UI-ի սխալի վիզուալ ինդիկատորը | Միայն եթե քեշը թարմ է | Այո (DevExpress requery-ից հետո) | Այո (DevExpress requery-ից հետո) |
| Պարտադիր պարամետր | `row` | `columns` (դատարկ → idle) | — |
| Կիրառման սցենար | Մեկ տողի ծրագրային ուղղում | Բազմատող սյունակային խմբակային թարմացում | Փաստաթղթի load / import |

## Վալիդացիայի հետ կապված Անվանումներ

### `GridInfo`, `GridColumn`, `GridValidators` (Common)

| Անվանում | Տիպ | Նկարագրություն |
|-------|-----|----------------|
| `GridInfo.ValidatorColumns` | `IReadOnlyList<GridColumn>` | Վալիդատոր ունեցող սյուների ցանկ։ |
| `GridInfo.CacheValidationResults` | `bool` | Քեշի ակտիվության հայտանիշ։ |
| `GridInfo.RowValidator` | `Func<GridRow, string>` | Տողի վալիդատորը։ |
| `GridColumn.Validator` | `Func<GridRow, GridColumn, string>` | Սյան վալիդատորը։ |
| `GridColumn.ValidatorCacheIndex` | `int` | Քեշում սյան մուտքի ինդեքսը. `-1` = վալիդատոր չկա։ |
| `GridValidators.Name` | `string` | աղյուսակի ներքին անունը։ |
| `GridValidators.CacheValidationResults` | `bool` | Քեշի ակտիվության դրոշակ։ |
| `GridValidators.Validators` | `Dictionary<string, Func<GridRow, GridColumn, string>>` | Սյունի անունից → սյան վալիդատորի քարտեզ։ |
| `GridValidators.RowValidator` | `Func<GridRow, string>` | Տողի վալիդատոր (լրացուցիչ)։ |


### `DocumentGridControl` (Core.UI)

| Անվանում | Տիպ | Նկարագրություն |
|-------|-----|----------------|
| `HasValidationError` | `bool { get; }` (DependencyProperty) | աղյուսակի ագրեգացված սխալի դրոշակ։ |
| `IsRequired` | `bool` (DependencyProperty) | Եթե `true`, ապա դատարկ աղյուսակը համարվում է վալիդացիոն սխալ։ |
| `SkipValidationIfReadOnly` | `bool` | Կարդա-միայն սյուների վալիդացիայի շրջանցում `RequiresValidation` handler-ով։ |
| `RemoveEmptyRowsBeforeValidate` | `bool` | Վալիդացիայից առաջ դատարկ տողերի (`IsEmpty`) ինքնաշխատ հեռացում։ |
| `RowValidation(GridRow)` | `void` | Մեկ տողի վալիդացիա + `HasValidationError`-ի սինխրոնիզացում։ |
| `EnforceRowsValidation(string[])` | `void` | Բոլոր տողերի տրված սյուների քեշի վերանայում + DevExpress requery։ |
| `EnforceAllRowsValidation()` | `void` | Բոլոր տողերի բոլոր սյուների քեշի վերանայում + DevExpress requery։ |
| `CalculateHasValidationError(bool)` | `bool` | աղյուսակի ողջ կտրվածքով iteration. ստուգում է `View.HasValidationError`-ը, `IsRequired`-ը և բոլոր տողերի `HasValidationError`-ը։ |

## Մշակողի ուղեցույց

### Ե՞րբ կանչել `RowValidation`-ը

Կանչել **յուրաքանչյուր անգամ**, երբ ծրագրային ճանապարհով փոխվել են որևէ տող(եր)ի մեկ կամ մի քանի սյուների արժեքները, անհրաժեշտ է ապահովել տվյալների վալիդացիա և փոփոխել սխալի ինդիկատորը (`HasValidationError`) ինտերֆեյսում (UI):

```c#
row["Amount"] = newAmount;
row.EnforceValidation("Amount");           // սյան քեշի վերանայում
this.documentGridControl.RowValidation(row);
```

Dialog-ի փակումից կամ նոր տողի ավելացումից հետո `DocumentGridControl`-ը ինքնաբերաբար կանչում է `row.Validate()`-ը — կրկնակի կանչը անհրաժեշտ չէ։

### Ե՞րբ կիրառել `EnforceRowsValidation`-ը

Կիրառեք, երբ խմբային ձևով փոխվել են **կոնկրետ սյունի (սյուների)** արժեքները ողջ աղյուսակում, և քեշը պետք է վերակայել միայն այդ սյուների կտրվածքով։

```c#
foreach (var row in document.Lines)
{
    row["TaxRate"] = newRate;
    row["Tax"] = (decimal)row["Amount"] * newRate / 100m;
}
this.documentGridControl.EnforceRowsValidation("TaxRate", "Tax");
```

Հիշեցում․ առանց արգումենտ կանչը (`EnforceRowsValidation()`) ոչինչ չի կատարում, քանի որ `if (columns.Length != 0)`-ը արգելափակում է մարմինը։

### Ե՞րբ կիրառել `EnforceAllRowsValidation`-ը

Կիրառեք, երբ՝

* Փաստաթուղթը նոր է բեռնվել կամ ներմուծվել, և `DocumentGrid`-ը հենց նոր է վերագրվել։
* Փոխվել է փաստաթղթի համատեքստ (ժամանակաշրջան, համատեքստային ուղեցույց), որի պատճառով գործնականում **բոլոր** սյուների վալիդացիան կարող է փոխվել։
* Քիչ հայտնի է, թե որ սյունի վալիդացիան է անհրաժեշտ կրկնել։

```c#
this.documentGridControl.DocumentGrid = document.Lines;
this.documentGridControl.EnforceAllRowsValidation();
```

### Փաստաթղթի պահպանումից առաջ

`EnforceAllRowsValidation`-ի կանչը կանչում է DevExpress-ի asynchronous requery-ն և **չի** սինխրոն թարմացնում `HasValidationError`-ը։ Եթե պահպանումից առաջ պետք է կանխատեսել, արդյո՞ք պահպանումը կարող է իրականացվել, պետք է կրկնել ողջ աղյուսակով սինխրոն `Validate()` կանչը՝

```c#
bool hasError = false;
foreach (Client.Document.GridRow row in document.Lines)
{
    row.ResetForceValidationBit();
    row.Validate();
    if (row.HasValidationError)
    {
        hasError = true;
        break;
    }
}
if (hasError)
{
    // արգելափակում ենք պահպանումը
}
```

### Կրկնակի վալիդացիայի խուսափում

* Մի կանչեք `RowValidation`-ը UI-ից ստացված `CellValueChanged` handler-ում, եթե արժեքը փոխվել է UI-ից. DevExpress-ը արդեն իրականացնում է անհրաժեշտ ստուգումները։
* Loop-ով տողերի ծրագրային թարմացման դեպքում նախընտրեք `EnforceAllRowsValidation`-ը կամ `EnforceRowsValidation`-ը հատկապես՝ յուրաքանչյուր տողի համար առանձին `RowValidation` կանչի փոխարեն, որպեսզի `CheckHasValidationError`-ի `O(N²)` iteration-ից խուսափեք։

### UI-ի արձագանքելիության պահպանում

* Մեծ ծավալի աղյուսակի դեպքում (օրինակ՝ 1000+ տող) `EnforceAllRowsValidation`-ն ինքնին արագ է, բայց DevExpress-ի հետագա requery-ն կարող է պահանջել նկատելի dispatcher-ի ժամանակ։ Հատկապես ակտիվ խմբագրման ընթացքում խորհուրդ է տրվում խումբը պահպանել ընտանեկան scope-ում և **չ**կանչել `EnforceAllRowsValidation`-ը հաճախ։
* Թողարկեք `RemoveEmptyRowsBeforeValidate = true`-ն, որպեսզի դատարկ տողերը (`IsEmpty == true`) վալիդացիայի iteration-ի մասը չլինեն։

### Քեշավորման ճիշտ կիրառություն

* Ստանդարտ `DocumentHelper.GetStandardGridsValidators`-ի դեպքում `CacheValidationResults = true` է։ custom `GetValidators` ներդրման ժամանակ պետք է հստակ պահպանել կամ անջատել քեշավորումը՝ կախված վալիդատորների կողմնակի կախվածություններից։
* Եթե վալիդատորը կախված է **այլ սյունի** արժեքից (cross-column), այդ ուրիշ սյունի փոփոխման ժամանակ պետք է բացահայտ վերակայել կախված սյունի քեշը՝

```c#
// Type սյունի փոփոխման ժամանակ Quantity-ի վալիդատորը կարող է փոխվել
row["Type"] = "SERVICE";
row.ResetForceValidationBit("Quantity");
this.documentGridControl.RowValidation(row);
```

## Վալիդացիայի ընթացքի սխեմա

```
UI-ից խմբագրում                                    Ծրագրային փոփոխում
─────────────────                                  ───────────────────
View_CellValueChanging                             row["Col"] = value
        │                                                   │
InnerView_ValidateCell                             OnPropertyChanged
        │                                                   │
View_CellValueChanged                              PropertyChanged event
        │                                                   │
CommitEditing                                      DevExpress հարցում
        │                                                   │
GridRow[col].set                                   IDataErrorInfo.this[col]
        │                                                   │
OnPropertyChanged ─────► PropertyChanged event             ▼
                                  │                ErrorInfo(col)
                                  ▼                        │
                          IDataErrorInfo                   │
                                  │                ┌───────┴───────┐
                                  ▼                ▼               ▼
                          ErrorInfo / Validate   քեշում         քեշը հնացած —
                                  │              թարմացում` —   կանչվում է
                                  ▼              վերադարձ       Validator
                          HasValidationError ◄── 
                          թարմացում                                
                                                  ⚠ HasValidationError
                                                    ՉԻ թարմացվում
                                                  ↓ Անհրաժեշտ է՝
                                                  row.EnforceValidation(...)
                                                  documentGridControl.RowValidation(row)
```

