---
layout: page
title: "MessageBoxIconType" 
---

Այս enum-ը նախատեսված է հաղորդագրության պատուհանում (MessageBox) ավելացվող պատկերակների սահմանման համար։

```c#
public enum MessageBoxIconType
{
    Default = 0,
    Critical = 16,
    Question = 32,
    Exclamation = 48,
    Information = 64
}
```

**Արժեքների բազմություն**

| Անվանում    | Արժեք | Նկարագրություն  |
| ----------- | ----- | ----- |
| Default     | 0     | Ցուցադրվում է [Information Message](https://iconduck.com/icons/259569/info-message) պատկերակը։                            |
| Critical    | 16    | Ցուցադրվում է [Critical Message](https://www.freeimages.com/icon/messagebox-critical-5563145) պատկերակը։                  |
| Question    | 32    | Ցուցադրվում է [Warning Query](https://www.iconfinder.com/icons/3364798/error_info_query_question_warning_icon) պատկերակը։ |
| Exclamation | 48    | Ցուցադրվում է [Warning Message](https://www.istockphoto.com/illustrations/error-message-icon) պատկերակը։                  |
| Information | 64    | Ցուցադրվում է [Information Message](https://iconduck.com/icons/259569/info-message) պատկերակը։                            |
