class Junior {
    doTasks(): void {
        console.log('Actions!!!');
    }
}

class Middle {
    createApp(): void {
        console.log('Creating!!!');
    }
}

class Senior implements Junior, Middle {
    doTasks(): void {}
    createApp(): void {}
    createArchitecture(): void {
        console.log('Control!!!');
    }
}

function applyMixin(targetClass: any, baseClasses: any) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        });
    });
}

applyMixin(Senior, [Junior, Middle]);