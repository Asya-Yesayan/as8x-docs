---
title: "AS-4X → AS-8X համակարգերի համարժեքների նկարագրություն"
nav_order: 1
has_toc: false
---

# AS-4X → AS-8X համակարգերի համարժեքների նկարագրություն

Ստորև նկարագրված են AS-4X (VB6) համակարգի հասկացությունների և AS-8X (.NET Core / WPF) համակարգի
համապատասխան դասերի, մեթոդների ու հատկությունների համարժեքությունը։

## 1. Փաստաթղթի իրադարձություններ (Document Events)

### 1.1 Ճարտարապետական բաժանում

**AS-4X** համակարգում փաստաթղթի ամբողջ տրամաբանությունը (UI, սերվերային տրամաբանություն, տվյալների ստուգումները, ...) նկարագրվում է 
մեկ `.as` ֆայլի մեջ՝ `SCRIPT { }` բաժնում, VB6 ենթածրագրերի (Sub/Function) տեսքով։

**AS-8X** համակարգում նույն տրամաբանությունը **բաժանված է երեք տարբեր դասերի միջև**.

| Դաս | Ֆայլ | Նպատակ |
|------|------|---------|
| `Document` | `Core/ArmSoft.AS8X.Core/Document/Document.cs` | Սերվերային տրամաբանություն, հաշվարկներ, վալիդացիա, հաշվառումներ |
| `DocumentUI<T>` | `Core/ArmSoft.AS8X.Core.UI/Document/DocumentUI.cs` | Կոնտեքստային մենյու, UI-ական իրադարձություններ |
| `DocumentPanel<T>` | `Core/ArmSoft.AS8X.Core.UI/Document/DocumentPanel.cs` | Պատուհան, control-ներ |

**Կարևոր.** `DocumentUI<T>` և `DocumentPanel<T>` դասերը **միմյանցից չեն ժառանգվում**։ Դրանք երկու անկախ դասեր են, որոնք աշխատում են նույն `Document` օբյեկտի հետ (`Doc`)։ 

DocumentPanel, DocumentUI դասերը պարտադիր պետք է պարունակեն համապատասխանաբար DocumentPanel, DocumentUI ատրիբուտները, որոնց փոխանցվում է փաստաթղթի ներքին անունը (տեսակը)։

```c#
[DocumentPanel(nameof(AccBal))]  
public class AccBalWindow : DocumentPanel<AccBal> { ... }

[DocumentUI(nameof(AccBal))]
public class AccBalUI : DocumentUI<AccBal> { ... }
```

### 1.2 Սերվերային իրադարձությունների համարժեքություն (Document.cs)

| AS-4X  | Երբ է կանչվում   | AS-8X համարժեք  | Նպատակ           |
| ------- | ---------------- | --------------- | ---------------- |
| `AfterCreate`           | Նոր փաստաթուղթ ստեղծելուց հետո։  | `AfterCreate(args)`            | Սկզբնական արժեքների լրացում։  |
| `AfterLoad`            | Փաստաթուղթը տվյալների բազայից բեռնելուց հետո։          | `AfterLoad(args)`              | Բեռնված տվյալների հետագա հաշվարկներ։    |
| `Validate`     | Փաստաթղթի գրանցման տրանզակցիայում։             | `Validate(args)`               | Դաշտի վալիդացիա, այլ դաշտերի լրացում՝ կախված ընթացիկ դաշտից։ |
| `Action`               | Փաստաթղթի գրանցման տրանզակցիայում։             | `Action(args)`                 | Հաշվառումների ստեղծում, գրանցում:          |
| `BeforeCommit`         | Փաստաթղթի գրանցման տրանզակցիայի փակումից առաջ։                  | `BeforeCommit(args)`           | Վերջնական ստուգումներ, լոգավորում։         |
| `AfterCommit`          | Փաստաթղթի գրանցման տրանզակցիայի փակումից հետո։                   | `AfterCommit(args)`            | Արտաքին համակարգերի ծանուցում:          |
| `Delete`               | Փաստաթղթի հեռացման տրանզակցիայում։                  | `Delete(args)`                 | Հեռացման կանոնների սահմանում։                        |
| `PostMessage`          | SendMessage մեթոդի կանչի ընթացքում։ | `PostMessage(args)`            | Մի փաստաթղթից մյուսին ծրագրային հաղորդագրության (SendMessage) ուղարկում։            |
| `Folders`              | Փաստաթղթի գրանցման տրանզակցիայում։               | `Folders(args)`                | Թղթապանակների ստեղծում, գրանցում:          |
| `StoreGrid`            | Փաստաթղթի գրանցման տրանզակցիայում։                 | `StoreGrids(args)`             | Փաստաթղթի աղյուսակների գրանցում Custom sql աղյուսակներում։                |
| `DefaultComment`       | Փաստաթղթի գրանցման տրանզակցիայում։       | `DefaultComment(args)`         | Թղթապանակների տարրերի լռությամբ մեկնաբանության սահմանում։               |
| `ChangeRequest`        | Փաստաթղթի գրանցման տրանզակցիայում։                    | `OnConfirm... / OnReject...`   | Փոփոխման հայտի մշակում։              |
| `OnRefuseDoc`          | Փաստաթղթի հեռացման տրանզակցիայում։                 | `OnRefuse(args)`               | Մերժման տրամաբանություն։                |
| `BeforeCopy`           | Փաստաթղթի պատճենումից առաջ։  | `BeforeCopy(args)`             | Որ դաշտերը չկրկնօրինակել:               |
| `BeforeImport`         | Փաստաթղթի ներմուծումից առաջ։  | `BeforeImportProcessing(args)` | Փաստաթղթի ներմուծում։                   |
| `TemplateSubstitution` | Փաստաթղթի տպելու ձևանմուշի կանչի ժամանակ։  | `TemplateSubstitution(...)`    | Ձևանմուշի հաշվարկվող արժեքների հաշվարկ։             |

---

### 1.3 UI իրադարձությունների համարժեքություն

### DocumentUI<T> — ոչ վիզուալ UI տրամաբանություն

Օգտագործվում է այն դեպքերում, երբ control-ների հետ անմիջական աշխատանք անհրաժեշտ չէ։

| AS-4X                            | AS-8X                                 | Երբ է կանչվում                               |
| -------------------------------- | ------------------------------------- | ------------------------------------ |
| `Form_Load`                      | `OnLoad()`                            | Բացման ժամանակ (նախապատրաստում):        |
| `Functions / RegistrFunction`    | `InitContextFunctions(...)`           | Կոնտեքստային մենյուի ձևավորում։                     |
| —                                | `BeforeShow(args)`                    | Փաստաթղթի բացումից առաջ։                        |
| —                                | `BeforeCreate(args)`                  | Փաստաթղթի ստեղծումից առաջ։                      |
| `BeforeCopy`                     | `BeforeCopy / AfterCopy`              | Փաստաթղթի պատճենումից առաջ։                       |
| —                                | `AfterStore(...)`                     |  Փաստաթղթի գրանցումից հետո։ |
| `OnUIDelete`                     | `OnUIDelete(args)`                    | Փաստաթղթի հեռացման ժամանակ ։                   |
| `AfterDelete`      | `AfterDelete(args)`                   | Փաստաթղթի հեռացումից հետո։                |
| `TemplateSubstitutionParameters` | `TemplateSubstitutionParameters(...)` | Տպելու ձևանմուշի պարամետրերի հաշվարկ։               |

### DocumentPanel<T> — վիզուալ UI տրամաբանություն

Օգտագործվում է պատուհանի կառուցման և control-ների աշխատանքի ապահովման համար։

| AS AS-8X                      | Նպատակ                             |
| -------------------------- | ---------------------------------- |
|  `ConstructUI()`            | UI կառուցում                       |
|  `LoadDocumentToControls()` | Տվյալների բեռնում control-ների մեջ |
|  `OnNew()`                  | Նոր փաստաթուղթ                     |
|  `OnEdit()`                 | Խմբագրում                          |
|  `OnView()`                 | Դիտում                             |
| `BeforeStore(sr)`     | Client-side վալիդացիա             |
| `AfterStore(...)`     | Refresh / UI update                |
| `StoreSettings()`           | Window settings պահպանում          |
| `BeforeShow(isReadOnly)`    | Բացումից առաջ                      |
| `AddControls()`             | Լրացուցիչ custom control-ներ       |

---

# 2. Երկխոսային պատուհան — `AsDialog` (4X) vs `DialogWindow` (8X)

## 2.1 Ճարտարապետական բաժանում

### AS-4X

`AsDialog`-ը սահմանվում էր VB6 script-ի մեջ։

### AS-8X

Առկա են երկու հիմնական տարբերակներ։

| Դաս | Նպատակ | Ֆայլ |
|-----|--------|------|
| `DialogWindow` | Ընդհանուր WPF dialog պատուհան | `Core/ArmSoft.AS8X.Core.UI/DialogWindow.cs` |
| `DataViewDialogWindow` | Դիտելու ձևի նախնական ֆիլտրման պատուհան | `Core/ArmSoft.AS8X.Core.UI/DataView/DataViewDialogWindow.cs` |

---

## 2.2 Ընդհանուր համեմատություն

| Հրաման | AS-4X `AsDialog` | AS-8X `DialogWindow` |
|--------|------------------|----------------------|
| Ստեղծում | `CreateDialog()` | `new DialogWindow(...)` |
| Ցուցադրում | `dlg.Show()` | `dlg.ShowDialog()` |
| Վերնագիր | `dlg.Caption` | `dlg.Caption` |
| Control-ի արժեքի ստացում | `dlg("Field")` | `dlg["Field"]` |
| Վալիդացիա | Validate | `WindowValidation` event |
| Cancel | `dlg.Cancel` | `CancelButton` |
| AutoStore | `dlg.AutoStore = True` | `storeValue: true` |
| Tab-երի ավելացում | `AddPage()` | `AddDXTabControl()` |
| Դաշտերի արժեքների փոխանցում դիտելու ձևին | `CreateBrowseParametersInfo()` | `Dictionary<string, object>` |

---

## 2.3 Control ավելացնելու համարժեքություն

| 4X `AsDialog` | 8X `DialogWindow` | Տեսակ |
|--------------|------------------|------|
| `AddControl(... const_string)` | `AddTextEdit(...)` | TextBox |
| `AddMemoControl(...)` | `AddMemoEditControl(...)` | Memo |
| `AddControl(... const_bool)` | `AddCheckEdit(...)` | CheckBox |
| `AddRadioButtons(...)` | `AddRadioButton(...)` | Radio |
| `AddControl(... const_date)` | `AddDateEditControl(...)` | Date |
| `AddControl(... const_time)` | `AddTimeEditControl(...)` | Time |
| `AddControl(... const_numeric)` | `AddNumericEditControl(...)` | Numeric |
| `AddControl(... spinner)` | `AddSpinEdit(...)` | Spin |
| `AddViewControl(...)` | `AddDropDownControl(...)` | Dropdown |
| `AddTreeControl(...)` | `AddTreeDropDownControl(...)` | Tree Dropdown |
| `AddMultiSelectViewControl(...)` | `AddMultiSelectDropDownControl(...)` | Multi Select |
| `AddViewCommentControl(...)` | `AddDropDownCommentControl(...)` | Dropdown  Comment |
| `AddControl(... monthyear)` | `AddMonthYearControl(...)` | Month / Year |
| `AddLabel(...)` | `AddTextBlock(...)` | Label |
| `AddLine()` | `AddLine(...)` | Separator |
| `AddButton(...)` | `AddButton(...)` | Button |
| - | `AddDropDownButton(...)` | Dropdown Button |
| - | `AddSplitButton(...)` | Split Button |
| - | `AddButtonEdit(...)` | Text  Button |
| - | `AddPasswordBoxEdit(...)` | Password |
| - | `AddPathEdit(...)` | File Picker |
| - | `AddNumPairControl(...)` | Number Pair |
| - | `AddThreeStateBoolComboBox(...)` | 3-state Bool |

---

## 2.4 Layout Containers

| 4X | 8X | Նպատակ |
|----|----|--------|
| `AddPage(caption)` | `AddDXTabControl()`  `AddTabbedGroup()` | Tab էջեր |
| - | `AddLayoutGroup(...)` | Horizontal / Vertical grouping |
| `AddControlAtRight(...)` | `DisplayPosition = AtRightPreviousField` | Աջ կողմում տեղադրում |

---

### Օրինակ

```csharp
dlg.WindowValidation = (w, args) =>
{
    args.IsValid = false;
    args.ErrorMessage = "Լրացրեք պարտադիր դաշտը";
};
```

---

### 2.5 Կոդի օրինակ — Dialog-ի ստեղծում

**AS-4X (VB6)**

```vb6
Dim dlg As AsDialog
Set dlg = CreateDialog()

dlg.Caption  = "Բաժիններ"
dlg.ECaption = "Departments"

dlg.AddControl "StartDate", "Սկիզբ", "DATE"
dlg.AddControl "EndDate", "Վերջ",  "DATE"
dlg.AddViewControl "Dept", "Բաժին", "DEPARTMENTS"

dlg.AutoStore = True

If dlg.Show() Then
    Dim d1 As Date
    Dim d2 As Date
    d1 = dlg("StartDate")
    d2 = dlg("EndDate")
End If
```

**AS-8X (C#)**

```c#
var dlg = new DialogWindow(owner: Settings.HostingEnvironment)
{
    Caption = "Բաժիններ",
    LoadStoredValues = true
};

var date1 = dlg.AddDateEditControl("StartDate", "Սկիզբ", storeValue: true);
var date2 = dlg.AddDateEditControl("EndDate", "Վերջ", storeValue: true);

var dept = dlg.AddDropDownControl(
    "Dept",
    "Բաժին",
    new DropDown.Departments(),
    isRequired: false,
    storeValue: true);

if (dlg.ShowDialog() == true)
{
    DateTime? d1 = date1.Value;
    DateTime? d2 = date2.Value;
    string deptCode = dept.Code;
}
```

| Քայլ              | AS-4X                        | AS-8X                              | Նկարագրություն                |
| ----------------- | ---------------------------- | ---------------------------------- | ----------------------------- |
| Dialog ստեղծում   | `CreateDialog()`             | `new DialogWindow(...)`            | Ստեղծվում է պատուհանը։         |
| Վերնագիր          | `Caption / ECaption`         | `Caption`                          | Պատուհանի վերնագիր։            |
| Ամսաթիվ դաշտ      | `AddControl(... DATE)` | `AddDateEditControl(...)`          | Ամսաթվի ընտրիչ։                |
| Բաժնի ընտրություն | `AddViewControl(...)`        | `AddDropDownControl(...)`          | Lookup / DropDown։             |
| Պահված արժեքներ   | `AutoStore = True`           | `LoadStoredValues = true`          | Նախորդ արժեքների բեռնում։      |
| Բացում             | `Show()`                     | `ShowDialog()`                     | Ցուցադրում։                    |
| Դաշտի արժեքի ստացում      | `dlg("NAME")`                | Control property (`Value`, `Code`) | Մուտքագրված տվյալների ստացում։ |

**Կարևոր**

AS-4X-ում արժեքները վերցվում են անունով (dlg("StartDate"))։

AS-8X-ում Add...Control() մեթոդը վերադարձնում է control reference, և արժեքը վերցվում է արդեն strongly-typed ձևով:

```c#
date1.Value
dept.Code
```

---

### 2.6 Դիտելու ձևի նախնական ֆիլտրման պատուհան (DataViewDialogWindow)

Եթե dialog-ը օգտագործվում է դիտելու ձևի ֆիլտրման համար, ապա DialogWindow-ի փոխարեն անհրաժեշտ է օգտագործել DataViewDialogWindow դասը։

**AS-4X (VIEW SCRIPT)**

```vb6
Public Sub Dialog()
    Dim dlg As AsDialog
    Set dlg = CreateDialog()
    dlg.Caption = "Filtri"
    dlg.AddControl "DATE", "Ստեղծման ամսաթիվ", "DATE"
    dlg.AddViewControl "Dept", "Բաժին", "DEPARTMENTS"
    dlg.AutoStore = True
    dlg.Show()
End Sub
```

**AS-8X (C#)**

```csharp
public override DataViewDialogWindow CreateDialog(bool isRefreshMode)
{
    var dlg = new DataViewDialogWindow(this)
    {
        Name    = "MyViewDialog",
        Caption = "Filtri"
    };
    dlg.AddDateEditControl("DATE", "Аmsаtiv", storeValue: true);
    dlg.AddDropDownControl("Dept", "Bajin",
        new DropDown.Departments(), storeValue: true);
    return dlg;
}

public override void ApplyDialog(DataViewDialogWindow dlg, bool isRefreshMode)
{
    this.Parameters.Date = (DateTime?)dlg["DATE"];
    this.Parameters.Dept = (string)dlg["Dept"];
}
```

Ինչպես է աշխատում

| Մեթոդ            | Նպատակ                                                     |
| ---------------- | ---------------------------------------------------------- |
| `CreateDialog()` | Ստեղծում է dialog-ը և ավելացնում դաշտերը։                   |
| `ApplyDialog()`  | Dialog-ից վերցնում է արժեքները և փոխանցում `Parameters`-ին |
| `Parameters`     | Այս հատկության միջոցով ստացված արժեքները փոխանցվում են տվյալների աղբյուրին՝ տվյալների ֆիլտրման և դիտելու ձևի ձևավորման համար։                    |

---

## 3. Դիտելու ձև (VIEW) — VIEW (4X) vs DataView<R,P> (8X)

### 3.1 Ճարտարապետական բաժանում

AS-4X-ում VIEW-ը .as ֆայլով նկարագրություն էր, որտեղ սահմանվում էին.

* սյունակներ
* իրավասություններ
* հիմքային տվյալների աղբյուր
* ֆիլտրման դիալոգ
* կոնտեքստային մենյու
* գործողություններ

AS-8X-ում նույնը դարձել է C# class, որը ժառանգվում է DataView<R,P>-ից։

| Հրաման            | AS-4X            | AS-8X                             |
| ----------------- | ---------------- | --------------------------------- |
| Հայտարարում       | `.as` VIEW block | C# class                          |
| Անուն             | `NAME=X`         | `[DataView(nameof(X))]`           |
| Հիմքային տվյալների աղբյուր        | `DATASOURCE=Y`   | `ConfigureDataSource("Y")`        |
| Սյունակներ        | `COLUMN {}`      | `this.Columns[...]`               |
| Ֆիլտրման դիալոգ   | `Dialog()`       | `CreateDialog()`                |
| Ֆիլտրերի կիրառում | implicit         | `ApplyDialog()`                   |
| Կոնտեքստային մենյու | `Functions()`    | `InitContextFunctions()`          |
| Իրավասություններ | `ALLOWEDIT=1`    | `override bool AllowEdit => true` |

**Gеnеric պարամետրեր**.

```
DataView<R, P>
  R = DataRow    
  P = Param
```

---

### 3.2 Definition հատկությունների համարժեքություն

| 4X VIEW Property | 8X Համարժեք             | Նկարագրություն          |
| ---------------- | ----------------------- | ----------------------- |
| `NAME = X`       | `[DataView(nameof(X))]` | Դիտելու ձևի ներքին անուն            |
| `CAPTION`        | `ArmenianCaption`       | Հայերեն անվանում        |
| `ECAPTION`       | `EnglishCaption`        | Անգլերեն անվանում       |
| `DATASOURCE`     | `ConfigureDataSource()` | Հիմքային տվյալների աղբյուր       |
| `GROUP`          | Navigator json          | Խմբավորում              |
| `CONDITION`      | `LoadData()`            | Filter պայման           |
| `SCRIPT`         | C# methods              | Ներքին տրամաբանություն (կոդ)                   |
| `COLUMN`         | `Columns[...]`          | Սյունակների կարգավորում |

---

### 3.3 Իրավասությունների flags

| 4X VIEW Property | 8X Override          | 8X Default        | Նկարագրություն       |
| ---------------- | -------------------- | ----------------- | -------------------- |
| `ALLOWADDNEW`    | `AllowAdd`           | `false`           | Ավելացնել            |
| `ALLOWVIEW`      | `AllowView`          | `IsDocumentBased` | Բացել դիտման ռեժիմով |
| `ALLOWEDIT`      | `AllowEdit`          | `false`           | Խմբագրել             |
| `ALLOWDELETE`    | `AllowDelete`        | `false`           | Ջնջել                |
| `ALLOWCOPY`      | `AllowCreateCopy`    | `IsDocumentBased` | Պատճենել             |
| `ALLOWEXPORT`    | `AllowExport`        | `true`            | Excel / CSV արտահանում   |

---

### 3.4 Ցուցադրման կոնֆիգուրացիա

| 4X VIEW Property | 8X Համարժեք            |
| ---------------- | ---------------------- |
| `COLORCOLNAME`   | `IsColorColumn = true` |
| `UNMOVECOLCOUNT` | `FreezeCount`          |
| `WIDTH`          | `Width`                |
| `CAPTION`        | `Caption`              |
| `ECAPTION`       | `ECaption`             |
| `VISIBLE = 0`    | `Visible = false`      |
| `FORMAT`         | `Format`               |

---

### 3.5 SCRIPT ֆունկցիաների համարժեքություն

| 4X SCRIPT              | 8X Override                        | Նկարագրություն         |
| ---------------------- | ---------------------------------- | ---------------------- |
| `Dialog()`             | `CreateDialog()`  `ApplyDialog()`  | Filter dialog          |
| `Functions()`          | `InitContextFunctions()`           | Context menu           |
| `AfterLoadData()`      | `AfterLoadData()`                  | Load-ից հետո           |
| `BeforeLoadData()`     | `BeforeLoadData(args)`             | Load-ից առաջ           |
| `Add()`                | `Add()`                            | Add action override    |
| `Edit()`               | `Edit()`                           | Edit action override   |
| `Delete()`             | `Delete()`                         | Delete action override |
| `GetDefaultFunction()` | `GetDefaultFunction()`             | Double-click action    |

---

### 3.6 Կոդի ամբողջական օրինակ —  DataView

**AS-4X (VIEW dеfinitiоn)**

```
VIEW
{
  NAME     = ACCS;
  CAPTION  = "Hаshivner";
  ECAPTION = "Accounts";
  DATASOURCE = ACCOUNT_DS;

  ALLOWEDIT   = 1;
  ALLOWDELETE = 1;
  ALLOWADDNEW = 1;

  COLUMN { NAME=ISN;     VISIBLE=0; }
  COLUMN { NAME=CODE;    CAPTION="Кod";     ECAPTION="Code";    WIDTH=15; }
  COLUMN { NAME=CAPTION; CAPTION="Аnun";   ECAPTION="Name";    WIDTH=40; }
  COLUMN { NAME=BALANCE; CAPTION="Mnаtsоrd"; FORMAT="#,##0.00"; WIDTH=15; }

  SCRIPT
  {
    Public Sub Dialog()
      Dim dlg As AsDialog
      Set dlg = CreateDialog()
      dlg.Caption = "Filtri"
      dlg.AddControl "DATE",  "Аmsаtiv", const_date, 0
      dlg.AddViewControl "Dept", "Bajin", "DEPARTMENTS"
      dlg.AutoStore = True
      dlg.Show()
    End Sub

    Public Sub Functions(ByVal context As Long)
      RegistrFunction "PrintReport", "Tpеl"
    End Sub
  }
}
```

**AS-8X (C#)**

```csharp
using ArmSoft.AS8X.BankClient.General.Account.DS.Accounts;

[DataView(nameof(Accs),
    ArmenianCaption = ConstantsArm.Accs,
    EnglishCaption  = ConstantsArm.e_Accs)]
public class Accs : DataView<DataRow, Param>
{
    public Accs()
    {
        this.ConfigureDataSource("ACCOUNT_DS");

        this.Columns[nameof(DataRow.ISN)].Visible = false;
    }

    public override bool AllowEdit   => true;
    public override bool AllowDelete => true;
    public override bool AllowAdd    => true;
    public override IReadOnlyCollection<string> AllowedDocumentsToAdd
        => new[] { "Account" };

    public override bool DialogSupported => true;

    public override DataViewDialogWindow CreateDialog(bool isRefreshMode)
    {
        var dlg = new DataViewDialogWindow(this)
        {
            Name    = "AccsDialog",
            Caption = "Filtri"
        };
        dlg.AddDateEditControl("DATE", "Аmsаtiv", storeValue: true);
        dlg.AddDropDownControl("Dept", "Bajin",
            new DropDown.Departments(), storeValue: true);
        return dlg;
    }

    public override void ApplyDialog(DataViewDialogWindow dlg, bool isRefreshMode)
    {
        this.Parameters.Date = (DateTime?)dlg["DATE"];
        this.Parameters.Dept = (string)dlg["Dept"];
    }

    public override PopupMenu InitContextFunctions()
    {
        var p = base.InitContextFunctions();
        p.AddContextFunction(nameof(PrintReport), Resources.PrintReport,
            PrintReport, FunctionAvailability.AllCases);
        return p;
    }

    private void PrintReport(object sender, ItemClickEventArgs e)
    {
        
    }
}
```

| Գործողություն              | AS-4X                   | AS-8X                               |
| ---------------- | ----------------------- | ----------------------------------- |
| Դիտելու ձևի հայտարարում | `VIEW {}`               | `class Accs : DataView<...>`        |
| Հիմքային տվյալների աղբյուրի սահմանում       | `DATASOURCE=ACCOUNT_DS` | `ConfigureDataSource("ACCOUNT_DS")` |
| Սյուների սահմանում          | `COLUMN {}`             | `Columns[...]`                      |
| Իրավասություններ սահմանում      | `ALLOWEDIT=1`           | `AllowEdit => true`                 |
| Դիալոգի ստեղծում           | `Dialog()`              | `CreateDialog()`                    |
| Դիալոգի արժեքների կիրառում     | նույն SCRIPT-ում        | `ApplyDialog()`                     |
| Կոնտեքստային մենյուի սահմանում     | `Functions()`           | `InitContextFunctions()`            |

---

### 3.7 DrоpDоwnViеw

DropDownView դասերը նախատեսված են DropDown տեսակի դաշտերից կախելու համար։

```csharp
[DropDownView(nameof(DepartmentsDropDown),
    ArmenianCaption = ConstantsArm.Departments,
    EnglishCaption  = ConstantsArm.e_Departments)]
public class DepartmentsDropDown : DropDownView<DataRow, ParameterCollection>
{
    public DepartmentsDropDown()
    {
        this.ConfigureDataSource("DEPARTMENT_DS");
    }
}
```
