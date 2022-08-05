const dataFlowers = [
    {
        id: 1,
        price: 5,
        img: 'rose1',
        name:'біла',
        category: 'ТРОЯНДИ'
    },
    {
        id: 2,
        price: 5,
        img: 'rose2',
        name:'рожева',
        category: 'ТРОЯНДИ'
    },
    {
        id: 3,
        price: 5,
        img: 'rose3',
        name:'помаранчева',
        category: 'ТРОЯНДИ'
    },
    {
        id: 4,
        price: 5,
        img: 'rose4',
        name:'біло-зелена',
        category: 'ТРОЯНДИ'
    },
    {
        id: 5,
        price: 5,
        img: 'rose5',
        name:'червона',
        category: 'ТРОЯНДИ'
    },
    {
        id: 6,
        price: 5,
        img: 'rose6',
        name:'ніжно-рожева',
        category: 'ТРОЯНДИ'
    },
    {
        id: 7,
        price: 5,
        img: 'rose7',
        name:'біло-жовта',
        category: 'ТРОЯНДИ'
    },
    {
        id: 8,
        price: 5,
        img: 'rose8',
        name:'персикова',
        category: 'ТРОЯНДИ'
    },
    {
        id: 9,
        price: 5,
        img: 'rose9',
        name:'жовта',
        category: 'ТРОЯНДИ'
    },
    {
        id: 10,
        price: 5,
        img: 'rose10',
        name:'яскраво-помаранчева',
        category: 'ТРОЯНДИ'
    },
    {
        id: 11,
        price: 5,
        img: 'rose11',
        name:'блідо-рожева',
        category: 'ТРОЯНДИ'
    },
    {
        id: 12,
        price: 5,
        img: 'rose12',
        name:'біло-рожева',
        category: 'ТРОЯНДИ'
    },
    {
        id: 13,
        price: 5,
        img: 'peony1',
        name:'блідо-рожева',
        category: 'ПІВОНІЇ'
    },
    {
        id: 14,
        price: 5,
        img: 'peony2',
        name:'яскраво-фіолетова',
        category: 'ПІВОНІЇ'
    },
    {
        id: 15,
        price: 5,
        img: 'peony3',
        name:'кремова',
        category: 'ПІВОНІЇ'
    },
    {
        id: 16,
        price: 5,
        img: 'peony4',
        name:'мандаринова',
        category: 'ПІВОНІЇ'
    },
    {
        id: 17,
        price: 5,
        img: 'peony5',
        name:'біло-рожева',
        category: 'ПІВОНІЇ'
    },
    {
        id: 18,
        price: 5,
        img: 'peony6',
        name:'абрикосова',
        category: 'ПІВОНІЇ'
    },
    {
        id: 19,
        price: 5,
        img: 'peony7',
        name:'яскраво-рожева',
        category: 'ПІВОНІЇ'
    },
    {
        id: 20,
        price: 5,
        img: 'peony8',
        name:'ніжно-рожева',
        category: 'ПІВОНІЇ'
    },
    {
        id: 21,
        price: 5,
        img: 'peony9',
        name:'амарантово-рожева',
        category: 'ПІВОНІЇ'
    },
    {
        id: 22,
        price: 5,
        img: 'peony10',
        name:'фуксія',
        category: 'ПІВОНІЇ'
    },
    {
        id: 23,
        price: 5,
        img: 'peony11',
        name:'біла',
        category: 'ПІВОНІЇ'
    },
    {
        id: 24,
        price: 5,
        img: 'peony12',
        name:'гарячо-рожева',
        category: 'ПІВОНІЇ'
    },
    {
        id: 25,
        price: 5,
        img: 'tulip1',
        name:'яскраво-бурштиновий',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 26,
        price: 5,
        img: 'tulip2',
        name:'візантійський',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 27,
        price: 5,
        img: 'tulip3',
        name:'кукурудзяний',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 28,
        price: 5,
        img: 'tulip4',
        name:'кораловий',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 29,
        price: 5,
        img: 'tulip5',
        name:'бузковий',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 30,
        price: 5,
        img: 'tulip6',
        name:'червоногарячий',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 31,
        price: 5,
        img: 'tulip7',
        name:'білий',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 32,
        price: 5,
        img: 'tulip8',
        name:'лососевий',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 33,
        price: 5,
        img: 'tulip9',
        name:'лляний',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 34,
        price: 5,
        img: 'tulip10',
        name:'ніжно-рожевий',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 35,
        price: 5,
        img: 'tulip11',
        name:'амарантовий',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 36,
        price: 5,
        img: 'tulip12',
        name:'рожево-ліловий',
        category: 'ТЮЛЬПАНИ'
    },
    {
        id: 37,
        price: 5,
        img: 'gerbera1',
        name:'амарантово-рожевий',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 38,
        price: 5,
        img: 'gerbera2',
        name:'яскраво-бурштиновий',
        category: 'ГЕРБЕРІ'
    },
    {
        id: 39,
        price: 5,
        img: 'gerbera3',
        name:'морквяний',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 40,
        price: 5,
        img: 'gerbera4',
        name:'алізариноновий черновий',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 41,
        price: 5,
        img: 'gerbera5',
        name:'палений оранжевий',
        category: 'ГЕРБЕРИ'
    }, {
        id: 42,
        price: 5,
        img: 'gerbera6',
        name:'амарантово-рожевий',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 43,
        price: 5,
        img: 'gerbera7',
        name:'пастельно-рожевий',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 44,
        price: 5,
        img: 'gerbera8',
        name:'ніжно-рожевий',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 45,
        price: 5,
        img: 'gerbera9',
        name:'жовто-персиковий',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 46,
        price: 5,
        img: 'gerbera10',
        name:'червоний',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 47,
        price: 5,
        img: 'gerbera11',
        name:'ніжно-рожевий',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 48,
        price: 5,
        img: 'gerbera12',
        name:'блідо-рожевий',
        category: 'ГЕРБЕРИ'
    },
    {
        id: 49,
        price: 5,
        img: 'wildflower1',
        name:'дзвіночок',
        category: 'ПОЛЬОВІ та САДОВІ'
    },
    {
        id: 50,
        price: 5,
        img: 'wildflower2',
        name:'жовтець',
        category: 'ПОЛЬОВІ та САДОВІ'
    },
    {
        id: 51,
        price: 5,
        img: 'wildflower3',
        name:'наперсник',
        category: 'ПОЛЬОВІ та САДОВІ'
    },
    {
        id: 52,
        price: 5,
        img: 'wildflower4',
        name:'волошка',
        category: 'ПОЛЬОВІ та САДОВІ'
    },
    {
        id: 53,
        price: 5,
        img: 'wildflower5',
        name:'ромашка',
        category: 'ПОЛЬОВІ та САДОВІ'
    },
    {
        id: 54,
        price: 5,
        img: 'wildflower6',
        name:'лаванда',
        category: 'ПОЛЬОВІ та САДОВІ'
    },
    {
        id: 55,
        price: 5,
        img: 'wildflower7',
        name:'хризантема жовта',
        category: 'ПОЛЬОВІ та САДОВІ'
    },
    {
        id: 56,
        price: 5,
        img: 'wildflower8',
        name:'мак',
        category: 'ПОЛЬОВІ та САДОВІ'
    },
    {
        id: 57,
        price: 5,
        img: 'wildflower9',
        name:'ехінацея',
        category: 'ПОЛЬОВІ та САДОВІ'
    },
    {
        id: 58,
        price: 5,
        img: 'bouquet1',
        name:'букет №1',
        category: 'БУКЕТИ'
    },
    {
        id: 59,
        price: 5,
        img: 'bouquet2',
        name:'букет №2',
        category: 'БУКЕТИ'
    },
    {
        id: 60,
        price: 5,
        img: 'bouquet3',
        name:'букет №3',
        category: 'БУКЕТИ'
    },
    {
        id: 61,
        price: 5,
        img: 'bouquet4',
        name:'букет №4',
        category: 'БУКЕТИ'
    },
    {
        id: 62,
        price: 5,
        img: 'bouquet5',
        name:'букет №5',
        category: 'БУКЕТИ'
    },
    {
        id: 63,
        price: 5,
        img: 'bouquet6',
        name:'букет №6',
        category: 'БУКЕТИ'
    },
    {
        id: 64,
        price: 5,
        img: 'bouquet7',
        name:'букет №7',
        category: 'БУКЕТИ'
    },
    {
        id: 65,
        price: 5,
        img: 'bouquet8',
        name:'букет №8',
        category: 'БУКЕТИ'
    }
]
export default dataFlowers;