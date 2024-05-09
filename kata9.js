function solve(s) {
    let uppercase = 0;
    let lowercase = 0;
    
    for (let character of s) {
        if (character === character.toUpperCase()) {
            uppercase++;
        } else {
            lowercase++;
        }
    }
    
    if (uppercase > lowercase) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }
}