function isAdjacentDiffAtMostTwo(s: string): boolean {
    for (let i = 1; i < s.length; i++) {
        let d = Math.abs(s[i-1].charCodeAt(0) - s[i].charCodeAt(0));
        if (d > 2) 
            return false;
    }
    return true;
};