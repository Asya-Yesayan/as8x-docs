---
title: DialogWindow դաս
nav_exclude: true
---

# DialogWindow դաս նկարագրություն

## Ներածություն

DialogWindow դասը նախատեսված է մոդալ և ոչ մոդալ երկխոսության պատուհաններ ստեղծելու համար։ 

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AllowStoreValues](Properties/AllowStoreValues.md) | Վերադարձնում է **true**, եթե երկխոսության պատուհանում միացված է արժեքների պահպանման հնարավորությունը։ |
| [Caption](Properties/Caption.md) | Վերադարձնում կամ նշանակում է երկխոսության պատուհանի գլխագիրը։ |
| [ConfiguredModal](Properties/ConfiguredModal.md) | Վերադարձնում է **true**, եթե երկխոսության պատուհանը ստեղծման ժամանակ կարգավորվել է որպես մոդալ։ |
| [HelpId](Properties/HelpId.md) | Վերադարձնում կամ նշանակում է երկխոսության պատուհանի օգնության նույնականացուցիչը (օգտագործվում է **F1** ստեղնի համար)։ |
| [Item[string]](Properties/Item.md) | Վերադարձնում կամ նշանակում է երկխոսության պատուհանի՝ տրված ներքին անունով դաշտի արժեքը։ |
| [LoadingSavedValuesToControls](Properties/LoadingSavedValuesToControls.md) | Վերադարձնում է **true**, եթե ընթացիկ պահին երկխոսության պատուհանի դաշտերում բեռնվում են պահպանված արժեքները։ |
| [LoadStoredValues](Properties/LoadStoredValues.md) | Վերադարձնում կամ նշանակում է դաշտերի պահպանված արժեքները բեռնելու հատկանիշը։ |
| [Mode](Properties/Mode.md) | Վերադարձնում կամ նշանակում է երկխոսության պատուհանի աշխատանքի ռեժիմը (նոր, խմբագրում, դիտում, ջնջում)։ |
| [Properties](Properties/Properties.md) | Վերադարձնում է երկխոսության պատուհանի property-ների ներքին անուն/արժեքների ցուցակը։ |
| [SetFocusOnActivation](Properties/SetFocusOnActivation.md) | Վերադարձնում կամ նշանակում է այն դաշտը, որի վրա կտեղադրվի մուտքագրման ֆոկուսը՝ երկխոսության պատուհանի առաջին ակտիվացման ժամանակ։  |
| [SkipReadOnlyControlsValidation](Properties/SkipReadOnlyControlsValidation.md) | Սահմանում է, արդյոք վալիդացիան անտեսվում է readonly դաշտերի համար։  |
| [StoredValues](Properties/StoredValues.md) | Վերադարձնում է երկխոսության պատուհանի պահպանվող արժեքների նկարագրությունների ցուցակը։  |
| [StoreValuesIsChecked](Properties/StoreValuesIsChecked.md) | Վերադարձնում է **true**, եթե երկխոսության պատուհանի արժեքների պահպանման ռեժիմը միացված է:  |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [+AddButton(LayoutGroup, string, string, string, string, string, bool, HorizontalAlignment, double, double)](Methods/AddButton.md) | Երկխոսության պատուհանի նշված դասավորման խմբում (LayoutGroup) ավելացնում է կոճակ։ |
| [+AddButtonEdit(string, string, short, bool, short, bool, StringRestriction)](Methods/AddButtonEdit.md#dialogwindowaddbuttoneditstring-string-short-bool-short-bool-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է կոճակով տեքստային մուտքագրման դաշտ։ |
| [+AddButtonEdit(LayoutGroup, string, string, short, bool, short, bool, StringRestriction)](Methods/AddButtonEdit.md#dialogwindowaddbuttoneditlayoutgroup-string-string-short-bool-short-bool-stringrestriction-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է կոճակով տեքստային մուտքագրման դաշտ։ |
| [+AddCheckEdit(string, string, bool, bool)](Methods/AddCheckEdit.md#dialogwindowaddcheckeditstring-string-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է նշիչ (CheckBox) դաշտ։ |
| [+AddCheckEdit(LayoutGroup, string, string, bool, bool)](Methods/AddCheckEdit.md#dialogwindowaddcheckeditlayoutgroup-string-string-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է նշիչ (CheckBox) դաշտ։ |
| [+AddComboBoxEdit(string, string, short, IEnumerable&lt;string&gt;, bool, bool, HorizontalAlignment, bool)](Methods/AddComboBoxEdit.md#dialogwindowaddcomboboxeditstring-string-short-ienumerablestring-bool-bool-horizontalalignment-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ընտրացանկով (ComboBox) դաշտ։ |
| [+AddComboBoxEdit(LayoutGroup, string, string, short, IEnumerable&lt;string&gt;, bool, bool, HorizontalAlignment, bool)](Methods/AddComboBoxEdit.md#dialogwindowaddcomboboxeditlayoutgroup-string-string-short-ienumerablestring-bool-bool-horizontalalignment-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ընտրացանկով (ComboBox) դաշտ։ |
| [AddControl(string, string, Control, bool)](Methods/AddControl.md#dialogwindowaddcontrolstring-string-control-bool-մեթոդ) | Երկխոսության պատուհանին ավելացնում է արդեն ստեղծված դաշտ։ |
| [+AddControl(FieldType, string, string, bool, bool)](Methods/AddControl.md#dialogwindowaddcontrolfieldtype-string-string-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է դաշտ՝ ըստ տրված դաշտի տիպի։ |
| [AddControl(LayoutGroup, FieldType, string, string, bool, bool)](Methods/AddControl.md#dialogwindowaddcontrollayoutgroup-fieldtype-string-string-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է դաշտ՝ ըստ տրված դաշտի տիպի։ |
| [+AddControl(LayoutGroup, string, string, Control, bool, bool, LayoutItemLabelPosition)](Methods/AddControl.md#dialogwindowaddcontrollayoutgroup-string-string-control-bool-bool-layoutitemlabelposition-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է մուտքագրման դաշտ՝ ըստ տրված դաշտի տիպի՝ տրված դաշտի տիպի (**FieldType**) հիման վրա։ |
| [AddControlWithoutName(LayoutGroup, Control)](Methods/AddControlWithoutName.md) | Տրված դասավորման խմբին (LayoutGroup) ավելացնում է դաշտը՝ առանց երկխոսության պատուհանի դաշտերի ներքին հավաքածուում գրանցելու։ |
| [+AddDataGridControl(string)](Methods/AddDataGridControl.md#dialogwindowadddatagridcontrolstring-մեթոդ) | Երկխոսության պատուհանում ավելացնում է աղյուսակային (DataGrid) դաշտ։ |
| [+AddDataGridControl(LayoutGroup, string)](Methods/AddDataGridControl.md#dialogwindowadddatagridcontrollayoutgroup-string-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է աղյուսակային (DataGrid) դաշտ։ |
| [+AddDateEditControl(string, string, bool, bool, bool)](Methods/AddDateEditControl.md#dialogwindowadddateeditcontrolstring-string-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ամսաթվային դաշտ։ |
| [+AddDateEditControl(LayoutGroup, string, string, bool, bool, bool)](Methods/AddDateEditControl.md#dialogwindowadddateeditcontrollayoutgroup-string-string-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ամսաթվային դաշտ։ |
| [+AddDateMultiFilterControl(string, string, MultiFilterTypes, bool, bool, bool, bool)](Methods/AddDateMultiFilterControl.md#dialogwindowadddatemultifiltercontrolstring-string-multifiltertypes-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ամսաթվային ֆիլտրման դաշտ։ |
| [+AddDateMultiFilterControl(LayoutGroup, string, string, MultiFilterTypes, bool, bool, bool, bool)](Methods/AddDateMultiFilterControl.md#dialogwindowadddatemultifiltercontrollayoutgroup-string-string-multifiltertypes-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ամսաթվային ֆիլտրման դաշտ։ |
| [+AddDropDownButton(LayoutGroup, string, string, string, string, string, bool, HorizontalAlignment, double, double, IEnumerable&lt;IBarItem&gt;, bool)](Methods/AddDropDownButton.md) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է popup ընտրացանկ ունեցող կոճակ (DropDownButton)։ |
| [AddDropDownCommentControl(string, string, IDropDownView, bool, bool, short, short, short, HorizontalAlignment, StringRestriction)](Methods/AddDropDownCommentControl.md#dialogwindowadddropdowncommentcontrolstring-string-idropdownview-bool-bool-short-short-short-horizontalalignment-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով և մեկնաբանության տողով դաշտ։ |
| [AddDropDownCommentControl(LayoutGroup, string, string, IDropDownView, bool, bool, short, short, short, HorizontalAlignment, StringRestriction)](Methods/AddDropDownCommentControl.md#dialogwindowadddropdowncommentcontrollayoutgroup-string-string-idropdownview-bool-bool-short-short-short-horizontalalignment-stringrestriction-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է popup տեսակի ընտրացանկով և մեկնաբանության տողով դաշտ։ |
| [AddDropDownControl(string, string, IDropDownView, bool, bool, bool, bool, int)](Methods/AddDropDownControl.md#dialogwindowadddropdowncontrolstring-string-idropdownview-bool-bool-bool-bool-int-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով (DropDown) դաշտ։ |
| [AddDropDownControl(LayoutGroup, string, string, IDropDownView, bool, bool, bool, bool, int)](Methods/AddDropDownControl.md#dialogwindowadddropdowncontrollayoutgroup-string-string-idropdownview-bool-bool-bool-bool-int-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է popup տեսակի ընտրացանկով (DropDown) դաշտ։ |
| [AddDynamicTreeDropDownControl(string, string, string, string, bool, bool, bool, bool, bool, bool)](Methods/AddDynamicTreeDropDownControl.md#dialogwindowadddynamictreedropdowncontrolstring-string-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ՝ ծնող հանգույցի զավակ հանգույցների ցուցադրմամբ։ |
| [AddDynamicTreeDropDownControl(LayoutGroup, string, string, string, string, bool, bool, bool, bool, bool, bool)](Methods/AddDynamicTreeDropDownControl.md#dialogwindowadddynamictreedropdowncontrollayoutgroup-string-string-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ՝ ծնող հանգույցի զավակ հանգույցների ցուցադրմամբ։ |
| [AddDynamicTreeDropDownControl(string, string, string, List&lt;TreeElementModel&gt;, bool, short, bool, bool, bool, bool, bool)](Methods/AddDynamicTreeDropDownControl.md#dialogwindowadddynamictreedropdowncontrolstring-string-string-listtreeelementmodel-bool-short-bool-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ՝ ծրագրային եղանակով տրված հանգույցների ցուցակով։ |
| [AddDynamicTreeDropDownControl(LayoutGroup, string, string, string, List&lt;TreeElementModel&gt;, bool, short, bool, bool, bool, bool, bool)](Methods/AddDynamicTreeDropDownControl.md#dialogwindowadddynamictreedropdowncontrollayoutgroup-string-string-string-listtreeelementmodel-bool-short-bool-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է դինամիկ popup տեսակի ընտրացանկով ծառային դաշտ՝ ծրագրային եղանակով տրված հանգույցների ցուցակով։ |
| [AddHorizontalLayoutGroup(LayoutGroup, LayoutGroupView, string)](Methods/AddHorizontalLayoutGroup.md) | Երկխոսության պատուհանում ավելացնում է հորիզոնական դասավորմամբ դասավորման խումբ։ |
| [AddInCollections(Control, LayoutItemWithRequired, bool)](Methods/AddInCollections.md) | Ավելացված դաշտը գրանցում է երկխոսության պատուհանի ներքին հավաքածուներում։ |
| [AddIsReadonlyBinding(object, LayoutItemWithRequired)](Methods/AddIsReadonlyBinding.md) | Դաշտի **IsReadOnly** հատկության և համապատասխան դասավորման տարրի միջև սահմանում է կապ (binding)։ |
| [AddIsRequiredBinding(object, LayoutItemWithRequired)](Methods/AddIsRequiredBinding.md) | Դաշտի **IsRequired** հատկության և համապատասխան դասավորման տարրի միջև սահմանում է կապ (binding) և ավելացնում **IsReadOnly** կապը։ |
| [AddLayoutItem(LayoutGroup, string)](Methods/AddLayoutItem.md) | Նշված դասավորման խմբին (LayoutGroup) ավելացնում է նոր դասավորման տարր (**LayoutItem**)՝ տրված անվանումով։ |
| [AddLine(string, LineCaptionAlignment, string)](Methods/AddLine.md#dialogwindowaddlinestring-linecaptionalignment-string-մեթոդ) | Երկխոսության պատուհանում ավելացնում է հորիզոնական բաժանարար գիծ։ |
| [AddLine(LayoutGroup, string, LineCaptionAlignment, string)](Methods/AddLine.md#dialogwindowaddlinelayoutgroup-string-linecaptionalignment-string-մեթոդ) | Նշված դասավորման խմբում  (LayoutGroup) ավելացնում է հորիզոնական բաժանարար գիծ։ |
| [AddMemoEditControl(string, string, short, bool, bool, HorizontalAlignment, StringRestriction)](Methods/AddMemoEditControl.md#dialogwindowaddmemoeditcontrolstring-string-short-bool-bool-horizontalalignment-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է մեծ տեքստային (Memo) դաշտ։ |
| [AddMemoEditControl(LayoutGroup, string, string, short, bool, bool, HorizontalAlignment, StringRestriction)](Methods/AddMemoEditControl.md#dialogwindowaddmemoeditcontrollayoutgroup-string-string-short-bool-bool-horizontalalignment-stringrestriction-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է մեծ տեքստային (Memo) դաշտ։ |
| [AddModalGridControl(string, string, IDropDownView)](Methods/AddModalGridControl.md#dialogwindowaddmodalgridcontrolstring-string-idropdownview-մեթոդ) | Երկխոսության պատուհանում ավելացնում է մոդալ աղյուսակ (ModalGrid)։ |
| [AddModalGridControl(LayoutGroup, string, string, IDropDownView)](Methods/AddModalGridControl.md#dialogwindowaddmodalgridcontrollayoutgroup-string-string-idropdownview-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է մոդալ աղյուսակ (ModalGrid)։ |
| [AddMonthYearControl(string, string, bool, bool, bool)](Methods/AddMonthYearControl.md#dialogwindowaddmonthyearcontrolstring-string-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ամիս/տարի ընտրության դաշտ։ |
| [AddMonthYearControl(LayoutGroup, string, string, bool, bool, bool)](Methods/AddMonthYearControl.md#dialogwindowaddmonthyearcontrollayoutgroup-string-string-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ամիս/տարի ընտրության դաշտ։ |
| [AddMultiFilterControl(string, string, MultiFilterTypes, string, bool, IDropDownView, bool, bool, bool, bool)](Methods/AddMultiFilterControl.md#dialogwindowaddmultifiltercontrolstring-string-multifiltertypes-string-bool-idropdownview-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է բազմատեսակ ֆիլտրման դաշտ։ |
| [AddMultiFilterControl(LayoutGroup, string, string, MultiFilterTypes, string, bool, IDropDownView, bool, bool, bool, bool)](Methods/AddMultiFilterControl.md#dialogwindowaddmultifiltercontrollayoutgroup-string-string-multifiltertypes-string-bool-idropdownview-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է բազմատեսակ ֆիլտրման դաշտ։ |
| [AddMultiSelectDropDownControl(string, string, IDropDownView, bool, bool)](Methods/AddMultiSelectDropDownControl.md#dialogwindowaddmultiselectdropdowncontrolstring-string-idropdownview-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկից բազմակի ընտրությամբ դաշտ։ |
| [AddMultiSelectDropDownControl(LayoutGroup, string, string, IDropDownView, bool, bool)](Methods/AddMultiSelectDropDownControl.md#dialogwindowaddmultiselectdropdowncontrollayoutgroup-string-string-idropdownview-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է popup տեսակի ընտրացանկից բազմակի ընտրությամբ դաշտ։ |
| [AddMultiSelectTreeDropDownControl(string, string, string, bool, bool, bool, bool, bool)](Methods/AddMultiSelectTreeDropDownControl.md#dialogwindowaddmultiselecttreedropdowncontrolstring-string-string-bool-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ՝ բազմակի ընտրությամբ։ |
| [AddMultiSelectTreeDropDownControl(LayoutGroup, string, string, string, bool, bool, bool, bool, bool)](Methods/AddMultiSelectTreeDropDownControl.md#dialogwindowaddmultiselecttreedropdowncontrollayoutgroup-string-string-string-bool-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ՝ բազմակի ընտրությամբ։ |
| [AddNumPairControl(string, string, bool, bool, string, string)](Methods/AddNumPairControl.md#dialogwindowaddnumpaircontrolstring-string-bool-bool-string-string-մեթոդ) | Երկխոսության պատուհանում ավելացնում է թվային զույգ (NumPair) դաշտ։ |
| [AddNumPairControl(LayoutGroup, string, string, bool, bool, string, string)](Methods/AddNumPairControl.md#dialogwindowaddnumpaircontrollayoutgroup-string-string-bool-bool-string-string-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է թվային զույգ (NumPair) դաշտ։ |
| [AddNumericEditControl(string, string, short, short, bool, bool, bool, bool)](Methods/AddNumericEditControl.md#dialogwindowaddnumericeditcontrolstring-string-short-short-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է թվային մուտքագրման դաշտ։ |
| [AddNumericEditControl(LayoutGroup, string, string, short, short, bool, bool, bool, bool)](Methods/AddNumericEditControl.md#dialogwindowaddnumericeditcontrollayoutgroup-string-string-short-short-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է թվային մուտքագրման դաշտ։ |
| [AddPasswordBoxEdit(string, string, short, bool)](Methods/AddPasswordBoxEdit.md#dialogwindowaddpasswordboxeditstring-string-short-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է գաղտնաբառի մուտքագրման դաշտ։ |
| [AddPasswordBoxEdit(LayoutGroup, string, string, short, bool)](Methods/AddPasswordBoxEdit.md#dialogwindowaddpasswordboxeditlayoutgroup-string-string-short-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է գաղտնաբառի մուտքագրման դաշտ։ |
| [AddPathEdit(string, string, short, DialogType, bool, string, bool)](Methods/AddPathEdit.md#dialogwindowaddpatheditstring-string-short-dialogtype-bool-string-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ֆայլի/պանակի ուղու ընտրման դաշտ։ |
| [AddPathEdit(LayoutGroup, string, string, short, DialogType, bool, string, bool)](Methods/AddPathEdit.md#dialogwindowaddpatheditlayoutgroup-string-string-short-dialogtype-bool-string-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ֆայլի/պանակի ուղու ընտրման դաշտ։ |
| [AddRadioButton(string, string, string, bool)](Methods/AddRadioButton.md#dialogwindowaddradiobuttonstring-string-string-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ռադիոկոճակ։ |
| [AddRadioButton(LayoutGroup, string, string, string, bool)](Methods/AddRadioButton.md#dialogwindowaddradiobuttonlayoutgroup-string-string-string-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ռադիոկոճակ։ |
| [AddSimpleDropDown(string, string, short, short, bool, short, bool, HorizontalAlignment, StringRestriction)](Methods/AddSimpleDropDown.md#dialogwindowaddsimpledropdownstring-string-short-short-bool-short-bool-horizontalalignment-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է պարզ popup տեսակի ընտրացանկով դաշտ։ |
| [AddSimpleDropDown(LayoutGroup, string, string, short, short, bool, short, bool, HorizontalAlignment, StringRestriction)](Methods/AddSimpleDropDown.md#dialogwindowaddsimpledropdownlayoutgroup-string-string-short-short-bool-short-bool-horizontalalignment-stringrestriction-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է պարզ popup տեսակի ընտրացանկով դաշտ։ |
| [AddSpecialDateButton(LayoutGroup, DateEditControl, DateEditControl)](Methods/AddSpecialDateButton.md) | Երկխոսության պատուհանում ավելացնում է հատուկ ամսաթվերի ընտրման կոճակ՝ կապված տրված ամսաթվային դաշտ(եր)ի հետ։ |
| [AddSpinEdit(string, string, decimal, decimal, double, bool)](Methods/AddSpinEdit.md#dialogwindowaddspineditstring-string-decimal-decimal-double-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ավելացնող/նվազեցնող (Spin) թվային դաշտ։ |
| [AddSpinEdit(LayoutGroup, string, string, decimal, decimal, double, bool)](Methods/AddSpinEdit.md#dialogwindowaddspineditlayoutgroup-string-string-decimal-decimal-double-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ավելացնող/նվազեցնող (Spin) թվային դաշտ։ |
| [AddSplitButton(LayoutGroup, string, string, string, string, string, bool, HorizontalAlignment, double, double, IEnumerable&lt;IBarItem&gt;, bool)](Methods/AddSplitButton.md) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է կողային ընտրացանկով կոճակ (SplitButton)։ |
| [AddStoreValuesButton()](Methods/AddStoreValuesButton.md) | Երկխոսության պատուհանի վերնագրի վահանակում ավելացնում է արժեքների պահպանման, կարգավորումների և մաքրման կոճակները։ |
| [AddTabControl(LayoutGroup)](Methods/AddTabControl.md) | Երկխոսության պատուհանում ավելացնում է tab-երի վերահսկիչ տարր (**DXTabControl**)։ |
| [AddTabbedGroup(DXTabControl, string)](Methods/AddTabbedGroup.md) | Նշված **DXTabControl** տարրին ավելացնում է նոր tab և վերադարձնում է դրա բովանդակության դասավորման խումբը (LayoutGroup)։ |
| [AddTextBlock(string, TextBlockImage)](Methods/AddTextBlock.md#dialogwindowaddtextblockstring-textblockimage-մեթոդ) | Երկխոսության պատուհանում ավելացնում է տեքստային բլոկ՝ ընտրովի պատկերակով։ |
| [AddTextBlock(LayoutGroup, string, TextBlockImage, bool, HorizontalAlignment)](Methods/AddTextBlock.md#dialogwindowaddtextblocklayoutgroup-string-textblockimage-bool-horizontalalignment-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է տեքստային բլոկ՝ ընտրովի պատկերակով։ |
| [+AddTextEdit(string, string, short, bool, bool, StringRestriction)](Methods/AddTextEdit.md#dialogwindowaddtexteditstring-string-short-bool-bool-stringrestriction-մեթոդ) | Երկխոսության պատուհանում ավելացնում է տեքստային մուտքագրման դաշտ։ |
| [+AddTextEdit(LayoutGroup, string, string, short, bool, bool, StringRestriction)](Methods/AddTextEdit.md#dialogwindowaddtexteditlayoutgroup-string-string-short-bool-bool-stringrestriction-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է տեքստային մուտքագրման դաշտ։ |
| [+AddThreeStateBoolComboBox(string, string, bool)](Methods/AddThreeStateBoolComboBox.md#dialogwindowaddthreestateboolcomboboxstring-string-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է երեք վիճակ ընդունող **ComboBoxEditExt** դաշտ։ |
| [+AddThreeStateBoolComboBox(LayoutGroup, string, string, bool)](Methods/AddThreeStateBoolComboBox.md#dialogwindowaddthreestateboolcomboboxlayoutgroup-string-string-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է երեք վիճակ ընդունող **ComboBoxEditExt** դաշտ։ |
| [+AddTimeEditControl(string, string, bool, bool, bool)](Methods/AddTimeEditControl.md#dialogwindowaddtimeeditcontrolstring-string-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ժամի մուտքագրման դաշտ (**TimeEditControl**)։ |
| [+AddTimeEditControl(LayoutGroup, string, string, bool, bool, bool)](Methods/AddTimeEditControl.md#dialogwindowaddtimeeditcontrollayoutgroup-string-string-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ժամի մուտքագրման դաշտ (**TimeEditControl**)։ |
| [+AddTreeDropDownControl(string, string, string, bool, bool, bool, bool, bool, bool)](Methods/AddTreeDropDownControl.md#dialogwindowaddtreedropdowncontrolstring-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ (**TreeDropDownControl**)՝ տրված ծառի սահմանման հիման վրա։ |
| [+AddTreeDropDownControl(LayoutGroup, string, string, string, bool, bool, bool, bool, bool, bool)](Methods/AddTreeDropDownControl.md#dialogwindowaddtreedropdowncontrollayoutgroup-string-string-string-bool-bool-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է popup տեսակի ընտրացանկով ծառային դաշտ՝ տրված ծառի սահմանման հիման վրա։ |
| [AddVerticalLayoutGroup(LayoutGroup, LayoutGroupView, string)](Methods/AddVerticalLayoutGroup.md) | Երկխոսության պատուհանում ավելացնում է ուղղահայաց դասավորմամբ դասավորման խումբ (LayoutGroup)։ |
| [AfterLoadValues()](Methods/AfterLoadValues.md) | Սահմանում է երկխոսության պատուհանի դաշտերի արժեքների բեռնման ավարտից հետո կատարվող գործողությունները։ |
| [BindHeight(LayoutGroup, LayoutGroup)](Methods/BindHeight.md) | Մի դասավորման խմբի (LayoutGroup) բարձրությունը կապում է մյուս դասավորման խմբի փաստացի բարձրությանը։ |
| [BindWidth(LayoutGroup, LayoutGroup)](Methods/BindWidth.md) | Մի դասավորման խմբի (LayoutGroup) լայնությունը կապում է մյուս դասավորման խմբի փաստացի լայնությանը։ |
| [CheckControlExistence(string)](Methods/CheckControlExistence.md) | Ստուգում է, արդյոք երկխոսության պատուհանում տրված ներքին անունով դաշտ արդեն գոյություն ունի։ |
| [CreateBrowseParametersInfo()](Methods/CreateBrowseParametersInfo.md) | Ձևավորում և վերադարձնում է երկխոսության պատուհանի դաշտերի ընթացիկ արժեքների բառարան։ |
| [CustomWindowValidation(DialogWindowValidationArgs)](Methods/CustomWindowValidation.md) | Սահմանում է երկխոսության պատուհանի վալիդացիայի վերջում կատարվող լրացուցիչ ստուգումները։ |
| [+GetControl(string)](Methods/GetControl.md) | Վերադարձնում է երկխոսության պատուհանի՝ տրված ներքին անունով դաշտը։ |
| [+GetControlValue(Control)](Methods/GetControlValue.md#dialogwindowgetcontrolvaluecontrol-մեթոդ) | Վերադարձնում է երկխոսության պատուհանի` տրված դաշտի արժեքը։ |
| [+GetControlValue(string)](Methods/GetControlValue.md#dialogwindowgetcontrolvaluestring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտի արժեքը։ |
| [+GetControls()](Methods/GetControls.md) | Վերադարձնում է երկխոսության պատուհանի բոլոր դաշտերի ցուցակը։ |
| [GetDataSourceName()](Methods/GetDataSourceName.md) | Սահմանում է երկխոսության պատուհանի հետ կապված տվյալների աղբյուրի (DataSource) ներքին անունը։ |
| [GetLayoutItem(Control)](Methods/GetLayoutItem.md#dialogwindowgetlayoutitemcontrol-մեթոդ) | Վերադարձնում է տրված դաշտին համապատասխանող դասավորման տարրը (LayoutItem)։ |
| [GetLayoutItem(string)](Methods/GetLayoutItem.md#dialogwindowgetlayoutitemstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտին համապատասխանող դասավորման տարրը (LayoutItem)։ |
| [HasControls()](Methods/HasControls.md) | Վերադարձնում է **true**, եթե երկխոսության պատուհանում առկա է գոնե մեկ դաշտ։ |
| [LoadBrowseParametersInfo(Dictionary&lt;string, object&gt;)](Methods/LoadBrowseParametersInfo.md) | Տրված բառարանից բեռնում է երկխոսության պատուհանի դաշտերի արժեքները։ |
| [LoadValues()](Methods/LoadValues.md) | Բեռնում է երկխոսության պատուհանի դաշտերի պահպանված արժեքները։ |
| [OnKeyDownEnterMoveNextTabItem(object, KeyEventArgs)](Methods/OnKeyDownEnterMoveNextTabItem.md) | Մշակում է **Enter** ստեղնի սեղմումը՝ tab-ից դեպի հաջորդ դաշտ անցում կատարելու համար։ |
| [OnLoadActualValues()](Methods/OnLoadActualValues.md) | Սահմանում է երկխոսության պատուհանի դաշտերի փաստացի արժեքների բեռնման եղանակը։ |
| [OnLoadDefaultValues()](Methods/OnLoadDefaultValues.md) | Սահմանում է երկխոսության պատուհանի դաշտերի կանխադիր արժեքների բեռնման եղանակը։ |
| [OnMagneticCardReader(string)](Methods/OnMagneticCardReader.md) | Սահմանում է մագնիսական քարտի ընթերցիչի մուտքագրման մշակումը։ |
| [OnScanner(OnScannerEventArgs)](Methods/OnScanner.md) | Սահմանում է սկաների մուտքագրման մշակումը։ |
| [OnScannerRead(OnScannerEventArgs)](Methods/OnScannerRead.md) | Կանչում է **OnScanner** մեթոդը սկաների մուտքագրման մշակման համար։ |
| [OnStoreActualValues()](Methods/OnStoreActualValues.md) | Սահմանում է երկխոսության պատուհանի դաշտերի փաստացի արժեքների պահպանման եղանակը։ |
| [OnStoreDefaultValues()](Methods/OnStoreDefaultValues.md) | Սահմանում է երկխոսության պատուհանի դաշտերի կանխադիր արժեքների ֆիքսման եղանակը։ |
| [OnValidationWindow(bool)](Methods/OnValidationWindow.md) | Իրականացնում է երկխոսության պատուհանի վալիդացիան և կատարում փակման համապատասխան գործողությունները։ |
| [RegisterDatesCommand()](Methods/RegisterDatesCommand.md) | Գրանցում է **AltD** shortcut-ը հատուկ ամսաթվերի popup պատուհանը ցուցադրելու համար։ |
| [RemoveUIElement(string)](Methods/RemoveUIElement.md) | Երկխոսության պատուհանից հեռացնում է տրված ներքին անունով դաշտը։ |
| [RestoreSettings()](Methods/RestoreSettings.md#dialogwindowrestoresettings-մեթոդ) | Վերականգնում է երկխոսության պատուհանի կարգավորումները Windows registry-ից։ |
| [RestoreSettings(RegistryKey)](Methods/RestoreSettings.md#dialogwindowrestoresettingsregistrykey-մեթոդ) | Սահմանում է երկխոսության պատուհանի կարգավորումների վերականգնումը տրված registry բանալիից։ |
| [SetFocus(Control, bool)](Methods/SetFocus.md) | Տրված դաշտի վրա սահմանում է մուտքագրման ֆոկուսը։ |
| [StoreSettings()](Methods/StoreSettings.md#dialogwindowstoresettings-մեթոդ) | Պահպանում է երկխոսության պատուհանի կարգավորումները Windows registry-ում։ |
| [StoreSettings(RegistryKey)](Methods/StoreSettings.md#dialogwindowstoresettingsregistrykey-մեթոդ) | Սահմանում է երկխոսության պատուհանի կարգավորումների պահպանումը տրված registry բանալիում։ |
| [UpdatePanel(object, bool)](Methods/UpdatePanel.md) | Թարմացնում է երկխոսության պատուհանի հետ կապված վահանակը։ |
| [+WriteToStatusBar(string)](Methods/WriteToStatusBar.md) | Երկխոսության պատուհանի status bar-ում գրում է տրված հաղորդագրությունը։ |