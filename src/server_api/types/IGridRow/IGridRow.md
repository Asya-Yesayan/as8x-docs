---
title: "IGridRow ինտերֆեյս" 
---

# IGridRow ինտերֆեյս

## Ներածություն

Այս դասը նախատեսված է աղյուսակի ընթացիկ տողի հետ աշխատանքը ապահովելու համար։ Աղյուսակի սյուներին տիպիզացված կերպով (հատկությունների միջոցով) հասանելիություն ստանալու համար անհրաժեշտ է նկարագրել դաս, որը իրականացնում է GridRow դասը։ IGridRow ինտերֆեյսը օգտագործելու դեպքում սյուներին հասանելիություն կարելի ստանալ միայն ինդեքսերի միջոցով։


```c#
public class ParameterDocument(IServiceProvider serviceProvider) : Document.Document(serviceProvider)
{
    public partial class PARAMSRow : GridRow
    {
        public string CAPTION
        {
            get { return (string)this[nameof(this.CAPTION)]; }
            set { this[nameof(this.CAPTION)] = value; }
        }

        public string VALUE
        {
            get { return (string)this[nameof(this.VALUE)]; }
            set { this[nameof(this.VALUE)] = value; }
        }
    }

    public Grid<PARAMSRow> PARAMS
    {
        get
        {
            return (Grid<PARAMSRow>)this.Grids[nameof(this.PARAMS)];
        }
    }
}
```

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [this](Properties/this.md) | Վերադարձնում կամ նշանակում է աղյուսակի ընթացիկ տողի նշված ներքին անունով սյան արժեքը։ |
| [this](Properties/this1.md) | Վերադարձնում կամ նշանակում է աղյուսակի ընթացիկ տողի նշված ինդեքսով սյան արժեքը։ |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ExistsColumn(string)](Methods/ExistsColumn.md) | Ստուգում է նշված ներքին անունով սյան առկայությունը աղյուսակի ընթացիկ տողում։ Բացակայության դեպքում վերադարձնում է false: |