const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let FinalArray = console.log(integers.sort(function(prev, next){return next - prev})
.filter(function(X){return X < 19}).map(function(X){return ((X*1.5)-1)}).reduce(function(total,sum){return(total + sum)}))