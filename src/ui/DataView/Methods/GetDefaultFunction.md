---
title: GetDefaultFunction
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.GetDefaultFunction() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual string GetDefaultFunction()
```

Սահմանում է լռությամբ բացվող կոնտեքստային ֆունկցիան` դիտելու ձևի ընթացիկ տողի կրկնակի սեղմում կատարելիս։

**Օրինակ**

```c#
public override string GetDefaultFunction()
{
    return nameof(ViewStepReport);
}

public override PopupMenu InitContextFunctions()
{
    var panel = this.Panel.InitContextMenu();
    panel.AddContextFunction(nameof(ViewStepReport), "Կատարման մանրամասներ", ViewStepReport, FunctionAvailability.CurrentRow);
    return panel;
}

private void ViewStepReport(object sender, ItemClickEventArgs e)
{
    var focusedRow = (JobExecutionDataRow)this.Panel.FocusedRow();
    var textReport = GetRowReport(focusedRow);
    textReport.Show();  
}
```
