declare module "my-module" {
    export function doSomething(param: string): void;
    export class MyClass {
        constructor(options: { name: string });
        name: string;
    }
}