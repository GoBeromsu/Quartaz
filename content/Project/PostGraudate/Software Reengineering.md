---
aliases: []
date_created: 2025-03-26
date_modified: 2025-03-26
tags: []
---
- Target project : [[Deep-River]]

- [[Group Project Initial Setup]]
	- Single shared repository

- Task
	- 1. Introduction
	- 2. [[Understanding the system|Understanding the system]]
		- [[System Evolution and Driving Forces|System Evolution and Driving Forces]]
			- [[System Evolution and Driving Forces Draft|System Evolution and Driving Forces Draft]]
	- 3. Restructuring the system
	- 4. Conclusion
#### Way Point
- [[System Evolution and Driving Forces Draft]]
- [[Repository Mining for Deep-River]]
	- Detect when big changes are made and separate core contributors
- [[Deep-River Repository Evolution]]
### Approach
- Navigating the GUI [[Repository Mining]] tool
	- No such thing
	- [[Model Context Protocol]] and Cursor, I thought that if I used the lab files, I could analyze them using the skills I learned in class.

- Challenges
	- The author used multiple accounts, which made it difficult to analyze commits due to the spread of contributors.
	- Sometimes too many changes were committed at once, or the commit message didn't make sense.

- Filtering
	- Python file only
		- Extract only the date when the python file was changed the most from commits that changed Python.
		- Core module is written in python, but in the repository, ipynb or docs accounted for a large amount of changes.
	- Track changes based on key contributor and bulk changeI
		- Usually bulk happens when there is a key change.