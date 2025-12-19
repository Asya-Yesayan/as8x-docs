---
title: UIRequestExecutionProgress դաս
---

## Ներածություն

UIRequestExecutionProgress դասը նախատեսված է [DataSource](../definitions/ds.md), [DPR](../definitions/dpr.md), [Document](../definitions/document.md)-ի կատարման ընթացքում սերվերից կլիենտին [հաղորդագրություններ ուղարկելու](UIRequestExecutionProgress/Methods/MessageBox.md) և պատասխանը ստանալու ֆունկցիոնալությունը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [MessageBox(string, MessageBoxButtons, MessageBoxIconType, MessageBoxDefaultButton, string, int, int?, bool)](UIRequestExecutionProgress/Methods/MessageBox.md#uirequestexecutionprogressmessageboxstring-messageboxbuttons-messageboxicontype-messageboxdefaultbutton-string-int-int-bool-մեթոդ) | Այս մեթոդը օգտագործվում է [DataSource](../definitions/ds.md), [DPR](../definitions/dpr.md), [Document](../definitions/document.md)-ի կատարման ընթացքում 8X սերվիսից 4X կամ 8X կլիենտին հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար։ |
| [MessageBox(string, MessageBoxButtons, MessageBoxIconType, MessageBoxDefaultButton, string, TimeSpan, int?, bool)](UIRequestExecutionProgress/Methods/MessageBox.md#uirequestexecutionprogressmessageboxstring-messageboxbuttons-messageboxicontype-messageboxdefaultbutton-string-timespan-int-bool-մեթոդ) | Այս մեթոդը օգտագործվում է [DataSource](../definitions/ds.md), [DPR](../definitions/dpr.md), [Document](../definitions/document.md)-ի կատարման ընթացքում 8X սերվիսից 4X կամ 8X կլիենտին հաղորդագրություն ուղարկելու, հաղորդագրության պատասխանը ստանալու և այն սերվիսում մշակելու համար։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [UIRequestEnabled](UIRequestExecutionProgress/Properties/UIRequestEnabled.md) | Ստուգում է արդյոք հասանելի է UI-ը թե ոչ։ Միայն UI-ի հասանելիության դեպքում է հնարավոր ցույց տալ սերվիսից եկող [հաղորդագրության պատուհանները](UIRequestExecutionProgress/Methods/MessageBox.md)։ |
