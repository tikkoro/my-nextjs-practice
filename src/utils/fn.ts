export const skimArgs =
    <T>(fn: (arg: string, ...rest: any[]) => Promise<T>) =>
    async (args: string[], ...rest: any[]): Promise<T> =>
        await fn(args[0], ...rest);
