---
title: "Փաստաթղթի աղյուսակի վալիդացիա"
nav_exclude: true
---

# Փաստաթղթի աղյուսակի վալիդացիա

## Բովանդակություն

* [Ներածություն](#ներածություն)
* [Վալիդացիայի մակարդակները](#վալիդացիայի-մակարդակները)
* [Համակարգային և Custom վալիդատորներ — `IDocumentGridValidationProvider`](#համակարգային-և-custom-վալիդատորներ--idocumentgridvalidationprovider)
* [Սյան արժեքի խմբագրում՝ ծրագրային և ինտերֆեյսային եղանակներով](#սյան-արժեքի-խմբագրում-ծրագրային-և-ինտերֆեյսային-եղանակներով)
* [Վալիդացիայի քեշավորումը](#վալիդացիայի-քեշավորումը)
* [RowValidation(GridRow row)](#rowvalidationgridrow-row)
* [EnforceRowsValidation և EnforceAllRowsValidation](#enforcerowsvalidation-և-enforceallrowsvalidation)
* [Օրինակներ](#օրինակներ)

## Ներածություն

Վալիդացիայի (validation) մեխանիզմի նպատակն է ապահովել, որ աղյուսակի տվյալները ցանկացած պահի համապատասխան լինեն նախապես սահմանված կանոններին, ինչպես նաև օգտագործողին տեղեկացնեն ցանկացած խախտման մասին։

Վալիդացիայի կանոնների սահմանումը և կանչման մեթոդները տարանջատված են․ վալիդատորները սահմանվում են IDocumentGridValidationProvider.GetValidators-ում, իսկ վալիդացիայի կանչման մեթոդները (`RowValidation`, `EnforceRowsValidation`, `EnforceAllRowsValidation`) տրամադրվում են `DocumentGridControl`-ի միջոցով։

## Վալիդացիայի մակարդակները

Վալիդացիան ունի երկու մակարդակ․

| Մակարդակ | Կրող | Շարահյուսություն | Կանչվում է |
|----------|------|----------------|------------|
| **Սյան** (cell-level) | `GridColumn.Validator` | `Func<GridRow, GridColumn, string>` | Յուրաքանչյուր սյան համար վալիդացիայի կանոնների սահմանում։ |
| **Տողի** (row-level) | `GridInfo.RowValidator` | `Func<GridRow, string>` | Աղյուսակի տողի վալիդացիայի սահմանում, կանչվում է սյուների վալիդացիայից հետո։ |

Վալիդատոր ֆունկցիաները վերադարձնում են `null`՝ արժեքի վալիդ լինելու դեպքում, կամ սխալի հաղորդագրությունը (`string`)՝ խախտման դեպքում։

Աղյուսակի ընդհանուր վալիդացիայի վիճակը ցույց է տրվում `DocumentGridControl.HasValidationError` property-ի միջոցով. արժեքը `true` է, եթե առնվազն մեկ տող ոչ վալիդ է։

## Համակարգային և Custom վալիդատորներ — `IDocumentGridValidationProvider`

`DocumentHelper.GetStandardGridsValidators(DocumentSchema)`-ը ստեղծում է լռությամբ (default) վալիդատորների հավաքածու՝ ըստ սյան համակարգային տիպի և `IsRequired` հայտանիշի։

Սակայն հնարավոր է նաև սյուների, ինչպես նաև տողերի սահմանել custom վալիդացիայի կանոններ։ Այն իրականացնելու համար `DocumentUI<T>`-ից ժառանգող դասը պետք է իրականցնի IDocumentGridValidationProvider ինտերֆեյսը՝ `GetValidators` մեթոդով՝ սահմանելով փաստաթղթի բոլոր աղյուսակների վալիդատորների ամբողջական կոնֆիգուրացիան։

**Կարևոր**․ `GetValidators` մեթոդի սկզբում անհրաժեշտ է կանչել `DocumentHelper.GetStandardGridsValidators(documentSchema)`-ը՝ համակարգային վալիդատորների ֆունկցիոնալությունը պահպանելու համար, և custom կանոնները ավելացնել ստացված հավաքածուի վրա։

```c#
public interface IDocumentGridValidationProvider
{
    static abstract List<GridValidators> GetValidators(DocumentSchema documentSchema);
}
```

**Օրինակ**

```c#
public class MyDocumentUI : DocumentUI<MyDocument>, IDocumentGridValidationProvider
{
    public static List<GridValidators> GetValidators(DocumentSchema documentSchema)
    {
        // Համակարգային վալիդատորների ստացում
        var validators = DocumentHelper.GetStandardGridsValidators(documentSchema);

        // ...
        // custom վալիդատորների սահմանում
        // ...

        return validators;
    }
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
        // Համակարգային վալիդատորների ստացում
        var validators = DocumentHelper.GetStandardGridsValidators(documentSchema);

        // «Lines» անունով աղյուսակի վալիդատորների ընտրություն
        var lines = validators.First(v => v.Name == "Lines");

        // «Quantity» սյան մակարդակի վալիդատոր — դրական արժեքի ստուգում
        lines.Validators["Quantity"] = (row, column) =>
        {
            decimal quantity = (decimal)row["Quantity"];
            if (quantity <= 0)
            {
                // ոչ վալիդ արժեքի դեպքում սխալի հաղորդագրության սահմանում
                return "Քանակը դաշտի արժեքը պետք է լինի դրական";
            }
            // վալիդ արժեքի դեպքում վերադարձվում է null
            return null;
        };

        // Տողի մակարդակի վալիդատոր — սյուների միջև կախվածության ստուգում
        lines.RowValidator = row =>
        {
            decimal amount = (decimal)row["Amount"];
            decimal tax = (decimal)row["Tax"];
            if (amount > 0 && tax == 0)
            {
                // ոչ վալիդ տողի դեպքում սխալի հաղորդագրության սահմանում
                return "Ոչ զրոյական Գումարի դեպքում Հարկի արժեքը պարտադիր է";
            }
            // վալիդ տողի դեպքում վերադարձվում է null
            return null;
        };

        return validators;
    }
}
```

## Սյան արժեքի խմբագրում՝ ծրագրային և ինտերֆեյսային եղանակներով

**UI-ից խմբագրման դեպքում**՝ երբ օգտագործողը editor-ում մուտքագրում է նոր արժեք և commit է անում, WPF-ը ակտիվացնում է validation pipeline-ը՝ կանչվելով `IDataErrorInfo.this[columnName]` հատկությունը, որը ստուգում է տվյալ սյան արժեքի վալիդ լինելը, ապա կանչվում է `IDataErrorInfo.Error`-ը, որը ստուգում է **ամբողջ տողի վալիդ լինելը**՝ Validate() մեթոդի միջոցով։ 
Արդյունքում թարմացվում է `HasValidationError` հատկությունը և վալիդացիայի սխալի դեպքում cell-ում երևում է կարմիր խաչ, և tooltip-ում երևում է հաղորդագրությունը։

**Ծրագրային (կոդից) խմբագրման դեպքում** (օրինակ՝ `row["Amount"] = 100`) սյան Setter-ը կանչվում է, `PropertyChanged` իրադարձությունը ակտիվանում է, և WPF binding-ի վարքագիծը կախված է նրանից, թե ազդեցության ենթակա աղյուսակը գտնվում է ակտիվ էջում, թե այլ էջում/թաբում․

* **Նույն ակտիվ էջում/թաբում գտնվող աղյուսակի դեպքում** (օրինակ՝ փաստաթղթը ունի մեկ էջ, կամ փոփոխությունը և աղյուսակը գտնվում են նույն ակտիվ թաբում)՝ validation pipeline-ը ավտոմատ կերպով կանչվում է, և UI-ի վալիդացիայի վիճակը թարմացվում է անմիջապես։
* **Տարբեր էջերում/թաբերում գտնվող աղյուսակի դեպքում** (օրինակ՝ փոփոխությունը «Ընդհանուր» էջում է, ազդեցության ենթակա աղյուսակը՝ «Նյութեր» թաբում)՝ validation pipeline-ը կկանչվի, երբ օգտագործողը անցում կատարի մյուս թաբի վրա։ Որպեսզի մյուս թաբի վալիդացիայի վիճակը թարմացվի **անմիջապես**՝ առանց օգտագործողի կողմից թաբերի միջև անցում կատարելու, անհրաժեշտ է կանչել վալիդացիան իրականացնող մեթոդ։

## Վալիդացիայի քեշավորումը

Վալիդացիայի մեթոդները (`RowValidation`, `EnforceRowsValidation`, `EnforceAllRowsValidation`) աշխատում են վալիդացիայի քեշի հիման վրա։ Քեշը թույլ է տալիս խուսափել validator-ի կրկնակի կանչից, երբ սյան արժեքը չի փոխվել նախորդ վալիդացիայից հետո։

Աղյուսակի յուրաքանչյուր տող յուրաքանչյուր սյան համար պահպանում է վալիդացիայի վերջին արդյունքը քեշում։ Քեշն ունի երկու հատկություն․

* **`Message`** — սյան վերջին վալիդատորի վերադարձրած հաղորդագրությունը (`null`՝ վալիդ արժեքի դեպքում, կամ սխալի տեքստը՝ ոչ վալիդ արժեքի դեպքում)։
* **`forceValidation`** — բուլյան հատկություն, որ որոշում է, թե հաջորդ վալիդացիայի կանչի ընթացքում պետք է կրկին կանչվի սյան validator-ը (`true`), թե կարող է վերադարձվել քեշավորված `Message`-ի արժեքը (`false`)։

**Կարևոր**․ `forceValidation`-ն է որոշում՝ validator-ը կանչվում է, թե չէ։ Եթե `forceValidation = false`, [`RowValidation`](#rowvalidationgridrow-row) մեթոդը, որքան էլ կանչվի, validator-ները կրկին չի կանչի, և քեշավորված `Message`-ը կպահպանվի անփոփոխ։ Քեշավորված սխալները թարմացնելու համար նախ անհրաժեշտ է կանչել [`EnforceRowsValidation` / `EnforceAllRowsValidation`](#enforcerowsvalidation-և-enforceallrowsvalidation) մեթոդներից մեկը (կամ տողի վրա՝ `row.EnforceValidation(...)`)՝ `forceValidation`-ը `true` սահմանելու համար, ապա կանչել `RowValidation`-ը (կամ թողնել WPF binding-ին՝ ավտոմատ կանչել այն)։

## `RowValidation(GridRow row)`

```c#
public void RowValidation(Client.Document.GridRow row)
```

**Նկարագրություն**․ Տրված տողի համար միանգամից կանչում է վալիդացիայի մեխանիզմը՝ քեշի `forceValidation`-ի հիման վրա։ `forceValidation = true` ունեցող սյուների համար կանչվում է validator-ը, արդյունքը քեշավորվում է, իսկ `forceValidation = false` ունեցողների համար օգտագործվում է քեշավորված `Message`-ը։ Մեթոդի կատարման արդյունքում թարմացվում են աղյուսակի `HasValidationError` և `HasValidationWarning` ինդիկատորները, և UI-ում ցուցադրվում են սխալերի նշումները (cell-ում կարմիր խաչ, tooltip-ում սխալի հաղորդագրությունը)։

Մեթոդը **հիմնվում է քեշի վրա**․ եթե բոլոր սյուների `forceValidation = false` է, validator-ները կրկին չեն կանչվի, և մեթոդը կաշխատի նախորդ քեշավորված `Message`-ների հիման վրա։ Հետևաբար, քեշավորված տողի վրա ծրագրային փոփոխությունից հետո `RowValidation`-ից առաջ պետք է կանչել `row.EnforceValidation(columns)`՝ փոփոխված սյուների `forceValidation`-ը `true` սահմանելու համար։

**Կիրառման սցենարներ**

* **Տարբեր թաբերում գտնվող դաշտերի դեպքում** — երբ ծրագրային փոփոխությունը կատարվում է մի թաբում, իսկ վալիդացիան պետք է աշխատի մյուս թաբի աղյուսակի վրա՝ առանց օգտագործողի կողմից թաբերի միջև անցում կատարելու։
* **Քեշավորված տողի փոփոխությունից հետո** — `row.EnforceValidation(columns)`-ի հետ հաջորդական կանչով՝ նախ քեշը անվավեր է դարձվում, ապա `RowValidation`-ով կանչվում են validator-ները։
* Երբ պահանջվում է, որ `HasValidationError` ինդիկատորը թարմացվի **միանգամից**՝ ոչ թե հետաձգվի մինչև WPF binding-ի հաջորդ կանչը (օրինակ՝ պահպանման կոճակը ակտիվացնելուց առաջ)։

**Կարևոր**․ Եթե ծրագրային փոփոխությունը կատարվում է **նույն թաբում**, որտեղ գտնվում է աղյուսակը, `RowValidation`-ի կանչը անհրաժեշտ չէ. WPF validation pipeline-ն ավտոմատ կերպով կանչում է validator-ները։ Բավարար է կանչել `row.EnforceValidation(...)` (կամ համապատասխան `Enforce` մեթոդը)՝ քեշը անվավեր դարձնելու և սխալի ճշգրիտ հաղորդագրությունը UI-ում թարմացնելու համար։

**Օրինակ — փոխարժեքի կիրառման մեթոդ**

Արդեն քեշավորված տողի վրա ծրագրային փոփոխությունից հետո՝ `row.EnforceValidation(columns)` + `RowValidation(row)` հաջորդական կանչով․

```c#
public void ApplyExchangeRate(GridRow row, decimal rate)
{
    // Փոխարժեքով գումարի վերահաշվարկ
    row["Rate"] = rate;
    row["Amount"] = (decimal)row["AmountForeign"] * rate;

    // Փոփոխված սյուների քեշի անվավերացում (forceValidation = true)
    row.EnforceValidation("Rate", "Amount");

    // Validator-ների անմիջապես կանչ և UI-ի վալիդացիայի ինդիկատորների թարմացում
    this.documentGridControl.RowValidation(row);
}
```

## `EnforceRowsValidation` և `EnforceAllRowsValidation`

```c#
public void EnforceRowsValidation(params string[] columns)
public void EnforceAllRowsValidation()
```

**Նկարագրություն**․ Աղյուսակի **բոլոր տողերի** վալիդացիայի քեշի `forceValidation`-ը սահմանում են `true`՝ ստիպելով, որ հաջորդ քայլում validator-ները կրկին կանչվեն։ Մեթոդները տարբերվում են միայն ազդելու սյուների շրջանակով․

* **`EnforceRowsValidation(columns)`** — ազդում է **տրված սյուների** վրա (բոլոր տողերի կտրվածքով)։
* **`EnforceAllRowsValidation()`** — ազդում է **բոլոր սյուների** վրա (բոլոր տողերի կտրվածքով)։

WPF validation pipeline-ի արդյունքում ավտոմատ կանչվում է validator-ների վերակատարում, և UI-ի վալիդացիայի ինդիկատորները թարմացվում են (cell-ում կարմիր խաչ, tooltip, աղյուսակի `HasValidationError`)։

Validation pipeline-ը կանչվում է այն ժամանակ, երբ աղյուսակը ակտիվ է և binding-ը հարցում է կատարում `IDataErrorInfo` ինտերֆեյսին։ Եթե աղյուսակը գտնվում է ոչ ակտիվ թաբի վրա, validator-ները կկանչվեն, երբ օգտագործողը անցում կատարի այդ թաբի վրա։

Մեթոդները **չեն նայում նախորդ վալիդացիայի արդյունքին**․ ստիպում են validator-ները կրկին կանչվել, անկախ նրանից՝ նախկինում աղյուսակը վալիդ էր թե չէ։

**Կիրառման սցենարներ**

* **Աղյուսակից դուրս գտնվող դաշտի փոփոխությունից հետո** — երբ նույն թաբում գտնվող այլ դաշտի արժեքը փոխվում է, և աղյուսակի որոշակի սյուների վալիդացիան կախված է այդ դաշտից։
* **Քեշավորված սխալերի թարմացման համար** — եթե աղյուսակում արդեն կան սխալներ, և ծրագրային փոփոխությունից հետո նոր validate-ը չի աշխատում քեշավորված վիճակի պատճառով։

## Օրինակներ

### `PurchaseRequest` — փաստաթղթի «Կատարման ժամկետ» (DueDate) դաշտի փոփոխություն

«Ընդհանուր» էջում գտնվող «Կատարման ժամկետ» դաշտի փոփոխությունից հետո «Նյութեր» (Materials) թաբի աղյուսակի տողերի `DueDate` սյան արժեքները ծրագրային կերպով թարմացվում են։ Քանի որ ծրագրային փոփոխությունից հետո վալիդացիայի քեշը պահպանում է նախորդ արդյունքները, անհրաժեշտ է քեշը անվավեր դարձնել։ Ստորև բերված են երկու տարբերակ՝ կախված անհրաժեշտությունից։

«Կատարման ժամկետ» դաշտը գտնվում է «Ընդհանուր» էջում, իսկ «Նյութեր» աղյուսակը՝ առանձին թաբում։ Երկու դեպքում էլ կիրառվող մոտեցումը մեկնարկում է «Կատարման ժամկետ» դաշտի `EditValueChanged` իրադարձության մշակիչից․

```c#
// «Կատարման ժամկետ» դաշտի փոփոխության մշակիչ
private void DueDate_EditValueChanged(object sender, DateEditValueChangedEventArgs e)
{
    // Ամսաթվային դաշտերի վալիդացիա, և միայն հաջող լինելու դեպքում՝ աղյուսակի թարմացում
    if (this.Date.DoValidate() && this.DueDate.DoValidate())
    {
        SetDueDateInGrids();
    }
}
```

#### Տարբերակ 1 — միայն `row.EnforceValidation()`

Կիրառվում է, երբ վալիդացիայի արդյունքը անհրաժեշտ չէ անմիջապես ստանալ։ Քեշը անվավեր է դառնում, իսկ validator-ները կկանչվեն WPF validation pipeline-ի արդյունքում, երբ օգտագործողը անցում կատարի «Նյութեր» թաբի վրա և աղյուսակը դառնա ակտիվ։

```c#
private void SetDueDateInGrids()
{
    var materials = (Grid<ClientDoc.MTListRow>)this.Materials.DocumentGrid;

    foreach (var row in materials)
    {
        // Տողի «Կատարման ժամկետ» սյան թարմացում
        row.DueDate = this.DueDate.Value;

        // Քեշի անվավերացում (forceValidation = true)
        row.EnforceValidation();
    }
}
```

#### Տարբերակ 2 — `row.EnforceValidation()` + `RowValidation(row)` հաջորդական կանչով

Կիրառվում է, երբ անհրաժեշտ է, որ վալիդացիայի արդյունքը անմիջապես արտացոլվի, և աղյուսակի `HasValidationError` ինդիկատորը թարմացվի նույն պահին, անկախ նրանից՝ աղյուսակը ակտիվ է, թե ոչ։

```c#
private void SetDueDateInGrids()
{
    var materials = (Grid<ClientDoc.MTListRow>)this.Materials.DocumentGrid;

    foreach (var row in materials)
    {
        // Տողի «Կատարման ժամկետ» սյան թարմացում
        row.DueDate = this.DueDate.Value;

        // Քեշի անվավերացում (forceValidation = true)
        row.EnforceValidation();

        // Validator-ների անմիջապես կանչ և UI-ի վալիդացիայի ինդիկատորների թարմացում
        this.Materials.RowValidation(row);
    }
}
```

### `BusinessTripCertificate` — Ծախսի տեսակի (ExpType) ընտրություն dropdown-ից

«Գործուղման վկայական» փաստաթղթի «Ծախսերի աղյուսակ» (BusinessTripExpenses) աղյուսակում օգտագործողը dropdown-ից ընտրում է Ծախսի տեսակը։ Ընտրությունից հետո ծրագրային կերպով լրացվում են տողի մի շարք սյուներ (արժույթ, գումար, հաշիվ, օրերի քանակ և այլն)։ Քանի որ այս սյուների վալիդացիան կախված է ընտրված Ծախսի տեսակից, քեշավորված սխալները կարող են այլևս ճիշտ չլինել։ `row.EnforceValidation`-ը կանչվում է փոփոխված սյուների համար․

```c#
// Dropdown-ից արժեքի ընտրության մշակիչ
private void DocumentGridControl_ClickDropDown(object sender, DocumentGridClickDropDownEventArgs e)
{
    var row = (ClientDoc.BusExpssRow)this.BusinessTripExpenses.DocumentGrid[e.RowHandle];

    // Ակտիվ սյունը «Ծախսի տեսակ»-ն է — բացվում է համապատասխան dropdown-ը
    if (e.Column.Name == nameof(ClientDoc.BusExpssRow.ExpType))
    {
        var modalBrowser = ModalBrowserHelper.BusinessTripExpenses(e.Value, ...);
        if (modalBrowser.Show())
        {
            // Ընտրված տողից ծրագրային կերպով լրացվում են բազմաթիվ սյուներ
            row.ExpType = ...;
            row.CurCode = ...;

            // Փոփոխված հիմնական սյուների քեշի անվավերացում (forceValidation = true)
            row.EnforceValidation(nameof(ClientDoc.BusExpssRow.ExpType),
                                  nameof(ClientDoc.BusExpssRow.BCount));
        }
    }
}
```

Քանի որ աղյուսակը և dropdown-ն գտնվում են նույն էջում, WPF binding-ը անմիջապես կանչում է validator-ները փոփոխված սյուների վրա, և UI-ում սխալերի նշումները թարմացվում են dropdown-ից ընտրությունից անմիջապես հետո։

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

