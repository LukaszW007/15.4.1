function buildString(...template){
    let joined;
    template.forEach(templ => {
            if(joined){
                joined=`${joined}, ${templ}`
            }else{
                joined=`${templ}`;
            }
        }
    );
    joined=`${joined}!`
    return `I like ${joined}`;
}

/*
Test.describe('Fixed Tests', _ => {
    Test.assertEquals(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
    Test.assertEquals(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
    Test.assertEquals(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');
});*/
