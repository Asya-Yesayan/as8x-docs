---
title: DocumentPanel դաս
nav_exclude: true
---

# DocumentPanel&lt;T&gt; դաս նկարագրություն

## Ներածություն

DocumentPanel&lt;T&gt; դասը նախատեսված է փաստաթղթի խմբագրման և դիտման ինտերֆեյս կառուցելու համար։ Տրամադրում է փաստաթղթի դաշտերի, ցանցերի, թաբների և կոճակների ավելացման հնարավորություն, ինչպես նաև փաստաթղթի կյանքի ցիկլի (բացում, պահպանում, փակում) վրա արձագանքելու վիրտուալ ընդլայնման կետեր։ Դասի **T** ընդհանուր տիպային պարամետրը նշում է վահանակին կցված կոնկրետ փաստաթղթի տիպը՝ ժառանգված **Document** դասից։

## Կոնստրուկտորներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [DocumentPanel()](Methods/DocumentPanel.md) | Ստեղծում է **DocumentPanel** դասի օբյեկտ՝ սկզբնավորելով դասավորման հիմնական տարրը և համակարգային ծառայությունները։ |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddButton(string, string, string, string, string, bool, HorizontalAlignment)](Methods/AddButton.md) | Փաստաթղթի վահանակում ավելացնում է կոճակ (**SimpleButton**)՝ տրված անվանումով, պատկերակով և գլխագրով։ |
| [AddButtonEdit(string, string, bool, short, string, short, HorizontalAlignment, StringRestriction)](Methods/AddButtonEdit.md) | Փաստաթղթի վահանակում ավելացնում է կից կոճակներով տեքստային մուտքագրման դաշտ (**ButtonEditExt**)։ |
| [AddCheckEdit(string, string, string, bool, HorizontalAlignment)](Methods/AddCheckEdit.md) | Փաստաթղթի վահանակում ավելացնում է նշիչ (CheckBox) դաշտ (**CheckEditExt**)։ |
| [AddComboBoxEditControl(string, string, short, bool, IEnumerable&lt;string&gt;, string, HorizontalAlignment)](Methods/AddComboBoxEditControl.md) | Փաստաթղթի վահանակում ավելացնում է բացվող ցուցակով տեքստային դաշտ (**ComboBoxEditExt**)։ |
| [AddControl(Control)](Methods/AddControl.md#documentpaneladdcontrolcontrol-մեթոդ) | Գրանցում է տրված դաշտը վահանակի դաշտերի ցուցակում առանց տվյալների աղբյուրի կապի։ |
| [AddControl(Control, string, bool)](Methods/AddControl.md#documentpaneladdcontrolcontrol-string-bool-մեթոդ) | Գրանցում է տրված դաշտը վահանակի դաշտերի ցուցակում՝ տվյալների աղբյուրի ներքին անունով։ |
| [AddControl(Control, string, Control, Control)](Methods/AddControl.md#documentpaneladdcontrolcontrol-string-control-control-մեթոդ) | Գրանցում է տրված դաշտը վահանակի դաշտերի ցուցակում՝ թաբների վալիդացման համար նշված ենթադաշտերով։ |
| [AddControl(FieldSchema)](Methods/AddControl.md#documentpaneladdcontrolfieldschema-մեթոդ) | Տրված դաշտի սխեմայի հիման վրա ավելացնում է համապատասխան տիպի դաշտ վահանակում։ |
| [AddControls()](Methods/AddControls.md) | Սահմանում է փաստաթղթի վահանակում դաշտերի ավելացման գործողությունները։ |
| [AddControlsFromSchema(IEnumerable&lt;string&gt;)](Methods/AddControlsFromSchema.md) | Փաստաթղթի սխեմայի հիման վրա ավելացնում է վահանակում բոլոր դաշտերը, **memo**-ները, պատկերները և ցանցերը։ |
| [AddDateEditControl(string, string, bool, bool, string, HorizontalAlignment)](Methods/AddDateEditControl.md) | Փաստաթղթի վահանակում ավելացնում է ամսաթվային դաշտ (**DateEditControl**)։ |
| [AddDropDownCommentControl(string, string, bool, IDropDownView, short, short, string, short, HorizontalAlignment, StringRestriction)](Methods/AddDropDownCommentControl.md) | Փաստաթղթի վահանակում ավելացնում է մեկնաբանությամբ բացվող ցուցակ (**DropDownCommentControl**)։ |
| [AddDropDownControl(string, string, bool, IDropDownView, string, bool, HorizontalAlignment)](Methods/AddDropDownControl.md) | Փաստաթղթի վահանակում ավելացնում է բացվող ցուցակ (**DropDownControl**)։ |
| [AddDXTabControl(string, LayoutGroup)](Methods/AddDXTabControl.md) | Փաստաթղթի վահանակում ավելացնում է թաբ (**DXTabControl**)։ |
| [AddDynamicTreeDropDownControl(string, string, string, string, bool, bool, string, bool, HorizontalAlignment, bool)](Methods/AddDynamicTreeDropDownControl.md#documentpaneladddynamictreedropdowncontrolstring-string-string-string-bool-bool-string-bool-horizontalalignment-bool-մեթոդ) | Փաստաթղթի վահանակում ավելացնում է դինամիկ ծառային բացվող ցուցակ (**TreeDropDownControl**)՝ ծառային սահմանումից վերցված ծնող հանգույցով։ |
| [AddDynamicTreeDropDownControl(string, string, string, List&lt;TreeElementModel&gt;, bool, bool, short, string, bool, HorizontalAlignment, bool)](Methods/AddDynamicTreeDropDownControl.md#documentpaneladddynamictreedropdowncontrolstring-string-string-listtreeelementmodel-bool-bool-short-string-bool-horizontalalignment-bool-մեթոդ) | Փաստաթղթի վահանակում ավելացնում է դինամիկ ծառային բացվող ցուցակ (**TreeDropDownControl**)՝ տրված հանգույցների ցուցակով։ |
| [AddGrid(GridInfo, HorizontalAlignment, VerticalAlignment, bool)](Methods/AddGrid.md#documentpaneladdgridgridinfo-horizontalalignment-verticalalignment-bool-մեթոդ) | Փաստաթղթի վահանակում ավելացնում է ցանց (**DocumentGridControl**)՝ ցանցի տեղեկատվության օբյեկտից վերցված կարգավորումներով և սյունակներով։ |
| [AddGrid(string, string, HorizontalAlignment, VerticalAlignment, string, bool)](Methods/AddGrid.md#documentpaneladdgridstring-string-horizontalalignment-verticalalignment-string-bool-մեթոդ) | Փաստաթղթի վահանակում ավելացնում է ցանց (**DocumentGridControl**)՝ տրված անվանումով և գլխագրով։ |
| [AddImageEdit(string, string, double, double, string, HorizontalAlignment, Stretch)](Methods/AddImageEdit.md) | Փաստաթղթի վահանակում ավելացնում է պատկերի դաշտ (**ImageEditExt**)։ |
| [AddLayoutGroup(string, LayoutGroup, LayoutGroupView, Orientation, string)](Methods/AddLayoutGroup.md) | Փաստաթղթի վահանակում ավելացնում է դասավորման խումբ (**LayoutGroup**)։ |
| [AddLayoutItem(string, Control, string, HorizontalAlignment, bool)](Methods/AddLayoutItem.md) | Տրված դաշտի շուրջ ստեղծում է դասավորման տարր (**LayoutItemWithRequired**)՝ գլխագրով և պարտադիր լինելու հայտանիշի կապով։ |
| [AddLine(LayoutGroup, string, LineCaptionAlignment, string)](Methods/AddLine.md) | Փաստաթղթի վահանակում ավելացնում է հորիզոնական գիծ (**HorizontalLineControl**)՝ տրված գլխագրով։ |
| [AddMemoEditControl(string, string, bool, short, string, HorizontalAlignment, StringRestriction)](Methods/AddMemoEditControl.md) | Փաստաթղթի վահանակում ավելացնում է բազմագիծ տեքստային դաշտ (**MemoEditControl**)։ |
| [AddMultiSelectDropDownControl(string, string, bool, IDropDownView, string, HorizontalAlignment)](Methods/AddMultiSelectDropDownControl.md) | Փաստաթղթի վահանակում ավելացնում է բազմակի ընտրությամբ բացվող ցուցակ (**MultiSelectDropDownControl**)։ |
| [AddNumericEditControl(string, string, bool, short, short, string, bool, bool, HorizontalAlignment)](Methods/AddNumericEditControl.md) | Փաստաթղթի վահանակում ավելացնում է թվային դաշտ (**NumericEditControl**)։ |
| [AddNumPairControl(string, string, bool, string, string, string, HorizontalAlignment)](Methods/AddNumPairControl.md) | Փաստաթղթի վահանակում ավելացնում է թվային զույգի դաշտ (**NumPairControl**)։ |
| [AddPathEdit(string, string, short, DialogType, bool, string, string, HorizontalAlignment)](Methods/AddPathEdit.md) | Փաստաթղթի վահանակում ավելացնում է ֆայլի/թղթապանակի ուղու ընտրման դաշտ (**BrowsePathEditExt**)։ |
| [AddSimpleDropDown(string, string, bool, short, short, string, short, HorizontalAlignment, StringRestriction)](Methods/AddSimpleDropDown.md) | Փաստաթղթի վահանակում ավելացնում է պարզ բացվող ցուցակ (**SimpleDropDown**)։ |
| [AddTabbedGroup(string, DXTabControl, string)](Methods/AddTabbedGroup.md) | թաբին ավելացնում է նոր թաբ (**DXTabItem**) և վերադարձնում է դրա պարունակության դասավորման խումբը։ |
| [AddTextEdit(string, string, bool, short, string, HorizontalAlignment, StringRestriction)](Methods/AddTextEdit.md) | Փաստաթղթի վահանակում ավելացնում է տեքստային մուտքագրման դաշտ (**TextEditExt**)։ |
| [AddTimeEditControl(string, string, bool, bool, string, HorizontalAlignment)](Methods/AddTimeEditControl.md) | Փաստաթղթի վահանակում ավելացնում է ժամային դաշտ (**TimeEditControl**)։ |
| [AddTreeDropDownControl(string, string, string, bool, bool, string, bool, HorizontalAlignment, bool)](Methods/AddTreeDropDownControl.md) | Փաստաթղթի վահանակում ավելացնում է ծառային բացվող ցուցակ (**TreeDropDownControl**)։ |
| [AfterLoadDocumentToControls()](Methods/AfterLoadDocumentToControls.md) | Սահմանում է փաստաթղթի արժեքները դաշտերի մեջ բեռնելուց հետո կատարվող գործողությունները։ |
| [AfterStore(StoreRequest, bool)](Methods/AfterStore.md) | Սահմանում է փաստաթղթի պահպանումից հետո ծնող վահանակի թարմացման գործողությունները։ |
| [AllowCopy()](Methods/AllowCopy.md) | Սահմանում է, արդյոք թույլատրված է փաստաթղթի պատճենումը։ |
| [AllowDraft()](Methods/AllowDraft.md) | Սահմանում է, արդյոք փաստաթղթի համար թույլատրված է **«Պահպանել որպես սևագիր»** հնարավորությունը։ |
| [AllowExportToJSON()](Methods/AllowExportToJSON.md) | Սահմանում է, արդյոք թույլատրված է փաստաթղթի **JSON** ֆորմատով արտահանումը։ |
| [AllowNewAfterSave()](Methods/AllowNewAfterSave.md) | Սահմանում է, արդյոք փաստաթղթի համար թույլատրված է **«Պահպանել և նորը»** հնարավորությունը։ |
| [AllowPrint()](Methods/AllowPrint.md) | Վերադարձնում է **true**, եթե թույլատրված է փաստաթղթի տպումը։ |
| [AllowPrintOnNew()](Methods/AllowPrintOnNew.md) | Սահմանում է, արդյոք թույլատրված է նոր փաստաթղթի տպումը պահպանումից առաջ։ |
| [AllowSave()](Methods/AllowSave.md) | Սահմանում է, արդյոք ընդհանուր առմամբ թույլատրված է փաստաթղթի պահպանումը։ |
| [AllowSaveAndCloseButton()](Methods/AllowSaveAndCloseButton.md) | Սահմանում է, արդյոք **«Պահպանել և փակել»** կոճակը հասանելի է փաստաթղթի վահանակում։ |
| [AllowSaveButton()](Methods/AllowSaveButton.md) | Սահմանում է, արդյոք **«Պահպանել»** կոճակը հասանելի է փաստաթղթի վահանակում։ |
| [BeforeShow(bool)](Methods/BeforeShow.md) | Սահմանում է փաստաթղթի վահանակի ցուցադրումից առաջ կատարվող գործողությունները։ |
| [BeforeStore(StoreRequest)](Methods/BeforeStore.md) | Սահմանում է փաստաթղթի պահպանումից առաջ կատարվող գործողությունները և թույլատվության ստուգումը։ |
| [CloseDocument()](Methods/CloseDocument.md) | Փակում է փաստաթղթի պատուհանը։ |
| [CollapseControl(Control)](Methods/CollapseControl.md#documentpanelcollapsecontrolcontrol-մեթոդ) | Թաքցնում է տրված դաշտը վահանակում։ |
| [CollapseControl(string)](Methods/CollapseControl.md#documentpanelcollapsecontrolstring-մեթոդ) | Թաքցնում է տրված ներքին անունով դաշտը վահանակում։ |
| [CollapseTabsWithHiddenControls()](Methods/CollapseTabsWithHiddenControls.md) | Թաքցնում է այն բոլոր թաբները, որոնց բոլոր դաշտերը թաքնված են։ |
| [CollapseTabWithHiddenControls(string)](Methods/CollapseTabWithHiddenControls.md) | Թաքցնում է տրված թաբը, եթե նրա բոլոր դաշտերը թաքնված են։ |
| [ConstructUI()](Methods/ConstructUI.md) | Սահմանում է փաստաթղթի վահանակի ինտերֆեյսի կառուցման գործողությունները։ |
| [ConstructUIForSchemaPage(PageSchema, LayoutGroup, HashSet&lt;string&gt;)](Methods/ConstructUIForSchemaPage.md) | Տրված էջի սխեմայի հիման վրա կառուցում է վահանակի մեկ էջի ինտերֆեյսը՝ ըստ դաշտերի դասավորման։ |
| [ConstructUIFromSchema(IEnumerable&lt;string&gt;)](Methods/ConstructUIFromSchema.md) | Փաստաթղթի սխեմայի հիման վրա կառուցում է վահանակի ինտերֆեյսը՝ ստեղծելով անհրաժեշտ թաբները։ |
| [FillDocument(StoreRequest)](Methods/FillDocument.md) | Սահմանում է դաշտերի արժեքները փաստաթղթի դաշտերին վերագրելու գործողությունները։ |
| [GetControl(string)](Methods/GetControl.md#documentpanelgetcontrolstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտը։ |
| [GetControl&lt;C&gt;(string)](Methods/GetControl.md#documentpanelgetcontrolcstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտը՝ արտածած **C** տիպին։ |
| [GetControlCaption(Control)](Methods/GetControlCaption.md) | Վերադարձնում է տրված դաշտի դասավորման գլխագիրը։ |
| [GetControlValue(Control)](Methods/GetControlValue.md) | Սահմանում է տրված դաշտի ընթացիկ արժեքը ստանալու գործողությունները։ |
| [GetCustomUIRequestConfig()](Methods/GetCustomUIRequestConfig.md) | Սահմանում է UI-ի հատուկ հարցումների մշակման բառարանը։ |
| [GetDXTab(Control)](Methods/GetDXTab.md#documentpanelgetdxtabcontrol-մեթոդ) | Վերադարձնում է այն թաբը (**DXTabItem**), որում տեղակայված է տրված դաշտը։ |
| [GetDXTab(string)](Methods/GetDXTab.md#documentpanelgetdxtabstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով թաբը (**DXTabItem**)։ |
| [GetFirstActiveControlOrDefault()](Methods/GetFirstActiveControlOrDefault.md) | Վերադարձնում է վահանակի առաջին տեսանելի և խմբագրման համար հասանելի դաշտը։ |
| [GetHorizontalLayoutGroup(Control)](Methods/GetHorizontalLayoutGroup.md) | Վերադարձնում է տրված դաշտի հորիզոնական դասավորման խումբը։ |
| [GetHorizontalLayoutGroupName(string)](Methods/GetHorizontalLayoutGroupName.md) | Վերադարձնում է տրված ներքին անունից բխող հորիզոնական դասավորման խմբի անունը։ |
| [GetLayoutItem(Control)](Methods/GetLayoutItem.md#documentpanelgetlayoutitemcontrol-մեթոդ) | Վերադարձնում է տրված դաշտի դասավորման տարրը (**LayoutItemWithRequired**)։ |
| [GetLayoutItem(string)](Methods/GetLayoutItem.md#documentpanelgetlayoutitemstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտի դասավորման տարրը (**LayoutItemWithRequired**)։ |
| [GetLayoutItemName(string)](Methods/GetLayoutItemName.md) | Վերադարձնում է տրված ներքին անունից բխող դասավորման տարրի անունը։ |
| [GetTabGroup(string)](Methods/GetTabGroup.md) | Վերադարձնում է տրված ներքին անունով թաբի պարունակության դասավորման տարրը։ |
| [GridCellValueChanged(object, CellValueChangedEventArgs)](Methods/GridCellValueChanged.md) | Մշակում է ցանցի վանդակի արժեքի փոփոխման իրադարձությունը՝ նշելով, որ վահանակի վիճակը փոփոխվել է։ |
| [HandleDocumentException(DocumentException)](Methods/HandleDocumentException.md) | Սահմանում է փաստաթղթի պահպանման ընթացքում առաջացած **DocumentException** տիպի սխալի մշակումը։ |
| [InnerSave(StoreRequest, bool)](Methods/InnerSave.md) | Կատարում է փաստաթղթի վալիդացիան, լրացումը և պահպանումը՝ սխալների մշակումով։ |
| [IsReadOnlyControl(Control)](Methods/IsReadOnlyControl.md) | Վերադարձնում է **true**, եթե տրված դաշտը գտնվում է միայն կարդալու վիճակում։ |
| [LoadDocumentToControls()](Methods/LoadDocumentToControls.md) | Սահմանում է փաստաթղթի արժեքները վահանակի դաշտերի մեջ բեռնելու գործողությունները։ |
| [LockControls(bool)](Methods/LockControls.md) | Բոլոր դաշտերը դարձնում է միայն կարդալու։ |
| [LockControlsExcept(bool, string[])](Methods/LockControlsExcept.md) | Բոլոր դաշտերը դարձնում է միայն կարդալու՝ բացառությամբ տրված ներքին անուններով դաշտերի։ |
| [MakeWindowTitle()](Methods/MakeWindowTitle.md) | Թարմացնում է փաստաթղթի պատուհանի վերնագիրը և տպման կոճակների վիճակը։ |
| [OnAttachmentDelete(OnAttachmentDeleteEventArgs)](Methods/OnAttachmentDelete.md) | Սահմանում է կցորդի հեռացման իրադարձության մշակումը։ |
| [OnCtrl1()](Methods/OnCtrl1.md) | Սահմանում է **Ctrl+1** shortcut-ի մշակումը։ |
| [OnCtrlF11()](Methods/OnCtrlF11.md) | Սահմանում է **Ctrl+F11** shortcut-ի մշակումը։ |
| [OnCtrlF9()](Methods/OnCtrlF9.md) | Սահմանում է **Ctrl+F9** shortcut-ի մշակումը։ |
| [OnEdit()](Methods/OnEdit.md) | Սահմանում է փաստաթղթի խմբագրման ռեժիմում բացման ընթացքում կատարվող գործողությունները։ |
| [OnF11()](Methods/OnF11.md) | Սահմանում է **F11** shortcut-ի մշակումը։ |
| [OnF2()](Methods/OnF2.md) | Սահմանում է **F2** shortcut-ի մշակումը։ |
| [OnF3()](Methods/OnF3.md) | Սահմանում է **F3** shortcut-ի մշակումը։ |
| [OnF4()](Methods/OnF4.md) | Սահմանում է **F4** shortcut-ի մշակումը։ |
| [OnF6()](Methods/OnF6.md) | Սահմանում է **F6** shortcut-ի մշակումը։ |
| [OnF7()](Methods/OnF7.md) | Սահմանում է **F7** shortcut-ի մշակումը։ |
| [OnF8()](Methods/OnF8.md) | Սահմանում է **F8** shortcut-ի մշակումը։ |
| [OnF9()](Methods/OnF9.md) | Սահմանում է **F9** shortcut-ի մշակումը։ |
| [OnGridControlEnterPressed(object, EventArgs)](Methods/OnGridControlEnterPressed.md) | Մշակում է ցանցում **Enter** ստեղնի սեղմման իրադարձությունը՝ կատարելով փաստաթղթի պահպանում և փակում։ |
| [OnGridEscapePressed(object, EventArgs)](Methods/OnGridEscapePressed.md) | Մշակում է ցանցում **Escape** ստեղնի սեղմման իրադարձությունը՝ փակելով փաստաթղթի պատուհանը։ |
| [OnKeyDownEnterMoveNextTabItem(object, KeyEventArgs)](Methods/OnKeyDownEnterMoveNextTabItem.md) | Մշակում է թաբում **Enter** ստեղնի սեղմումը՝ տեղափոխելով ֆոկուսը հաջորդ դաշտի վրա։ |
| [OnNew()](Methods/OnNew.md) | Սահմանում է նոր փաստաթղթի բացման ընթացքում կատարվող գործողությունները։ |
| [OnNewAfterSave()](Methods/OnNewAfterSave.md) | Սահմանում է **«Պահպանել և նորը»** հրամանից հետո նոր փաստաթղթի բացման ընթացքում կատարվող գործողությունները։ |
| [OnPrintPreview(PrintModeSE)](Methods/OnPrintPreview.md) | Սահմանում է փաստաթղթի տպման նախադիտման բացման գործողությունները։ |
| [OnScanner(OnScannerEventArgs)](Methods/OnScanner.md) | Սահմանում է սկաների կարդալու իրադարձության մշակումը։ |
| [OnScannerRead(OnScannerEventArgs)](Methods/OnScannerRead.md) | Կանչում է սկաների կարդալու իրադարձության մշակումը՝ ընդլայնիչի **BeforeOnScanner** և **AfterOnScanner** կանչերով։ |
| [OnShiftF8()](Methods/OnShiftF8.md) | Սահմանում է **Shift+F8** shortcut-ի մշակումը։ |
| [OnShiftF9()](Methods/OnShiftF9.md) | Սահմանում է **Shift+F9** shortcut-ի մշակումը։ |
| [OnView()](Methods/OnView.md) | Սահմանում է փաստաթղթի դիտման ռեժիմում բացման ընթացքում կատարվող գործողությունները։ |
| [PlaceControl(LayoutGroup, Control, LayoutGroup, bool)](Methods/PlaceControl.md#documentpanelplacecontrollayoutgroup-control-layoutgroup-bool-մեթոդ) | Տրված դաշտը տեղադրում է վահանակում՝ ուղղահայաց և հորիզոնական դասավորման խմբերում։ |
| [PlaceControl(LayoutGroup, string)](Methods/PlaceControl.md#documentpanelplacecontrollayoutgroup-string-մեթոդ) | Տրված ներքին անունով դաշտը տեղադրում է վահանակում՝ նշված դասավորման խմբում։ |
| [Prepare(SupportDocumentArgs)](Methods/Prepare.md) | Կարգավորում է փաստաթղթի վահանակին ուղեկցող կոճակների (տպման, ստեղծել պատճեն, պատմություն և այլն) վիճակը։ |
| [ReadMagneticCard(string)](Methods/ReadMagneticCard.md) | Սահմանում է մագնիսական քարտի կարդալու իրադարձության մշակումը։ |
| [RestoreSettings(double, double)](Methods/RestoreSettings.md#documentpanelrestoresettingsdouble-double-մեթոդ) | Վերականգնում է փաստաթղթի պատուհանի և ցանցերի կարգավորումները registry-ից։ |
| [RestoreSettings(double, double, RegistryKey)](Methods/RestoreSettings.md#documentpanelrestoresettingsdouble-double-registrykey-մեթոդ) | Սահմանում է փաստաթղթի պատուհանի և ցանցերի կարգավորումների վերականգնումը տրված registry-ի բանալիից։ |
| [SaveAndCloseDocument()](Methods/SaveAndCloseDocument.md) | Պահպանում և փակում է փաստաթուղթը։ |
| [SaveAndNewDocument()](Methods/SaveAndNewDocument.md) | Պահպանում է փաստաթուղթը և սկսում նորի ստեղծումը՝ պատճենելով ընթացիկ փաստաթղթի բովանդակությունը։ |
| [SaveDocument(bool)](Methods/SaveDocument.md) | Պահպանում է փաստաթուղթը՝ տրված որպես սևագիր։ |
| [Scan(string)](Methods/Scan.md) | Սահմանում է սկաների տվյալների մշակումը։ |
| [SetControlCaption(Control, string)](Methods/SetControlCaption.md) | Փոխում է տրված դաշտի դասավորման գլխագիրը։ |
| [SetControlReadonly(bool, Control)](Methods/SetControlReadonly.md#documentpanelsetcontrolreadonlybool-control-մեթոդ) | Սահմանում է տրված դաշտի միայն կարդալու վիճակի փոփոխությունը։ |
| [SetControlReadonly(bool, string)](Methods/SetControlReadonly.md#documentpanelsetcontrolreadonlybool-string-մեթոդ) | Սահմանում է տրված ներքին անունով դաշտի միայն կարդալու վիճակի փոփոխությունը։ |
| [SetControlsReadonly(bool)](Methods/SetControlsReadonly.md#documentpanelsetcontrolsreadonlybool-մեթոդ) | Սահմանում է փաստաթղթի բոլոր դաշտերի միայն կարդալու վիճակի փոփոխությունը։ |
| [SetControlsReadonly(bool, Control[])](Methods/SetControlsReadonly.md#documentpanelsetcontrolsreadonlybool-control-մեթոդ) | Սահմանում է տրված դաշտերի միայն կարդալու վիճակի փոփոխությունը։ |
| [SetControlsReadonly(bool, string[])](Methods/SetControlsReadonly.md#documentpanelsetcontrolsreadonlybool-string-մեթոդ) | Սահմանում է տրված ներքին անուններով դաշտերի միայն կարդալու վիճակի փոփոխությունը։ |
| [SetControlsReadonlyExcept(bool, string[])](Methods/SetControlsReadonlyExcept.md) | Սահմանում է բոլոր դաշտերի միայն կարդալու վիճակի փոփոխությունը՝ բացառությամբ տրված ներքին անուններով դաշտերի։ |
| [SetControlValue(Control, object)](Methods/SetControlValue.md) | Սահմանում է տրված դաշտին արժեք վերագրելու գործողությունները։ |
| [SetFocus(Control, bool)](Methods/SetFocus.md) | Ֆոկուսը տեղափոխում է տրված դաշտի վրա՝ տրված ընտրելով դրա ամբողջական բովանդակությունը։ |
| [SetMinHeight(int)](Methods/SetMinHeight.md) | Սահմանում է փաստաթղթի վահանակի և իր ծնող պատուհանի նվազագույն բարձրությունը։ |
| [SetMinWidth(int)](Methods/SetMinWidth.md) | Սահմանում է փաստաթղթի վահանակի և իր ծնող պատուհանի նվազագույն լայնությունը։ |
| [ShowOnStatusBar(GridControl)](Methods/ShowOnStatusBar.md) | Տրված ցանցի ընթացիկ տողի և ընտրված տողերի թիվը ցուցադրում է պատուհանի status bar-ում։ |
| [StoreSettings()](Methods/StoreSettings.md#documentpanelstoresettings-մեթոդ) | Պահպանում է փաստաթղթի պատուհանի և ցանցերի կարգավորումները registry-ում։ |
| [StoreSettings(RegistryKey)](Methods/StoreSettings.md#documentpanelstoresettingsregistrykey-մեթոդ) | Սահմանում է փաստաթղթի պատուհանի և ցանցերի կարգավորումների պահպանումը տրված registry-ի բանալիում։ |
| [UnlockControls()](Methods/UnlockControls.md) | Բոլոր դաշտերը դարձնում է խմբագրման համար հասանելի։ |
| [UnlockControlsExcept(string[])](Methods/UnlockControlsExcept.md) | Բոլոր դաշտերը դարձնում է խմբագրման համար հասանելի՝ բացառությամբ տրված ներքին անուններով դաշտերի։ |
| [Validate()](Methods/Validate.md) | Սահմանում է փաստաթղթի դաշտերի վալիդացման գործողությունները։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Controls](Properties/Controls.md) | Վերադարձնում կամ նշանակում է վահանակում գրանցված դաշտերի բառարանը՝ ըստ դաշտի ներքին անվան։ |
| [ControlsByDataItem](Properties/ControlsByDataItem.md) | Վերադարձնում կամ նշանակում է վահանակի դաշտերի բառարանը՝ ըստ տվյալների աղբյուրի ներքին անվան։ |
| [ControlsByLayout](Properties/ControlsByLayout.md) | Վերադարձնում կամ նշանակում է վահանակում տեղակայման հերթականությամբ դասավորված դաշտերի ցուցակը։ |
| [Doc](Properties/Doc.md) | Վերադարձնում է վահանակին կցված **T** տիպի փաստաթուղթը։ |
| [DXTabItems](Properties/DXTabItems.md) | Վերադարձնում կամ նշանակում է վահանակում ստեղծված թաբների (**DXTabItem**) ցուցակը։ |
| [Extender](Properties/Extender.md) | Վերադարձնում կամ նշանակում է վահանակի ընդլայնիչը (**DocumentPanelExtender**)։ |
| [ForceClose](Properties/ForceClose.md) | Վերադարձնում կամ նշանակում է փաստաթղթի պատուհանը հարկադիր փակելու դրոշակը։ |
| [HelpId](Properties/HelpId.md) | Սահմանում է փաստաթղթի օգնության նույնականացուցիչը։ |
| [HelpID](Properties/HelpId.md) | Սահմանում է փաստաթղթի օգնության նույնականացուցիչը։ |
| [HorizontalLayoutGroups](Properties/HorizontalLayoutGroups.md) | Վերադարձնում կամ նշանակում է վահանակում ստեղծված հորիզոնական դասավորման խմբերի բառարանը։ |
| [ImagesSizeLimitInKB](Properties/ImagesSizeLimitInKB.md) | Վերադարձնում է վահանակում ավելացված պատկերային դաշտերի համար թույլատրելի առավելագույն չափը՝ կիլոբայթերով։ |
| [IsChanged](Properties/IsChanged.md) | Վերադարձնում կամ նշանակում է փաստաթղթի փոփոխված լինելու դրոշակը։ |
| [IsDialog](Properties/IsDialog.md) | Վերադարձնում կամ նշանակում է վահանակը երկխոսության պատուհանում բացված լինելու դրոշակը։ |
| [IsLoadingDocumentToControls](Properties/IsLoadingDocumentToControls.md) | Վերադարձնում է **true**, եթե ընթացքում է փաստաթղթի արժեքների բեռնումը դաշտերի մեջ։ |
| [IsReadOnly](Properties/IsReadOnly.md) | Վերադարձնում կամ նշանակում է փաստաթղթի վահանակի միայն կարդալու վիճակի դրոշակը։ |
| [KeysToUpdate](Properties/KeysToUpdate.md) | Վերադարձնում կամ նշանակում է փաստաթղթի պահպանումից հետո թարմացման ենթակա ծնող վահանակի տողերի բանալիների բազմությունը։ |
| [MainTabControl](Properties/MainTabControl.md) | Վերադարձնում է վահանակի հիմնական թաբը (**DXTabControl**)։ |
| [NestedTransactionReport](Properties/NestedTransactionReport.md) | Վերադարձնում է փաստաթղթի պահպանման ընթացքում առաջացած ներդրված տրանզակցիայի հաշվետվությունը։ |
| [ParametersService](Properties/ParametersService.md) | Վերադարձնում է համակարգային պարամետրերի ծառայության (**IParametersService**) ընթացիկ օբյեկտը։ |
| [ReadonlyAttachments](Properties/ReadonlyAttachments.md) | Սահմանում է կցորդների վահանակը միայն կարդալու ռեժիմում բացված լինելու դրոշակը։ |
| [RegistryKey](Properties/RegistryKey.md) | Վերադարձնում կամ նշանակում է registry-ում փաստաթղթի վահանակի կարգավորումները պահելու ենթաբանալին։ |
| [SetFocusAfterInvalidSave](Properties/SetFocusAfterInvalidSave.md) | Վերադարձնում կամ նշանակում է անհաջող պահպանումից հետո ֆոկուսը տեղափոխվող դաշտը։ |
| [SetFocusOnActivation](Properties/SetFocusOnActivation.md) | Վերադարձնում կամ նշանակում է վահանակի ակտիվացման ընթացքում ֆոկուսը տեղափոխվող դաշտը։ |
| [ShowTitleDetails](Properties/ShowTitleDetails.md) | Սահմանում է փաստաթղթի պատուհանի վերնագրում ISN-ի և վիճակի ցուցադրման դրոշակը։ |
| [SkipReadOnlyControlsValidation](Properties/SkipReadOnlyControlsValidation.md) | Սահմանում է վալիդացման ընթացքում միայն կարդալու վիճակում գտնվող դաշտերը բացառելու դրոշակը։ |
| [SupportDocumentOperationsArgs](Properties/SupportDocumentOperationsArgs.md) | Վերադարձնում կամ նշանակում է փաստաթղթի գործողություններին ուղեկցող կոճակների կարգավորումների օբյեկտը։ |
| [Title](Properties/Title.md) | Սահմանում է փաստաթղթի պատուհանի հիմնական վերնագիրը։ |
| [Window](Properties/Window.md) | Վերադարձնում է վահանակը պարունակող փաստաթղթի պատուհանը (**DocumentWindow**)։ |

## Իրադարձություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CallErrorOnSaveExceptionEvent](Events/CallErrorOnSaveExceptionEvent.md) | Առաջանում է է փաստաթղթի պահպանման ընթացքում առաջացած սխալի դեպքում։ |
| [PreviewKeyDownControlKeyG](Events/PreviewKeyDownControlKeyG.md) | Առաջանում է է փաստաթղթի վահանակում **Ctrl+G** shortcut-ի սեղմման դեպքում։ |
| [PropertyChanged](Events/PropertyChanged.md) | Առաջանում է է վահանակի հատկության արժեքի փոփոխման դեպքում։ |

## Delegateներ (նույն ֆայլում)

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CallErrorOnSaveExceptionEventEventHandler(ASException)](Delegates/CallErrorOnSaveExceptionEventEventHandler.md) | Delegate՝ **CallErrorOnSaveExceptionEvent** իրադարձության մշակման համար։ |
| [PreviewKeyDownControlKeyGEventHandler()](Delegates/PreviewKeyDownControlKeyGEventHandler.md) | Delegate՝ **PreviewKeyDownControlKeyG** իրադարձության մշակման համար։ |
