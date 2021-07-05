
function logClass(message: string): ClassDecorator {
    console.log(`${message} evaluated`);
    return function (constructor: Function): void {
        debugger
        console.log(`${message} called`);
    }
}

function logProperty(message: string): PropertyDecorator {
    console.log(`${message} evaluated`);
    debugger
    return function (target: Object, propertyKey: string | Symbol): void {
        console.log('');
    }
}

function logMethod(message: string): MethodDecorator {
    console.log(`${message} evaluated`);
    return function (target: Object, propertyKey: string | Symbol, descriptor: PropertyDescriptor) {
        console.log(`${message} called`);
        debugger
    }
}

function logParameter(message: string): ParameterDecorator {
    return function (target: Object, propertyKey: string | Symbol, parameterIndex: Number) {
        console.log(`${message} called`);
        debugger
    }
}


@logClass("Class Decorator")
class Person {

    private _directReports: Person[];

    @logProperty("Property Decorator")
    public emailAddress: string;

    constructor(public firstName: string, public lastName: string) {
        this._directReports = [];
        this.emailAddress = '';
    }

    @logMethod("Method Decorator")
    @logMethod("Method Decorator 2")
    public addDirectReport(@logParameter("Parameter decorator") person: Person) {
        this._directReports.push(person);
    }

}

const person = new Person("David", "Tucker");
console.log(person);

