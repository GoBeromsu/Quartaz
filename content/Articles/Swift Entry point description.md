---
aliases: []
date_created: 2024-07-11
date_modified: 2024-07-11
permalink: swift-entry-point-description
tags:
  - swift
  - macos
title: "Swift Entry point description"
---

Swift Entry point description

![](/_attachments/medium-b3200bd03318-01.jpg)

*Photo by [Safar Safarov](https://unsplash.com/@safarslife?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

## Intro.

I started studying Swift because I want to make my own macOS app during my master’s course. Today is the first day. I will show you how the basic Swift template is structured:

```swift
// pomoApp.swift
// pomo

import SwiftUI
import SwiftData

@main
struct pomoApp: App {
  var body: some Scene {
          WindowGroup {
              ContentView()
          }
      }
}
```

## Explanation

**@main Annotation**:

- The `@main` attribute is used to designate the entry point of the Swift application.
- This is similar to the `main` function in other programming languages (like `C`, `C++`, or `Java`), but in Swift, it is used to mark the starting point of a SwiftUI app.
- It tells the Swift compiler that this is where the program should start executing.

**struct pomoApp: App**:

`pomoApp` is a structure that conforms to the `App` protocol.

The `App` protocol is provided by SwiftUI and represents the structure and behavior of an app.

**var body: some Scene**:

- The `body` property is required by the `App` protocol and is used to describe the content and behavior of the app.
- The return type `some Scene` indicates that this property will return an object that conforms to the `Scene` protocol.
- The `Scene` protocol represents a part of the app's user interface. In this case, it represents the main scene of the app.

**WindowGroup**:

- `WindowGroup` is a container that manages a group of windows in the app.
- It can contain one or more views, and each view represents the content of a window.
- Here, it contains a single view, `ContentView`, which means the app will start with this view as the main window content.

**ContentView**:

- `ContentView` is a SwiftUI view that you define elsewhere in your code. It represents the primary user interface for your app.

## Understanding `some Scene`

- The keyword `some` in `some Scene` is part of Swift's opaque return types feature.
- It means that the method or property will return a value of a type that conforms to the `Scene` protocol, but it doesn't specify exactly which type.
- This allows for flexibility and abstraction. The exact type can be determined by the compiler, but you don’t need to expose the specific type to the users of your API.
- In this context, `some Scene` allows the `body` property to return different types of scenes without specifying them explicitly, as long as they conform to the `Scene` protocol.

Here’s an example with more than one view:

```swift
import SwiftUI
import SwiftData

@main
struct pomoApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
            AnotherView()
        }
    }
}
```

In this hypothetical example, `WindowGroup` now contains `ContentView` and `AnotherView`, showing that multiple views can be managed by the `WindowGroup`.

## Summary

- `@main` marks the entry point of the Swift app.
- `struct pomoApp: App` conforms to the `App` protocol, defining the app's structure.
- `var body: some Scene` returns a scene object, with `some Scene` indicating an opaque return type that conforms to the `Scene` protocol.
- `WindowGroup` manages the app's windows and their content.

---

*2024-07-11에 [Medium](https://beromkoh.medium.com/swift-entry-point-description-b3200bd03318)에 쓴 글을 옮겼습니다.*
