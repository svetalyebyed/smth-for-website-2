let data = [
   {
      name: 'Sveta',
      age: '17'
   },
   {
      name: 'Ihor',
      age: '17'
   },
   {
      name: 'Tim',
      age: '20'
   },
   {
      name: 'Sam',
      age: '15'
   },
   {
      name: 'Joey',
      age: '45'
   },
   {
      name: 'John',
      age: '42'
   },
]

const info = document.querySelector('#info')

let details = data.map(function (item) {
   return (
      '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>'
   )
})

info.innerHTML = details.join('\n')
