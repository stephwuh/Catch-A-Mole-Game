
# Catch-A-Mole Game (explanation)


1. 게임시작 전에 Start 버튼을 눌러야 게임이 시작됩니다.
- In order for the game to persist for 60 seconds, I implemented a timer using setInterval that decrements every second starting from 60.
- In order for the game to persist after the browser has refreshed, I stored the score and time information to session storage. This info is updated every second when the game is in progress. When the browser is refreshed, the information is retrieved from session storage, updates the remaining time and score, then continues on the game until the timer hits 0. 

2. 화면구성은 제시한 모양대로 구성합니다.
- In order to set up the mole houses, I created nested divs that go down two levels. The inner divs, which are flex containers, wrap the number of mole houses that need to appear on each row (2,4,6,6,4,2). The outer div, which is also a flex box but with a column flex direction, wraps all the inner divs and aligns them horizontally and vertically.
- In order to indicate that the mole has come out of the house, I change the 'x's (mole houses) to 'o's (moles). Using setInterval, I update the relevant DOM node from 'x' to 'o' every 2 seconds, then change them back to 'x' 2 seconds later using setTimeout.

3. 게임룰
- In order to randomize the number of moles coming out of its house, I choose a number between 1 and 5 randomly (using Math.random) then change the corresponding number of mole house DOM nodes (which are also randomized) from 'x' to 'o'.
- In order to make the moles clickable, I add an event listener to the randomly chosen moles then use setTimeout to remove them before they dissappear. 

4. Remarks
- For more detailed explanation, please refer to the code.