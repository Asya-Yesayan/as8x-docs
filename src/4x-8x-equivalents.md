# AS-4X → AS-8X համակարգերի համարժեքների նկարագրություն

Ստորև նկարագրված են AS-4X (VB6) համակարգի հասկացությունների և AS-4X (.NET Core / WPF) համակարգի
համապատասխան դասերի, մեթոդների ու հատկությունների համարժեքությունը։

## 1. Փաստաթղթի իրադարձություններ (Document Events)

### 1.1 Ճարտարապետական բաժանում

**AS-4X** համակարգում բոլոր փաստաթղթի տրամաբանությունը (UI, սերվերային տրամաբանություն, տվյալների ստուգումները, ...) նկարագրվում էր 
մեկ `.as` ֆայլի `SCRIPT { }` բաժնում, VB6 ենթածրագրերի (Sub/Function) տեսքով։

**AS-8X** համակարգում նույն տրամաբանությունը **բաժանված է երեք տարբեր դասերի միջև**.

| Դաս | Ֆայլ | Նպատակ |
|------|------|---------|
| `Document` | `Core/ArmSoft.AS8X.Core/Document/Document.cs` | Սերվերային բիզնես տրամաբանություն, հաշվարկներ, validation, transaction |
| `DocumentUI<T>` | `Core/ArmSoft.AS8X.Core.UI/Document/DocumentUI.cs` | UI կողմի ոչ-վիզուալ տրամաբանություն, context menu, lifecycle hooks |
| `DocumentPanel<T>` | `Core/ArmSoft.AS8X.Core.UI/Document/DocumentPanel.cs` | UI կողմի վիզուալ մասը՝ պատուհան, control-ներ, ձևի կառուցում |

**Կարևոր տարբերություն.** `DocumentUI<T>` և `DocumentPanel<T>` դասերը **միմյանցից չեն ժառանգվում**։

Դրանք երկու անկախ դասեր են, որոնք աշխատում են նույն `Document` օբյեկտի հետ (`Doc`)։

```c#
[DocumentPanel(nameof(AccBal))]  
public class AccBalWindow : DocumentPanel<AccBal> { ... }

[DocumentUI(nameof(AccBal))]
public class AccBalUI : DocumentUI<AccBal> { ... }
```

### 1.2 Սերվերային իրադարձությունների համարժեքություն (Document.cs)

| AS-4X                  | Երբ էր կանչվում                 | AS-8X համարժեք                 | Նպատակ                                 |
| ---------------------- | ------------------------------- | ------------------------------ | -------------------------------------- |
| `AfterCreate`          | Նոր փաստաթուղթ ստեղծելուց հետո  | `AfterCreate(args)`            | Սկզբնական արժեքների լրացում            |
| `AfterLoad`            | Բազայից բեռնելուց հետո          | `AfterLoad(args)`              | Բեռնված տվյալների հետագա հաշվարկներ    |
| `Validate / Valid`     | Դաշտի արժեք փոխելիս             | `Validate(args)`               | Դաշտային validation, կախված հաշվարկներ |
| `Action`               | `Store()` ընթացքում             | `Action(args)`                 | Հիմնական բիզնես գործողություն          |
| `BeforeCommit`         | Commit-ից առաջ                  | `BeforeCommit(args)`           | Վերջնական ստուգումներ, logging         |
| `AfterCommit`          | Commit-ից հետո                  | `AfterCommit(args)`            | Արտաքին համակարգերի ծանուցում          |
| `Delete`               | Ջնջման ժամանակ                  | `Delete(args)`                 | Ջնջման կանոններ                        |
| `PostMessage`          | Child → Parent հաղորդագրություն | `PostMessage(args)`            | Փաստաթղթերի փոխազդեցություն            |
| `Folders`              | Պահպանման ժամանակ               | `Folders(args)`                | Թղթապանակների անդամակցություն          |
| `StoreGrid`            | Grid պահպանելիս                 | `StoreGrids(args)`             | Grid-ի custom պահպանում                |
| `DefaultComment`       | Auto log comment պետք হলে       | `DefaultComment(args)`         | Լռելյայն մեկնաբանություն               |
| `ChangeRequest`        | DCR workflow                    | `OnConfirm... / OnReject...`   | Փոփոխության հայտի մշակում              |
| `OnRefuseDoc`          | Մերժման ժամանակ                 | `OnRefuse(args)`               | Մերժման տրամաբանություն                |
| `BeforeCopy`           | Copy-ից առաջ                    | `BeforeCopy(args)`             | Որ դաշտերը չկրկնօրինակել               |
| `BeforeImport`         | Import-ից առաջ                  | `BeforeImportProcessing(args)` | Import preprocessing                   |
| `TemplateSubstitution` | Տպման ժամանակ                   | `TemplateSubstitution(...)`    | Template արժեքների լրացում             |
---

### 1.3 UI կողմի իրադարձությունների համարժեքություն

#### DocumentUI<T> — ոչ վիզուալ UI տրամաբանություն

Օգտագործվում է այն դեպքերում, երբ control-ների հետ անմիջական աշխատանք անհրաժեշտ չէ։

| AS-4X                            | AS-8X                                 | Նպատակ                               |
| -------------------------------- | ------------------------------------- | ------------------------------------ |
| `Form_Load`                      | `OnLoad()`                            | Բացման ժամանակ նախապատրաստում        |
| `Functions / RegistrFunction`    | `InitContextFunctions(...)`           | Right-click menu                     |
| —                                | `BeforeShow(args)`                    | Բացումից առաջ                        |
| —                                | `BeforeCreate(args)`                  | Ստեղծումից առաջ                      |
| `BeforeCopy`                     | `BeforeCopy / AfterCopy`              | Copy lifecycle                       |
| —                                | `AfterStore(...)`                     | Պահպանումից հետո UI գործողություններ |
| `OnUIDelete`                     | `OnUIDelete(args)`                    | Ջնջման UI ստուգում                   |
| —                                | `AfterDelete(args)`                   | Ջնջումից հետո refresh                |
| `TemplateSubstitutionParameters` | `TemplateSubstitutionParameters(...)` | Template parameter-ներ               |

#### DocumentPanel<T> — վիզուալ UI տրամաբանություն

Օգտագործվում է պատուհանի կառուցման և control-ների աշխատանքի ապահովման համար։

| AS-4X           | AS-8X                      | Նպատակ                             |
| --------------- | -------------------------- | ---------------------------------- |
| Form Initialize | `ConstructUI()`            | UI կառուցում                       |
| Form Load       | `LoadDocumentToControls()` | Տվյալների բեռնում control-ների մեջ |
| New Mode        | `OnNew()`                  | Նոր փաստաթուղթ                     |
| Edit Mode       | `OnEdit()`                 | Խմբագրում                          |
| View Mode       | `OnView()`                 | Դիտում                             |
| Save-ից առաջ    | `BeforeStore(sr)`          | Client-side validation             |
| Save-ից հետո    | `AfterStore(...)`          | Refresh / UI update                |
| Close           | `StoreSettings()`          | Window settings պահպանում          |
| —               | `BeforeShow(isReadOnly)`   | Բացումից առաջ                      |
| —               | `AddControls()`            | Լրացուցիչ custom control-ներ       |

---

### 1.4 Թույլտվությունների / հնարավորությունների Flags

| 4X | 8X (`DocumentPanel<T>`) | Լռելյայն | Նկարագրություն |
|----|--------------------------|----------|----------------|
| *(պահպանում միշտ թույլ)* | `AllowSave() → bool` | `true` | Հիմնական Save թույլտվություն։ Եթե `false`, պահպանումը ամբողջությամբ արգելվում է։ |
| *(Save կոճակ)* | `AllowSaveButton() → bool` | `true` | Միայն **Save** կոճակի տեսանելիություն / ակտիվություն։ |
| *(Save and Close)* | `AllowSaveAndCloseButton() → bool` | `true` | Միայն **Save and Close** կոճակի կառավարում։ |
| *(Save and New)* | `AllowNewAfterSave() → bool` | `true` | Եթե `false`, **Save and New** կոճակը թաքցվում է։ |
| `nDisableDraft` | `AllowDraft() → bool` | `!Doc.Schema.DisableDraft` | Draft ռեժիմի կառավարում։ |
| `nDisableCopy` | `AllowCopy() → bool` | `!Doc.Schema.DisableCopy` | Copy գործողության կառավարում։ |
| *(նոր փաստաթղթի տպում)* | `AllowPrintOnNew() → bool` | `false` | Թույլ է տալիս տպել դեռ չպահված փաստաթուղթը։ |

---

### 1.5 `DocCheckLevel` Flags (4X → 8X)

Այս flags-երը փոխանցվում են `Store()` մեթոդին՝ վալիդացիայի փուլեր կառավարման համար։

| Bit | 4X | 8X `DocumentCheckLevel` | Նպատակ |
|-----|----|--------------------------|--------|
| `0` | None | `None` | Լրիվ ստուգում |
| `1` | Skip Validate | `SkipValidate` | Չկանչել `Validate()` |
| `2` | Skip Action | `SkipAction` | Չկանչել `Action()` |
| `4` | Skip Empty Check | — | Պարտադիր դաշտերի ստուգումը բաց թողնել |
| `8` | Skip Type Check | — | Տիպային ստուգումը բաց թողնել |
| `16` | Force Change Request | — | Պարտադիր DCR ռեժիմ |
| `32` | Mark Programmatic | — | Ծրագրային կանչ (ոչ user action) |

---

# 2. Երկխոսային պատուհան — `AsDialog` (4X) vs `DialogWindow` (8X)

## 2.1 Ճարտարապետական բաժանում

### AS-4X

`AsDialog`-ը runtime object էր, ստեղծվում էր VB6 script-ի մեջ։

### AS-8X

Առկա են երկու հիմնական տարբերակներ։

| Դաս | Նպատակ | Ֆայլ |
|-----|--------|------|
| `DialogWindow` | Ընդհանուր WPF dialog պատուհան | `Core/ArmSoft.AS8X.Core.UI/DialogWindow.cs` |
| `DataViewDialogWindow` | Դիտելու ձևի նախնական ֆիլտրման պատուհան | `Core/ArmSoft.AS8X.Core.UI/DataView/` |

---

## 2.2 Ընդհանուր համեմատություն

| Հրաման | AS-4X `AsDialog` | AS-8X `DialogWindow` |
|--------|------------------|----------------------|
| Ստեղծում | `CreateDialog()` | `new DialogWindow(...)` |
| Ցուցադրում | `dlg.Show()` | `dlg.ShowDialog()` |
| Վերնագիր | `dlg.Caption` | `dlg.Caption` |
| Ռեժիմ | Property | `dlg.Mode = ...` |
| Արժեքի ստացում | `dlg("Field")` | `dlg["Field"]` |
| Վալիդացիա | Auto | `WindowValidation` event |
| Cancel | `dlg.Cancel` | `CancelButton` |
| AutoStore | `dlg.AutoStore = True` | `storeValue: true` |
| Tab էջեր | `AddPage()` | `AddDXTabControl()` |
| Export parameters | `CreateBrowseParametersInfo()` | `Dictionary<string, object>` |

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
| `AddViewCommentControl(...)` | `AddDropDownCommentControl(...)` | Dropdown + Comment |
| `AddControl(... monthyear)` | `AddMonthYearControl(...)` | Month / Year |
| `AddLabel(...)` | `AddTextBlock(...)` | Label |
| `AddLine()` | `AddLine(...)` | Separator |
| `AddButton(...)` | `AddButton(...)` | Button |
| *(չկար)* | `AddDropDownButton(...)` | Dropdown Button |
| *(չկար)* | `AddSplitButton(...)` | Split Button |
| *(չկար)* | `AddButtonEdit(...)` | Text + Button |
| *(չկար)* | `AddPasswordBoxEdit(...)` | Password |
| *(չկար)* | `AddPathEdit(...)` | File Picker |
| *(չկար)* | `AddNumPairControl(...)` | Number Pair |
| *(չկար)* | `AddThreeStateBoolComboBox(...)` | 3-state Bool |

---

## 2.4 Layout Containers

| 4X | 8X | Նպատակ |
|----|----|--------|
| `AddPage(caption)` | `AddDXTabControl()` + `AddTabbedGroup()` | Tab էջեր |
| *(խմբավորում)* | `AddLayoutGroup(...)` | Horizontal / Vertical grouping |
| `AddControlAtRight(...)` | `DisplayPosition = AtRightPreviousField` | Աջ կողմում տեղադրել |

---

## 2.5 Validation

| 4X | 8X |
|----|----|
| `dlg.Status = "Սխալ"` | `WindowValidation += ...` |
| `BUTTONCLICK`-ում ստուգում | `OkButton_Click` override |

### Օրինակ

```csharp
dlg.WindowValidation += (w, args) =>
{
    args.IsValid = false;
    args.ErrorMessage = "Լրացրեք պարտադիր դաշտը";
};

---

### 2.6 Կոդի օրինակ — Dialog ստեղծել

**AS-4X (VB6)**

```vb6
Dim dlg As AsDialog
Set dlg = CreateDialog()

dlg.Caption  = "Ֆիլտրի"
dlg.ECaption = "Filter"

dlg.AddControl "DATE1", "Սկիզբ", const_date, 0
dlg.AddControl "DATE2", "Վերջ",  const_date, 0
dlg.AddViewControl "DEPT", "Բաժին", "DEPARTMENTS"

dlg.AutoStore = True

If dlg.Show() Then
    Dim d1 As Date
    Dim d2 As Date
    d1 = dlg("DATE1")
    d2 = dlg("DATE2")

    Dim dept As String
    dept = dlg("DEPT")

    ' ... օգտագործել արժեքները
End If
```

**AS-8X (C#)**

```c#
var dlg = new DialogWindow(owner: Settings.HostingEnvironment)
{
    Caption = "Ֆիլտր / Filter",
    LoadStoredValues = true
};

var date1 = dlg.AddDateEditControl("DATE1", "Սկիզբ", storeValue: true);
var date2 = dlg.AddDateEditControl("DATE2", "Վերջ", storeValue: true);

var dept = dlg.AddDropDownControl(
    "DEPT",
    "Բաժին",
    new DropDown.Departments(),
    isRequired: false,
    storeValue: true);

if (dlg.ShowDialog() == true)
{
    DateTime? d1 = date1.Value;
    DateTime? d2 = date2.Value;
    string deptCode = dept.Code;

    // ... օգտագործել արժեքները
}
```

| Քայլ              | AS-4X                        | AS-8X                              | Նկարագրություն                |
| ----------------- | ---------------------------- | ---------------------------------- | ----------------------------- |
| Dialog ստեղծում   | `CreateDialog()`             | `new DialogWindow(...)`            | Ստեղծվում է պատուհանը         |
| Վերնագիր          | `Caption / ECaption`         | `Caption`                          | Պատուհանի վերնագիր            |
| Ամսաթիվ դաշտ      | `AddControl(... const_date)` | `AddDateEditControl(...)`          | Ամսաթվի ընտրիչ                |
| Բաժնի ընտրություն | `AddViewControl(...)`        | `AddDropDownControl(...)`          | Lookup / DropDown             |
| Պահված արժեքներ   | `AutoStore = True`           | `LoadStoredValues = true`          | Նախորդ արժեքների բեռնում      |
| Բացել             | `Show()`                     | `ShowDialog()`                     | Ցուցադրում                    |
| Արժեք ստանալ      | `dlg("NAME")`                | Control property (`Value`, `Code`) | Մուտքագրված տվյալների ստացում |


Կարևոր տարբերություն

AS-4X-ում արժեքները վերցվում են անունով (dlg("DATE1"))։

AS-8X-ում Add...Control() մեթոդը վերադարձնում է control reference, և արժեքը վերցվում է արդեն strongly-typed ձևով:

```c#
date1.Value
dept.Code
```

---

### 2.7 DataView-ի ֆիլտրի dialog (DataViewDialogWindow)

Եթե dialog-ը օգտագործվում է View-ի ֆիլտրերի համար, ապա սովորական DialogWindow-ի փոխարեն օգտագործվում է DataViewDialogWindow։

**AS-4X (VIEW SCRIPT)**

```vb6
Public Sub Dialog()
    Dim dlg As AsDialog
    Set dlg = CreateDialog()
    dlg.Caption = "Filtri"
    dlg.AddControl "DATE", "Аmsаtiv", const_date, 0
    dlg.AddViewControl "DEPT", "Bajin", "DEPARTMENTS"
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
    dlg.AddDropDownControl("DEPT", "Bajin",
        new DropDown.Departments(), storeValue: true);
    return dlg;
}

public override void ApplyDialog(DataViewDialogWindow dlg, bool isRefreshMode)
{
    this.Parameters.Date = (DateTime?)dlg["DATE"];
    this.Parameters.Dept = (string)dlg["DEPT"];
}
```

Ինչպես է աշխատում

| Մեթոդ            | Նպատակ                                                     |
| ---------------- | ---------------------------------------------------------- |
| `CreateDialog()` | Ստեղծում է dialog-ը և ավելացնում դաշտերը                   |
| `ApplyDialog()`  | Dialog-ից վերցնում է արժեքները և փոխանցում `Parameters`-ին |
| `Parameters`     | DataSource query-ի ֆիլտրային պարամետրեր                    |

Գործընթաց

User opens filter
        ↓
CreateDialog()
        ↓
Dialog shown
        ↓
User enters values
        ↓
OK
        ↓
ApplyDialog()
        ↓
Parameters filled
        ↓
View reloads data

---

## 3. Ցուցակ (VIEW) — VIEW (4X) vs DataView<R,P> (8X)

### 3.1 Ճարտարապետական բաժանում

AS-4X-ում VIEW-ը .as ֆայլի հայտարարություն էր, որտեղ նկարագրվում էին.

* սյունակներ
* թույլտվություններ
* datasource
* filter dialog
* context menu
* գործողություններ

AS-8X-ում նույնը դարձել է C# class, որը ժառանգվում է DataView<R,P>-ից։

| Հրաման            | AS-4X            | AS-8X                             |
| ----------------- | ---------------- | --------------------------------- |
| Հայտարարում       | `.as` VIEW block | C# class                          |
| Անուն             | `NAME=X`         | `[DataView(nameof(X))]`           |
| DataSource        | `DATASOURCE=Y`   | `ConfigureDataSource("Y")`        |
| Սյունակներ        | `COLUMN {}`      | `this.Columns[...]`               |
| Filter dialog     | `Dialog()`       | `CreateDialog()`                  |
| Apply filter      | implicit         | `ApplyDialog()`                   |
| Context menu      | `Functions()`    | `InitContextFunctions()`          |
| Թույլտվություններ | `ALLOWEDIT=1`    | `override bool AllowEdit => true` |

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
| `NAME = X`       | `[DataView(nameof(X))]` | View-ի անուն            |
| `CAPTION`        | `ArmenianCaption`       | Հայերեն անվանում        |
| `ECAPTION`       | `EnglishCaption`        | Անգլերեն անվանում       |
| `DATASOURCE`     | `ConfigureDataSource()` | Տվյալների աղբյուր       |
| `GROUP`          | Navigator json          | Խմբավորում              |
| `CONDITION`      | `LoadData()`            | Filter պայման           |
| `SCRIPT`         | C# methods              | Logic                   |
| `COLUMN`         | `Columns[...]`          | Սյունակների կարգավորում |

---

### 3.3 Թույլտվությունների flags

| 4X VIEW Property | 8X Override          | 8X Default        | Նկարագրություն       |
| ---------------- | -------------------- | ----------------- | -------------------- |
| `ALLOWADDNEW`    | `AllowAdd`           | կախված config-ից  | Ավելացնել            |
| `ALLOWVIEW`      | `AllowView`          | `IsDocumentBased` | Բացել դիտման ռեժիմով |
| `ALLOWEDIT`      | `AllowEdit`          | `false`           | Խմբագրել             |
| `ALLOWDELETE`    | `AllowDelete`        | `false`           | Ջնջել                |
| `ALLOWCOPY`      | `AllowCreateCopy`    | `IsDocumentBased` | Պատճեն ստեղծել       |
| `ALLOWEXPORT`    | `AllowExport`        | `true`            | Excel / CSV export   |
| `ALLOWACCESS`    | `AllowAccessControl` | `false`           | Access rights        |
| `UPDATESTYLE`    | `IsUpdatable`        | ըստ Row-ի         | Grid edit            |

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
| `Dialog()`             | `CreateDialog()` + `ApplyDialog()` | Filter dialog          |
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
      dlg.AddViewControl "DEPT", "Bajin", "DEPARTMENTS"
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
    /// <asViewCode>ACCS</asViewCode>
    public Accs()
    {
        this.ConfigureDataSource("ACCOUNT_DS");

        // VIEW-um VISIBLE=0 unеtsogh syunаk
        this.Columns[nameof(DataRow.ISN)].Visible = false;
    }

    // Thuyltvutyunnеr
    public override bool AllowEdit   => true;
    public override bool AllowDelete => true;
    public override bool AllowAdd    => true;
    public override IReadOnlyCollection<string> AllowedDocumentsToAdd
        => new[] { "Account" };

    // Filтri diаlоg-и аktivаtsum
    public override bool DialogSupported => true;

    // Filтri diаlоg-и stеghtsum (4X-и Dialog() Sub-и hаmаrzhеk)
    public override DataViewDialogWindow CreateDialog(bool isRefreshMode)
    {
        var dlg = new DataViewDialogWindow(this)
        {
            Name    = "AccsDialog",
            Caption = "Filtri"
        };
        dlg.AddDateEditControl("DATE", "Аmsаtiv", storeValue: true);
        dlg.AddDropDownControl("DEPT", "Bajin",
            new DropDown.Departments(), storeValue: true);
        return dlg;
    }

    // Diаlоg-и аrjеknеrn Pаrаmеtеrs-in kirаrеl
    public override void ApplyDialog(DataViewDialogWindow dlg, bool isRefreshMode)
    {
        this.Parameters.Date = (DateTime?)dlg["DATE"];
        this.Parameters.Dept = (string)dlg["DEPT"];
    }

    // Cоntехt mеnu (4X-и Functions Sub-и hаmаrzhеk)
    public override PopupMenu InitContextFunctions()
    {
        var p = base.InitContextFunctions();
        p.AddContextFunction(nameof(PrintReport), Resources.PrintReport,
            PrintReport, FunctionAvailability.AllCases);
        return p;
    }

    private void PrintReport(object sender, ItemClickEventArgs e)
    {
        // tpmаn trаmаbаnutun
    }
}
```

| Մաս              | AS-4X                   | AS-8X                               |
| ---------------- | ----------------------- | ----------------------------------- |
| View declaration | `VIEW {}`               | `class Accs : DataView<...>`        |
| DataSource       | `DATASOURCE=ACCOUNT_DS` | `ConfigureDataSource("ACCOUNT_DS")` |
| Columns          | `COLUMN {}`             | `Columns[...]`                      |
| Permissions      | `ALLOWEDIT=1`           | `AllowEdit => true`                 |
| Dialog           | `Dialog()`              | `CreateDialog()`                    |
| Apply filter     | նույն SCRIPT-ում        | `ApplyDialog()`                     |
| Context menu     | `Functions()`           | `InitContextFunctions()`            |

---

### 3.7 DrоpDоwnViеw

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
