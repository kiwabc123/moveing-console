
export const parseCommands=(input: string): string[] => {
    const regex = /R|L|W\d+/g;
    const commands = input.match(regex);
    return commands ? commands : [];
}