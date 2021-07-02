# "Mixed Messages"

Requirements:
- Randomized message output
- At least three pieces of data per output


## Topic: Daodejing

### User story:
"As a _user_, I want to _read small passages of the Daodejing_, so that _I may learn it's wisdom a little bit at a time_."

### Planning:
- Choose an English translation of the Daodejing
    - Break up chapters into a JS object
- Dao message function
    - Display initial random chapter
    - When called:
        - return a chapter number
        - return a that chapter's text
        - return a random emoji?
- New random message button
    - Call dao message function
