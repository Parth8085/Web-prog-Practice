function add(...a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++)   //sum=0
    {
        sum += a[i];

        if (a[i] % 2 != 0) {
            console.log("Odd number will be: " + a[i])
            // console.log(a[i])
        }

    }

    console.log("Sum will be: " + sum);
    console.log("Largest number will be: " +Math.max(...a))


}

add(10, 25, 45, 14, 100)
