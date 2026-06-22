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
* [`RowValidation(GridRow row)`](#rowvalidationgridrow-row)
* [`EnforceRowsValidation(params string[] columns)`](#enforcerowsvalidationparams-string-columns)
* [`EnforceAllRowsValidation()`](#enforceallrowsvalidation)
* [Օրինակներ](#օրինակներ)
* [Մեթոդի ընտրությունը՝ ըստ սցենարի](#մեթոդի-ընտրությունը-ըստ-սցենարի)

## Ներածություն

Փաստաթղթի աղյուսակը նախատեսված է տողային տվյալների ցուցադրման և խմբագրման համար։ Աղյուսակի յուրաքանչյուր տող ներկայացնում է առանձին գրառում, օրինակ՝ վաճառքի տող, հաշվարկի մուտքագրում կամ աշխատավարձի բաղադրիչ։

Վալիդացիայի (validation) մեխանիզմի նպատակն է ապահովել, որ աղյուսակի տվյալները փաստաթղթի պահպանումից առաջ համապատասխան լինեն նախապես սահմանված կանոններին, ինչպես նաև օգտագործողին տեղեկացնեն ցանկացած խախտման մասին։

Վալիդացիան իրականացվում է երկու շերտում, և UI-ն ու տվյալների մոդելը խստորեն տարանջատված են։

| Շերտ | Բաղադրիչներ | Պատասխանատվություն |
|------|-------------|--------------------|
| Տվյալներ | `Grid<T>`, `GridRow`, `GridInfo`, `GridColumn`, `GridValidators` | Վալիդատորների սահմանում, վալիդացիայի արդյունքների քեշավորում, վալիդացիայի կիրառում՝ `IDataErrorInfo` ինտերֆեյսի միջոցով։ |
| Ինտերֆեյս (UI) | `DocumentGridControl`, `IDocumentGridValidationProvider` | `HasValidationError` dependency property-ով աղյուսակի վալիդ կամ ոչ վալիդ լինելու որոշում, աղյուսակի մակարդակում վալիդացիոն մեթոդների սահմանում (`RowValidation`, `EnforceRowsValidation`, `EnforceAllRowsValidation`)։ |

Այսպիսի դասավորության շնորհիվ վալիդատորները կանչվում են ինչպես ինտերֆեյսի (UI) խմբագրման ժամանակ՝ ավտոմատ կերպով, այնպես էլ ծրագրային փոփոխության ժամանակ՝ explicit կերպով կանչելով վալիդացիա։ 

## Վալիդացիայի մակարդակները

Վալիդացիան ունի երեք մակարդակ․

| Մակարդակ | Կրող | Շարահյուսություն | Կանչվում է |
|----------|------|----------------|------------|
| **Սյունի** (cell-level) | `GridColumn.Validator` | `Func<GridRow, GridColumn, string>` | Յուրաքանչյուր սյան համար վալիդացիայի կանոնների սահմանում։ |
| **Տողի** (row-level) | `GridInfo.RowValidator` | `Func<GridRow, string>` | Աղյուսակի տողի վալիդացիայի սահմանում, կանչվում է սյուների վալիդացիայից հետո։ |
| **Աղյուսակի** (grid-level) | `DocumentGridControl.HasValidationError` (DependencyProperty) | `bool` | Ցույց է տալիս՝ աղյուսակը վալիդացիոն սխալ ունի, թե ոչ։ `true` է, եթե առնվազն մեկ տող ոչ վալիդ է։ |

Վալիդատոր ֆունկցիաները վերադարձնում են `null`՝ արժեքի վալիդ լինելու դեպքում, կամ սխալի հաղորդագրությունը (`string`)՝ խախտման դեպքում։

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
Արդյունքում թարմացվում է `HasValidationError` հատկությունը և վալիդացիոն սխալի դեպքում cell-ն ընդգծվում է կարմիր եզրով, և tooltip-ում երևում է հաղորդագրությունը։

**Ծրագրային (կոդից) խմբագրման դեպքում** (օրինակ՝ `row["Amount"] = 100`) կանչվում է սյան Setter-ը `PropertyChanged` մեթոդով, որը UI-ում թարմացնում է cell-ի արժեքը, սակայն չի կանչվում validation pipeline-ը (`IDataErrorInfo.this[columnName]`, `IDataErrorInfo.Error` հատկությունները չեն կանչվում), validator-ները չեն աշխատում, և `HasValidationError` հատկությունը չի թարմացվում։ UI-ում նոր արժեքն արտացոլվում է, բայց  վալիդացիայի նախորդ վիճակը պահպանվում է․ կարող է շարունակել ցուցադրվել հին սխալի նշումը կամ սխալը չցուցադրվել, նույնիսկ եթե այն արդեն առկա է։

**Կարևոր** Այս պատճառով ծրագրային փոփոխությունից հետո անհրաժեշտ է explicit կերպով կանչել վալիդացիայի մեթոդներից մեկը՝ որպեսզի validator-ները աշխատեն և UI-ի վալիդացիոն վիճակը համապատասխանի իրականությանը։

## Վալիդացիայի քեշավորումը

Աղյուսակի յուրաքանչյուր տող յուրաքանչյուր սյան համար պահպանում է վալիդացիայի վերջին արդյունքը քեշում։ Քեշն ունի երկու հատկություն․

* **`Message`** — սյան վերջին վալիդատորի վերադարձրած հաղորդագրությունը (`null`՝ վալիդ արժեքի դեպքում, կամ սխալի տեքստը՝ ոչ վալիդ արժեքի դեպքում)։
* **`forceValidation`** — բուլյան հատկություն, որ որոշում է, թե հաջորդ վալիդացիայի կանչի ընթացքում պետք է կրկին կանչվի սյան validator-ը (`true`), թե կարող է վերադարձվել քեշավորված `Message`-ի արժեքը (`false`)։

`forceValidation`-ն է որոշում՝ validator-ը կկանչվի, թե չէ։ Եթե այն `false` է, validator-ը չի կանչվի, որքան էլ վալիդացիան կանչվի։

**Հատկությունների արժեքները փոխվում են հետևյալ դեպքերում.**

* **Տողի ստեղծման (`Initialize`) ժամանակ** `forceValidation = true` և `Message = null`, որպեսզի առաջին վալիդացիայի ժամանակ բոլոր սյուները ստուգվեն։
* **Validator-ի կանչից (քեշավորման ընթացքից) հետո** `forceValidation = false`, իսկ `Message`-ում պահպանվում է validator-ի վերադարձրած արդյունքը (`null`՝ վալիդ արժեքի դեպքում, սխալի տեքստ՝ ոչ վալիդի դեպքում)։
* **`EnforceValidation` / `EnforceRowsValidation` / `EnforceAllRowsValidation` մեթոդների կանչից հետո** `forceValidation = true`, քեշավորված `Message`-ը մաքրվում է՝ ստիպելով, որ հաջորդ վալիդացիայի ժամանակ validator-ները կրկին կանչվեն։

**Հատկությունների արժեքները չեն թարմացվում հետևյալ դեպքերում.**

* **Ծրագրային փոփոխման դեպքում** (օրինակ՝ `row["Amount"] = 100`) քեշը մնում է անփոփոխ, քեշավորված `Message`-ը պահպանվում է, նույնիսկ եթե այն այլևս ճիշտ չէ։
* **Validator-ի կանչից հետո մինչև հաջորդ explicit invalidation-ը** քեշում պահպանված `Message`-ը կօգտագործվի առանց validator-ի կրկին կանչման։

**Օրինակ՝ մեթոդների վարքագիծը քեշավորված սխալով սյան վրա**․ Ենթադրենք սյան արժեքը նախորդ վալիդացիայի ընթացքում սխալ է եղել։ Քեշում պահպանված է. `forceValidation = false`, իսկ `Message`-ը՝ համապատասխան սխալի հաղորդագրությունը։

* `RowValidation`-ի կանչը տվյալ սյան validator-ը **չի կանչի** (քանի որ `forceValidation = false`), և `Message`-ը կպահպանվի անփոփոխ։
* `row.EnforceValidation(...)`-ի կանչը `forceValidation`-ը կսահմանի `true`։ Հաջորդ վալիդացիայի կանչին validator-ը կրկին կաշխատի, `Message`-ը կթարմացվի ընթացիկ արժեքի համապատասխան արդյունքով, և UI-ը կհամապատասխանի իրականությանը։
* `row.EnforceValidation(...)` + `RowValidation`-ի **հաջորդական կանչով** քեշը նախ մաքրվում է, ապա վալիդացիան անմիջապես կանչվում է։

**Կարևոր**․ `forceValidation`-ն է որոշում՝ validator-ը կանչվում է, թե չէ։ Եթե `forceValidation = false`, [`RowValidation`](#rowvalidationgridrow-row) մեթոդը, որքան էլ կանչվի, validator-ները կրկին չի կանչի, և քեշավորված `Message`-ը կպահպանվի անփոփոխ։ Քեշավորված սխալերը թարմացնելու համար նախ անհրաժեշտ է կանչել [`EnforceRowsValidation`](#enforcerowsvalidationparams-string-columns) / [`EnforceAllRowsValidation`](#enforceallrowsvalidation) մեթոդներից մեկը (կամ տողի վրա՝ `row.EnforceValidation(...)`)՝ `forceValidation`-ը `true` սահմանելու համար, ապա կանչել `RowValidation`-ը (կամ թողնել WPF binding-ին՝ ավտոմատ կանչել այն)։

## `RowValidation(GridRow row)`

```c#
public void RowValidation(Client.Document.GridRow row)
```

**Նկարագրություն**․ Տրված տողի համար միանգամից կանչում է վալիդացիայի մեխանիզմը՝ քեշի `forceValidation`-ի հիման վրա։ `forceValidation = true` ունեցող սյուների համար կանչվում է validator-ը, արդյունքը քեշավորվում է, իսկ `forceValidation = false` ունեցողների համար օգտագործվում է քեշավորված `Message`-ը։ Մեթոդի կատարման արդյունքում թարմացվում են աղյուսակի `HasValidationError` և `HasValidationWarning` ինդիկատորները, և UI-ում ցուցադրվում են սխալերի նշումները (cell-ի կարմիր եզր, tooltip-ում սխալի հաղորդագրությունը)։

Մեթոդը **չի անվավերացնում քեշը**․ եթե բոլոր սյուների `forceValidation = false` է, validator-ները կրկին չեն կանչվի, և մեթոդը կաշխատի նախորդ քեշավորված `Message`-ների հիման վրա։ Հետևաբար, քեշավորված տողի վրա ծրագրային փոփոխությունից հետո `RowValidation`-ից առաջ պետք է կանչել `row.EnforceValidation(columns)`՝ փոփոխված սյուների `forceValidation`-ը `true` սահմանելու համար։

**Կիրառման սցենարներ**

* **Աղյուսակից դուրս կատարված փոփոխությունից հետո** — երբ կոդից մի ռեկվիզիտ է փոխվել, որի արդյունքում աղյուսակը կարող է ոչ վալիդ դառնալ, և անհրաժեշտ է թարմացնել տողի վալիդացիոն վիճակը՝ առանց աղյուսակում փոփոխություն կատարելու։
* **Քեշավորված տողի փոփոխությունից հետո** — `row.EnforceValidation(columns)`-ի հետ հաջորդական կանչով՝ նախ քեշը անվավեր է դարձվում, ապա `RowValidation`-ով կանչվում են validator-ները։
* Երբ պահանջվում է, որ `HasValidationError` ինդիկատորը թարմացվի **միանգամից**՝ ոչ թե հետաձգվի մինչև WPF binding-ի հաջորդ կանչը (օրինակ՝ պահպանման կոճակը ակտիվացնելուց առաջ)։

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

**Տարբերությունն այլ մեթոդներից**

* `EnforceRowsValidation(columns)` և `EnforceAllRowsValidation()` մեթոդներից տարբերվում է նրանով, որ կիրառվում է **մեկ տողի** համար, ոչ բոլոր տողերի, և UI-ի թարմացումը կատարվում է **միանգամից**, ոչ թե WPF validation pipeline-ի արդյունքում։
* **Չի անվավերացնում քեշը** — եթե `forceValidation = false` է, validator-ները կրկին չեն կանչվի։ Քեշավորված սխալերը թարմացնելու համար անհրաժեշտ է կամ հաջորդական կանչով կիրառել `row.EnforceValidation` + `RowValidation`, կամ աղյուսակի մակարդակում կիրառել `EnforceRowsValidation` / `EnforceAllRowsValidation`։
* Բազմակի տողերի ծրագրային փոփոխությունից հետո ավելի արդյունավետ է կիրառել `EnforceRowsValidation` կամ `EnforceAllRowsValidation` մեթոդները, քան յուրաքանչյուր տողի համար առանձին հաջորդական կանչ կատարել։ Այս մեթոդների կանչից հետո WPF validation pipeline-ը ավտոմատ կանչվում է, երբ աղյուսակը տեսանելի է. ոչ ակտիվ թաբի վրա գտնվող աղյուսակի validator-ները կկանչվեն, երբ օգտագործողը անցում կատարի այդ թաբի վրա։

## `EnforceRowsValidation(params string[] columns)`

```c#
public void EnforceRowsValidation(params string[] columns)
```

**Նկարագրություն**․ Աղյուսակի **բոլոր տողերի** համար տրված սյուների վալիդացիոն քեշի `forceValidation`-ը սահմանում է `true`՝ ստիպելով, որ հաջորդ քայլում validator-ները կրկին կանչվեն այդ սյուների վրա։ WPF validation pipeline-ի արդյունքում ավտոմատ կանչվում է validator-ների վերակատարում, և UI-ի վալիդացիայի ինդիկատորները թարմացվում են (cell-ի կարմիր եզր, tooltip, աղյուսակի `HasValidationError`)։

Validation pipeline-ը կանչվում է այն ժամանակ, երբ աղյուսակը տեսանելի է և binding-ը հարցում է կատարում `IDataErrorInfo` ինտերֆեյսին։ Եթե աղյուսակը գտնվում է ոչ ակտիվ թաբի վրա, validator-ները կկանչվեն, երբ օգտագործողը անցում կատարի այդ թաբի վրա։

Մեթոդը **չի նայում նախորդ վալիդացիայի արդյունքին**․ ստիպում է validator-ները կրկին կանչվել, անկախ նրանից՝ նախկինում աղյուսակը վալիդ էր թե չէ։ Կիրառվում է այն դեպքերում, երբ վալիդացիան պիտի աշխատի, անկախ քեշի ընթացիկ վիճակից։

**Կիրառման սցենարներ**

* **Աղյուսակից դուրս գտնվող դաշտի փոփոխությունից հետո** — երբ նույն թաբում գտնվող այլ դաշտի արժեքը փոխվում է, և աղյուսակի որոշակի սյուների վալիդացիան կախված է այդ դաշտից։
* **Քեշավորված սխալերի թարմացման համար** — եթե աղյուսակում արդեն կան սխալներ, և ծրագրային փոփոխությունից հետո նոր validate-ը չի աշխատում քեշավորված վիճակի պատճառով, `EnforceRowsValidation`-ի կանչը ստիպում է validator-ները կրկին կանչվել նշված սյուների վրա։

**Տարբերությունն այլ մեթոդներից**

* `RowValidation(row)`-ից տարբերվում է նրանով, որ կիրառվում է **բոլոր տողերի** համար, ոչ թե մեկ տողի, և **անվավերացնում է քեշը**, ինչը ստիպում է validator-ները կանչվել, անկախ նրանից՝ նախկինում տողը վալիդ էր թե չէ։ `RowValidation` մեթոդը, ընդհակառակը, գործում է քեշի ընթացիկ վիճակի սահմաններում։
* `EnforceAllRowsValidation()`-ից տարբերվում է նրանով, որ ազդում է **միայն տրված սյուների** վրա։ Անհրաժեշտ չէ վերակատարել անփոփոխ սյուների validator-ները, որոնք կարող են ծանր լինել (օրինակ՝ արտաքին համակարգերի կանչեր ենթադրող ստուգումներ)։

## `EnforceAllRowsValidation()`

```c#
public void EnforceAllRowsValidation()
```

**Նկարագրություն**․ Աղյուսակի **բոլոր տողերի** **բոլոր սյուների** վալիդացիոն քեշի `forceValidation`-ը սահմանում է `true`, ինչը ստիպում է բոլոր validator-ները կրկին կանչվել ամբողջ աղյուսակի կտրվածքով։ WPF validation pipeline-ի արդյունքում ավտոմատ կանչվում է validator-ների վերակատարում, և UI-ի վալիդացիայի ինդիկատորները թարմացվում են։

Validation pipeline-ը կանչվում է այն ժամանակ, երբ աղյուսակը տեսանելի է և binding-ը հարցում է կատարում `IDataErrorInfo` ինտերֆեյսին։ Եթե աղյուսակը գտնվում է ոչ ակտիվ թաբի վրա, validator-ները կկանչվեն, երբ օգտագործողը անցում կատարի այդ թաբի վրա։

Մեթոդը, ինչպես `EnforceRowsValidation`-ը, **չի նայում նախորդ վալիդացիայի արդյունքին**․ ստիպում է validator-ները կրկին կանչվել, անկախ նրանից՝ նախկինում աղյուսակը վալիդ էր թե չէ։

**Կիրառման սցենարներ**

* **Թաբերի միջև անցում կատարելու ժամանակ** — երբ ընթացիկ թաբից անցում է կատարվում աղյուսակ պարունակող թաբի վրա, և անհրաժեշտ է, որ վալիդացիան կրկին աշխատի (օրինակ՝ «Ծախսի տեսակ» թաբի աղյուսակի վրա անցնելիս)։
* **Աղյուսակից դուրս գտնվող կոնտեքստի փոփոխությունից հետո** — երբ validator-ների աշխատանքը կախված է աղյուսակից դուրս գտնվող տվյալներից, և այդ կոնտեքստը փոխվել է։
* **Փաստաթղթի ընդհանուր փոփոխությունից հետո** — տողերի կամ սյուների տվյալների զանգվածային փոխարինումից հետո՝ ներմուծման, արտածման, դարձման կամ զանգվածային ձևակերպման գործողություններից հետո։
* **Նոր փաստաթղթի ստեղծման ընթացքում ավտոմատ լրացված արժեքների փոփոխությունից հետո** — երբ դժվար է կանխատեսել, թե որ սյուների վալիդացիան կարող է կախված լինել փոփոխված արժեքից։

**Տարբերությունն այլ մեթոդներից**

* `RowValidation(row)`-ից տարբերվում է նրանով, որ կիրառվում է **բոլոր տողերի** համար, ոչ թե մեկ տողի, և **անվավերացնում է քեշը**։ `RowValidation` մեթոդը գործում է քեշի ընթացիկ վիճակի սահմաններում, իսկ `EnforceAllRowsValidation`-ը ստիպում է validator-ները կանչվել։
* `EnforceRowsValidation(columns)`-ից տարբերվում է նրանով, որ ազդում է **բոլոր սյուների** վրա, ոչ թե միայն տրված սյուների։ Կիրառվում է, երբ զանգվածային փոփոխությունը ազդում է բազմաթիվ սյուների վրա, կամ երբ դժվար է կանխատեսել, թե որ սյուների վալիդացիոն արդյունքները կարող են փոխվել։

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

Կիրառվում է, երբ վալիդացիայի արդյունքը անհրաժեշտ չէ անմիջապես ստանալ։ Քեշը անվավեր է դառնում, իսկ validator-ները կկանչվեն WPF validation pipeline-ի արդյունքում, երբ օգտագործողը անցում կատարի «Նյութեր» թաբի վրա և աղյուսակը դառնա տեսանելի։

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

Կիրառվում է, երբ անհրաժեշտ է, որ վալիդացիայի արդյունքը անմիջապես արտացոլվի, և աղյուսակի `HasValidationError` ինդիկատորը թարմացվի նույն պահին, անկախ նրանից՝ աղյուսակը տեսանելի է, թե ոչ (օրինակ՝ պահպանման կոճակը ակտիվացնելու որոշումից առաջ ստուգում)։

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

«Գործուղման վկայական» փաստաթղթի «Ծախսերի աղյուսակ» (BusinessTripExpenses) աղյուսակում օգտագործողը dropdown-ից ընտրում է Ծախսի տեսակը։ Ընտրությունից հետո ծրագրային կերպով լրացվում են տողի մի շարք սյուներ (արժույթ, գումար, հաշիվ, օրերի քանակ և այլն)։ Քանի որ այս սյուների վալիդացիան կախված է ընտրված Ծախսի տեսակից, քեշավորված սխալերը կարող են այլևս ճիշտ չլինել։ `row.EnforceValidation`-ը կանչվում է փոփոխված սյուների համար․

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

## Մեթոդի ընտրությունը՝ ըստ սցենարի

| Իրավիճակ | Կիրառվող մեթոդը |
|----------|------------------|
| Մեկ տողի ծրագրային փոփոխություն (տես [`BusinessTripCertificate`](#businesstripcertificate--ծախսի-տեսակի-exptype-ընտրություն-dropdown-ից) օրինակը) | `row.EnforceValidation(columns)` — WPF binding-ն ավտոմատ կերպով կանչում է validator-ները |
| Մեկ տողի ծրագրային փոփոխություն և `HasValidationError`-ի անմիջապես թարմացում | `row.EnforceValidation(columns)` + `RowValidation(row)` |
| Բոլոր տողերի որոշակի սյուների ծրագրային փոփոխություն (տես [`PurchaseRequest`](#purchaserequest--փաստաթղթի-կատարման-ժամկետ-duedate-դաշտի-փոփոխություն) օրինակը) | Յուրաքանչյուր տողի վրա `row.EnforceValidation(...)` կամ աղյուսակի մակարդակում՝ `EnforceRowsValidation(columns)` |
| Թաբերի միջև անցում, արտաքին կոնտեքստի փոփոխություն, աղյուսակի ընդհանուր փոփոխություն | `EnforceAllRowsValidation()` |

**Կարևոր**․ `EnforceRowsValidation` և `EnforceAllRowsValidation` մեթոդները չեն նայում նախորդ վալիդացիայի արդյունքին․ կիրառվում են այն դեպքերում, երբ վալիդացիան **պետք է աշխատի**, անկախ նրանից՝ նախկինում աղյուսակը վալիդ էր թե չէ։ Հակառակ դեպքում, եթե աղյուսակում արդեն կան քեշավորված սխալներ, ուղիղ `RowValidation` կանչը նոր արդյունք չի տա, և UI-ը կշարունակի ցուցադրել նախորդ վիճակը։

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

