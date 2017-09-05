// B-I-N-D-Why? Because I gotta!
export function bindy(target, ...funcs) {
  let toBind = {};
  funcs.forEach((func, index) => {
    toBind[func.name] = func.bind(target);
  });
  Object.assign(target, toBind);
  return toBind;
}

export function getDisplayName(component, defaultName = "Component") {
  return component.displayName || component.name || defaultName;
}

export function renameWrapper(Wrapper, Wrapped) {
  const wrapperName = getDisplayName(Wrapper, "Wrapper");
  const wrappedName = getDisplayName(Wrapped);
  Wrapper.displayName = `${wrapperName}(${wrappedName})`;
}

export function fixIndent(multilineStr) {
  const leadingIndentRE = /^([ \t]+)(?=\w)/m;
  const leadingIndentMatch = leadingIndentRE.exec(multilineStr);
  const leadingIndent = leadingIndentMatch ? leadingIndentMatch[1] : "";
  console.log(`Indent: "${leadingIndent}"`);
  const indentedLines = multilineStr.split(/\n/);
  const lastIndex = indentedLines.length - 1;
  const fixedLines = indentedLines.map((line, index) => {
    // Always strip first line if it only contains a newline.
    const isBlank = !/\S/.test(line);
    const isFirstLine = index === 0;
    const isLastLine = index == lastIndex;
    let fixedLine = line;
    if (isBlank && (isFirstLine || isLastLine)) {
      fixedLine = undefined;
    } else if (line.startsWith(leadingIndent)) {
      fixedLine = line.slice(leadingIndent.length);
    }
    return fixedLine;
  });
  return fixedLines.filter(l => l != null).join("\n");
}
