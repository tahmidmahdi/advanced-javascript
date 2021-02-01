const students = [
    {id:21, name:"omer sunny"},
    {id:31, name:"manaaaaaaaaa"},
    {id:41, name:"Moyuri"},
    {id:71, name:"dipJol"}
];
const actors =[];
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    actors.push(element);
    
}
const names = students.map( s => s.name);
const idS = students.filter(s => s.id > 40)
const bigger = students.find(s => s.id>40)
console.log(bigger);