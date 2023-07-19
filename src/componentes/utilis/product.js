
export const products =[
    { id:'1', product:"almojabanas",category:"queso",precio: 2000,unidades: 400,ciudad:"ibague",img:"https://scontent.fibe1-1.fna.fbcdn.net/v/t1.6435-9/98205729_10222820604210463_8633883162683899904_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FtJICEEGmRMAX-mamEB&_nc_ht=scontent.fibe1-1.fna&oh=00_AfCzDio0T1nVTJcp97x3v8C32dhuAyDf_nhPa3Aan1XI-A&oe=64A649B1"},
  
    { id:'2', product:"pandeyucas",category:"queso",precio: 2000, unidades: 400,ciudad:"ibague", img:"https://scontent.fibe1-1.fna.fbcdn.net/v/t1.6435-9/99122753_10222820601650399_525658990068105216_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oLUd-Br8dKsAX8Nx1Sa&_nc_ht=scontent.fibe1-1.fna&oh=00_AfAzdE02YLICMMYXQW6jtVPBNM_kWPF7MZOOaZ4pbeKaMg&oe=64A65296"},
  
    { id:'3', product:"bizcochos",category:"queso",precio: 4000, unidades: 400,ciudad:"ibague", img:"https://media-cdn.tripadvisor.com/media/photo-s/1a/be/23/c0/bizcochos-de-achira-y.jpg"},
  
    {id:'4', product:"bizcochuelos",category:"dulce",precio: 6000, unidades: 400,ciudad:"ibague",img:"https://scontent.fibe1-1.fna.fbcdn.net/v/t1.6435-9/99127654_10222820609050584_6367990990069825536_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=dmMlgHYncgUAX-gP6gW&_nc_ht=scontent.fibe1-1.fna&oh=00_AfAK8blIUgyFAyLqHEGLourz3_BnmiKwV8qg2jjM7ZbdTw&oe=64A63FBE" },
  
    {id:'5', product:"almojabanas-cambrai",category:"dulce",precio: 2500, unidades: 400,ciudad:"ibague",img:"https://blog.redbus.co/wp-content/uploads/2020/04/almojabana-1280x720.jpg"},
  
    {id:'6', product:"pandeyucasDeDulce",category:"dulce",precio: 2500, unidades: 400,ciudad:"ibague",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN69C84ISh1x_dhb39YkBoPC64h9jIP3paNQ&usqp=CAU"},
  
    {id:'7', product:"merengues",category:"dulce",precio:3000, unidades:400,ciudad:"ibague",img:"https://img-global.cpcdn.com/recipes/aeb3bc3836547403/1360x964cq70/merengues-o-suspiros-foto-principal.webp" },
  
    {id:'8', product:"bizcochos-de-achira",category:"queso", precio:8000, unidades: 400,ciudad:"ibague",img:"https://cdn.colombia.com/gastronomia/2011/08/05/achira-1568.gif" },
  
    {id:9, product:"bizcochos-de-manteca",category:"sal", precio:3000, unidades: 400,ciudad:"ibague",img:"https://img-global.cpcdn.com/recipes/42c1063d14df1547/1200x630cq70/photo.jpg"},
  
    {id:10, product:"panderos",category:"dulce", precio:4000, unidades: 400,ciudad:"ibague",img:"https://img-global.cpcdn.com/recipes/2850f7565061226b/1360x964cq70/panderos-vallunos-foto-principal.webp"}
  
]

export const getProducts =() => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

