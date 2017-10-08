export function forEachOwn(obj, fn) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      fn(prop, obj[prop], obj);
    }
  }
}

export function getDisplayName(component, defaultName = 'Component') {
  return component.displayName || component.name || defaultName;
}

export function renameWrapper(Wrapper, Wrapped) {
  const wrapperName = getDisplayName(Wrapper, 'Wrapper');
  const wrappedName = getDisplayName(Wrapped);
  Wrapper.displayName = `${wrapperName}(${wrappedName})`;
}

export function dd(...args) {
  return dedent(String.raw(...args));
}

export function dedent(multilineStr) {
  const leadingIndentRE = /^([ \t]+)(?=\w)/m;
  const leadingIndentMatch = leadingIndentRE.exec(multilineStr);
  const leadingIndent = leadingIndentMatch ? leadingIndentMatch[1] : '';
  const indentedLines = multilineStr.split(/\n/);
  const lastIndex = indentedLines.length - 1;
  const fixedLines = indentedLines.map((line, index) => {
    const isBlank = !/\S/.test(line);
    const isFirstLine = index === 0;
    const isLastLine = index === lastIndex;
    let fixedLine = line;
    // Always strip first and last lines if they are blank.
    if (isBlank && (isFirstLine || isLastLine)) {
      fixedLine = undefined;
    } else if (line.startsWith(leadingIndent)) {
      fixedLine = line.slice(leadingIndent.length);
    }
    return fixedLine;
  });
  // Filter any undefined entries.
  return fixedLines.filter(l => l != null).join('\n');
}

export function unsemanticGrid(desktop, mobile = desktop, tablet = desktop) {
  return `grid-${desktop} tablet-grid-${tablet} mobile-grid-${mobile}`;
}
