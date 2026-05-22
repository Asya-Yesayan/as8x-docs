---
title: Delete
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.Delete() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void Delete()
```

Սահմանում է դիտելու ձևի «Հեռացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ [IsDocumentBased](../Properties/IsDocumentBased.md) հատկության false արժեքի դեպքում։

«Հեռացնել» կոնտեքստային ֆունկցիայի վարքագիծը կարգավորվում է [AllowDelete](../Properties/AllowDelete.md), [IsDeleteEnabled](../Properties/IsDeleteEnabled.md), [IsDocumentBased](../Properties/IsDocumentBased.md) հատկությունների միջոցով։

**Օրինակ**

```c#
public override void Delete()
{
    // ընթացիկ տողի ստացում
    var row = (TemplatesManagementDataRow)this.Panel.FocusedRow();
    if (row != null)
    {
        // հեռացման պատուհանի ցուցադրում
        if (MessageBox.Show(string.Format(Resources.DeletePrintTemplate, GetRowCaption(row)), 
                            button: MessageBoxButton.YesNo,
                            icon: MessageBoxImage.Question, 
                            defaultResult: MessageBoxResult.No) == MessageBoxResult.Yes)
        {
            // տպելու ձևանմուշի հեռացում
            this.apiClient.Template.Delete(row.fName, row.fTYPE);
            // դիտելու ձևի պանելի տողերի թարմացում՝ հեռացված տողը չցուցադրելու նպատակով
            this.Panel.Update(row.fROWID);
        }
    }
}
```

![Delete_Function](../../images/DataView/Delete_Function.png)

![Delete_Window](../../images/DataView/Delete_Window.png)



