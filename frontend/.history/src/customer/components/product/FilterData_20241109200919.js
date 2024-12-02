export const color= [
    "white",
    "black",
    "red" ,"marun",
    "being",
    "Pink",
    "Green" ,"Yellow","blue"
];

export const filters = [
    {
        id:"color",
        name : "Color",
        options : [
            {value : "white" , label :"White"},
            {value : "being" , label :"Being"},
            {value : "blue" , label :"Blue"},
            {value : "brown" , label :"Brown"},
            {value : "green" , label :"Green"},
            {value : "purple" , label :"Purple"},
            {value : "yellow" , label :"Yellow"},
            {value : "pink" , label :"Pink"},
        ]
    },
    {
        id:"size",
        name:"Size",
        options:[
          
                {value : "s" , label :"S"},
            {value : "m" , label :"M"},
            {value : "l" , label :"L"},
            
        ]
    }
];

export const singleFilter = [
    {
        id:"price",
        name:"Price",
        options:[
             {value : "159-399" , label :"₹159 to ₹399"},
            {value : "399-999" , label :"₹399 to ₹999"},
            {value : "399-999" , label :"₹399 to ₹999"},
            {value : "1999-2999" , label :"₹1999 to ₹2999"},
            {value : "2999-4999" , label :"₹2999 to ₹4999"},
            
        ]
    }
]