import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', async () => {
    const stats = await compiler('example.txt');
    const output = stats.toJson().modules[0].source;

    expect(output).toBe(`import { Login as Login } from 'yes-native';\n\nexport default { Login };\n`);
});