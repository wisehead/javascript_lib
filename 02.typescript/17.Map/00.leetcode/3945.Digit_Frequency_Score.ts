function digitFrequencyScore(n: number): number {
    const mp = new Map<number, number>();
    let x = n;
    while (x > 0) {
        let m = x % 10;
        mp.set(m, (mp.get(m) ?? 0) + 1);
        x = Math.floor(x / 10);
    }
    let ret = 0;
    for (let [k,v] of mp) {
        ret += k*v;
    }
    return ret;
};


function digitFrequencyScore2(n: number): number {
    let ret = 0;
    for (let x = n; x > 0; x = (x / 10) | 0) {
        ret += x % 10;
    }
    return ret;
}