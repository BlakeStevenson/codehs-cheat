for(const file of document.getElementsByClassName("__abacus_file")) {
  file.click();
  const fileName = file.children[0].children[1].innerHTML;
  const solution = Ed.solutionCode[fileName];
  const editor = ace.edit("ace-editor");
  editor.setValue(solution);
}
