---
title: "UserReportService"
parent: "Սերվիսներ"
nav_order: 2
has_toc: false
nav_exclude: true
---

# UserReportService սերվիս

## Ներածություն

UserReportService դասը նախատեսված է օգտագործողի հաշվետվությունների (`UserReport`) հետ աշխատանքը (կատարում, հեռացում, ․․․) ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Get(int)](Methods/Get.md#userreportservicegetint-մեթոդ) | Վերադարձնում է օգտագործողի հաշվետվության նկարագրությունը՝ ըստ ներքին նույնականացման համարի (id)։ |
| [Get(string)](Methods/Get.md#userreportservicegetstring-մեթոդ) | Վերադարձնում է օգտագործողի հաշվետվության նկարագրությունը՝ ըստ ներքին անվան։ |
| [AddOrEdit(ReportModel)](Methods/AddOrEdit.md) | ReportModel.Id ներքին նույնականացման համարով (id) օգտագործողի հաշվետվության առկայության դեպքում թարմացնում է հաշվետվության նկարագրությունը, հակառակ դեպքում ստեղծում է նորը։ |
| [Delete(int)](Methods/Delete.md) | Հեռացնում է օգտագործողի հաշվետվությունը համակարգից։ |
| [GetAllReports](Methods/GetAllReports.md) | Վերադարձնում է համակարգում առկա բոլոր օգտագործողի հաշվետվությունների նկարագրությունների ցուցակը։ |


