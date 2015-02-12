app.controller('MainCtrl', function ($scope) {
    $scope.courses = [
        {name: 'C# for Sociopats', featured: true, published: new Date('10/5/2013')},
        {name: 'C# for Non-Sociopats', featured: true, published: new Date('10/12/2013')},
        {name: 'Super Duper Expert-C#', featured: false, published: new Date('10/1/2013')},
        {name: 'Visual Basic for Developers', featured: false, published: new Date('7/12/2013')},
        {name: 'Pedantic C++', featured: true, published: new Date('1/1/2013')},
        {name: 'JavaScript for People over 20', featured: true, published: new Date('10/13/2013')},
        {name: 'Maintanable code for cowards', featured: true, published: new Date('3/1/2013')},
        {name: 'A survival guide for code reviews', featured: true, published: new Date('2/1/2013')},
        {name: 'Bow to Job Bunt', featured: true, published: new Date('10/7/2013')},
        {name: 'How to keep your soul', featured: false, published: new Date('8/1/2013')},
        {name: 'Telling Recruiters to Leave You Alone', featured: false, published: new Date('11/1/2013')},
        {name: 'Writing Code That Doesnt Suck', featured: true, published: new Date('10/13/2013')},
        {name: 'Code Reviews For Jerks', featured: false, published: new Date('10/1/2013')},
        {name: 'Bow to Deal', featured: true, published: new Date('2/15/2013')},
        {name: 'Death March Coding', featured: true, published: new Date('7/1/2013')},
    ]
});
