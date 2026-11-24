---
aliases: []
date_created: 2021-03-09
date_modified: 2022-01-11
permalink: til-scriptable-2
tags:
  - javascript
  - ios
title: "scriptable 도전 -2"
---
scriptable은 위젯 기능을 통해 결과를 출력한다. 출력이라고 표현하는 건 데이터 값을 위젯에 뿌리기 때문이다. 기본적인 기능이기도 하고, 그래서인지 대부분은 외부 데이터 - 조작 - 위젯에 출력하는 형식으로 일한다.

## 소스를 풀어보자!

예제 소스가 많아서 소스 코드를 보면서 문법도 익히고 친해져 볼까 한다.

```javascript

let cal = await Calendar.defaultForReminders()
let reminders = await Reminder.allDueToday([cal])
reminders.sort((a, b) => {
  return a.dueDate > b.dueDate
})
let table = new UITable()
table.showSeparators = true
populateTable(table, reminders)
QuickLook.present(table)
// Read number of reminders left when running with Siri.
if (config.runsWithSiri) {
  let text = getHelperText(reminders)
  Speech.speak(text)
}

function populateTable(table, reminders) {
  table.removeAllRows()
  let text = getHelperText(reminders)
  // Add the text as headline.
  if (!config.runsWithSiri) {
    let row = new UITableRow()
    row.isHeader = true
    row.addText(text)
    table.addRow(row)
  }
  // Add reminders to the table.
  for (reminder of reminders) {
    let row = new UITableRow()
    row.height = 58
    let emojiCell = row.addText(getEmoji(reminder))
    let overdueText = getOverdueText(reminder)
    let titleCell = row.addText(reminder.title, overdueText)
    titleCell.subtitleColor = Color.red()
    emojiCell.widthWeight = 10
    titleCell.widthWeight = 80
    row.dismissOnSelect = false
    row.onSelect = (idx) => {
      let reminder = reminders[idx - 1]
      toggleCompleted(reminder)
      populateTable(table, reminders)
    }
    table.addRow(row)
  }
  table.reload()
}

function toggleCompleted(reminder) {
  reminder.isCompleted = !reminder.isCompleted
  reminder.save()
}

function getHelperText(reminders) {
  let incomplete = reminders.filter(reminder => {
    return reminder.isCompleted == false
  })
  if (reminders.count == 0) {
    return "You have no reminders due today."
  } else if (incomplete.length == 0) {
    return "You have completed all reminders."
  } else {
    let count = incomplete.length
    let strReminders = count == 1 ? "reminder" : "reminders"
    return "You have " + count + " " + strReminders + " left for today."
  }
}

function getOverdueText(reminder) {
  if (reminder.isOverdue && !reminder.isCompleted) {
    return "⚠️ Overdue"
  } else {
    return null
  }
}

function getEmoji(reminder) {
  if (reminder.isCompleted) {
    return "✅"
  } else {
    return ""
  }
}
```

복잡해 보이지만, 나름 첫 도전으로 괜찮지 않나 싶다.

---

*2021-03-09에 [GitHub TIL](https://github.com/GoBeromsu/Wiggle-TIL/blob/master/Etc/scriptable%EB%8F%84%EC%A0%84-2.md)에 쓴 글을 옮겼습니다.*
