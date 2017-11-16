import { getOptions } from 'loader-utils';


function generateControl(data) {
    const sourceData = JSON.parse(data);
    let outputStr = '';
    const exportedObject = [];
    for (const key of Object.keys(sourceData)) {
        const value = sourceData[key];
        const packageName = value.substr(0, value.lastIndexOf('/'));
        const entryName = value.substr(value.lastIndexOf('/') + 1);
        outputStr += `import { ${entryName} as ${key} } from '${packageName}';\n`;
        exportedObject.push(key);
    }
    outputStr += `\nexport default { ${exportedObject.join(', ')} };\n`;
    return outputStr;
}

export default function loader(source) {
    const options = getOptions(this);
    const outputStr = generateControl(source)
    return outputStr;
};
