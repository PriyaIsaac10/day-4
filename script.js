var objects=[
  {
      person:"name",
      age:2,
      company:"guvi"
  },
  {
      person:"name",
      age:3,
      company:"guvi geek"
  },
  {
      person:"name",
      age:4,
      company:"guvi geek network"
  }

];
// for of loop:
for(var  object of objects)
{
console.log(object);
}

// for each loop:
objects.forEach(((object)=>
{
  console.log(object);
}))
//normal for loop:
for (var i=0; i<objects.length; i++)
{
console.log(objects);
}
// for in loop:
for (var index in objects)
{
console.log(index);
}
// country
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    console.log(data);
    //program:1
     for(var i=0; i<data.length; i++)
   {
       console.log(data[i].name);
    }
    //program:2
    for(var i=0; i<data.length; i++)
    {
    console.log(`name:${data[i].name} captial:${data[i].capital}`);
    }
    //progrm:3
    for(var i=0; i<data.length; i++)
    {
      console.log(`flag:${data[i].flag}`);
    }
    //Program-4
    for(var i=0; i<data.length; i++)
    {
      console.log(`name:${data[i].name} latitude:${data[i].latlng[0]} logitude:${data[i].latlng[1]}`);
   }
    //program-5
   for(var i=0; i<data.length; i++)
   {
       console.log(`name:${data[i].name} region:${data[i].region} subregion:${data[i].subregion} population:${data[i].population}`);
   }
}