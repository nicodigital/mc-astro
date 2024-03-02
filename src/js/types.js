function types(types) {

    let typeCount = types.length;
    let result = '';

    types.forEach((t, index) => {
        if (typeCount > 0 && index !== typeCount - 1) {
            result += t.name + ', ';
        } else {
            result += t.name;
        }
    });

    return result;

}

export default types
