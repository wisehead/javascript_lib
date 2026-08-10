function secondsBetweenTimes(startTime: string, endTime: string): number {
    let s1 = get_secs(startTime);
    let s2 = get_secs(endTime);
    return s2 - s1;
};

function get_secs(str: string): number {
    let h = Number(str.slice(0,2));
    let m = Number(str.slice(3,5));
    let s = Number(str.slice(6,8));
    // console.log("str:%s, h:%d, m:%d, s:%d",str, h, m, s);
    let r = h*3600 + m*60 + s;
    return r;
}