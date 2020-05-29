function reverse(linkedList){
 var reversedList={};
 reversedList['value']=linkedList.value;
 reversedList['next']=undefined;
 while(linkedList['next']!==undefined){
 linkedList=linkedList.next;
 var newNode={'value':linkedList.value,'next':reversedList};
 reversedList=newNode;
}
 return reversedList; 
}


console.log(reverse({
    value: 5,
    next: {
        value: 7,
        next: {
            value: 11,
            next: {
                value: 18,
                next: undefined
            }
        }
    }
}));

// Reverse A Linked List


// Create a function that takes in a linked list as input and returns another linked list with the values of the input list reversed.
// You are not allowed to use the in-built array data structure.


// Examples
// //Input: 
// {
//     value: 5,
//     next: {
//         value: 7,
//         next: {
//             value: 11,
//             next: {
//                 value: 18,
//                 next: undefined
//             }
//         }
//     }
// }

// //Output:
// {
//     value: 18,
//     next: {
//         value: 11,
//         next: {
//             value: 7,
//             next: {
//                 value: 5,
//                 next: undefined
//             }
//         }
//     }
// }
