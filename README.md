# codehs-cheat
Bookmarklet to answer CodeHS problems for you.

```js
javascript:(function()%7Bfor(const%20file%20of%20document.getElementsByClassName(%22__abacus_file%22))%20%7B%0A%20%20file.click()%3B%0A%20%20const%20fileName%20%3D%20file.children%5B0%5D.children%5B1%5D.innerHTML%3B%0A%20%20const%20solution%20%3D%20Ed.solutionCode%5BfileName%5D%3B%0A%20%20const%20editor%20%3D%20ace.edit(%22ace-editor%22)%3B%0A%20%20editor.setValue(solution)%3B%0A%7D%7D)()%3B
```
