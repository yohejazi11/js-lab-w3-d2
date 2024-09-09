/*• باستعمال `for loop` قم بطباعة الاعداد الزوجيه الموجودة في نطاق من 25- الى 0.*/
console.log(" Even numbers :");

for(let i =0;i<=25;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}



/*• باستعمال `for loop`  احسب تربيع الاعداد من 1 - 10.*/
console.log("square of numbers :");
for(let i=1;i<=10;i++){

    console.log(i * i);

}


/*• باستعمال `loop` قم بطباعة الاعداد الفردية من 1 - 20 .*/

console.log(" Individual numbers :");

for(let i =0;i<=20;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}


/* ### Fibonacci sequence:

- Write a program that prints the first 10 elements of Fibonacci sequence:
- Fibonacci sequence is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers, and the first two elements are 0 and 1
- it starts like 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..
*/
console.log("Fibonacci sequence:")
for(let i=0;i<=10;i++){
    let sum;
    console.log(i = (i-1) + (i-2));
}


/*

### squares of numbers

- using for loop print the squares of numbers from 1-10

### Multiplication table

- Write a nested loop that print the multiplication table for number from 1-3
- the output: */

console.log("square of numbers :");
for(let i=1;i<=10;i++){

    console.log(i * i);

}