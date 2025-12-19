---
title: "TempFileCleanupMode enum" 
---

Այս enum-ը նախատեսված է ժամանակավոր ֆայլերի (տեքստային հաշվետվություններ, ․․․) հեռացման ռեժիմի սահմանման համար։

## Դաշտեր

| Անվանում | Նկարագրություն |
|----------|----------------|
| Never | Ժամանակավոր ֆայլերը չեն հեռացվում ավտոմատ կերպով, հեռացվում են սեսսիայի փակման ժամանակ։ |
| Auto | Ժամանակավոր ֆայլերը հեռացվում են [Dispose](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable.dispose) մեթոդի կանչի ժամանակ, եթե չեն պահպանվել ֆայլային պահոցում (SaveToFileAndClose, [SaveToStorageAndClose](IExecutionProgress/Methods/SaveToStorageAndClose.md), ...)։ |
| OnDispose | Ժամանակավոր ֆայլերը հեռացվում են [Dispose](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable.dispose) մեթոդի կանչի ժամանակ։ |