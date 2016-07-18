class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling "${name}" with`, arguments);

        return oldValue.apply(null, arguments);
    }

    return descriptor;
}

const math = new Math();
math.add(2, 4);
