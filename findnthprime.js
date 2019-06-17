function prime(c) {
    let n = 100000;
    function isPrime(num) {
        if ( num === 0 || num === 1 ) {
            return false;
        }
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }

    var arr = [2];
    for ( var i = 3; i <= n; i+=2 ) {
        if(arr[c-1]){
            return arr[c-1];
        }
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr;
}
