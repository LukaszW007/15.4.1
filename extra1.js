/*String Templates - Bug Fixing #5

Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects! */


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
